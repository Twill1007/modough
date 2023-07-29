const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const userData = [
    {
      id: 1,
      name: "Steve",
    },
  ];
  res.send(userData);
});

module.exports = router;
