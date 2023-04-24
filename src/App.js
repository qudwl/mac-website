import React, { useEffect } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Dialog from "./Components/Dialog";
import Sheet from "@mui/joy/Sheet";
import { initApp } from "./Scripts/script";

function App() {
  useEffect(() => {
    initApp();
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
