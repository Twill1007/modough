import React from "react";
import { Link } from "react-router-dom";
import classes from "./AdminButton.module.css";

function AdminButton() {
  return (
    <Link to="/Admin" style={{ textDecoration: "none" }}>
      <button className={classes.button}>Admin</button>
    </Link>
  );
}

export default AdminButton;
