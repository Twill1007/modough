const mongoose = require("mongoose");

const filledOrderSchema = mongoose.Schema({
  userId: String,
  firstName: String,
  streetAddress: String,
  city: String,
  email: String,
  title: String,
  amount: String,
  totalAmount: String,
});

const filledOrders = mongoose.model("FilledOrders", filledOrderSchema);

module.exports = { filledOrders };
