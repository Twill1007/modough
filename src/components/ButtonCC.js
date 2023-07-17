import classes from "./ButtonCC.module.css";

import React from "react";

const ButtonCC = (props) => {
  return (
    <div class="container-fluid col-sm-3 text-center">
      <span className={classes.cookieTitleCC}>Chocolate Chip Cookies</span>
      <button
        onClick={props.onShowMenuCC}
        className={`${classes.buttonCC} ${classes.cookieSelector}`}
      ></button>
    </div>
  );
};

export default ButtonCC;
