import "./App.css";
import React, { useState } from "react";
import SearchBar from "./Components/SearchBar";
import Main from "./Components/Main";
import Modal from "./Components/Modal";

function App() {
  const [dark, setDark] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [propsTitle, setPropsTitle] = useState("Export");
  const [modalContent, setModalContent] = useState(<></>);

  dark ? document.querySelector("#root").classList.add("dark") : document.querySelector("#root").classList.remove("dark")

  return (
    <>
      <div className="App">
        <SearchBar dark={dark} openModal={setShowModal} setModalTitle={setPropsTitle} setDark={setDark} setModalContent={setModalContent} />
        <Main dark={dark} />
      </div>
      <Modal isOpen={showModal} title={propsTitle} close={setShowModal} modalContent={modalContent} />
    </>
  );
}

export default App;
