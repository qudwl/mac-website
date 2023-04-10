import React, { useEffect } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Dialog from "./Components/Dialog";
import { useDispatch } from "react-redux";
import { addClassToSchedule, setTerm, setSemesters } from "./Redux/slice";
import Sheet from "@mui/joy/Sheet";
import { getTerms } from "./Scripts/api-connector";
import { downloadTerm } from "./Scripts/script";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const curClassesLocal = localStorage.getItem("curClasses");
    if (curClassesLocal != null) {
      const curClasses = JSON.parse(curClassesLocal);
      for (let cl of curClasses) {
        dispatch(addClassToSchedule(cl));
      }
    }

    getTerms().then((res) => {
      dispatch(setSemesters(res));
      const curTerm = localStorage.getItem("curTerm");
      if (curTerm == null) {
        const cur = res.findLast((t) => t.termId % 10 === 0);
        localStorage.setItem("curTerm", JSON.stringify(cur));
        dispatch(setTerm(cur));
        downloadTerm(res.termId);
      } else {
        dispatch(setTerm(JSON.parse(curTerm)));
      }
    });
  }, []);

  return (
    <Sheet sx={{ width: "100vw" }}>
      <Header />
      <Main />
      <Dialog />
    </Sheet>
  );
}

export default App;
