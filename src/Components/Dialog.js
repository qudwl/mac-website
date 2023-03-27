import { useSelector, useDispatch } from "react-redux";
import { changeDialogState } from "../Redux/slice";
import "./Dialog.css";
import SearchBox from "./SearchBox";
import Menu from "./Menu";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";

const Dialog = () => {
  const expanded = useSelector((state) => state.slice.showDialog);
  const dialogContentTxt = useSelector((state) => state.slice.dialgContent);
  const dispatch = useDispatch();
  let dialogContent;
  switch (dialogContentTxt) {
    case "Search":
      dialogContent = <SearchBox expanded={expanded} />;
      break;
    case "Menu":
      dialogContent = <Menu />;
      break;
    default:
      dialogContent = "";
      break;
  }
  return (
    <Modal
      open={expanded}
      onClose={() => {
        dispatch(changeDialogState());
      }}
    >
      <ModalDialog>
        <ModalClose />
        <Typography>{dialogContentTxt}</Typography>
        {dialogContent}
      </ModalDialog>
    </Modal>
  );
};

export default Dialog;
