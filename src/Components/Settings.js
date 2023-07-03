import { useState } from "react";
import { Check, Trash, Download } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { changeDialogState, clearClasses, setTerm } from "../Redux/slice";
import { getTermData } from "../Scripts/api-connector";
import { createNewTermDB, deleteAllData } from "../Scripts/script";

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
  CircularProgress,
} = require("@mui/joy");

const Settings = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
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

  const applyChanges = () => {
    setLoading(true);
    console.log(curTerm);
    console.log(selectedSemester);
    if (selectedSemester === curTerm.termId) {
      setLoading(false);
      dispatch(changeDialogState(false));
      return;
    }
    const semester = semesters.find(sem => sem.termId === selectedSemester);
    localStorage.clear("curClasses");
    localStorage.setItem("curTerm", JSON.stringify(semester));
    dispatch(setTerm(semester));
    dispatch(clearClasses());
    createNewTermDB(selectedSemester).then(() => {
      getTermData(selectedSemester);
      setLoading(false);
      dispatch(changeDialogState(false));
    })
  }
  return (<>{loading ? <CircularProgress /> :
    <>
      <Typography>Semester</Typography>
      <Select
        sx={{ my: 2 }}
        defaultValue={selectedSemester}
        value={selectedSemester}
        onChange={(e, value) => { setSelectedSemester(value) }}
      >
        {semArr}
      </Select>
      <Button sx={{ my: 1 }} color="primary" startDecorator={<Check />} onClick={applyChanges}>
        Apply
      </Button>
      <Button sx={{ my: 1 }} color="neutral" startDecorator={<Download />} onClick={applyChanges}>
        Save Offline Data
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
          <Button onClick={() => {
            console.log("Deleting")
            deleteAllData();
            setOpenDeleteModal(false);
            dispatch(changeDialogState(false));
          }} color="danger" sx={{ m: 2 }}>
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
  }</>
  );
};

export default Settings;
