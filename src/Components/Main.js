import Days from "./Days";
import Hours from "./Hours";
import Schedule from "./Schedule";
import Sheet from "@mui/joy/Sheet";
import Chip from "@mui/joy/Chip";
import { useState, useEffect } from "react";
import ScheduleSwitch from "./ScheduleSwitch";
import { useWidth } from "../Scripts/script";
import Stack from "@mui/joy/Stack";
import { removeClassFromSchedule } from "../Redux/slice";
import { useSelector, useDispatch } from "react-redux";

const Main = () => {
  const width = useWidth();
  const curArr = [];
  const dispatch = useDispatch();
  const curClasses = useSelector((state) => state.slice.curClasses);

  for (let cl of curClasses) {
    const fullId = `${cl.subject} ${cl.cid} ${cl.section}`;
    const onClickFunc = () => {
      dispatch(removeClassFromSchedule(cl));
    };
    const result = (
      <Chip variant="soft" onClick={() => onClickFunc()}>
        {fullId}
      </Chip>
    );
    curArr.push(result);
  }

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
      <Stack direction={"row"} sx={{ m: 2 }} flexWrap={true} spacing={1}>
        {curArr}
      </Stack>
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
