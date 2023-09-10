const mongoose = require("mongoose");

const NewOrderSchema = mongoose.Schema({
  userId: String,
  firstName: String,
  streetAddress: String,
  city: String,
  email: String,
  title: String,
  amount: String,
  totalAmount: String,
});

const NewOrder = mongoose.model("NewOrder", NewOrderSchema);

module.exports = { NewOrder };
