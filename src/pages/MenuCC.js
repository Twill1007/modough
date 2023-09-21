import React from "react";
import ModalMenu from "../components/UI/ModalMenu";
import classes from "./MenuCookie.module.css";
import CCDough from "../assets/CCBall.JPG";

import MenuItemSelector from "./MenuItemSelectorPage";

const ccdisplay = [
  {
    id: "c1",
    title: "Chocolate Chip Cookies",
    description:
      "Indulge in the ultimate guilt-free pleasure with our delectable homemade dairy-free chocolate chip cookies! Crafted with love, these cookies offer the same luscious taste and chewy texture you crave, minus the dairy. Satisfy your sweet tooth while staying kind to your body!",
    price: 10,
  },
];
function MenuCC(props) {
  const cookieItems = ccdisplay.map((item) => (
    <div key={item.id}>
      <div className={classes.meal}>
        <h3 className={classes.title}>{item.title}</h3>
        <img
          className={classes.doughImage}
          src={CCDough}
          alt="cookie dough ball"
        />
        <div className={classes.descriptionClass}>
          <p className={classes.description}>{item.description}</p>
        </div>

        <p className={classes.price}>Price: </p>
      </div>
      <MenuItemSelector
        cookieType="CC"
        onClose={props.onClose}
        onCart={props.onShowCart}
      />
    </div>
  ));

  return (
    <ModalMenu onClose={props.onClose}>
      <div>
        <div>{cookieItems}</div>
      </div>
    </ModalMenu>
  );
}

export default MenuCC;
