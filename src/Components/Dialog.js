import { useSelector, useDispatch } from "react-redux";
import { changeDialogState } from "../Redux/slice";
import SearchBox from "./SearchBox";
import Menu from "./Menu";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Export from "./Export";
import CRN from "./CRN";

const Dialog = () => {
  const expanded = useSelector((state) => state.slice.showDialog);
  const dialogContentTxt = useSelector((state) => state.slice.dialogContent);
  const dispatch = useDispatch();
  let dialogContent;
  switch (dialogContentTxt) {
    case "Search":
      dialogContent = <SearchBox expanded={expanded} />;
      break;
    case "Menu":
      dialogContent = <Menu />;
      break;
    case "Export":
      dialogContent = <Export />;
      break;
    case "CRN":
      dialogContent = <CRN />;
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
      <ModalDialog size="lg">
        <ModalClose />
        <Box sx={{ mb: 3 }}>
          <Typography sx={{ userSelect: "none" }} level="h3">
            {dialogContentTxt}
          </Typography>
        </Box>
        {dialogContent}
      </ModalDialog>
    </Modal>
  );
};

export default Dialog;
