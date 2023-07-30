import React from "react";
import CCDough from "../assets/CCBall.JPG";
import SDdough from "../assets/SDBall.JPG";
import CookieItemFormCC from "../components/CookieItemFormCC";
import CookieItemFormSD from "../components/CookieItemFormSD";
import Menu from "./Menu";

const ccDisplay = [
  {
    id: "c1",
    title: "Chocolate Chip Cookies",
    description: "Delicious and soft Chocolate Chip Cookies",
    price: 10,
  },
];

const sdDisplay = [
  {
    id: "d1",
    title: "Snickerdoodles",
    description: "Sweet Cinnamon Cookie crunch with a soft center!",
    price: 10,
  },
];

export const MenuCC = (props) => {
  return (
    <Menu
      cookies={ccDisplay}
      image={CCDough}
      onClose={props.onClose}
      onShowCart={props.onShowCart}
      CookieItemForm={CookieItemFormCC}
    />
  );
};

const MenuSD = (props) => {
  return (
    <Menu
      cookies={sdDisplay}
      image={SDdough}
      onClose={props.onClose}
      onShowCart={props.onShowCart}
      CookieItemForm={CookieItemFormSD}
    />
  );
};

export default MenuSD;
