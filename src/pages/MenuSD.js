import React from "react";
import ModalMenuSD from "../components/UI/ModalMenuSD";
import classes from "./MenuSD.module.css";
import SDDough from "../assets/SDBall.JPG";
import CookieItemFormSD from "../components/CookieItemFormSD";
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
    <div key={item.id}>
      <div className={classes.meal}>
        <h3 className={classes.title}>{item.title}</h3>
        <p className={classes.description}>{item.description}</p>
        <p className={classes.price}>Price: ${item.price.toFixed(2)}</p>
      </div>
      <CookieItemFormSD
        onClose={props.onClose}
        onAddToCart={addToCartHandler}
        onCart={props.onShowCart}
      />
    </div>
  ));

  return (
    <ModalMenuSD onClose={props.onClose}>
      <div className={classes.total}>
        <img
          className={classes.SDDoughImage}
          src={SDDough}
          alt="cookie dough ball"
        />
        <div className={classes.actions}>
          <div className={classes.actions}>
            <div>{cookieItems}</div>
          </div>
        </div>
      </div>
    </ModalMenuSD>
  );
}

export default MenuSD;
