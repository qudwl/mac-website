import Typography from "@mui/joy/Typography";

import "./Days.css";
import { useSelector } from "react-redux";

const Days = () => {
  const term = useSelector((state) => state.slice.curTerm);

  const termNameArr = term.name && term.name.split(" ");
  return (
    <div className="days">
      <Typography>
        {term.name &&
          `${termNameArr[0]} ${termNameArr[2].substring(
            termNameArr[2].length - 2
          )}`}
      </Typography>
      <Typography>Monday</Typography>
      <Typography>Tuesday</Typography>
      <Typography>Wednesday</Typography>
      <Typography>Thursday</Typography>
      <Typography>Friday</Typography>
    </div>
  );
};

export default Days;
