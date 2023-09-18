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
          <option value="Chocolate Chip Cookies">Chocolate Chip Cookies</option>
          <option value="Snickerdoodle Cookies">Snickerdoodle Cookies</option>
        </select>
      </div>
      <div className={classes.selectedOption}>
        <p>Selected Value: {selectedValue}</p>
      </div>
    </>
  );
}

export default MenuItemSelector;
