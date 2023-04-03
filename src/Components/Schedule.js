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
        key={key++}
        subject={cl.subject}
        cid={cl.cid}
        section={cl.section}
        instructor={cl.instructors}
      />
    );
    arr.push(card);
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
    </Box>
  );
};

export default Schedule;
