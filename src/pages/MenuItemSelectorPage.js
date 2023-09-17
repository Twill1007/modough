import React, { useState } from "react";

function MenuItemSelector() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectionChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <label value={selectedValue} onChange={handleSelectionChange}>
        Select Your Cookie
      </label>
      <select></select>;
    </div>
  );
}
