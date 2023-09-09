import React, { Fragment, useState, useEffect, useContext } from "react";
import CartContext from "../../store/cart-context";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./MainNavigation.module.css";
import LoginButton from "../UI/LoginButton";
import LogoutButton from "../UI/LogoutButton";
import AboutMoButton from "../UI/AboutMoButton";
import DoughButton from "../UI/DoughButton";
import OrderHistoryButton from "../UI/OrderHistoryButton";
import AdminButton from "../UI/AdminButton";

const MainNavigation = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const cartCtx = useContext(CartContext);
  // const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    //checking if token exists in local storage

    const token = localStorage.getItem("token");

    setIsLoggedIn(!!token); //Update isLoggedIn based on token presense.
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token"); // Removes token on logout.
    cartCtx.clearCart();
    setIsLoggedIn(false);
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Mo's Dough!</h1>
        <div className={classes.button}>
          <div className={classes.buttons}>
            <AboutMoButton />
            <DoughButton />
            {isLoggedIn && <OrderHistoryButton />}
            <AdminButton />
          </div>
          {!isLoggedIn && <LoginButton />}
          {isLoggedIn && <HeaderCartButton onClick={props.onShowCart} />}
          {isLoggedIn && <LogoutButton onLogout={handleLogout} />}
        </div>
      </header>
    </Fragment>
  );
};

export default MainNavigation;
