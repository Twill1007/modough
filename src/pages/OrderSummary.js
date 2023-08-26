import React, { useState, useEffect, Fragment } from "react";

function OrderSummary() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartData();
  }, []);

  const fetchCartData = async () => {
    try {
      const response = await fetch("/carts"); // My API endpoint URL
      const data = await response.json();
      console.log(data);
      setCartItems(data.cartItems);
      console.log(data.cartItems);
    } catch (error) {
      console.error("Error fetching cart Data:", error);
    }
  };

  return (
    <Fragment>
      <div>
        <h2>Your Cart Items</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.userId}>
              {item.title} - {item.price} - {item.amount} - {item.totalAmount}
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
}

export default OrderSummary;
