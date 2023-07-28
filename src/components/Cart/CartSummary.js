import { useContext } from "react";
import { Fragment } from "react";

import classes from "./CartSummary.module.css";
import CartContext from "../../store/cart-context";

function CartSummary(props) {
  const cartCtx = useContext(CartContext);

  return (
    <Fragment>
      {cartCtx.items.length !== 0 && (
        <li className={classes["cart-item"]}>
          <div>
            <h2>{props.name}</h2>
            <div className={classes.summary}>
              <span className={classes.price}>${props.price}.00</span>
              <span className={classes.amount}>x {props.amount}</span>
            </div>
          </div>
        </li>
      )}
    </Fragment>
  );
}

export default CartSummary;
