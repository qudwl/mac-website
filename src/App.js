import "./App.css";
import React, { useState } from "react";
import SearchBar from "./Components/SearchBar";
import Main from "./Components/Main";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className="App">
      <SearchBar dark={dark} />
      <Main />
    </div>
  );
}

export default App;
