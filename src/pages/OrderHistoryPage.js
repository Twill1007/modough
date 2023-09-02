import React, { Fragment } from "react";
import TempNavBar from "../components/Layout/TempNavBar";
import classes from "./OrderHistoryPage.module.css";

function OrderHistory() {
  return (
    <Fragment>
      <TempNavBar />
      <h1 className={classes.header}>List of previous orders</h1>
      <div className={classes.listItems}>List of Dates</div>
    </Fragment>
  );
}

export default OrderHistory;
