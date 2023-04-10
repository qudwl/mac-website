import { useState } from "react";
import { Check, Trash } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const {
  Tabs,
  TabList,
  Tab,
  Typography,
  Select,
  Option,
  Button,
} = require("@mui/joy");

const Settings = () => {
  const semesters = useSelector((state) => state.slice.semesters);
  const curTerm = useSelector((state) => state.slice.curTerm);
  const [selectedSemester, setSelectedSemester] = useState(
    semesters.findIndex((sem) => sem.termId === curTerm.termId)
  );

  const semArr = semesters.map((sem) => {
    return <Option value={sem.name}>{sem.name}</Option>;
  });
  return (
    <>
      <Typography>Semester</Typography>
      <Select sx={{ my: 2 }} defaultValue={curTerm.name}>
        {semArr}
      </Select>
      <Typography>Campus</Typography>
      <Tabs sx={{ my: 2 }}>
        <TabList>
          <Tab>Oxford</Tab>
          <Tab>Hamilton</Tab>
          <Tab>Middletown</Tab>
        </TabList>
      </Tabs>
      <Button sx={{ my: 1 }} color="primary" startDecorator={<Check />}>
        Apply
      </Button>
      <Button sx={{ my: 1 }} color="danger" startDecorator={<Trash />}>
        Delete All Data
      </Button>
    </>
  );
};

export default Settings;
