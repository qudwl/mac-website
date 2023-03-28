import Logo from "./Logo";
import "./Header.css";
import { changeDialogState, changeDialogContent } from "../Redux/slice";
import { List } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import Box from "@mui/joy/Box";
import Menu from "./Menu";
import { useEffect, useState } from "react";
import { Stack } from "@mui/joy";

function getWidth() {
  const { innerWidth: width } = window;
  return width;
}

function useWidth() {
  const [width, setWidth] = useState(getWidth());

  useEffect(() => {
    function handleResize() {
      setWidth(getWidth());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

const Header = () => {
  const width = useWidth();
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
    <Box
      sx={[
        {
          p: 2,
          gap: 2,
          bgcolor: "background.surface",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gridColumn: "1 / -1",
          borderBottom: "1px solid",
          borderColor: "divider",
          position: "sticky",
          top: 0,
          zIndex: 1100,
        },
      ]}
    >
      <Stack
        direction={"row"}
        justifyContent="space-between"
        sx={{ width: "100%", maxWidth: "1080px" }}
        alignItems="center"
      >
        <Logo width="40" />
        <Button variant="solid" onClick={() => onClickFunc("Search")}>
          Search
        </Button>
        {width > 1080 ? (
          <Menu isHeader={true} />
        ) : (
          <IconButton onClick={() => onClickFunc("Menu")}>
            <List size={"2em"} />
          </IconButton>
        )}
      </Stack>
    </Box>
  );
};

export default Header;
