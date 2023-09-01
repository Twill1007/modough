import React from "react";
import classes from "./DoughButton.module.css";
import { Link } from "react-router-dom";

function DoughButton() {
  return (
    <Link to="/dough" style={{ textDecoration: "none" }}>
      <button className={classes.button}>Dough</button>;
    </Link>
  );
}

export default DoughButton;
