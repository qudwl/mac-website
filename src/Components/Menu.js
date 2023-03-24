import { BoxArrowUp, Moon, Sun } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { setDark, changeDialogState } from "../Redux/slice";
import "./Menu.css";

const Menu = (props) => {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => {}}>
        <BoxArrowUp />
        <span>Export</span>
      </button>
      <button onClick={() => {}}>CRN</button>
      <button
        onClick={() => {
          dispatch(setDark());
        }}
      >
        {props.dark ? <Moon /> : <Sun />}
      </button>
      <button>
        <span>Settings</span>
      </button>
    </>
  );
};

export default Menu;
