const express = require("express");
const router = express.Router();
const { Cart } = require("../models/schemas");

router.get("/carts", async (req, res) => {
  try {
    const cartItems = await Cart.find(); //fetch all cart items
    res.json({ cartItems });
  } catch (error) {
    console.log("Error fetching cart data", error);
    res.status(500).json({ error: "Error fetching cart data." });
  }
});

module.exports = router;
