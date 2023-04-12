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
  Modal,
  ModalDialog,
} = require("@mui/joy");

const Settings = () => {
  const semesters = useSelector((state) => state.slice.semesters);
  const curTerm = useSelector((state) => state.slice.curTerm);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState(curTerm.termId);

  const semArr = semesters.map((sem) => {
    return (
      <Option
        value={sem.termId}
        onClick={() => setSelectedSemester(sem.termId)}
      >
        {sem.name}
      </Option>
    );
  });
  return (
    <>
      <Typography>Semester</Typography>
      <Select
        sx={{ my: 2 }}
        defaultValue={selectedSemester}
        value={selectedSemester}
      >
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
      <Button
        sx={{ my: 1 }}
        onClick={() => {
          setOpenDeleteModal(true);
        }}
        color="danger"
        startDecorator={<Trash />}
      >
        Delete All Data
      </Button>
      <Modal open={openDeleteModal}>
        <ModalDialog>
          <Typography textAlign="center" level="h2">
            Are you sure?
          </Typography>
          <Button color="danger" sx={{ m: 2 }}>
            Yes
          </Button>
          <Button
            sx={{ m: 2 }}
            onClick={() => {
              setOpenDeleteModal(false);
            }}
          >
            Cancel
          </Button>
        </ModalDialog>
      </Modal>
    </>
  );
};

export default Settings;
