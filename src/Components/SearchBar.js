import Input from "@mui/joy/Input";
import Box from "@mui/joy/Box";
import { useSelector, useDispatch } from "react-redux";
import { changeSearchTerm } from "../Redux/slice";
import { changeDialogContent, changeDialogState } from "../Redux/slice";
import { Search } from "react-bootstrap-icons";

const SearchBar = () => {
  const searchTerm = useSelector((state) => state.slice.searchTerm);
  const dialogOpen = useSelector((state) => state.slice.showDialog);
  const dispatch = useDispatch();
  return (
    <Box>
      <Input
        startDecorator={<Search />}
        placeholder="Search Course"
        value={searchTerm}
        onChange={(val) => {
          if (
            val.target.value.length > searchTerm.length &&
            val.target.value.length > 2
          ) {
            dispatch(changeSearchTerm(val.target.value));
            if (!dialogOpen) {
              dispatch(changeDialogState("Search"));
            }
            dispatch(changeDialogContent("Search"));
          } else {
            dispatch(changeSearchTerm(val.target.value));
          }
        }}
      />
    </Box>
  );
};

export default SearchBar;
