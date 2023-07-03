import { useSelector, useDispatch } from "react-redux";
import {
  removeClassFromSchedule,
  changeSearchTerm,
} from "../Redux/slice";
import Input from "@mui/joy/Input";
import Chip from "@mui/joy/Chip";
import Stack from "@mui/joy/Stack";
import SearchResult from "./SearchResult";
import { searchData, useWidth } from "../Scripts/script";
import { useRef, useEffect, useState } from "react";
import CircularProgress from "@mui/joy/CircularProgress";
import Box from "@mui/joy/Box";

const SearchBox = (props) => {
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const searchTerm = useSelector((state) => state.slice.searchTerm);
  const curClasses = useSelector((state) => state.slice.curClasses);
  const hasData = useSelector((state) => state.slice.hasData);
  const curTerm = useSelector((state) => state.slice.curTerm);
  const curArr = [];

  useEffect(() => {
    setIsSearching(true);
    searchData(searchTerm, curTerm.termId, hasData).then((res) => {
      setResults(res);
      setIsSearching(false);
    });
  }, [searchTerm, curTerm]);

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
    const result = (
      <SearchResult
        el={el}
        key={i}
      />
    );
    arr.push(result);
  }
  const display = useWidth() >= 1480 ? "none" : "block";
  return (
    <>
      <Stack direction={"row"} flexWrap={true} spacing={1}>
        {curArr}
      </Stack>
      <Input
        value={searchTerm}
        tabIndex={props.expanded ? 0 : -1}
        onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
        placeholder="Search for a class"
        sx={{ mt: 1, maxWidth: "80vw", display: { display } }}
      />

      <Stack direction={"column"} sx={{ overflowY: "scroll" }}>
        {isSearching ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 2,
            }}
          >
            <CircularProgress size="lg" />
          </Box>
        ) : (
          arr
        )}
      </Stack>
    </>
  );
};

export default SearchBox;
