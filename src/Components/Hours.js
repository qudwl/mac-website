import "./Hours.css";

const hourArr = [
  "8:00AM",
  "9:00AM",
  "10:00AM",
  "11:00AM",
  "12:00AM",
  "1:00PM",
  "2:00PM",
  "3:00PM",
  "4:00PM",
  "5:00PM",
  "6:00PM",
  "7:00PM",
];

const Hours = () => {
  let key = 0;
  const elArr = hourArr.map((el) => {
    return <span key={key++}>{el}</span>;
  });
  return <div className="hour-list">{elArr}</div>;
};

export default Hours;
