import { BoxArrowUp, CardList, Moon, Sun } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { useColorScheme } from "@mui/joy/styles";
import { changeDialogContent, changeDialogState } from "../Redux/slice";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import Stack from "@mui/joy/Stack";

const Menu = (props) => {
  const { mode, setMode } = useColorScheme();
  const dispatch = useDispatch();
  const dialogOpen = useSelector((state) => state.slice.showDialog);

  const onClickFunc = (str) => {
    if (!dialogOpen) {
      dispatch(changeDialogState(true));
    }
    dispatch(changeDialogContent(str));
  };
  return (
    <Stack
      direction={props.isHeader ? "row" : "column"}
      justifyContent="center"
      alignItems="stretch"
      spacing={1}
    >
      <Button
        onClick={() => onClickFunc("Export")}
        variant="soft"
        color="neutral"
        startDecorator={<BoxArrowUp />}
      >
        <span>Export</span>
      </Button>
      <Button
        variant="soft"
        color="neutral"
        startDecorator={<CardList />}
        onClick={() => onClickFunc("CRN")}
      >
        CRN
      </Button>
      <IconButton
        variant="soft"
        color="neutral"
        onClick={() => setMode(mode === "dark" ? "light" : "dark")}
      >
        {mode === "dark" ? <Moon /> : <Sun />}
      </IconButton>
      <Button
        variant="soft"
        color="neutral"
        onClick={() => onClickFunc("Settings")}
      >
        <span>Settings</span>
      </Button>
    </Stack>
  );
};

export default Menu;
