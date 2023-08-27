import React, { Fragment, useState, useEffect } from "react";

import HeaderCartButton from "./HeaderCartButton";
import classes from "./MainNavigation.module.css";
import LoginButton from "../UI/LoginButton";
import LogoutButton from "../UI/LogoutButton";
import AboutMoButton from "../UI/AboutMoButton";

const MainNavigation = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
        {!isLoggedIn && <LoginButton />}
        <AboutMoButton />
        {isLoggedIn && <HeaderCartButton onClick={props.onShowCart} />}
        {isLoggedIn && <LogoutButton onLogout={handleLogout} />}
      </header>
    </Fragment>
  );
};

export default MainNavigation;
