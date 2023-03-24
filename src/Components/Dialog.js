import { useSelector } from "react-redux";
import "./Dialog.css";
import SearchBox from "./SearchBox";
import Menu from "./Menu";

const Dialog = () => {
  const expanded = useSelector((state) => state.slice.showDialog);
  const dialogContentTxt = useSelector((state) => state.slice.dialogContent);
  let dialogContent;
  switch (dialogContentTxt) {
    case "Search":
      dialogContent = <SearchBox expanded={expanded} />;
      break;
    case "Menu":
      dialogContent = <Menu />;
      break;
    default:
      dialogContent = "";
      break;
  }
  return (
    <div className={`dialog ${expanded ? "expanded" : ""}`}>
      {dialogContent}
    </div>
  );
};

export default Dialog;
