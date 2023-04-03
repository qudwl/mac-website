import Typography from "@mui/joy/Typography";

import "./Days.css";
import { useSelector } from "react-redux";

const Days = () => {
  const term = useSelector((state) => state.slice.curTerm);
  return (
    <div className="days">
      <Typography>{term.name}</Typography>
      <Typography>Monday</Typography>
      <Typography>Tuesday</Typography>
      <Typography>Wednesday</Typography>
      <Typography>Thursday</Typography>
      <Typography>Friday</Typography>
    </div>
  );
};

export default Days;
