import React, { Fragment, useState } from "react";

function AdminPage() {
  const [newOrders, setNewOrders] = useState(false);
  const [filledOrders, setFilledOrders] = useState(false);
  const [shippedOrders, setShippedOrders] = useState(false);

  const newOrderHandler = () => {
    setNewOrders(true);
  };

  const filledOrderHandler = () => {
    setFilledOrders(true);
  };

  const shippedOrderHandler = () => {
    setShippedOrders(true);
  };

  return (
    <Fragment>
      <div>
        <button onClick={newOrderHandler}>New Orders</button>
        <button onClick={filledOrderHandler}>Filled Orders</button>
        <button onClick={shippedOrderHandler}>Shipped Orders</button>
        <div>{newOrders && <h1>New Order</h1>}</div>
        <div>{filledOrders && <h1>Filled Order</h1>}</div>
        <div>{shippedOrders && <h1>Completed Order</h1>}</div>
      </div>
    </Fragment>
  );
}

export default AdminPage;
