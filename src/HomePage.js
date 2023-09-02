import classes from "./App.module.css";
import React from "react";
import moImage from "./assets/Morgan.jpg";
import MainNavigation from "./components/Layout/MainNavigation";
import Cart from "./components/Cart/Cart";
import { useState, Fragment } from "react";
import MenuCC from "./pages/MenuCC";
import MenuSD from "./pages/MenuSD";
// import Menu from "./components/Menu";
import Button from "./components/Button";

function HomePage() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [MenuCCIsShown, setMenuCCIsShown] = useState(false);
  const [MenuSDIsShown, setMenuSDIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const showMenuCCHandler = () => {
    setMenuCCIsShown(true);
  };

  const hideMenuCCHandler = () => {
    setMenuCCIsShown(false);
  };

  const showMenuSDHandler = () => {
    setMenuSDIsShown(true);
  };

  const hideMenuSDHandler = () => {
    setMenuSDIsShown(false);
  };

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      {MenuCCIsShown && (
        <MenuCC onClose={hideMenuCCHandler} onShowCart={showCartHandler} />
      )}
      {MenuSDIsShown && (
        <MenuSD onClose={hideMenuSDHandler} onShowCart={showCartHandler} />
      )}
      <MainNavigation onShowCart={showCartHandler} />
      <img className={classes.moImage} src={moImage} alt="Girl Smiling" />
      <p className={classes.bioText}>
        Hello! My name is Morgan! Or you can call me Mo. I always loved to make
        cookies and I wanted to earn money to do what I always wanted to do. So,
        I figured, why not sell my cookie dough for the things I wanted to do.
        So, this is my website where you can buy the yummiest cookie dough
        around! You'll enjoy my homeade chocolate chip cookies and
        snickerdoodles so much, you will want to buy more and more! And, most of
        all they are all dairy free!!! I will make sure they will be super
        delicious and warm when they are baked and you will love these
        cookies!!! I promise! So, step right up and go ahead and buy my
        delicious cookie dough balls made with care.
      </p>
      <Button
        onShowMenuCC={showMenuCCHandler}
        onShowMenuSD={showMenuSDHandler}
      />
    </Fragment>
  );
}

export default HomePage;
