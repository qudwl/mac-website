import { BoxArrowUp, Search, Moon, Sun } from "react-bootstrap-icons";
import Logo from "./Logo";
import "./SearchBar.css";
import SearchModal from "./SearchModal";

const SearchBar = (props) => {
  return (
    <header>
      <Logo width="40" dark={props.dark} />
      <div className="searchBar">
        <input />
        <span>
          <span>Search</span>
        </span>
      </div>
      <div className="menu">
        <button
          onClick={() => {
            props.openModal(true);
            props.setModalTitle("Export");
          }}
        >
          <BoxArrowUp />
          <span>Export</span>
        </button>
        <button
          onClick={() => {
            props.openModal(true);
            props.setModalTitle("CRN");
          }}
        >
          CRN
        </button>
        <button
          onClick={() => {
            props.setDark(!props.dark);
          }}
        >
          {props.dark ? <Moon /> : <Sun />}
        </button>
      </div>
    </header>
  );
};

export default SearchBar;
