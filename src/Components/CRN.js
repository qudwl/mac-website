import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import { useSelector } from "react-redux";
import Link from "@mui/joy/Link";
import Tooltip from "@mui/joy/Tooltip";
import { useState } from "react";
import Box from "@mui/joy/Box";

const CRNList = (props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <Tooltip title="Copied!" variant={"solid"} arrow open={isOpen}>
      <Card variant="soft" sx={{ mt: 1 }}>
        <Typography textAlign={"center"} level={"h3"}>
          {props.crn}
        </Typography>
        <Typography
          textAlign={"center"}
          level={"body3"}
          sx={{ userSelect: "none" }}
        >
          {props.title}
        </Typography>
        <Link
          overlay
          onClick={() => {
            setOpen(!isOpen);
            navigator.clipboard.writeText(props.crn);
            setTimeout(() => {
              setOpen(false);
            }, 1000);
          }}
        ></Link>
      </Card>
    </Tooltip>
  );
};

const CRN = () => {
  const curClasses = useSelector((state) => state.slice.curClasses);
  const arr = [];

  for (let cl of curClasses) {
    arr.push(
      <CRNList crn={cl.crn} title={`${cl.subject} ${cl.cid} ${cl.section}`} />
    );
  }
  return <Box sx={{ overflowY: "scroll" }}>{arr}</Box>;
};

export default CRN;
