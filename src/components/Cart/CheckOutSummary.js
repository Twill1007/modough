import classes from "./CheckOutSummary.module.css";
import { Fragment, useContext } from "react";
import UserForm from "../../pages/UserForm";
import CartContext from "../../store/cart-context";
import CartSummary from "../Cart/CartSummary";

const orderForm = <UserForm />;

const CheckOutSummary = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartSummary
          key={item.id}
          name={item.title}
          price={item.price}
          amount={item.amount}
          totalAmount={item.totalAmount}
        />
      ))}
    </ul>
  );
  return (
    <Fragment>
      <div className={classes.orderForm}>
        <div className={classes.summaryHeading}>
          <h2 className={classes.summaryTitle}>Summary of Order</h2>
          {cartItems}
          <span className={classes.total}>Total Amount: {totalAmount}</span>
        </div>
        <div>{orderForm}</div>
      </div>
    </Fragment>
  );
};

export default CheckOutSummary;
