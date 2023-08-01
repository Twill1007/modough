const express = require("express");
const router = express.Router();
const schemas = require("../models/schemas");

router.post("/carts", (req, res) => {
  const userData = [
    {
      id: 1,
      name: "Steve",
    },
  ];

  const newOrder = new schemas.Cart({});

  res.send(userData);
});

module.exports = router;
