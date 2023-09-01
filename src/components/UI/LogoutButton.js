import { useState, useEffect, Fragment } from "react";
import LoginButton from "./LoginButton";
import classes from "./MainNavButton.module.css";

function LogoutButton(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  useEffect(() => {
    //checking if token exists in local storage
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); //Update isLoggedIn based on token presense.
  }, []);

  return (
    <Fragment>
      {isLoggedIn && (
        <button className={classes.button} onClick={props.onLogout}>
          Logout
        </button>
      )}

      {!isLoggedIn && <LoginButton />}
    </Fragment>
  );
}

export default LogoutButton;
