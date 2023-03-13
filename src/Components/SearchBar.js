import { BoxArrowUp, Search, Moon, Sun } from "react-bootstrap-icons";
import Logo from "./Logo";
import "./SearchBar.css";
import SearchModal from "./SearchModal";

const SearchBar = (props) => {
  return (
    <header>
      <Logo width="40" dark={props.dark} />
      <button onClick={() => { props.openModal(true); props.setModalTitle("Search"); props.setModalContent(<SearchModal />) }}>
        <Search size={"1em"} />
        <span>Search</span>
      </button>
      <div className="menu">
        <button onClick={() => { props.openModal(true); props.setModalTitle("Export") }}>
          <BoxArrowUp />
          <span>Export</span>
        </button>
        <button onClick={() => { props.openModal(true); props.setModalTitle("CRN") }}>CRN</button>
        <button onClick={() => { props.setDark(!props.dark) }}>{props.dark ? <Moon /> : <Sun />}</button>
      </div>
    </header>
  );
};

export default SearchBar;
