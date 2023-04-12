import { deleteDB, openDB } from "idb";
import { getDeptData, getTermData, getTerms } from "./api-connector";
import {
  addClassToSchedule,
  changeDialogState,
  setSemesters,
  setTerm,
} from "../Redux/slice";
import store from "../store";

/**
 * Check if a string has a number
 * @param {string} myString
 * @returns boolean. True if string has a number, false otherwise
 */
const hasNumber = (myString) => {
  return /\d/.test(myString);
};

/**
 * Check if a string has an alphabet letter
 * @param {string} myString
 * @returns boolean. True if string has a letter, false otherwise
 */
const hasAlpha = (myString) => {
  return /[a-zA-Z]/.test(myString);
};

const searchData = async (text, termId) => {
  const searchTerm = text.toUpperCase().split(" ").join("");
  if (searchTerm.length < 3 || searchTerm.length > 9) {
    return [];
  }
  const results = [];

  let apiResults;
  const db = await openDB("courselist", 1);
  const tx = db.transaction(termId, "readwrite");
  const store = tx.objectStore(termId);

  if (searchTerm.length === 3 && hasNumber(searchTerm)) {
    apiResults = await getDeptData(termId, searchTerm);
  }

  for (let cl of apiResults) {
    const courseData = formatCourse(cl);
    if (courseData.subject != null) {
      results.push(courseData);
      store.put(courseData);
    }
  }

  if (results.length > 0) {
    return results;
  }

  let range;
  let index;
  if (!hasNumber(searchTerm)) {
    range = IDBKeyRange.only(searchTerm);
    index = store.index("subject");
  } else if (!hasAlpha(searchTerm)) {
    range = IDBKeyRange.only(searchTerm);
    index = store.index("cid");
  } else {
    if (searchTerm.length == 3) {
      return [];
    } else if (searchTerm.length == 4) {
      range = IDBKeyRange.bound(
        [searchTerm.slice(0, 3), searchTerm.slice(3) + "00"],
        [searchTerm.slice(0, 3), searchTerm.slice(3) + "99"]
      );
      console.log(`${searchTerm.slice(3)}00`);
    } else if (searchTerm.length == 5) {
      range = IDBKeyRange.bound(
        [searchTerm.slice(0, 3), searchTerm.slice(3) + "0"],
        [searchTerm.slice(0, 3), searchTerm.slice(3) + "9"]
      );
      console.log(`${searchTerm.slice(3)}0`);
    } else {
      range = IDBKeyRange.only([searchTerm.slice(0, 3), searchTerm.slice(3)]);
      console.log(searchTerm.slice(3));
    }

    index = store.index("searchTerm");
  }

  const data = await index.getAll(range);

  for (let cl of data) {
    const title = cl.subject + cl.cid;
    if (title.toUpperCase().indexOf(searchTerm) != -1) {
      results.push(cl);
    }
  }
  return results;
};

/**
 * Create / Open a database and return the database object.
 * @param {string} termId
 * @returns db. The database object.
 */
const createDB = async (termId) => {
  const db = await openDB("courselist", 1, {
    upgrade(db) {
      const term = db.createObjectStore(termId, { keyPath: "crn" });
      term.createIndex("subject", "subject");
      term.createIndex("cid", "cid");
      term.createIndex("section", "section");
      term.createIndex("times", "times", { multiEntry: true });
      term.createIndex("searchTerm", ["subject", "cid"]);
    },
  });
  return db;
};

const formatCourse = (course) => {
  if (!course.isDisplayed) {
    return {};
  }
  let instructor = "";
  for (let prof of course.instructors) {
    if (prof.isPrimary) {
      instructor = prof.person.informalDisplayedName;
      break;
    }
  }
  const times = [];
  course.schedules.forEach((time) => {
    if (time.days == null) {
      return;
    }
    for (let day of time.days.split("")) {
      const timeObj = {
        start: time.startTime.split(":"),
        end: time.endTime.split(":"),
      };
      switch (day) {
        case "M":
          timeObj.day = 0;
          break;
        case "T":
          timeObj.day = 1;
          break;
        case "W":
          timeObj.day = 2;
          break;
        case "R":
          timeObj.day = 3;
          break;
        case "F":
          timeObj.day = 4;
          break;
        default:
          console.log("Error! Not a day:", day);
          break;
      }
      times.push(timeObj);
    }
  });
  const courseData = {
    subject: course.course.subjectCode,
    cid: course.course.number,
    crn: course.crn,
    title: course.course.title,
    instructors: instructor,
    section: course.courseSectionCode,
    credits: course.course.creditHoursHigh,
    times: times,
  };
  return courseData;
};

/**
 * Fill the database with the courses from the term.
 * @param {string} termId
 * @param {Array} courses
 * @returns
 */
const fillDB = async (termId, courses) => {
  const db = await createDB(termId);

  const tx = await db.transaction(termId, "readwrite");
  const store = await tx.objectStore(termId);

  for (let course of courses) {
    const courseData = formatCourse(course);
    if (courseData.subject == null) {
      continue;
    } else {
      store.put(courseData);
    }
  }

  return tx.complete;
};

/**
 * Starter function to download a term.
 * @param {string} termId
 */
const downloadTerm = async (termId) => {
  getTermData(termId);
};

const deleteAllData = async () => {
  await deleteDB("courselist");
  localStorage.clear();
  return true;
};

const initApp = async () => {
  const dispatch = store.dispatch;
  const curClassesLocal = localStorage.getItem("curClasses");
  if (curClassesLocal != null) {
    const curClasses = JSON.parse(curClassesLocal);
    for (let cl of curClasses) {
      dispatch(addClassToSchedule(cl));
    }
  }

  const curTerm = localStorage.getItem("curTerm");

  if (localStorage.getItem("curTerm") != null) {
    const cur = JSON.parse(curTerm);
    dispatch(setTerm(cur));
    console.log("Current term:", cur);
    await createDB(cur.termId);
  }

  getTerms().then((res) => {
    dispatch(setSemesters(res));

    if (curTerm == null) {
      const cur = res.findLast((t) => t.termId % 10 === 0);
      localStorage.setItem("curTerm", JSON.stringify(cur));
      createDB(cur.termId).then((db) => {
        console.log(db);
        dispatch(setTerm(cur));
        downloadTerm(cur.termId);
      });
    }
  });
};

const classSectionCombine = async (term, classes) => {
  const db = await openDB("courselist", 1);
  const tx = db.transaction(term, "readonly");
  const store = tx.objectStore(term);
  const index = store.index("searchTerm");
  const classesArr = [];

  for (let cl of classes) {
    const key = [cl.subject, cl.cid];
    const range = IDBKeyRange.only(key);
    const data = await index.getAll(range);
    const obj = {
      name: cl.subject + cl.cid,
      sections: [
        ...data.map((d) => {
          return {
            section: d.section,
            times: d.times,
          };
        }),
      ],
    };
    classesArr.push(obj);
  }

  return classesArr;
};

const possibleSchedules = (classes) => {
  const schedules = [];

  return schedules;
};

const scheduleGenerator = async (term, classes) => {
  const classesArr = await classSectionCombine(term, classes);

  const schedules = [];
};

export { searchData, createDB, fillDB, downloadTerm, deleteAllData, initApp };
