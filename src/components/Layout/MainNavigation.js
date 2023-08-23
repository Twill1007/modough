import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./MainNavigation.module.css";

const MainNavigation = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    //checking if token exists in local storage
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); //Update isLoggedIn based on token presense.
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Removes token on logout.
    setIsLoggedIn(false);
  };
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Mo's Dough!</h1>
        {!isLoggedIn && (
          <Link to="/auth?mode=login">
            <button className={classes.registerButton}>Login/Sign Up</button>
          </Link>
        )}

        {isLoggedIn && <HeaderCartButton onClick={props.onShowCart} />}
        {isLoggedIn && (
          <button className={classes.registerButton} onClick={handleLogout}>
            LogOut
          </button>
        )}
      </header>
    </Fragment>
  );
};

export default MainNavigation;
