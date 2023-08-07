import classes from "./CookieItemForm.module.css";
import Input from "./UI/Input";
import { useState, useRef } from "react";

const CookieItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const [selectOtherCookie, setSelectOtherCookie] = useState(true);

  const selectOtherCookieHandler = () => {
    setSelectOtherCookie(false);
  };

  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    const item = {
      id: props.cookieType === "CC" ? 1 : 2,
      title:
        props.cookieType === "CC" ? "Chocolate Chip Cookies" : "Snickerdoodles",
      amount: enteredAmountNumber,
      price: 10,
    };
    props.onAddToCart(item);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label={"Amount"}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />

      {!selectOtherCookie && (
        <button
          onClick={() => {
            props.onCart();
            if (props.onClose) {
              props.onClose();
            }
          }}
        >
          Your Cart
        </button>
      )}
      {!selectOtherCookie && <button onClick={props.onClose}>Close</button>}
      {!selectOtherCookie && (
        <button onClick={props.onClose}>Other Cookies</button>
      )}
      <button onClick={selectOtherCookieHandler}>Add to Cart</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default CookieItemForm;
