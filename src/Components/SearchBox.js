import { useSelector, useDispatch } from "react-redux";
import { addClassToSchedule, removeClassFromSchedule } from "../Redux/slice";
import { useState } from "react";
import { Search } from "react-bootstrap-icons";
import Input from "@mui/joy/Input";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import Chip from "@mui/joy/Chip";
import Box from "@mui/joy/Box";
import Stack from "@mui/joy/Stack";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const useData = (text) => {
  const results = [];
  const data = useSelector((state) => state.slice.data);
  const searchTerm = text.toUpperCase().split(" ").join("");

  if (searchTerm.length < 3) {
    return [];
  }

  for (let cl of data) {
    const title = cl.subject + cl.cid;
    if (title.toUpperCase().indexOf(searchTerm) != -1) {
      results.push(cl);
    }
  }
  return results;
};

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

const SearchBox = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const results = useData(searchTerm);
  const curClasses = useSelector((state) => state.slice.curClasses);
  const curArr = [];

  for (let cl of curClasses) {
    const fullId = `${cl.subject} ${cl.cid} ${cl.section}`;
    const onClickFunc = () => {
      dispatch(removeClassFromSchedule(cl));
    };
    const result = (
      <Chip variant="soft" onClick={() => onClickFunc()}>
        {fullId}
      </Chip>
    );
    curArr.push(result);
  }
  const dispatch = useDispatch();
  const arr = [];
  for (let i = 0; i < results.length; i++) {
    const el = results[i];
    const onClickFunc = () => {
      dispatch(addClassToSchedule(el));
    };
    const result = (
      <SearchResult
        fullId={`${el.subject} ${el.cid} ${el.section}`}
        title={el.title}
        onClick={() => onClickFunc()}
        times={el.times}
        instructor={el.instructors
          .split(", ")
          .map((el) => (el = el.trim()))
          .reverse()
          .join(" ")}
      />
    );
    arr.push(result);
  }
  return (
    <>
      <Stack direction={"row"} flexWrap={true} spacing={1}>
        {curArr}
      </Stack>
      <Input
        startDecorator={<Search />}
        value={searchTerm}
        tabIndex={props.expanded ? 0 : -1}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a class"
        sx={{ mt: 1, width: "600px", maxWidth: "80vw" }}
      />

      <Stack direction={"column"} sx={{ overflowY: "scroll" }}>
        {arr}
      </Stack>
    </>
  );
};

export default SearchBox;
