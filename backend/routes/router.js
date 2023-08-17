const express = require("express");
const router = express.Router();
const schemas = require("../models/schemas");

router.post("/carts", (req, res) => {
  const newOrder = new schemas.Cart({});

  res.send(userData);
});

module.exports = router;
