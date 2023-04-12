import { fillDB } from "./script";

const url = "https://ws.apps.miamioh.edu/api/"; // API Website
const termAPI = "academicTerm/v2?numOfFutureTerms=2&numOfPastTerms=2"; // API to get Terms
const curCourses =
  "courseSection/v3/courseSection?campusCode=O&limit=200&termCode="; // API to get Courses

const getTerms = async () => {
  // Get Current Term
  const termData = await fetch(url + termAPI);
  // Convert to JSON
  const termJson = await termData.json();

  return [...termJson.data];
};

const getDeptData = async (term, dept) => {
  let runIndex = 0;
  const courses = [];
  while (true) {
    // Get the course data from the API
    const courseData = await fetch(
      url +
        curCourses +
        term +
        (runIndex == 0 ? "" : "&offset=" + runIndex * 200) +
        "&compose=%2Cschedules%2Cinstructors%2Cattributes%2CcrossListedCourseSections%2CenrollmentDistribution" +
        "&course_subjectCode=" +
        dept
    );
    runIndex++;
    // Convert to JSON
    const courseJson = await courseData.json();
    // Add the courses to the array
    courses.push(...courseJson.data);

    // If the number of courses is less than 200, we have reached the end of the list
    if (courseJson.data.length < 200) {
      break;
    }
  }
  return courses;
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

export { getTerms, getTermData, getDeptData };
