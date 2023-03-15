import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import "./SearchBar.css";

const useData = (text) => {
  const results = [];
  const data = useSelector((state) => state.slice.classes);

  for (let cl of data) {
    if (text.toUpperCase().indexOf(cl.subject) != -1 || text.indexOf(cl.cid) != -1) {
      results.push(cl);
    }
  }

  return results;
}

const SearchBar = (props) => {
  const ref = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const results = useData(searchTerm);



  return (
    <div className="searchBar">
      <span onClick={() => setExpanded(!expanded)}>Search</span>
      <div className={"searchBox " + (expanded ? "expanded" : "")}>
        <input ref={ref} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <div className="results">
          {results}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;