import Days from "./Days";
import Hours from "./Hours";
import Schedule from "./Schedule";
import Box from "@mui/joy/Box";

const Main = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Days />
      <Box
        sx={{
          display: "flex",
          width: "1080px",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Hours />
        <Schedule />
      </Box>
    </Box>
  );
};

export default Main;
