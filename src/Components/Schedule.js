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
    cid: "201",
    section: "A",
    times: [
      {
        day: 0,
        start: [12, 30],
        end: [18, 30],
      },
    ],
  },
  {
    subject: "CSE",
    cid: "201",
    section: "B",
    times: [
      {
        day: 0,
        start: [18, 30],
        end: [19, 30],
      },
    ],
  },
  {
    subject: "CSE",
    cid: "201",
    section: "C",
    times: [
      {
        day: 2,
        start: [8, 30],
        end: [9, 30],
      },
    ],
  },
  {
    subject: "CSE",
    cid: "201",
    section: "D",
    times: [
      {
        day: 3,
        start: [8, 30],
        end: [9, 30],
      },
    ],
  },
];

const Schedule = (props) => {
  const arr = [];
  let key = 0;
  for (let cl of data) {
    const start = cl.times[0].start;
    const end = cl.times[0].end;
    const day = cl.times[0].day;
    const title = cl.subject + cl.cid + cl.section;
    const card = (
      <Card
        start={start}
        end={end}
        color={colors[key]}
        day={day}
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
