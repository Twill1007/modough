import classes from "./ModalMenuCC.module.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";

const CCMenuBackdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const CCMenuModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("ccmenu-overlays");

const CCModalMenu = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <CCMenuBackdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <CCMenuModalOverlay>{props.children}</CCMenuModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default CCModalMenu;
