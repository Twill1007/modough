const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  title: String,
  price: Number,
  amount: Number,
});

module.exports = mongoose.model("Cart", cartSchema);

// const mySchemas = { Cart: Cart };

// module.exports = mySchemas;
