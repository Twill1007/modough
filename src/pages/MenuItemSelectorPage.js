import React, { useState } from "react";
import classes from "./MenuCookie.module.css";

function MenuItemSelector(props) {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectOtherCookie, setSelectOtherCookie] = useState(true);

  const selectOtherCookieHandler = () => {
    setSelectOtherCookie(false);
  };

  const handleSelectionChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.container}>
          <label>Select Your Option</label>
          <select value={selectedValue} onChange={handleSelectionChange}>
            <option value="">Select An Option</option>
            <option value="One Dozen">1 Dozen for $10</option>
            <option value="Two Dozen">2 Dozen for $18</option>
          </select>
        </div>
        <div className={classes.selectedOption}>
          <p>Selected Value: {selectedValue}</p>
        </div>

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
        <button onClick={props.onClose}>Close</button>
        <button onClick={props.onClose}>Other Cookies</button>
        {selectedValue !== "" && (
          <button onClick={selectOtherCookieHandler}>Add to Cart</button>
        )}
      </form>
    </>
  );
}
export default MenuItemSelector;
