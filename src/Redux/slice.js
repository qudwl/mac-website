import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "data",
  initialState: {
    hasData: false,
    curClasses: [],
    showDialog: false,
    dialogContent: "",
    dark: false,
    searchTerm: "",
    curTerm: "",
    semesters: [],
  },
  reducers: {
    addClassToSchedule: (state, action) => {
      const cl = action.payload;
      for (let tcl in state.curClasses) {
        if (
          cl.subject === state.curClasses[tcl].subject &&
          cl.section === state.curClasses[tcl].section &&
          cl.cid === state.curClasses[tcl].cid
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
          cl.subject === state.curClasses[tcl].subject &&
          cl.section === state.curClasses[tcl].section &&
          cl.cid === state.curClasses[tcl].cid
        ) {
          state.curClasses.splice(tcl, 1);
          localStorage.setItem("curClasses", JSON.stringify(state.curClasses));
          return;
        }
      }
    },
    clearClasses: (state) => {
      state.curClasses = [];
    },
    changeDialogState: (state, action) => {
      state.showDialog = action.payload;
    },
    changeDialogContent: (state, action) => {
      state.dialogContent = action.payload;
    },
    setDark: (state) => {
      state.dark = !state.dark;
    },
    changeSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setTerm: (state, action) => {
      state.curTerm = action.payload;
    },
    setHasData: (state, action) => {
      state.hasData = action.payload;
    },
    setSemesters: (state, action) => {
      state.semesters = action.payload;
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
  setTerm,
  setHasData,
  setSemesters,
  clearClasses
} = slice.actions;

export default slice.reducer;
