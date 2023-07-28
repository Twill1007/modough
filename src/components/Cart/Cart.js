import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "../../store/actions";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.items);
  const totalAmount = useSelector((state) => state.totalAmount.toFixed(2));
  const dispatch = useDispatch();

  const cartItemRemoveHandler = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const cartItemAddHandler = (item) => {
    dispatch(addItemToCart(item));
  };

  const hasItems = cartItems.length > 0;

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes["cart-items"]}>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            name={item.title}
            price={item.price}
            amount={item.amount}
            onRemove={() => cartItemRemoveHandler(item.id)}
            onAdd={() => cartItemAddHandler(item)}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
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
