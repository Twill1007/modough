import React, { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./MainNavigation.module.css";

const MainNavigation = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Mo's Dough!</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
    </Fragment>
  );
};

export default MainNavigation;
