import "./Card.css";

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

  for (let time of props.times) {
    const style = {
      height: getHeight(time.start, time.end),
      top: getTop(time.start),
      left: getLeft(time.day),
      backgroundColor: props.dark ? "rgba(255, 255, 255, 0.12)" : props.color,
    };
    const el = (
      <div className="class-card" style={style} tabIndex={0} key={props.key}>
        <span>{props.title}</span>
      </div>
    );
    arr.push(el);
    console.log(el);
  }
  return (
    <>
      {arr}
    </>
  );
};

export default Card;
