import "./App.css";
import Logo from "./Logo";
import { Search } from "react-bootstrap-icons";

function App() {
  const times = [];
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  for (let i = 8; i < 13; i++) {
    times.push(<span>{i + ":00"}</span>);
  }
  for (let i = 0; i < days.length; i++) {
    days[i] = <span>{days[i]}</span>;
  }

  return (
    <div className="App">
      <header>
        <div className="logo">
          <Logo width="50" />
        </div>
        <div className="searchBar">
          <input type="text" />
          <button>
            <Search size={"16px"} />
            <span>Search</span>
          </button>
        </div>
        <div className="menu">
          <button>Export</button>
          <button>CRN</button>
        </div>
      </header>
      <main>
        <div className="days">{days}</div>
        <div className="times">{times}</div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
