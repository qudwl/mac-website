import ReactModal from "react-modal";
import { X } from "react-bootstrap-icons";
import "./Modal.css";

ReactModal.setAppElement("#root");

const customStyle = {
  content: {
    textAlign: "center",
  },
};

const Modal = (props) => {
  return (
    <ReactModal style={customStyle} isOpen={props.isOpen} closeTimeoutMS={401}>
      <div onClick={() => props.close(false)} aria-label="Close modal">
        <X
          size={"2em"}
          tabIndex="0"
          onKeyDown={(e) => {
            if (e.key == "Enter" || e.key == " ") {
              props.close(false);
            }
          }}
        />
      </div>

      <h2>{props.title}</h2>
    </ReactModal>
  );
};

export default Modal;
