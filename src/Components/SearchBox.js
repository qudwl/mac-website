import { useSelector, useDispatch } from "react-redux";
import {
  removeClassFromSchedule,
  changeSearchTerm,
} from "../Redux/slice";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";
import SearchResult from "./SearchResult";
import { searchData, useWidth } from "../Scripts/script";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/joy/CircularProgress";
import Box from "@mui/joy/Box";

const SearchBox = (props) => {
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const searchTerm = useSelector((state) => state.slice.searchTerm);
  const hasData = useSelector((state) => state.slice.hasData);
  const curTerm = useSelector((state) => state.slice.curTerm);

  useEffect(() => {
    setIsSearching(true);
    searchData(searchTerm, curTerm.termId, hasData).then((res) => {
      setResults(res);
      setIsSearching(false);
    });
  }, [searchTerm, curTerm]);

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
