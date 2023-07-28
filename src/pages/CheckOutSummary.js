import { Fragment } from "react";
import { useSelector } from "react-redux";
import classes from "./CheckOutSummary.module.css";
import UserForm from "./UserForm";
import CartItem from "../components/Cart/CartItem";

const orderForm = <UserForm />;

const CheckOutSummary = (props) => {
  const cartItems = useSelector((state) => state.items);

  const cartItemsList = (
    <ul className={classes["cart-items"]}>
      {cartItems.map((item) => (
        <CartItem
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
      <div className={classes.summaryHeading}>
        {cartItemsList}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>$15</span>
        </div>
      </div>
      <div>{orderForm}</div>
    </Fragment>
  );
};

export default CheckOutSummary;
