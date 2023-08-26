const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  userId: String,
  title: String,
  price: Number,
  amount: Number,
  totalAmount: String,
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = { Cart };
