import classes from "./CookieItemForm.module.css";
import Input from "./UI/Input";
import { useState, useRef } from "react";

const CookieItemFormSD = (props) => {
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
      id: 2,
      title: "Snickerdoodles",
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
      <button onClick={props.onClose}>Close</button> <br />
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
      {!selectOtherCookie && (
        <button onClick={props.onClose}>Choose Another Cookie</button>
      )}
      <button onClick={selectOtherCookieHandler}>Add to Cart</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default CookieItemFormSD;
