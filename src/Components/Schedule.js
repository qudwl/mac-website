import { Box } from "@mui/joy";
import { useSelector } from "react-redux";
import CCard from "./CCard";

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
        dataKey={key++}
        subject={cl.subject}
        cid={cl.cid}
        section={cl.section}
        instructor={cl.instructors}
      />
    );
    arr.push(card);
  }

  const dividers = [];

  for (let i = 0; i < 11; i++) {
    dividers.push(
      <Box
        sx={{
          position: "absolute",
          top: `${i * 60}px`,
          width: "100%",
          height: "1px",
          backgroundColor: "rgba(0,0,0,0.1)",
        }}
      />
    );
  }
  return (
    <Box
      sx={{
        width: "1080px",
        height: "720px",
        marginTop: "30px",
        display: "block",
        position: "relative",
      }}
    >
      {arr}
      {dividers}
    </Box>
  );
};

export default Schedule;
