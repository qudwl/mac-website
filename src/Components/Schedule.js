import Card from "./Card";
import "./Schedule.css";

const colors = [
  "#FFBE0B",
  "#3A86FF",
  "#8338EC",
  "#FB5607",
  "#FF006E",
  "#A7C957",
];

const data = [
  {
    subject: "CSE",
    cid: "374",
    section: "A",
    times: [{
      day: 2,
      start: [13, 15],
      end: [14, 35],
    }, {
      day: 4,
      start: [13, 15],
      end: [14, 35],
    }
    ],
  },
];

const Schedule = (props) => {
  const arr = [];
  let key = 0;
  for (let cl of data) {
    const title = cl.subject + cl.cid + cl.section;
    console.log(cl);
    const card = (
      <Card
        color={colors[key]}
        times={cl.times}
        key={key++}
        title={title}
        dark={props.dark}
      />
    );
    arr.push(card);
  }
  return <div className="schedule">{arr}</div>;
};

export default Schedule;
