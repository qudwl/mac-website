import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "data",
  initialState: {
    data: [
      {
        subject: "CSE",
        section: "A",
        cid: 148,
        title: "Business Computing",
        instructors: "Staff",
        times: [
          { day: 0, start: [8, 30], end: [9, 50] },
          { day: 2, start: [8, 30], end: [9, 50] },
        ],
        crn: 13884,
      },
      {
        subject: "CSE",
        section: "B",
        cid: 148,
        title: "Business Computing",
        instructors: "Staff",
        times: [
          { day: 0, start: [10, 5], end: [11, 25] },
          { day: 2, start: [10, 5], end: [11, 25] },
        ],
        crn: 13885,
      },
      {
        subject: "CSE",
        section: "D",
        cid: 148,
        title: "Business Computing",
        instructors: "Staff",
        times: [
          { day: 0, start: [13, 15], end: [14, 35] },
          { day: 2, start: [13, 15], end: [14, 35] },
        ],
        crn: 13887,
      },
      {
        subject: "CSE",
        section: "E",
        cid: 148,
        title: "Business Computing",
        instructors: "Staff",
        times: [
          { day: 0, start: [14, 50], end: [16, 10] },
          { day: 2, start: [14, 50], end: [16, 10] },
        ],
        crn: 13888,
      },
      {
        subject: "CSE",
        section: "F",
        cid: 148,
        title: "Business Computing",
        instructors: "Staff",
        times: [
          { day: 0, start: [16, 25], end: [17, 45] },
          { day: 2, start: [16, 25], end: [17, 45] },
        ],
        crn: 13889,
      },
      {
        subject: "CSE",
        section: "H",
        cid: 148,
        title: "Business Computing",
        instructors: "Staff",
        times: [
          { day: 0, start: [8, 30], end: [9, 50] },
          { day: 2, start: [8, 30], end: [9, 50] },
        ],
        crn: 17374,
      },
      {
        subject: "CSE",
        section: "I",
        cid: 148,
        title: "Business Computing",
        instructors: "Staff",
        times: [
          { day: 0, start: [10, 5], end: [11, 25] },
          { day: 2, start: [10, 5], end: [11, 25] },
        ],
        crn: 15728,
      },
      {
        subject: "CSE",
        section: "J",
        cid: 148,
        title: "Business Computing",
        instructors: "Staff",
        times: [
          { day: 0, start: [11, 40], end: [13, 0] },
          { day: 2, start: [11, 40], end: [13, 0] },
        ],
        crn: 13891,
      },
      {
        subject: "CSE",
        section: "K",
        cid: 148,
        title: "Business Computing",
        instructors: "Staff",
        times: [
          { day: 0, start: [13, 15], end: [14, 35] },
          { day: 2, start: [13, 15], end: [14, 35] },
        ],
        crn: 13892,
      },
      {
        subject: "CSE",
        section: "N",
        cid: 148,
        title: "Business Computing",
        instructors: "Staff",
        times: [
          { day: 0, start: [18, 30], end: [19, 50] },
          { day: 2, start: [18, 30], end: [19, 50] },
        ],
        crn: 15253,
      },
      {
        subject: "CSE",
        section: "AA",
        cid: 148,
        title: "Business Computing",
        instructors: "Staff",
        times: [
          { day: 1, start: [8, 30], end: [9, 50] },
          { day: 3, start: [8, 30], end: [9, 50] },
        ],
        crn: 13895,
      },
      {
        subject: "CSE",
        section: "BB",
        cid: 148,
        title: "Business Computing",
        instructors: "Staff",
        times: [
          { day: 1, start: [10, 5], end: [11, 25] },
          { day: 3, start: [10, 5], end: [11, 25] },
        ],
        crn: 13896,
      },
      {
        subject: "CSE",
        section: "CC",
        cid: 148,
        title: "Business Computing",
        instructors: "Staff",
        times: [
          { day: 1, start: [11, 40], end: [13, 0] },
          { day: 3, start: [11, 40], end: [13, 0] },
        ],
        crn: 13897,
      },
      {
        subject: "CSE",
        section: "EE",
        cid: 148,
        title: "Business Computing",
        instructors: "Staff",
        times: [
          { day: 1, start: [14, 50], end: [16, 10] },
          { day: 3, start: [14, 50], end: [16, 10] },
        ],
        crn: 16706,
      },
      {
        subject: "CSE",
        section: "FF",
        cid: 148,
        title: "Business Computing",
        instructors: "Staff",
        times: [
          { day: 1, start: [16, 25], end: [17, 45] },
          { day: 3, start: [16, 25], end: [17, 45] },
        ],
        crn: 13899,
      },
      {
        subject: "CSE",
        section: "LL",
        cid: 148,
        title: "Business Computing",
        instructors: "Staff",
        times: [
          { day: 1, start: [14, 50], end: [16, 10] },
          { day: 3, start: [14, 50], end: [16, 10] },
        ],
        crn: 15006,
      },
      {
        subject: "CSE",
        section: "A",
        cid: 174,
        title: "Fundmntls-Progrming&Prob Solvg",
        instructors: "Althoubi, Asaad",
        times: [
          { day: 1, start: [10, 5], end: [11, 55] },
          { day: 4, start: [10, 5], end: [11, 55] },
        ],
        crn: 11854,
      },
      {
        subject: "CSE",
        section: "B",
        cid: 174,
        title: "Fundmntls-Progrming&Prob Solvg",
        instructors: "Althoubi, Asaad",
        times: [
          { day: 1, start: [10, 5], end: [11, 55] },
          { day: 3, start: [10, 5], end: [11, 55] },
        ],
        crn: 16179,
      },
      {
        subject: "CSE",
        section: "C",
        cid: 174,
        title: "Fundmntls-Progrming&Prob Solvg",
        instructors: "Althoubi, Asaad",
        times: [
          { day: 4, start: [24, 14], end: [14, 0] },
          { day: 1, start: [24, 14], end: [14, 0] },
        ],
        crn: 13094,
      },
      {
        subject: "CSE",
        section: "D",
        cid: 174,
        title: "Fundmntls-Progrming&Prob Solvg",
        instructors: "Althoubi, Asaad",
        times: [
          { day: 1, start: [24, 10], end: [14, 0] },
          { day: 3, start: [24, 10], end: [14, 0] },
        ],
        crn: 11855,
      },
      {
        subject: "CSE",
        section: "E",
        cid: 174,
        title: "Fundmntls-Progrming&Prob Solvg",
        instructors: "Ferrenberg, Alan",
        times: [
          { day: 0, start: [8, 30], end: [9, 25] },
          { day: 2, start: [8, 30], end: [9, 25] },
          { day: 4, start: [8, 30], end: [9, 25] },
        ],
        crn: 15009,
      },
      {
        subject: "CSE",
        section: "F",
        cid: 174,
        title: "Fundmntls-Progrming&Prob Solvg",
        instructors: "Ferrenberg, Alan",
        times: [
          { day: 0, start: [8, 30], end: [9, 25] },
          { day: 2, start: [8, 30], end: [9, 25] },
          { day: 3, start: [8, 30], end: [9, 25] },
        ],
        crn: 11856,
      },
      {
        subject: "CSE",
        section: "G",
        cid: 174,
        title: "Fundmntls-Progrming&Prob Solvg",
        instructors: "Ferrenberg, Alan",
        times: [
          { day: 2, start: [10, 5], end: [11, 0] },
          { day: 0, start: [10, 5], end: [11, 0] },
          { day: 4, start: [10, 5], end: [11, 0] },
        ],
        crn: 12362,
      },
      {
        subject: "CSE",
        section: "H",
        cid: 174,
        title: "Fundmntls-Progrming&Prob Solvg",
        instructors: "Ferrenberg, Alan",
        times: [
          { day: 2, start: [10, 5], end: [11, 0] },
          { day: 0, start: [10, 5], end: [11, 0] },
          { day: 3, start: [10, 5], end: [11, 0] },
        ],
        crn: 12481,
      },
      {
        subject: "CSE",
        section: "I",
        cid: 174,
        title: "Fundmntls-Progrming&Prob Solvg",
        instructors: "Goodman, Garrett",
        times: [
          { day: 4, start: [24, 10], end: [14, 0] },
          { day: 0, start: [24, 10], end: [14, 0] },
          { day: 2, start: [24, 10], end: [14, 0] },
        ],
        crn: 16180,
      },
      {
        subject: "CSE",
        section: "J",
        cid: 174,
        title: "Fundmntls-Progrming&Prob Solvg",
        instructors: "Goodman, Garrett",
        times: [
          { day: 0, start: [24, 5], end: [13, 0] },
          { day: 2, start: [24, 5], end: [13, 0] },
          { day: 3, start: [24, 5], end: [13, 0] },
        ],
        crn: 16181,
      },
      {
        subject: "CSE",
        section: "K",
        cid: 174,
        title: "Fundmntls-Progrming&Prob Solvg",
        instructors: "Goodman, Garrett",
        times: [
          { day: 0, start: [14, 15], end: [15, 10] },
          { day: 2, start: [14, 15], end: [15, 10] },
          { day: 4, start: [14, 15], end: [15, 10] },
        ],
        crn: 14170,
      },
      {
        subject: "CSE",
        section: "L",
        cid: 174,
        title: "Fundmntls-Progrming&Prob Solvg",
        instructors: "Goodman, Garrett",
        times: [
          { day: 0, start: [14, 15], end: [15, 10] },
          { day: 2, start: [14, 15], end: [15, 10] },
          { day: 3, start: [14, 15], end: [15, 10] },
        ],
        crn: 17329,
      },
      {
        subject: "CSE",
        section: "A",
        cid: 201,
        title: "Intro to Software Engineering",
        instructors: "Khamaiseh, Samer",
        times: [
          { day: 2, start: [8, 30], end: [9, 50] },
          { day: 4, start: [8, 30], end: [9, 50] },
        ],
        crn: 11857,
      },
      {
        subject: "CSE",
        section: "B",
        cid: 201,
        title: "Intro to Software Engineering",
        instructors: "Khamaiseh, Samer",
        times: [
          { day: 2, start: [11, 40], end: [13, 0] },
          { day: 4, start: [11, 40], end: [13, 0] },
        ],
        crn: 15016,
      },
      {
        subject: "CSE",
        section: "C",
        cid: 201,
        title: "Intro to Software Engineering",
        instructors: "Staff",
        times: [
          { day: 1, start: [13, 15], end: [14, 35] },
          { day: 3, start: [13, 15], end: [14, 35] },
        ],
        crn: 15884,
      },
      {
        subject: "CSE",
        section: "D",
        cid: 201,
        title: "Intro to Software Engineering",
        instructors: "Staff",
        times: [
          { day: 1, start: [14, 50], end: [16, 10] },
          { day: 3, start: [14, 50], end: [16, 10] },
        ],
        crn: 18881,
      },
      {
        subject: "CSE",
        section: "A",
        cid: 202,
        title: "Software Requirements",
        instructors: "Sobel, Ann",
        times: [
          { day: 1, start: [13, 15], end: [14, 35] },
          { day: 3, start: [13, 15], end: [14, 35] },
        ],
        crn: 19288,
      },
      {
        subject: "CSE",
        section: "B",
        cid: 202,
        title: "Software Requirements",
        instructors: "Sobel, Ann",
        times: [
          { day: 1, start: [14, 50], end: [16, 5] },
          { day: 3, start: [14, 50], end: [16, 5] },
        ],
        crn: 19289,
      },
      {
        subject: "CSE",
        section: "A",
        cid: 212,
        title: "Software Engineering for UI/UX",
        instructors: "Alomari, Hakam",
        times: [
          { day: 2, start: [13, 15], end: [14, 35] },
          { day: 4, start: [13, 15], end: [14, 35] },
        ],
        crn: 13127,
      },
      {
        subject: "CSE",
        section: "B",
        cid: 212,
        title: "Software Engineering for UI/UX",
        instructors: "Alomari, Hakam",
        times: [
          { day: 2, start: [14, 50], end: [16, 10] },
          { day: 4, start: [14, 50], end: [16, 10] },
        ],
        crn: 14034,
      },
      {
        subject: "CSE",
        section: "A",
        cid: 251,
        title: "Intro to Game Programming",
        instructors: "DeWitt, Christopher",
        times: [
          { day: 0, start: [17, 0], end: [18, 20] },
          { day: 2, start: [17, 0], end: [18, 20] },
        ],
        crn: 13213,
      },
      {
        subject: "CSE",
        section: "B",
        cid: 251,
        title: "Intro to Game Programming",
        instructors: "DeWitt, Christopher",
        times: [
          { day: 0, start: [18, 30], end: [19, 50] },
          { day: 2, start: [18, 30], end: [19, 50] },
        ],
        crn: 14509,
      },
      {
        subject: "CSE",
        section: "A",
        cid: 252,
        title: "Web Application Programming",
        instructors: "Staff",
        times: [
          { day: 1, start: [16, 25], end: [17, 45] },
          { day: 3, start: [16, 25], end: [17, 45] },
        ],
        crn: 13518,
      },
      {
        subject: "CSE",
        section: "A",
        cid: 256,
        title: "Programming in Life Sciences",
        instructors: "Liang, Chun",
        times: [
          { day: 1, start: [8, 0], end: [9, 20] },
          { day: 3, start: [8, 0], end: [9, 20] },
        ],
        crn: 14456,
      },
      {
        subject: "CSE",
        section: "A",
        cid: 262,
        title: "Tech, Ethics & Global Society",
        instructors: "Borror, Kaylynn",
        times: [
          { day: 0, start: [8, 30], end: [9, 50] },
          { day: 2, start: [8, 30], end: [9, 50] },
        ],
        crn: 11858,
      },
      {
        subject: "CSE",
        section: "B",
        cid: 262,
        title: "Tech, Ethics & Global Society",
        instructors: "Borror, Kaylynn",
        times: [
          { day: 0, start: [10, 5], end: [11, 25] },
          { day: 2, start: [10, 5], end: [11, 25] },
        ],
        crn: 11859,
      },
      {
        subject: "CSE",
        section: "C",
        cid: 262,
        title: "Tech, Ethics & Global Society",
        instructors: "Borror, Kaylynn",
        times: [
          { day: 1, start: [10, 5], end: [11, 25] },
          { day: 3, start: [10, 5], end: [11, 25] },
        ],
        crn: 16182,
      },
      {
        subject: "CSE",
        section: "D",
        cid: 262,
        title: "Tech, Ethics & Global Society",
        instructors: "Borror, Kaylynn",
        times: [
          { day: 1, start: [11, 40], end: [13, 0] },
          { day: 3, start: [11, 40], end: [13, 0] },
        ],
        crn: 15010,
      },
      {
        subject: "CSE",
        section: "A",
        cid: 271,
        title: "Object-Oriented Programming",
        instructors: "Amjad, Meisam",
        times: [
          { day: 2, start: [10, 5], end: [11, 55] },
          { day: 4, start: [10, 5], end: [11, 55] },
        ],
        crn: 11860,
      },
      {
        subject: "CSE",
        section: "B",
        cid: 271,
        title: "Object-Oriented Programming",
        instructors: "Amjad, Meisam",
        times: [
          { day: 2, start: [14, 15], end: [16, 5] },
          { day: 4, start: [14, 15], end: [16, 5] },
        ],
        crn: 15011,
      },
      {
        subject: "CSE",
        section: "C",
        cid: 271,
        title: "Object-Oriented Programming",
        instructors: "Amjad, Meisam",
        times: [
          { day: 2, start: [16, 25], end: [18, 15] },
          { day: 4, start: [16, 25], end: [18, 15] },
        ],
        crn: 12798,
      },
      {
        subject: "CSE",
        section: "D",
        cid: 271,
        title: "Object-Oriented Programming",
        instructors: "Staff",
        times: [
          { day: 2, start: [8, 0], end: [9, 50] },
          { day: 4, start: [8, 0], end: [9, 50] },
        ],
        crn: 16183,
      },
      {
        subject: "CSE",
        section: "E",
        cid: 271,
        title: "Object-Oriented Programming",
        instructors: "Staff",
        times: [
          { day: 2, start: [24, 10], end: [14, 0] },
          { day: 4, start: [24, 10], end: [14, 0] },
        ],
        crn: 18883,
      },
      {
        subject: "CSE",
        section: "A",
        cid: 274,
        title: "Data Abstractions & Structures",
        instructors: "Staff",
        times: [
          { day: 3, start: [8, 30], end: [9, 50] },
          { day: 0, start: [8, 30], end: [9, 50] },
        ],
        crn: 13095,
      },
      {
        subject: "CSE",
        section: "B",
        cid: 274,
        title: "Data Abstractions & Structures",
        instructors: "Staff",
        times: [
          { day: 3, start: [8, 30], end: [9, 50] },
          { day: 1, start: [8, 30], end: [9, 50] },
        ],
        crn: 11861,
      },
      {
        subject: "CSE",
        section: "C",
        cid: 274,
        title: "Data Abstractions & Structures",
        instructors: "Staff",
        times: [
          { day: 3, start: [10, 5], end: [11, 25] },
          { day: 0, start: [10, 5], end: [11, 25] },
        ],
        crn: 12482,
      },
      {
        subject: "CSE",
        section: "D",
        cid: 274,
        title: "Data Abstractions & Structures",
        instructors: "Staff",
        times: [
          { day: 3, start: [10, 5], end: [11, 25] },
          { day: 1, start: [10, 5], end: [11, 25] },
        ],
        crn: 15641,
      },
      {
        subject: "CSE",
        section: "E",
        cid: 274,
        title: "Data Abstractions & Structures",
        instructors: "Johnson, Cynthia",
        times: [
          { day: 4, start: [11, 40], end: [13, 0] },
          { day: 1, start: [11, 40], end: [13, 0] },
        ],
        crn: 13520,
      },
      {
        subject: "CSE",
        section: "F",
        cid: 274,
        title: "Data Abstractions & Structures",
        instructors: "Johnson, Cynthia",
        times: [
          { day: 4, start: [11, 40], end: [13, 0] },
          { day: 2, start: [11, 40], end: [13, 0] },
        ],
        crn: 13683,
      },
      {
        subject: "CSE",
        section: "G",
        cid: 274,
        title: "Data Abstractions & Structures",
        instructors: "Johnson, Cynthia",
        times: [
          { day: 4, start: [13, 15], end: [14, 35] },
          { day: 1, start: [13, 15], end: [14, 35] },
        ],
        crn: 18884,
      },
      {
        subject: "CSE",
        section: "H",
        cid: 274,
        title: "Data Abstractions & Structures",
        instructors: "Johnson, Cynthia",
        times: [{ day: 4, start: [13, 15], end: [14, 35] }],
        crn: 18885,
      },
      {
        subject: "CSE",
        section: "A",
        cid: 276,
        title: "Mathematics & Computer Science",
        instructors: "Krumpe, Norman",
        times: [
          { day: 0, start: [11, 40], end: [13, 0] },
          { day: 2, start: [11, 40], end: [13, 0] },
        ],
        crn: 19290,
      },
      {
        subject: "CSE",
        section: "B",
        cid: 276,
        title: "Mathematics & Computer Science",
        instructors: "Krumpe, Norman",
        times: [
          { day: 0, start: [14, 50], end: [16, 5] },
          { day: 2, start: [14, 50], end: [16, 5] },
        ],
        crn: 19291,
      },
      {
        subject: "CSE",
        section: "A",
        cid: 278,
        title: "Systems I",
        instructors: "Sevkli, Aise",
        times: [
          { day: 2, start: [24, 5], end: [13, 0] },
          { day: 4, start: [24, 5], end: [13, 0] },
          { day: 0, start: [24, 5], end: [13, 0] },
        ],
        crn: 11862,
      },
      {
        subject: "CSE",
        section: "B",
        cid: 278,
        title: "Systems I",
        instructors: "Sevkli, Aise",
        times: [
          { day: 2, start: [14, 15], end: [15, 10] },
          { day: 4, start: [14, 15], end: [15, 10] },
          { day: 0, start: [14, 15], end: [15, 10] },
        ],
        crn: 13096,
      },
      {
        subject: "CSE",
        section: "C",
        cid: 278,
        title: "Systems I",
        instructors: "Staff",
        times: [
          { day: 3, start: [8, 0], end: [9, 50] },
          { day: 0, start: [8, 0], end: [9, 50] },
        ],
        crn: 15642,
      },
      {
        subject: "CSE",
        section: "D",
        cid: 278,
        title: "Systems I",
        instructors: "Staff",
        times: [
          { day: 3, start: [8, 0], end: [9, 50] },
          { day: 1, start: [8, 0], end: [9, 50] },
        ],
        crn: 16184,
      },
      {
        subject: "CSE",
        section: "E",
        cid: 278,
        title: "Systems I",
        instructors: "Staff",
        times: [
          { day: 3, start: [10, 5], end: [11, 55] },
          { day: 0, start: [10, 5], end: [11, 55] },
        ],
        crn: 14549,
      },
      {
        subject: "CSE",
        section: "F",
        cid: 278,
        title: "Systems I",
        instructors: "Staff",
        times: [
          { day: 3, start: [10, 5], end: [11, 55] },
          { day: 1, start: [10, 5], end: [11, 55] },
        ],
        crn: 14550,
      },
      {
        subject: "CSE",
        section: "A",
        cid: 301,
        title: "Software Architecture & Design",
        instructors: "Vendome, Christopher",
        times: [
          { day: 2, start: [8, 30], end: [9, 50] },
          { day: 4, start: [8, 30], end: [9, 50] },
        ],
        crn: 18918,
      },
      {
        subject: "CSE",
        section: "A",
        cid: 302,
        title: "Software Construction",
        instructors: "Sobel, Ann",
        times: [
          { day: 1, start: [10, 5], end: [11, 25] },
          { day: 3, start: [10, 5], end: [11, 25] },
        ],
        crn: 19284,
      },
      {
        subject: "CSE",
        section: "A",
        cid: 374,
        title: "Algorithms I",
        instructors: "Giabbanelli, Philippe",
        times: [
          { day: 2, start: [13, 15], end: [14, 35] },
          { day: 4, start: [13, 15], end: [14, 35] },
        ],
        crn: 15014,
      },
      {
        subject: "CSE",
        section: "B",
        cid: 374,
        title: "Algorithms I",
        instructors: "Raychoudhury, Vaskar",
        times: [
          { day: 1, start: [8, 30], end: [9, 50] },
          { day: 3, start: [8, 30], end: [9, 50] },
        ],
        crn: 15643,
      },
      {
        subject: "CSE",
        section: "C",
        cid: 374,
        title: "Algorithms I",
        instructors: "Raychoudhury, Vaskar",
        times: [
          { day: 1, start: [10, 5], end: [11, 25] },
          { day: 3, start: [10, 5], end: [11, 25] },
        ],
        crn: 15015,
      },
      {
        subject: "CSE",
        section: "A",
        cid: 381,
        title: "Systems 2",
        instructors: "Cecchetto, Benjamin",
        times: [
          { day: 2, start: [10, 5], end: [11, 0] },
          { day: 4, start: [10, 5], end: [11, 0] },
          { day: 0, start: [10, 5], end: [11, 0] },
        ],
        crn: 18924,
      },
      {
        subject: "CSE",
        section: "B",
        cid: 381,
        title: "Systems 2",
        instructors: "Cecchetto, Benjamin",
        times: [
          { day: 2, start: [13, 15], end: [14, 10] },
          { day: 4, start: [13, 15], end: [14, 10] },
          { day: 0, start: [13, 15], end: [14, 10] },
        ],
        crn: 11863,
      },
      {
        subject: "CSE",
        section: "C",
        cid: 381,
        title: "Systems 2",
        instructors: "Staff",
        times: [
          { day: 1, start: [24, 10], end: [14, 0] },
          { day: 3, start: [24, 10], end: [14, 0] },
        ],
        crn: 13522,
      },
      {
        subject: "CSE",
        section: "D",
        cid: 381,
        title: "Systems 2",
        instructors: "Staff",
        times: [
          { day: 1, start: [14, 15], end: [16, 5] },
          { day: 3, start: [14, 15], end: [16, 5] },
        ],
        crn: 16185,
      },
      {
        subject: "CSE",
        section: "A",
        cid: 382,
        title: "Mobile App Development",
        instructors: "Zmuda, Michael",
        times: [
          { day: 0, start: [8, 30], end: [9, 50] },
          { day: 2, start: [8, 30], end: [9, 50] },
        ],
        crn: 17331,
      },
      {
        subject: "CSE",
        section: "B",
        cid: 382,
        title: "Mobile App Development",
        instructors: "Zmuda, Michael",
        times: [
          { day: 0, start: [10, 5], end: [11, 25] },
          { day: 2, start: [10, 5], end: [11, 25] },
        ],
        crn: 17332,
      },
      {
        subject: "CSE",
        section: "C",
        cid: 382,
        title: "Mobile App Development",
        instructors: "Zmuda, Michael",
        times: [
          { day: 0, start: [13, 15], end: [14, 35] },
          { day: 2, start: [13, 15], end: [14, 35] },
        ],
        crn: 18925,
      },
      {
        subject: "CSE",
        section: "A",
        cid: 383,
        title: "Web Application Programming",
        instructors: "Johnson, Kurt",
        times: [
          { day: 3, start: [8, 30], end: [9, 50] },
          { day: 1, start: [8, 30], end: [9, 50] },
        ],
        crn: 11887,
      },
      {
        subject: "CSE",
        section: "B",
        cid: 383,
        title: "Web Application Programming",
        instructors: "Johnson, Kurt",
        times: [
          { day: 3, start: [8, 30], end: [9, 50] },
          { day: 2, start: [8, 30], end: [9, 50] },
        ],
        crn: 14039,
      },
      {
        subject: "CSE",
        section: "C",
        cid: 383,
        title: "Web Application Programming",
        instructors: "Johnson, Kurt",
        times: [
          { day: 3, start: [10, 5], end: [11, 25] },
          { day: 1, start: [10, 5], end: [11, 25] },
        ],
        crn: 15012,
      },
      {
        subject: "CSE",
        section: "D",
        cid: 383,
        title: "Web Application Programming",
        instructors: "Johnson, Kurt",
        times: [
          { day: 3, start: [10, 5], end: [11, 25] },
          { day: 2, start: [10, 5], end: [11, 25] },
        ],
        crn: 15013,
      },
      {
        subject: "CSE",
        section: "A",
        cid: 385,
        title: "Database Systems",
        instructors: "Mattox, John",
        times: [
          { day: 0, start: [8, 30], end: [9, 50] },
          { day: 2, start: [8, 30], end: [9, 50] },
        ],
        crn: 11864,
      },
      {
        subject: "CSE",
        section: "B",
        cid: 385,
        title: "Database Systems",
        instructors: "Mattox, John",
        times: [
          { day: 0, start: [10, 5], end: [11, 25] },
          { day: 2, start: [10, 5], end: [11, 25] },
        ],
        crn: 12799,
      },
      {
        subject: "CSE",
        section: "C",
        cid: 385,
        title: "Database Systems",
        instructors: "Mattox, John",
        times: [
          { day: 0, start: [13, 15], end: [14, 35] },
          { day: 2, start: [13, 15], end: [14, 35] },
        ],
        crn: 15206,
      },
      {
        subject: "CSE",
        section: "D",
        cid: 385,
        title: "Database Systems",
        instructors: "Mattox, John",
        times: [
          { day: 0, start: [14, 50], end: [16, 10] },
          { day: 2, start: [14, 50], end: [16, 10] },
        ],
        crn: 18928,
      },
      {
        subject: "CSE",
        section: "A",
        cid: 386,
        title: "Foundations of Graphics",
        instructors: "Cecchetto, Benjamin",
        times: [
          { day: 0, start: [14, 50], end: [16, 10] },
          { day: 2, start: [14, 50], end: [16, 10] },
        ],
        crn: 15631,
      },
      {
        subject: "CSE",
        section: "B",
        cid: 386,
        title: "Foundations of Graphics",
        instructors: "Cecchetto, Benjamin",
        times: [
          { day: 0, start: [16, 25], end: [18, 15] },
          { day: 2, start: [16, 25], end: [18, 15] },
        ],
        crn: 15632,
      },
      {
        subject: "CSE",
        section: "A",
        cid: 401,
        title: "Software Quality Assurance",
        instructors: "Vendome, Christopher",
        times: [
          { day: 2, start: [11, 40], end: [13, 0] },
          { day: 4, start: [11, 40], end: [13, 0] },
        ],
        crn: 19285,
      },
      {
        subject: "CSE",
        section: "A",
        cid: 411,
        title: "Model-Driven Software Eng",
        instructors: "Rapos, Eric",
        times: [
          { day: 1, start: [11, 40], end: [13, 0] },
          { day: 3, start: [11, 40], end: [13, 0] },
        ],
        crn: 17333,
      },
      {
        subject: "CSE",
        section: "A",
        cid: 432,
        title: "Machine Learning",
        instructors: "Feng, Xianglong",
        times: [
          { day: 0, start: [14, 50], end: [16, 10] },
          { day: 2, start: [14, 50], end: [16, 10] },
        ],
        crn: 17335,
      },
    ],
    curClasses: [],
    showDialog: false,
    dialogContent: "",
    dark: false,
    searchTerm: "",
  },
  reducers: {
    addClassToSchedule: (state, action) => {
      const cl = action.payload;
      for (let tcl in state.curClasses) {
        if (
          cl.subject == state.curClasses[tcl].subject &&
          cl.section == state.curClasses[tcl].section &&
          cl.cid == state.curClasses[tcl].cid
        ) {
          return;
        } else {
          for (let tcl2 in state.curClasses[tcl].times) {
            for (let cl2 in cl.times) {
              if (
                state.curClasses[tcl].times[tcl2].day == cl.times[cl2].day &&
                ((state.curClasses[tcl].times[tcl2].end[0] ==
                  cl.times[cl2].start[0] &&
                  state.curClasses[tcl].times[tcl2].end[1] >
                    cl.times[cl2].start[1]) ||
                  state.curClasses[tcl].times[tcl2].end[0] >
                    cl.times[cl2].start[0])
              ) {
                return;
              }
            }
          }
        }
      }
      state.curClasses.push(cl);
      localStorage.setItem("curClasses", JSON.stringify(state.curClasses));
    },
    removeClassFromSchedule: (state, action) => {
      const cl = action.payload;
      for (let tcl in state.curClasses) {
        if (
          cl.subject == state.curClasses[tcl].subject &&
          cl.section == state.curClasses[tcl].section &&
          cl.cid == state.curClasses[tcl].cid
        ) {
          state.curClasses.splice(tcl, 1);
          localStorage.setItem("curClasses", JSON.stringify(state.curClasses));
          return;
        }
      }
    },
    changeDialogState: (state, _) => {
      state.showDialog = !state.showDialog;
    },
    changeDialogContent: (state, action) => {
      state.dialogContent = action.payload;
    },
    setDark: (state) => {
      state.dark = !state.dark;
    },
    changeSearchTerm: (state, action) => {
      state.searchTerm = action.payload.toUpperCase();
    },
  },
});

export const {
  addClassToSchedule,
  removeClassFromSchedule,
  changeDialogState,
  changeDialogContent,
  setDark,
  changeSearchTerm,
} = slice.actions;

export default slice.reducer;
