import React from "react";
import classes from "./ErrorModal.module.css";

function ErrorModal({ message, onRedirect }) {
  return (
    <div className={classes.modal}>
      <div className={classes.modalContent}>
        <p>{message}</p>

        <button onClick={onRedirect}>Login</button>
      </div>
    </div>
  );
}

export default ErrorModal;
