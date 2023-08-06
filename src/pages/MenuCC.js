import React from "react";
import ModalMenu from "../components/UI/ModalMenu";
import classes from "./MenuCC.module.css";
import CCDough from "../assets/CCBall.JPG";
import CookieItemForm from "../components/CookieItemForm";
import { useContext } from "react";
import CartContext from "../store/cart-context";

const displayCC = [
  {
    id: "c1",
    title: "Chocolate Chip Cookies",
    description: "Delicous and soft Chocolate Chip Cookies",
    price: 10,
  },
];

const displaySD = [
  {
    id: "c1",
    title: "Chocolate Chip Cookies",
    description: "Delicous and soft Chocolate Chip Cookies",
    price: 10,
  },
];

function MenuCC(props) {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (item) => {
    cartCtx.addItem({
      id: item.id,
      title: item.title,
      amount: item.amount,
      price: item.price,
    });
  };
  let modalContet;
  const cookieItems = displayCC.map((item) => (
    <div key={item.id}>
      <div className={classes.meal}>
        <h3>{item.title}</h3>
        <p className={classes.description}>{item.description}</p>
        <p className={classes.price}>Price: ${item.price.toFixed(2)}</p>
      </div>

      <CookieItemForm
        cookieType="CC"
        onClose={props.onClose}
        onAddToCart={addToCartHandler}
        onCart={props.onShowCart}
      />
    </div>
  ));

  return (
    <ModalMenu onClose={props.onClose}>
      <div className={classes.total}>
        <img
          className={classes.CCDoughImage}
          src={CCDough}
          alt="cookie dough ball"
        />
        <div className={classes.actions}>
          <div className={classes.actions}>
            <div>{cookieItems}</div>
          </div>
        </div>
      </div>
    </ModalMenu>
  );
}

export default MenuCC;
