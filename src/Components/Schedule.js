import { useSelector } from "react-redux";
import CCard from "./CCard";
import "./Schedule.css";

const colors = [
  "#FFBE0B",
  "#3A86FF",
  "#8338EC",
  "#FB5607",
  "#FF006E",
  "#A7C957",
];

const Schedule = (props) => {
  const data = [...useSelector((state) => state.slice.curClasses)];
  const arr = [];
  let key = 0;
  for (let cl of data) {
    const card = (
      <CCard
        color={colors[key % colors.length]}
        times={cl.times}
        key={key++}
        subject={cl.subject}
        cid={cl.cid}
        section={cl.section}
        instructor={cl.instructors}
      />
    );
    arr.push(card);
  }
  return <div className="schedule">{arr}</div>;
};

export default Schedule;
