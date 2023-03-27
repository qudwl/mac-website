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
      },
      {
        subject: "CSE",
        section: "H",
        cid: 274,
        title: "Data Abstractions & Structures",
        instructors: "Johnson, Cynthia",
        times: [{ day: 4, start: [13, 15], end: [14, 35] }],
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
      },
      {
        subject: "CSE",
        section: "B",
        cid: 432,
        title: "Machine Learning",
        instructors: "Feng, Xianglong",
        times: [
          { day: 0, start: [16, 25], end: [17, 45] },
          { day: 2, start: [16, 25], end: [17, 45] },
        ],
      },
      {
        subject: "CSE",
        section: "A",
        cid: 443,
        title: "High Performance Computing",
        instructors: "Rao, Dhananjai",
        times: [
          { day: 0, start: [14, 50], end: [16, 10] },
          { day: 2, start: [14, 50], end: [16, 10] },
        ],
      },
      {
        subject: "CSE",
        section: "B",
        cid: 443,
        title: "High Performance Computing",
        instructors: "Rao, Dhananjai",
        times: [
          { day: 0, start: [16, 25], end: [17, 45] },
          { day: 2, start: [16, 25], end: [17, 45] },
        ],
      },
      {
        subject: "CSE",
        section: "A",
        cid: 448,
        title: "Senior Design Project",
        instructors: "Stahr, Lynn",
        times: [
          { day: 1, start: [18, 30], end: [19, 25] },
          { day: 3, start: [18, 30], end: [19, 25] },
        ],
      },
      {
        subject: "CSE",
        section: "B",
        cid: 448,
        title: "Senior Design Project",
        instructors: "Stahr, Lynn",
        times: [
          { day: 1, start: [18, 30], end: [19, 25] },
          { day: 3, start: [18, 30], end: [19, 25] },
        ],
      },
      {
        subject: "CSE",
        section: "C",
        cid: 448,
        title: "Senior Design Project",
        instructors: "Stahr, Lynn",
        times: [
          { day: 1, start: [18, 30], end: [19, 25] },
          { day: 3, start: [18, 30], end: [19, 25] },
        ],
      },
      {
        subject: "CSE",
        section: "A",
        cid: 449,
        title: "Senior Design Project",
        instructors: "Stahr, Lynn",
        times: [
          { day: 1, start: [18, 30], end: [19, 25] },
          { day: 3, start: [18, 30], end: [19, 25] },
        ],
      },
      {
        subject: "CSE",
        section: "A",
        cid: 465,
        title: "Comparative Prog. Languages",
        instructors: "Femiani, John",
        times: [
          { day: 1, start: [10, 5], end: [11, 25] },
          { day: 3, start: [10, 5], end: [11, 25] },
        ],
      },
      {
        subject: "CSE",
        section: "B",
        cid: 465,
        title: "Comparative Prog. Languages",
        instructors: "Femiani, John",
        times: [
          { day: 1, start: [11, 40], end: [13, 0] },
          { day: 3, start: [11, 40], end: [13, 0] },
        ],
      },
      {
        subject: "CSE",
        section: "C",
        cid: 465,
        title: "Comparative Prog. Languages",
        instructors: "Femiani, John",
        times: [
          { day: 1, start: [14, 50], end: [16, 10] },
          { day: 3, start: [14, 50], end: [16, 10] },
        ],
      },
      {
        subject: "CSE",
        section: "A",
        cid: 466,
        title: "Bioinformatics Computing Skill",
        instructors: "Liang, Chun",
        times: [
          { day: 1, start: [10, 5], end: [11, 25] },
          { day: 3, start: [10, 5], end: [11, 25] },
        ],
      },
      {
        subject: "CSE",
        section: "A",
        cid: 467,
        title: "Computer and Network Security",
        instructors: "Bhunia, Suman",
        times: [
          { day: 1, start: [13, 15], end: [14, 35] },
          { day: 3, start: [13, 15], end: [14, 35] },
        ],
      },
      {
        subject: "CSE",
        section: "B",
        cid: 467,
        title: "Computer and Network Security",
        instructors: "Bhunia, Suman",
        times: [
          { day: 1, start: [14, 50], end: [16, 10] },
          { day: 3, start: [14, 50], end: [16, 10] },
        ],
      },
      {
        subject: "CSE",
        section: "A",
        cid: 473,
        title: "Automata Forml Lang&Computblty",
        instructors: "Inclezan, Daniela",
        times: [
          { day: 0, start: [13, 15], end: [14, 35] },
          { day: 2, start: [13, 15], end: [14, 35] },
        ],
      },
      {
        subject: "CSE",
        section: "A",
        cid: 478,
        title: "Soft Computing Techniques",
        instructors: "Sevkli, Aise",
        times: [
          { day: 2, start: [10, 5], end: [11, 25] },
          { day: 4, start: [10, 5], end: [11, 25] },
        ],
      },
      {
        subject: "CSE",
        section: "A",
        cid: 486,
        title: "Intro Artificial Intelligence",
        instructors: "Bibak, Khodakhast",
        times: [
          { day: 2, start: [11, 40], end: [13, 0] },
          { day: 4, start: [11, 40], end: [13, 0] },
        ],
      },
      {
        subject: "CSE",
        section: "B",
        cid: 486,
        title: "Intro Artificial Intelligence",
        instructors: "Bibak, Khodakhast",
        times: [
          { day: 2, start: [14, 50], end: [16, 10] },
          { day: 4, start: [14, 50], end: [16, 10] },
        ],
      },
      {
        subject: "CSE",
        section: "A",
        cid: 489,
        title: "Game Engine Design",
        instructors: "Bachmann, Eric",
        times: [
          { day: 1, start: [13, 15], end: [14, 35] },
          { day: 3, start: [13, 15], end: [14, 35] },
        ],
      },
      {
        subject: "CSE",
        section: "A",
        cid: 501,
        title: "Software Quality Assurance",
        instructors: "Vendome, Christopher",
        times: [
          { day: 2, start: [11, 40], end: [13, 0] },
          { day: 4, start: [11, 40], end: [13, 0] },
        ],
      },
      {
        subject: "CSE",
        section: "A",
        cid: 511,
        title: "Model-Driven Software Eng",
        instructors: "Rapos, Eric",
        times: [
          { day: 1, start: [11, 40], end: [13, 0] },
          { day: 3, start: [11, 40], end: [13, 0] },
        ],
      },
      {
        subject: "CSE",
        section: "A",
        cid: 532,
        title: "Machine Learning",
        instructors: "Feng, Xianglong",
        times: [
          { day: 0, start: [14, 50], end: [16, 10] },
          { day: 2, start: [14, 50], end: [16, 10] },
        ],
      },
      {
        subject: "CSE",
        section: "B",
        cid: 532,
        title: "Machine Learning",
        instructors: "Feng, Xianglong",
        times: [
          { day: 0, start: [16, 25], end: [17, 45] },
          { day: 2, start: [16, 25], end: [17, 45] },
        ],
      },
      {
        subject: "CSE",
        section: "A",
        cid: 543,
        title: "High Performance Computing",
        instructors: "Rao, Dhananjai",
        times: [
          { day: 0, start: [14, 50], end: [16, 10] },
          { day: 2, start: [14, 50], end: [16, 10] },
        ],
      },
      {
        subject: "CSE",
        section: "B",
        cid: 543,
        title: "High Performance Computing",
        instructors: "Rao, Dhananjai",
        times: [
          { day: 0, start: [16, 25], end: [17, 45] },
          { day: 2, start: [16, 25], end: [17, 45] },
        ],
      },
      {
        subject: "CSE",
        section: "A",
        cid: 565,
        title: "Comparative Prog. Languages",
        instructors: "Femiani, John",
        times: [
          { day: 1, start: [10, 5], end: [11, 25] },
          { day: 3, start: [10, 5], end: [11, 25] },
        ],
      },
      {
        subject: "CSE",
        section: "B",
        cid: 565,
        title: "Comparative Prog. Languages",
        instructors: "Femiani, John",
        times: [
          { day: 1, start: [11, 40], end: [13, 0] },
          { day: 3, start: [11, 40], end: [13, 0] },
        ],
      },
      {
        subject: "CSE",
        section: "C",
        cid: 565,
        title: "Comparative Prog. Languages",
        instructors: "Femiani, John",
        times: [
          { day: 1, start: [14, 50], end: [16, 10] },
          { day: 3, start: [14, 50], end: [16, 10] },
        ],
      },
      {
        subject: "CSE",
        section: "A",
        cid: 566,
        title: "Bioinformatics Computing Skill",
        instructors: "Liang, Chun",
        times: [
          { day: 1, start: [10, 5], end: [11, 25] },
          { day: 3, start: [10, 5], end: [11, 25] },
        ],
      },
      {
        subject: "CSE",
        section: "A",
        cid: 567,
        title: "Computer and Network Security",
        instructors: "Bhunia, Suman",
        times: [
          { day: 1, start: [13, 15], end: [14, 35] },
          { day: 3, start: [13, 15], end: [14, 35] },
        ],
      },
      {
        subject: "CSE",
        section: "B",
        cid: 567,
        title: "Computer and Network Security",
        instructors: "Bhunia, Suman",
        times: [
          { day: 1, start: [14, 50], end: [16, 10] },
          { day: 3, start: [14, 50], end: [16, 10] },
        ],
      },
      {
        subject: "CSE",
        section: "A",
        cid: 573,
        title: "Automata Forml Lang&Computblty",
        instructors: "Inclezan, Daniela",
        times: [
          { day: 0, start: [13, 15], end: [14, 35] },
          { day: 2, start: [13, 15], end: [14, 35] },
        ],
      },
      {
        subject: "CSE",
        section: "A",
        cid: 578,
        title: "Soft Computing Techniques",
        instructors: "Sevkli, Aise",
        times: [
          { day: 2, start: [10, 5], end: [11, 25] },
          { day: 4, start: [10, 5], end: [11, 25] },
        ],
      },
      {
        subject: "CSE",
        section: "A",
        cid: 586,
        title: "Intro Artificial Intelligence",
        instructors: "Bibak, Khodakhast",
        times: [
          { day: 2, start: [11, 40], end: [13, 0] },
          { day: 4, start: [11, 40], end: [13, 0] },
        ],
      },
      {
        subject: "CSE",
        section: "B",
        cid: 586,
        title: "Intro Artificial Intelligence",
        instructors: "Bibak, Khodakhast",
        times: [
          { day: 2, start: [14, 50], end: [16, 10] },
          { day: 4, start: [14, 50], end: [16, 10] },
        ],
      },
      {
        subject: "CSE",
        section: "A",
        cid: 589,
        title: "Game Engine Design",
        instructors: "Bachmann, Eric",
        times: [
          { day: 1, start: [13, 15], end: [14, 35] },
          { day: 3, start: [13, 15], end: [14, 35] },
        ],
      },
      {
        subject: "CSE",
        section: "A",
        cid: 601,
        title: "Comp Sci Research Methods",
        instructors: "Rapos, Eric",
        times: [
          { day: 1, start: [13, 15], end: [14, 35] },
          { day: 3, start: [13, 15], end: [14, 35] },
        ],
      },
      {
        subject: "CSE",
        section: "A",
        cid: 611,
        title: "Seminar Attendance Requirement",
        instructors: "Inclezan, Daniela",
        times: [],
      },
      {
        subject: "CSE",
        section: "A",
        cid: "620A",
        title: "Knowledge Representation",
        instructors: "Inclezan, Daniela",
        times: [
          { day: 0, start: [11, 40], end: [13, 0] },
          { day: 2, start: [11, 40], end: [13, 0] },
        ],
      },
      {
        subject: "CSE",
        section: "A",
        cid: "620E",
        title: "Predictive Models for Health",
        instructors: "Giabbanelli, Philippe",
        times: [
          { day: 2, start: [10, 5], end: [11, 25] },
          { day: 4, start: [10, 5], end: [11, 25] },
        ],
      },
    ],
    curClasses: [],
    showDialog: false,
    dialogContent: "",
    dark: false,
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
        }
      }
      state.curClasses.push(cl);
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
  },
});

export const {
  addClassToSchedule,
  removeClassFromSchedule,
  changeDialogState,
  changeDialogContent,
  setDark,
} = slice.actions;

export default slice.reducer;
