import { useDispatch } from "react-redux";
import { removeClassFromSchedule } from "../Redux/slice";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import Stack from "@mui/joy/Stack";
import { useColorScheme } from "@mui/joy";

const getHeight = (start, end) => {
  let height = 0;
  const st = start.map((el) => parseInt(el));
  const ed = end.map((el) => parseInt(el));
  if (st[1] > ed[1]) {
    st[0]--;
    st[1] += 60;
  }

  height += 60 * (ed[0] - st[0]);
  height += ed[1] - st[1];
  height -= 5;

  return height;
};

const getTop = (start) => {
  const st = start.map((el) => parseInt(el));
  let top = 0;
  top += (st[0] - 8) * 60;
  top += st[1];
  return top;
};

const getLeft = (day) => {
  let left = 0;
  left += 180 * day;
  return left;
};

const CCard = (props) => {
  const arr = [];
  const dispatch = useDispatch();
  const { mode } = useColorScheme();
  const fullId = `${props.subject} ${props.cid} ${props.section}`;
  const obj = {
    subject: props.subject,
    cid: props.cid,
    section: props.section,
  };

  for (let time of props.times) {
    const height = getHeight(time.start, time.end);
    const style = {
      height: height,
      top: getTop(time.start),
      left: getLeft(time.day),
      backgroundColor: mode === "dark" ? "" : props.color,
      width: "170px",
      boxSizing: "border-box",
      position: "absolute",
      margin: "0px 5px",
      zIndex: 2,
    };
    const el = (
      <Card
        style={style}
        tabIndex={0}
        datakey={props.dataKey}
        variant="solid"
        sx={{
          "&:hover": {
            boxShadow: "md",
            borderColor: "neutral.outlinedHoverBorder",
          },
        }}
      >
        <CardContent>
          <Stack justifyContent={"center"} alignItems={"center"}>
            <Typography>{fullId}</Typography>
            {height > 50 && (
              <Typography level="body3">
                {time.start.join(":") + "-" + time.end.join(":")}
              </Typography>
            )}
            {height > 75 && <Typography noWrap>{props.instructor}</Typography>}
            <Link
              overlay
              onClick={() => {
                dispatch(removeClassFromSchedule(obj));
              }}
            />
          </Stack>
        </CardContent>
      </Card>
    );
    arr.push(el);
  }
  return <>{arr}</>;
};

export default CCard;
