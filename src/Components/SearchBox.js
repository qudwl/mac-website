import { useSelector, useDispatch } from "react-redux";
import {
  addClassToSchedule,
  removeClassFromSchedule,
  changeSearchTerm,
} from "../Redux/slice";
import { Search } from "react-bootstrap-icons";
import Input from "@mui/joy/Input";
import Chip from "@mui/joy/Chip";
import Stack from "@mui/joy/Stack";
import SearchResult from "./SearchResult";
import { useData } from "../Scripts/script";
import { useRef, useEffect } from "react";

const SearchBox = (props) => {
  const inputReference = useRef(null);
  const searchTerm = useSelector((state) => state.slice.searchTerm);
  const results = useData(searchTerm);
  const curClasses = useSelector((state) => state.slice.curClasses);
  const curArr = [];

  for (let cl of curClasses) {
    const fullId = `${cl.subject} ${cl.cid} ${cl.section}`;
    const onClickFunc = () => {
      dispatch(removeClassFromSchedule(cl));
    };
    const result = (
      <Chip variant="soft" onClick={() => onClickFunc()}>
        {fullId}
      </Chip>
    );
    curArr.push(result);
  }
  const dispatch = useDispatch();
  const arr = [];
  for (let i = 0; i < results.length; i++) {
    const el = results[i];
    const onClickFunc = () => {
      dispatch(addClassToSchedule(el));
    };
    const result = (
      <SearchResult
        fullId={`${el.subject} ${el.cid} ${el.section}`}
        title={el.title}
        onClick={() => onClickFunc()}
        times={el.times}
        instructor={el.instructors
          .split(", ")
          .map((el) => (el = el.trim()))
          .reverse()
          .join(" ")}
      />
    );
    arr.push(result);
  }

  useEffect(() => {
    inputReference.current.children[1].focus();
  }, []);
  return (
    <>
      <Stack direction={"row"} flexWrap={true} spacing={1}>
        {curArr}
      </Stack>
      <Input
        ref={inputReference}
        startDecorator={<Search />}
        value={searchTerm}
        tabIndex={props.expanded ? 0 : -1}
        onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
        placeholder="Search for a class"
        sx={{ mt: 1, width: "600px", maxWidth: "80vw" }}
      />

      <Stack direction={"column"} sx={{ overflowY: "scroll" }}>
        {arr}
      </Stack>
    </>
  );
};

export default SearchBox;
