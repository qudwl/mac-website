import Logo from "./Logo";
import "./Header.css";
import { changeDialogState, changeDialogContent } from "../Redux/slice";
import { List } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";

const Header = () => {
  const dispatch = useDispatch();
  const showingDialog = useSelector((state) => state.slice.showDialog);
  const curDialog = useSelector((state) => state.slice.dialogContent);
  const onClickFunc = (str) => {
    if (showingDialog) {
      if (str == curDialog) {
        dispatch(changeDialogState());
      }
    } else {
      dispatch(changeDialogState());
    }
    dispatch(changeDialogContent(str));
  };
  return (
    <header>
      <Logo width="40" />
      <Button variant="solid" onClick={() => onClickFunc("Search")}>Search</Button>
      <IconButton onClick={() => onClickFunc("Menu")}>
        <List size={"2em"} />
      </IconButton>
    </header>
  );
};

export default Header;
