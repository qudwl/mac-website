import { fillDB } from "./script";

const url = "https://ws.apps.miamioh.edu/api/"; // API Website
const termAPI = "academicTerm/v2?numOfFutureTerms=2&numOfPastTerms=2"; // API to get Terms
const curCourses =
  "courseSection/v3/courseSection?campusCode=O&limit=200&termCode="; // API to get Courses

const getTerm = async () => {
  // Get Current Term
  const termData = await fetch(url + termAPI);
  // Convert to JSON
  const termJson = await termData.json();
  let curTerm = null;

  // Get the latest term that is divisible by 10 (i.e. Fall / Spring)
  for (let term of termJson.data) {
    if (parseInt(term.termId) % 10 == 0) {
      curTerm = term;
    }
  }

  // Format the term name
  curTerm.name =
    curTerm.name.split(" ")[0] +
    " " +
    parseInt(curTerm.name.split(" ")[2].split("-")[1]);

  return curTerm;
};

const getTermData = async (term) => {
  let runIndex = 0;
  while (true) {
    const courses = [];
    // Get the course data from the API
    const courseData = await fetch(
      url +
        curCourses +
        term +
        (runIndex == 0 ? "" : "&offset=" + runIndex * 200) +
        "&compose=%2Cschedules%2Cinstructors%2Cattributes%2CcrossListedCourseSections%2CenrollmentDistribution"
    );
    runIndex++;
    // Convert to JSON
    const courseJson = await courseData.json();
    // Add the courses to the array
    courses.push(...courseJson.data);
    console.log(courses.length);
    // Add the courses to the database
    fillDB(term, courses);

    // If the number of courses is less than 200, we have reached the end of the list
    if (courseJson.data.length < 200) {
      return true;
    }
  }
};

export { getTerm, getTermData };
