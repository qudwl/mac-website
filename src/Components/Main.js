import Days from "./Days";
import Hours from "./Hours";
import Schedule from "./Schedule";
import Sheet from "@mui/joy/Sheet";
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
    <Sheet
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        left: (width >= 1080 ? (width - 1080) / 2 : 0) + "px",
        position: "absolute",
        top: "72px",
      }}
    >
      <ScheduleSwitch />
      <Days />
      <Sheet
        sx={{
          display: "flex",
          width: "1080px",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <Hours />
        <Schedule />
      </Sheet>
    </Sheet>
  );
};

export default Main;
