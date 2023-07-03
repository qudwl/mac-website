import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import Link from "@mui/joy/Link";
import Stack from "@mui/joy/Stack";
import { useSelector, useDispatch } from "react-redux";
import { removeClassFromSchedule, addClassToSchedule } from "../Redux/slice";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const SearchResult = (props) => {
  const curClasses = useSelector((state) => state.slice.curClasses);
  const dispatch = useDispatch();
  const el = props.el;
  const fullId = `${el.subject} ${el.cid} ${el.section}`;
  const title = el.title;
  const times = el.times;
  const crn = el.crn;
  const instructor = el.instructors ? el.instructors.split(", ").map((el) => (el = el.trim())).reverse().join(" ") : "Staff";

  const isActive = curClasses.some(el => el.crn == crn);

  const arr = [];
  for (let t of times) {
    arr.push(
      <Typography level="body3">{`${days[t.day]} ${t.start.join(
        ":"
      )}-${t.end.join(":")}`}</Typography>
    );
  }
  return (
    <Card sx={{ mt: 3 }} key={props.key} variant="outlined" color={isActive ? "primary" : "neutral"}>
      <Link
        overlay
        onClick={() => {
          if (isActive) {
            dispatch(removeClassFromSchedule(el));
          } else {
            dispatch(addClassToSchedule(el));
          }
        }}
      />
      <Stack justifyContent={"space-between"} direction={"row"}>
        <Typography>{fullId}</Typography>
        <Typography>{title}</Typography>
      </Stack>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack>{arr}</Stack>
        <Stack>
          <Typography level="body3">{instructor}</Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

export default SearchResult;
