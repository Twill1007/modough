import React from "react";
import ModalMenu from "../components/UI/ModalMenu";
import classes from "./MenuCookie.module.css";
import SDDough from "../assets/SDBall.JPG";
import CookieItemForm from "../components/CookieItemForm";
import { useContext } from "react";
import CartContext from "../store/cart-context";

const sdDisplay = [
  {
    id: "d1",
    title: "Snickerdoodles",
    description: "Sweet Cinammon Cookie crunch with a soft center!",
    price: 10,
  },
];
function MenuSD(props) {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (item) => {
    cartCtx.addItem({
      id: item.id,
      title: item.title,
      amount: item.amount,
      price: item.price,
    });
  };
  const cookieItems = sdDisplay.map((item) => (
    <div key={item.id} className={classes.menu}>
      <div className={classes.meal}>
        <h3 className={classes.title}>{item.title}</h3>
        <img
          className={classes.doughImage}
          src={SDDough}
          alt="cookie dough ball"
        />
        <p className={classes.description}>{item.description}</p>
        <p className={classes.price}>Price: ${item.price.toFixed(2)}</p>
      </div>
      <CookieItemForm
        cookieType="SD"
        onClose={props.onClose}
        onAddToCart={addToCartHandler}
        onCart={props.onShowCart}
      />
    </div>
  ));

  return (
    <ModalMenu onClose={props.onClose}>
      <div>
        <div>{cookieItems}</div>
      </div>
    </ModalMenu>
  );
}

export default MenuSD;
