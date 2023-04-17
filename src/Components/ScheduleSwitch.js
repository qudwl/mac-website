// import Tabs from "@mui/joy/Tabs";
// import Tab from "@mui/joy/Tab";
// import Box from "@mui/joy/Box";
// import TabList from "@mui/joy/TabList";
// import { useState } from "react";

// const ScheduleSwitch = () => {
//   const [defaultLabel, setDefaultLabel] = useState("Default");
//   const [isEditing, setIsEditing] = useState(false);

//   const handleDoubleClick = () => {
//     setIsEditing(true);
//   };

//   const handleLabelChange = (event) => {
//     setDefaultLabel(event.target.value);
//   };

//   const handleBlur = () => {
//     setIsEditing(false);
//   };

//   return (
//     <Box p={2}>
//       <Tabs>
//         <TabList size="sm">
//         <Tab onDoubleClick={handleDoubleClick}>
//           {isEditing ? (
//             <input
//             style={{
//               border: "none"
//             }}
//               type="text"
//               value={defaultLabel}
//               onChange={handleLabelChange}
//               onBlur={handleBlur}
//               autoFocus
//             />
//           ) : (
//             defaultLabel
//           )}
//           </Tab>
//           <Tab>Add New</Tab>
//         </TabList>
//       </Tabs>
//     </Box>
//   );
// };

// export default ScheduleSwitch;


import Tabs from "@mui/joy/Tabs";
import Tab from "@mui/joy/Tab";
import Box from "@mui/joy/Box";
import TabList from "@mui/joy/TabList";
import { useState } from "react";

const ScheduleSwitch = () => {
  const [tabLabels, setTabLabels] = useState(["Default"]);
  const [numTabs, setNumTabs] = useState(1);
  const [isEditing, setIsEditing] = useState(null);

  const handleLabelChange = (event, index) => {
    const newLabels = [...tabLabels];
    newLabels[index] = event.target.value;
    setTabLabels(newLabels);
  };

  const handleBlur = () => {
    setIsEditing(null);
  };

  const handleDoubleClick = (index) => {
    if (index === numTabs) {
      setNumTabs(numTabs + 1);
      setTabLabels([...tabLabels, `Default ${numTabs}`]);
    } else {
      setIsEditing(index);
    }
  };

  const handleAddNew = () => {
    setNumTabs(numTabs + 1);
    setTabLabels([...tabLabels, `Default ${numTabs}`]);
  };

  return (
    <Box p={2}>
      <Tabs>
        <TabList size="sm">
          {tabLabels.map((label, index) => (
            <Tab
              key={index}
              onDoubleClick={() => handleDoubleClick(index)}
            >
              {isEditing === index ? (
                <input
                  style={{
                    border: "none"
                  }}
                  type="text"
                  value={label}
                  onChange={(event) => handleLabelChange(event, index)}
                  onBlur={handleBlur}
                  autoFocus
                />
              ) : (
                label
              )}
            </Tab>
          ))}
          <Tab onClick={handleAddNew}>Add New</Tab>
        </TabList>
      </Tabs>
    </Box>
  );
};

export default ScheduleSwitch;
