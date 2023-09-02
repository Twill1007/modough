import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import AboutMoButton from "../UI/AboutMoButton";
import DoughButton from "../UI/DoughButton";
import OrderHistoryButton from "../UI/OrderHistoryButton";

function TempNavBar() {
  return (
    <Fragment>
      <header className={classes.header}>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <h1>Mo's Dough!</h1>
        </Link>
        <div className={classes.button}>
          <div className={classes.buttons}>
            <AboutMoButton />
            <DoughButton />
            <OrderHistoryButton />
          </div>
        </div>
      </header>
    </Fragment>
  );
}

export default TempNavBar;
