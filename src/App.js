import "./App.css";
import Logo from "./Logo";
import { BoxArrowUp, Search } from "react-bootstrap-icons";
import Row from "./Components/Row";
import Calendar from "@toast-ui/react-calendar";
import "@toast-ui/calendar/dist/toastui-calendar.min.css";

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
        <Logo width="40" />
        <div className="searchBar">
          <input type="text" />
          <button>
            <Search size={"1em"} />
            <span>Search</span>
          </button>
        </div>
        <div className="menu">
          <button>
            <BoxArrowUp />
            <span>Export</span>
          </button>
          <button>CRN</button>
        </div>
      </header>
      <main>
        {/* <div className="days">{days}</div>
        <div className="times">{times}</div> */}
        <Calendar
          usageStatistics={false}
          height={window.innerHeight - 80 + "px"}
          isReadOnly={true}
        />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
