import { Fragment, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./CheckOutSummary.module.css";
import UserForm from "../../pages/UserForm";
import CartContext from "../../store/cart-context";
import CartSummary from "../Cart/CartSummary";
import ErrorModal from "../UI/ErrorModal";

const orderForm = <UserForm />;

const CheckOutSummary = (props) => {
  const navigate = useNavigate();
  // const [showModal, setShowModal] = useState(false);
  const cartCtx = useContext(CartContext);

  // useEffect(() => {
  //   // const token = localStorage.getItem("token");
  //   const hasItems = cartCtx.items.length > 0;
  //   if (hasItems) {
  //     setShowModal(true);
  //   }
  // }, []);

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
  // const redirectToLogin = () => {
  //   navigate("/auth?mode=login");
  // };
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
