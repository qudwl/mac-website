import "./App.css";
import React, { useEffect } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Dialog from "./Components/Dialog";
import { useSelector, useDispatch } from "react-redux";
import {
  addClassToSchedule,
  changeDialogContent,
  changeDialogState,
  setTerm,
} from "./Redux/slice";
import Sheet from "@mui/joy/Sheet";
import { getTerm } from "./Scripts/api-connector";
import { downloadTerm } from "./Scripts/script";

function App() {
  const dark = useSelector((state) => state.slice.dark);
  const dispatch = useDispatch();
  useEffect(() => {
    const curClassesLocal = localStorage.getItem("curClasses");
    if (curClassesLocal != null) {
      const curClasses = JSON.parse(curClassesLocal);
      for (let cl of curClasses) {
        dispatch(addClassToSchedule(cl));
      }
    }

    const curTerm = localStorage.getItem("curTerm");
    if (curTerm == null) {
      dispatch(changeDialogState(true));
      dispatch(changeDialogContent("Loading Data"));
      getTerm().then((res) => {
        localStorage.setItem("curTerm", JSON.stringify(res));
        dispatch(setTerm(res));
        downloadTerm(res.termId);
      });
    } else {
      const term = localStorage.getItem("curTerm");
      dispatch(setTerm(JSON.parse(term)));
    }
  }, []);
  dark
    ? document.querySelector("#root").classList.add("dark")
    : document.querySelector("#root").classList.remove("dark");

  return (
    <Sheet sx={{ width: "100vw" }}>
      <Header />
      <Main />
      <Dialog />
    </Sheet>
  );
}

export default App;
