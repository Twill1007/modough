import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./MainNavigation.module.css";

const MainNavigation = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Mo's Dough!</h1>
        {isLoggedIn && (
          <Link to="/auth">
            <button className={classes.registerButton}>Login/Sign Up</button>
          </Link>
        )}
        <Link to="/login">
          <button className={classes.loginButton}>Login</button>
        </Link>
        {!isLoggedIn && <HeaderCartButton onClick={props.onShowCart} />}
      </header>
    </Fragment>
  );
};

export default MainNavigation;
