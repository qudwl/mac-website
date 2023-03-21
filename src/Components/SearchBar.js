import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import "./SearchBar.css";

const useData = (text) => {
  const results = [];
  const data = useSelector((state) => state.slice.data);

  for (let cl of data) {
    if (text.toUpperCase().indexOf(cl.subject) != -1 || text.indexOf(cl.cid) != -1) {
      results.push(cl);
    }
  }
  return results;
}

const SearchResult = (props) => {
  return (<div className="searchResult" key={props.key}>
    <span>
      {props.title}
    </span>
    <span>
    </span>
  </div>)
}

const SearchBar = (props) => {
  const ref = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const results = useData(searchTerm);

  const arr = [];
  for (let el of results) {
    const result = <SearchResult title={el.subject + el.cid} />;
    arr.push(result);
  }

  return (
    <div className="searchBar">
      <span onClick={() => setExpanded(!expanded)}>Search</span>
      <div className={"searchBox " + (expanded ? "expanded" : "")}>
        <input ref={ref} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <div className="results">
          {arr}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;