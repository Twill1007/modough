// import React from "react";
// import ModalMenu from "../components/UI/ModalMenu";
// import classes from "./Menu.module.css";
// import { useContext } from "react";
// import CartContext from "../store/cart-context";
// import CookieItemForm from "../components/CookieItemForm";

// function Menu(props) {
//   const cartCtx = useContext(CartContext);

//   const addToCartHandler = (item) => {
//     cartCtx.addItem({
//       id: item.id,
//       title: item.title,
//       amount: item.amount,
//       price: item.price,
//     });
//   };

//   const cookieItems = props.menuItems.map((item) => (
//     <div key={item.id}>
//       <div className={classes.meal}>
//         <h3>{item.title}</h3>
//         <p className={classes.description}>{item.description}</p>
//         <p className={classes.price}>Price: ${item.price.toFixed(2)}</p>
//       </div>
//       <button onClick={props.onClose}>Close</button>
//       <CookieItemForm
//         onClose={props.onClose}
//         onAddToCart={() => addToCartHandler(item)}
//         onCart={props.onShowCart}
//       />
//     </div>
//   ));

//   return (
//     <ModalMenu onClose={props.onClose}>
//       <div className={classes.total}>
//         <img
//           className={classes.CCDoughImage}
//           src={props.image}
//           alt="cookie dough ball"
//         />
//         <div className={classes.actions}>
//           <div className={classes.actions}>
//             <div>{cookieItems}</div>
//           </div>
//         </div>
//       </div>
//     </ModalMenu>
//   );
// }

// export default Menu;
