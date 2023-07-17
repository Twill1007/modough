import classes from "./ModalMenuSD.module.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";

const SDMenuBackdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const SDMenuModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("sdmenu-overlays");

const SDModalMenu = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <SDMenuBackdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <SDMenuModalOverlay>{props.children}</SDMenuModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default SDModalMenu;
