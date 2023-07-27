import classes from "./CheckOutSummary.module.css";
import { Fragment, useContext } from "react";
import UserForm from "../../pages/UserForm";
import CartContext from "../../store/cart-context";
import CartSummary from "../Cart/CartSummary";

const orderForm = <UserForm />;

const CheckOutSummary = (props) => {
  const cartCtx = useContext(CartContext);

  console.log(cartCtx.items);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartSummary
          key={item.id}
          name={item.title}
          price={item.price}
          amount={item.amount}
        />
      ))}
    </ul>
  );
  return (
    <Fragment>
      <h2>Summary of Order</h2>
      <div className={classes.summaryHeading}>{cartItems}</div>
      <div>{orderForm}</div>
    </Fragment>
  );
};

export default CheckOutSummary;
