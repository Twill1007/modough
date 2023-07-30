import React from "react";

const MenuContext = React.createContext({
  title: "",
  description: "",
  price: 0,
});

export default MenuContext;
