import { BoxArrowUp, Moon, Sun } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { setDark, changeDialogState } from "../Redux/slice";
import Button from "@mui/joy/Button";
import "./Menu.css";
import Grid from "@mui/joy/Grid";

const Menu = (props) => {
  const dispatch = useDispatch();
  return (
    <Grid container spacing={2} direction="column" justifyContent="space-around" ali>
      <Button onClick={() => { }}>
        <BoxArrowUp />
        <span>Export</span>
      </Button>
      <Button onClick={() => { }}>CRN</Button>
      <Button
        onClick={() => {
          dispatch(setDark());
        }}
      >
        {props.dark ? <Moon /> : <Sun />}
      </Button>
      <Button>
        <span>Settings</span>
      </Button>
    </Grid>
  );
};

export default Menu;
