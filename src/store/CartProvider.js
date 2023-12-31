import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
  individualAmount: 20,
};

//concat()is a built in method that addes an item to an array and it returns a new array and does not edit the old array.
const cartReducer = (state, action) => {
  if (action.type === "ADD_CART_ITEM") {
    //this variable takes the new item price * new item amount and adds it to the current totalAmount.
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    //it returns us the index or position of that item if it exists.
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const updatedIndividualAmount = state.individualAmount;

    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItem;
    let updatedItems;

    if (existingCartItem) {
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      //updatedItems are the items in the current state snapshot.
      //updatedItems creates an array.
      //concat adds an item to the array. It doesn't edit the existing array it returns a new array.
      //action.item is all the data needed to update the items array i.e. names, price, totalAmount, etc.
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      individualAmount: updatedIndividualAmount,
    };
  }

  if (action.type === "REMOVE_CART_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;
    if (existingItem.amount === 1) {
      //we pass a function into filter which is executed on every item in the array.
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  if (action.type === "CLEAR_CART") {
    return defaultCartState;
  }
};

//this component is used to manage the cart
//context data and provide that context to all
//components that want acces to it.
const CartProvider = (props) => {
  //useReducer returns an array with exactly two elements.
  //dispatchCartAction is a function that receives an object as its argument and udpates the state.
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  //everytime this handler is executed we get the item that is to be added to the cart.
  const addItemToCartHandler = (item, id, individualAmount) => {
    dispatchCartAction({
      type: "ADD_CART_ITEM",
      item: item,
      id: id,
      amount: 1,
      individualAmount: individualAmount,
    });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_CART_ITEM", id: id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR_CART" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    individualAmount: cartState.individualAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler, //add the clearCart
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
