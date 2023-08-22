const Cart = require("./models/schemas");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes/router");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./models/user");
const jwt = require("jsonwebtoken");
require("dotenv/config");

// const login = async (pw, hashedPw) => {
//   const result = await bcrypt.compare(pw, hashedPw);
//   if (result) {
//     console.log("Logged you in Successful Match");
//   } else {
//     console.log("Incorrect!");
//   }
// };

// login(
//   "monkey!",
//   "$2b$10$Klg8NTLjkrtXoNSkX0Ufw.qDVy14HMpy8uJ.hZRXZrpsBvYJnPVBS"
// );

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: "*",
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
// app.use("/carts", router);
// app.use("/register", router);

const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose
  .connect(process.env.DB_URI, dbOptions)
  .then(() => {
    console.log("DB Connected!");
  })
  .catch((err) => {
    console.log(err);
  });

app.post("/carts", (req, res) => {
  const cartData = req.body;
  console.log("Received cart data:", cartData);
  const savePromises = cartData.map((item) => {
    const cartItem = new Cart({
      title: item.title,
      price: item.price,
      amount: item.amount,
      totalAmount: item.totalAmount,
    });

    return cartItem.save();
  });

  // Use Promise.all() to wait for all the save operations to complete
  Promise.all(savePromises)
    .then((savedItems) => {
      console.log("Cart data saved:", savedItems);
      res.status(201).json({ message: "Cart data saved successfully" });
    })
    .catch((error) => {
      console.error("Error saving cart data:", error);
      res.status(500).json({ error: "Failed to save cart data" });
    });
});

app.post("/register", async (req, res) => {
  const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);
    // console.log(salt);
    // console.log(hash);
    return hash;
  };
  const { firstName, streetAddress, city, email } = req.body;
  const password = req.body.password;

  try {
    const hashedPassword = await hashPassword(password);
    hashedPassword.hashedPassword = hashedPassword;
    // console.log("Here is the password:", password);
    // console.log("User data received:", userData);
    const newUser = new User({
      firstName,
      streetAddress,
      city,
      email,
      hashedPassword,
    });
    await newUser.save();
    console.log("this is the new User", newUser);
    // res.status(201).json({ message: "User data received successfully" });
    // console.log("Hashed Password", hashedPassword);
    const token = jwt.sign({ email: newUser.email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    console.log(token);
    res.status(201).json({ message: "User registered successfully", token });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Failed to register user" });
  }
});

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
