import React from "react";
import { useDispatch } from "react-redux";
import ModalMenuSD from "../components/UI/ModalMenuSD";
import classes from "./MenuSD.module.css";
import SDDough from "../assets/SDBall.JPG";
import CookieItemFormSD from "../components/CookieItemFormSD";
import { addItemToCart } from "../store/actions";

const sdDisplay = [
  {
    id: "d1",
    title: "Snickerdoodles",
    description: "Sweet Cinnamon Cookie crunch with a soft center!",
    price: 15,
  },
];

function MenuSD(props) {
  const dispatch = useDispatch();

  const addToCartHandler = (item) => {
    dispatch(addItemToCart(item));
  };

  const cookieItems = sdDisplay.map((item) => (
    <div key={item.id}>
      <div className={classes.meal}>
        <h3>{item.title}</h3>
        <p className={classes.description}>{item.description}</p>
        <p className={classes.price}>Price: ${item.price.toFixed(2)}</p>
      </div>
      <button onClick={props.onClose}>Close</button>
      <CookieItemFormSD
        onClose={props.onClose}
        onAddToCart={() => addToCartHandler(item)}
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
