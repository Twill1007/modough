import React from "react";
import classes from "./AboutMoButton.module.css";
import { Link } from "react-router-dom";

function AboutMoButton() {
  return (
    <Link to="/aboutMo" style={{ textDecoration: "none" }}>
      <button className={classes.button}>About Mo</button>;
    </Link>
  );
}

export default AboutMoButton;
