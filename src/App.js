import "./App.css";
import React, { useState } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";

function App() {
  const [dark, setDark] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [propsTitle, setPropsTitle] = useState("Export");
  const [modalContent, setModalContent] = useState(<></>);

  dark
    ? document.querySelector("#root").classList.add("dark")
    : document.querySelector("#root").classList.remove("dark");

  return (
    <div className="App">
      <Main dark={dark} />
      <Header
        dark={dark}
        openModal={setShowModal}
        setModalTitle={setPropsTitle}
        setDark={setDark}
        setModalContent={setModalContent}
      />
    </div>
  );
}

export default App;
