import Tabs from "@mui/joy/Tabs";
import Tab from "@mui/joy/Tab";
import Box from "@mui/joy/Box";
import TabList from "@mui/joy/TabList";

const ScheduleSwitch = () => {
  return (
    <Box p={2}>
      <Tabs>
        <TabList size="sm">
          <Tab>Default</Tab>
          <Tab>Add New</Tab>
        </TabList>
      </Tabs>
    </Box>
  );
};

export default ScheduleSwitch;
