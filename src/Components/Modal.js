import { X } from "react-bootstrap-icons";
import "./Modal.css";

const Modal = (props) => {
  return (
    <div style={{ "textAlign": "right" }} aria-label="Close modal">
      <X
        size={"2em"}
        tabIndex="0"
        onKeyDown={(e) => {
          if (e.key == "Enter" || e.key == " ") {
            props.close(false);
          }
        }}
        onClick={() => props.close(false)}
      />
      <h2>{props.title}</h2>
    </div>


  );
};

export default Modal;
