import "./Card.css";

const getHeight = (start, end) => {
  let height = 0;
  if (start[1] > end[1]) {
    start[0]--;
    start[1] += 60;
  }

  height += 60 * (end[0] - start[0]);
  height += end[1] - start[1];
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
  left += 150 * day;
  return left;
};

const Card = (props) => {
  const style = {
    height: getHeight(props.start, props.end),
    top: getTop(props.start),
    left: getLeft(props.day),
    backgroundColor: props.dark ? "rgba(255, 255, 255, 0.12)" : props.color,
  };
  console.log(style);
  return (
    <div className="class-card" style={style} tabIndex={0} key={props.key}>
      <span>{props.title}</span>
    </div>
  );
};

export default Card;
