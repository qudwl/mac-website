import { BoxArrowUp, Search, Moon, Sun } from "react-bootstrap-icons";
import Logo from "./Logo";
import "./SearchBar.css";

const SearchBar = (props) => {
  return (
    <header>
      <Logo width="40" dark={props.dark} />
      <button>
        <Search size={"1em"} />
        <span>Search</span>
      </button>
      <div className="menu">
        <button onClick={() => props.openModal(true)}>
          <BoxArrowUp />
          <span>Export</span>
        </button>
        <button>CRN</button>
        <button>{props.dark ? <Moon /> : <Sun />}</button>
      </div>
    </header>
  );
};

export default SearchBar;
