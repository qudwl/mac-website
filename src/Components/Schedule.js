import { useSelector } from "react-redux";
import CCard from "./CCard";
import "./Schedule.css";

const colors = [
  "#FFBE0B",
  "#70D6FF",
  "#E4E9B2",
  "#20BF55",
  "#C7BFDF",
  "#EBC6CD",
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
