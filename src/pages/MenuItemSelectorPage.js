import React, { useState } from "react";
import classes from "./MenuItemSelectorPage.module.css";

function MenuItemSelector() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectionChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <>
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
    </>
  );
}

export default MenuItemSelector;
