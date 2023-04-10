import Days from "./Days";
import Hours from "./Hours";
import Schedule from "./Schedule";
import Box from "@mui/joy/Box";
import { useState, useEffect } from "react";
import ScheduleSwitch from "./ScheduleSwitch";

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

const Main = () => {
  const width = useWidth();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        top: "72px",
        left: (width >= 1080 ? (width - 1080) / 2 : 0) + "px",
        position: "absolute",
      }}
    >
      <ScheduleSwitch />
      <Days />
      <Box
        sx={{
          display: "flex",
          width: "1080px",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <Hours />
        <Schedule />
      </Box>
    </Box>
  );
};

export default Main;
