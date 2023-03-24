import "./Card.css";
import { useDispatch } from "react-redux";
import { removeClassFromSchedule } from "../Redux/slice";

const getHeight = (start, end) => {
  let height = 0;
  const st = [...start];
  const ed = [...end];
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
  let top = 0;
  top += (start[0] - 8) * 60;
  top += start[1];
  return top;
};

const getLeft = (day) => {
  let left = 0;
  left += 240 * day;
  return left;
};

const Card = (props) => {
  const arr = [];
  const dispatch = useDispatch();
  const title = `${props.subject} ${props.cid} ${props.section}`;
  const obj = {
    subject: props.subject,
    cid: props.cid,
    section: props.section,
  };

  for (let time of props.times) {
    const style = {
      height: getHeight(time.start, time.end),
      top: getTop(time.start),
      left: getLeft(time.day),
      backgroundColor: props.dark ? "rgba(255, 255, 255, 0.12)" : props.color,
    };
    const el = (
      <div
        className="class-card"
        style={style}
        tabIndex={0}
        key={props.key}
        onClick={() => dispatch(removeClassFromSchedule(obj))}
      >
        <span>{title}</span>
      </div>
    );
    arr.push(el);
    console.log(el);
  }
  return <>{arr}</>;
};

export default Card;
