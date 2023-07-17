import classes from "./ButtonSD.module.css";

import React from "react";

const ButtonSD = (props) => {
  return (
    <div class="container-fluid col-sm-3 text-center">
      <span className={classes.cookieTitleSD}>Snickerdoodles</span>
      <button
        onClick={props.onShowMenuSD}
        className={`${classes.buttonSD} ${classes.cookieSelector}`}
      ></button>
    </div>
  );
};

export default ButtonSD;
