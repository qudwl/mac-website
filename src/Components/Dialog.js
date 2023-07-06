import { useSelector, useDispatch } from "react-redux";
import { changeDialogContent, changeDialogState } from "../Redux/slice";
import SearchBox from "./SearchBox";
import Menu from "./Menu";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Export from "./Export";
import CRN from "./CRN";
import DataLoading from "./DataLoading";
import Settings from "./Settings";
import Card from "@mui/joy/Card";
import { useState, useEffect } from "react";
import { useWidth } from "../Scripts/script";
import { IconButton, Stack } from "@mui/joy";
import { X } from "react-bootstrap-icons";

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
    case "Loading Data":
      dialogContent = <DataLoading />;
      break;
    case "Settings":
      dialogContent = <Settings />;
      break;
    default:
      dialogContent = "";
      break;
  }
  return (
    useWidth() <= 1480 ?
      <Modal
        open={expanded}
        onClose={() => {
          dispatch(changeDialogState(false));
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
      </Modal> : dialogContent == "" ? "" : <Card sx={{ width: "400px", position: "aboslute", top: "100px", left: "20px", maxHeight: "600px" }}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography sx={{ userSelect: "none" }} level="h3">
            {dialogContentTxt}
          </Typography>
          <IconButton variant="plain" onClick={() => {
            dispatch(changeDialogState(false));
            dispatch(changeDialogContent(""));
          }}>
            <X />
          </IconButton>
        </Stack>
        {dialogContent}
      </Card>
  );
};

export default Dialog;
