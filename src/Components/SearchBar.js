import { useRef, useState } from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  const ref = useRef(null);
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="searchBar">
      <span onClick={() => setExpanded(true)}>Search</span>
      <div className={"searchBox " + (expanded ? "expanded" : "")}>
        <input ref={ref} />
      </div>
    </div>
  );
};

export default SearchBar;