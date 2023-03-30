import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import Link from "@mui/joy/Link";
import Stack from "@mui/joy/Stack";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const SearchResult = (props) => {
  const arr = [];
  for (let t of props.times) {
    arr.push(
      <Typography level="body3">{`${days[t.day]} ${t.start.join(
        ":"
      )}-${t.end.join(":")}`}</Typography>
    );
  }
  return (
    <Card sx={{ mt: 3 }} key={props.key} variant="outlined">
      <Link
        overlay
        onClick={() => {
          props.onClick();
        }}
      />
      <Stack justifyContent={"space-between"} direction={"row"}>
        <Typography>{props.fullId}</Typography>
        <Typography>{props.title}</Typography>
      </Stack>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack>{arr}</Stack>
        <Stack>
          <Typography level="body3">{props.instructor}</Typography>
        </Stack>
      </Stack>
    </Card>
  );
};

export default SearchResult;
