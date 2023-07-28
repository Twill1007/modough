import React from "react";
import { Provider } from "react-redux";
import store from "./store";

const CartProvider = (props) => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default CartProvider;
