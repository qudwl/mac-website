import { BoxArrowUp, Moon, Sun } from "react-bootstrap-icons";
import { useState } from "react";
import { List } from "react-bootstrap-icons";
import './Menu.css'

const Menu = (props) => {

    const [expanded, setExpanded] = useState(false);

    const style = {
        height: expanded ? "400px" : "0px",
    }
    return (
        <div className="menu">
            <button className="menuOpener" onClick={() => setExpanded(!expanded)} style={{ zIndex: 2 }}>
                <List size={"2em"} />
            </button>
            <div style={style}>
                <button

                    onClick={() => {
                        props.openModal(true);
                        setExpanded(false);
                        props.setModalTitle("Export");
                    }}
                >
                    <BoxArrowUp />
                    <span>Export</span>
                </button>
                <button
                    onClick={() => {
                        props.openModal(true);
                        setExpanded(false);
                        props.setModalTitle("CRN");
                    }}
                >
                    CRN
                </button>
                <button
                    onClick={() => {
                        props.setDark(!props.dark);
                    }}
                >
                    {props.dark ? <Moon /> : <Sun />}
                </button>
                <button>
                    <span>Save</span>
                </button>
            </div>

        </div>
    );
}

export default Menu;