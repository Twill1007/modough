import classes from "./ModalMenuCC.module.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";

const MenuBackdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const MenuModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("menu-overlays");

const ModalMenu = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <MenuBackdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <MenuModalOverlay>{props.children}</MenuModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default ModalMenu;
