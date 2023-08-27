import { Link } from "react-router-dom";
import React from "react";

function OrderHistoryButton() {
  return (
    <Link to={"/orderHistory"}>
      <button>Review Past Orders</button>;
    </Link>
  );
}

export default OrderHistoryButton;
