const mongoose = require("mongoose");

const orderHistorySchema = mongoose.Schema({
  userId: String,
  title: String,
  price: Number,
  amount: Number,
  totalAmount: String,
});

const OrderHistory = mongoose.model("OrderHistory", orderHistorySchema);

module.exports = OrderHistory;
