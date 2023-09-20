import React from "react";

function NewCart({ cartItems }) {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.label}</li>
        ))}
      </ul>
    </div>
  );
}

export default NewCart;
