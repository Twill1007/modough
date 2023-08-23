const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  userId: String,
  title: String,
  price: Number,
  amount: Number,
  totalAmount: String,
});

module.exports = mongoose.model("Cart", cartSchema);

// const mySchemas = { Cart: Cart };

// module.exports = mySchemas;
