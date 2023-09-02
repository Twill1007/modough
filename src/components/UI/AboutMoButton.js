import React, { Fragment } from "react";
import classes from "./MainNavButton.module.css";
import { Link } from "react-router-dom";

function AboutMoButton() {
  return (
    <Fragment>
      <Link to="/aboutMo" style={{ textDecoration: "none" }}>
        <button className={classes.button}>About Mo</button>
      </Link>
    </Fragment>
  );
}

export default AboutMoButton;
