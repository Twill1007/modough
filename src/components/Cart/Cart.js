import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);
  const [isCheckoutCompleted, setIsCheckoutCompleted] = useState(false);

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

  // Function to handle the checkout process
  const checkoutHandler = () => {
    // Prevent multiple clicks during checkout process
    if (!isCheckoutLoading) {
      setIsCheckoutLoading(true);

      const cartData = cartCtx.items.map((item) => ({
        title: item.title,
        price: item.price,
        amount: item.amount,
      }));

      console.log(cartData);
      // Send cart data to the server
      fetch("/carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Cart data insertion failed");
          }
          setIsCheckoutCompleted(true);
        })
        .catch((error) => {
          console.error("Error inserting cart data:", error);
          // Handle the error, e.g., show an error message to the user
        })
        .finally(() => {
          setIsCheckoutLoading(false);
        });
    }
  };

  // Reset the checkout status when the cart is closed
  useEffect(() => {
    setIsCheckoutCompleted(false);
  }, [props.onClose]);

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
        {hasItems && (
          <Link to="/summary">
            <button
              className={classes.button}
              onClick={checkoutHandler}
              disabled={isCheckoutLoading}
            >
              {isCheckoutLoading ? "Checking out..." : "Checkout"}
            </button>
          </Link>
        )}
        {isCheckoutCompleted && <p>Checkout successful!</p>}
      </div>
    </Modal>
  );
};

export default Cart;
