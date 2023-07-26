import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const data = useSelector((state) => state.data);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item, id) => {
    cartCtx.addItem({
      ...item,
      amount: 1,
      id: id,
      price: 10,
    });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.title}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={() => cartItemAddHandler(item, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose} className={classes["button--alt"]}>
          Close
        </button>
        <Link to="/summary">
          {hasItems && <button className={classes.button}>Checkout</button>}
        </Link>
      </div>
    </Modal>
  );
};

export default Cart;
