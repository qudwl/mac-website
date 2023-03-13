import "./App.css";
import React, { useState } from "react";
import SearchBar from "./Components/SearchBar";
import Main from "./Components/Main";
import Modal from "./Components/Modal";

function App() {
  const [dark, setDark] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [propsTitle, setPropsTitle] = useState("Export");

  return (
    <>
      <div className="App">
        <Main />
        <SearchBar dark={dark} openModal={setShowModal} />
      </div>
      <Modal isOpen={showModal} title={propsTitle} close={setShowModal} />
    </>
  );
}

export default App;
