import { openDB } from "idb";
import { getTermData } from "./api-connector";
import { changeDialogState } from "../Redux/slice";
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

  const db = await openDB("courselist", 1);
  const tx = db.transaction(termId, "readonly");
  const store = tx.objectStore(termId);

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
      term.createIndex("searchTerm", ["subject", "cid"]);
    },
  });
  return db;
};

/**
 * Fill the database with the courses from the term.
 * @param {string} termId
 * @param {Array} courses
 * @returns
 */
const fillDB = async (termId, courses) => {
  const db = await createDB(termId);

  const tx = db.transaction(termId, "readwrite");
  const store = tx.objectStore(termId);

  for (let course of courses) {
    if (!course.isDisplayed) {
      continue;
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

    store.put(courseData);
  }

  return tx.complete;
};

/**
 * Starter function to download a term.
 * @param {string} termId
 */
const downloadTerm = async (termId) => {
  getTermData(termId).then((data) => {
    store.dispatch(changeDialogState());
  });
};

export { searchData, createDB, fillDB, downloadTerm };
