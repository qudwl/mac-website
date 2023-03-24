import { useSelector, useDispatch } from "react-redux";
import { addClassToSchedule } from "../Redux/slice";
import { useState } from "react";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const useData = (text) => {
  const results = [];
  const data = useSelector((state) => state.slice.data);
  const searchTerm = text.toUpperCase().split(" ").join("");

  if (searchTerm.length < 3) {
    return [];
  }

  for (let cl of data) {
    const title = cl.subject + cl.cid;
    if (title.toUpperCase().indexOf(searchTerm) != -1) {
      results.push(cl);
    }
  }
  return results;
};

const SearchResult = (props) => {
  const arr = [];
  for (let t of props.times) {
    arr.push(<p>{`${days[t.day]} ${t.start.join(":")}-${t.end.join(":")}`}</p>);
  }
  return (
    <div
      className="searchResult"
      key={props.key}
      onClick={() => {
        props.onClick();
      }}
    >
      <h3>{props.title}</h3>
      {arr}
    </div>
  );
};

const SearchBox = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const results = useData(searchTerm);
  const dispatch = useDispatch();
  const arr = [];
  for (let i = 0; i < results.length; i++) {
    const el = results[i];
    const onClickFunc = () => {
      dispatch(addClassToSchedule(el));
      let curClasses = JSON.parse(localStorage.getItem("curClasses"));
      if (curClasses == null) {
        curClasses = [];
      }
      curClasses.push(el);
      localStorage.setItem("curClasses", JSON.stringify(curClasses));
    };
    const result = (
      <SearchResult
        title={`${el.subject} ${el.cid} ${el.section}`}
        onClick={() => onClickFunc()}
        times={el.times}
      />
    );
    arr.push(result);
  }
  return (
    <>
      <input
        value={searchTerm}
        tabIndex={props.expanded ? 0 : -1}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="curClasses"></div>
      <div className="results">{arr}</div>
    </>
  );
};

export default SearchBox;
