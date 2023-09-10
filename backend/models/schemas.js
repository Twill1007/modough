const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  userId: String,
  title: String,
  price: Number,
  amount: Number,
  totalAmount: String,
});

const cart = mongoose.model("Carts", cartSchema);

module.exports = { cart };
