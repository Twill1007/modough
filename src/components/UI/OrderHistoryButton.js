import { Link } from "react-router-dom";
import React from "react";
import classes from "./OrderHistoryButton.module.css";

function OrderHistoryButton() {
  return (
    <Link to="/orderHistory" style={{ textDecoration: "none" }}>
      <button className={classes.button}>Review Past Orders</button>;
    </Link>
  );
}

export default OrderHistoryButton;
