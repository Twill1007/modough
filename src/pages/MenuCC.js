import React from "react";
import { useDispatch } from "react-redux";
import ModalMenuCC from "../components/UI/ModalMenuCC";
import classes from "./MenuCC.module.css";
import CCDough from "../assets/CCBall.JPG";
import CookieItemFormCC from "../components/CookieItemFormCC";
import { addItemToCart } from "../store/actions";

const ccDisplay = [
  {
    id: "c1",
    title: "Chocolate Chip Cookies",
    description: "Delicious and soft Chocolate Chip Cookies",
    price: 10,
  },
];

function MenuCC(props) {
  const dispatch = useDispatch();

  const addToCartHandler = (item) => {
    dispatch(addItemToCart(item));
  };

  const cookieItems = ccDisplay.map((item) => (
    <div key={item.id}>
      <div className={classes.meal}>
        <h3>{item.title}</h3>
        <p className={classes.description}>{item.description}</p>
        <p className={classes.price}>Price: ${item.price.toFixed(2)}</p>
      </div>
      <button onClick={props.onClose}>Close</button>
      <CookieItemFormCC
        onClose={props.onClose}
        onAddToCart={() => addToCartHandler(item)}
        onCart={props.onShowCart}
      />
    </div>
  ));

  return (
    <ModalMenuCC onClose={props.onClose}>
      <div>
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
      </div>
    </ModalMenuCC>
  );
}

export default MenuCC;
