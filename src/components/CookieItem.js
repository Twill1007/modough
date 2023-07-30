// import React from "react";
// import classes from "../components/Menu.module.css";
// import { useContext } from "react";
// import CartContext from "../store/cart-context";

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

//   const cookieItems = props.cookies.map((item) => {
//     <div key={item.id}>
//       <div className={classes.meal}>
//         <h3 className={classes.title}>{item.title}</h3>
//         <p className={classes.description}>{item.description}</p>
//         <p className={classes.price}>Price: ${item.price.toFixed(2)}</p>
//       </div>
//       <CookieItemFormCC
//         onClose={props.onClose}
//         onAddToCart={addToCartHandler}
//         onCart={props.onShowCart}
//       />
//     </div>;
//   });

//   return (
//     <ModalMenu onClose={props.onClose}>
//       <div className={classes.total}>
//         <img
//           className={classes.doughImage}
//           src={props.image}
//           alt="cookie dough ball"
//         />
//         <div className={classes.actions}>
//           <div>{cookieItems}</div>
//         </div>
//       </div>
//     </ModalMenu>
//   );
// }

// export default Menu;
