import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./MainNavigation.module.css";

const MainNavigation = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Mo's Dough!</h1>

        <Link to="/auth">
          <button className={classes.registerButton}>Register</button>
        </Link>
        <Link to="/login">
          <button className={classes.loginButton}>Login</button>
        </Link>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
    </Fragment>
  );
};

export default MainNavigation;
