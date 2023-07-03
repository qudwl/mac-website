import Days from "./Days";
import Hours from "./Hours";
import Schedule from "./Schedule";
import Sheet from "@mui/joy/Sheet";
import { useState, useEffect } from "react";
import ScheduleSwitch from "./ScheduleSwitch";
import { useWidth } from "../Scripts/script";

const Main = () => {
  const width = useWidth();
  return (
    <Sheet
      id="schedule"
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
