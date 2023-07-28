import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { removeItemFromCart, addItemToCart } from "../../store/actions";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const cartItemRemoveHandler = () => {
    dispatch(removeItemFromCart(props.id));
  };

  const cartItemAddHandler = () => {
    dispatch(addItemToCart(props));
  };

  return (
    <Fragment>
      {props.amount !== 0 && (
        <li className={classes["cart-item"]}>
          <div>
            <h2>{props.name}</h2>
            <div className={classes.summary}>
              <span className={classes.price}>${props.price}.00</span>
              <span className={classes.amount}>x {props.amount}</span>
            </div>
          </div>
          <div className={classes.actions}>
            <button onClick={cartItemRemoveHandler}>−</button>
            <button onClick={cartItemAddHandler}>+</button>
          </div>
        </li>
      )}
    </Fragment>
  );
};

export default CartItem;
