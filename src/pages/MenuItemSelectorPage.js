import React, { useState } from "react";
import { useSelectionOptions } from "../store/selectionOptionsContext";
import classes from "./MenuItemSelectorPage.module.css";

function MenuItemSelector(props) {
  const { options, selectedOption, setSelectedOption } = useSelectionOptions();

  const handleSelectionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };
  console.log(options);

  return (
    <>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.container}>
          <label>Select Your Option</label>
          <select value={selectedOption} onChange={handleSelectionChange}>
            <option value="">Select An Option</option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className={classes.selectedOption}>
          <p>Selected Value: {selectedOption}</p>
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
        {selectedOption === "One Dozen" || selectedOption === "Two Dozen" ? (
          <button type="submit">Add to Cart</button>
        ) : null}
      </form>
    </>
  );
}
export default MenuItemSelector;
