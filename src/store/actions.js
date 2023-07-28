// actions.js
export const addItemToCart = (item) => {
  return {
    type: "ADD_CART_ITEM",
    item: item,
  };
};

export const removeItemFromCart = (id) => {
  return {
    type: "REMOVE_CART_ITEM",
    id: id,
  };
};
