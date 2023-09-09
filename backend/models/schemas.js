const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  userId: String,
  title: String,
  price: Number,
  amount: Number,
  totalAmount: String,
});

const NewOrders = mongoose.model("NewOrders", cartSchema);

module.exports = { NewOrders };
