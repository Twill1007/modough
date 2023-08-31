const { Cart } = require("./models/schemas");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./models/user");
const router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv/config");

const app = express();

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(12);
  const hash = await bcrypt.hash(password, salt);

  return hash;
};

const validateEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: "*",
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

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
      userId: item.userId,
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
  const { firstName, streetAddress, city, email } = req.body;
  const password = req.body.password;
  let errors = {};

  if (!validateEmail(email)) {
    errors.email = "Invalid email.";
  } else {
    try {
      const existingUser = await User.findOne({ email: email });
      if (existingUser) {
        errors.emailExists = "Email exists already.";
      }
    } catch (error) {
      console.log("Error checking existing user:", error);
    }
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors }); // Sending validation errors
  }

  try {
    const hashedPassword = await hashPassword(password);
    hashedPassword.hashedPassword = hashedPassword;

    const newUser = new User({
      firstName,
      streetAddress,
      city,
      email,
      hashedPassword,
    });
    await newUser.save();

    const token = jwt.sign({ email: newUser.email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(201).json({ message: "User registered successfully", token });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Failed to register user" });
  }
});

app.post("/login", async (req, res) => {
  const emailAddress = req.body.email;
  const password = req.body.password;

  console.log(emailAddress);
  console.log(password);

  let user;
  try {
    user = await User.findOne({ email: emailAddress });
    console.log(user);
    if (!user) {
      return res.status(401).json({ message: "Email or Password incorrect." });
    }
    const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Email or Password incorrect." });
    }
    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    return res.status(401).json({ message: "Email or Password incorrect." });
  }
});

app.get("/carts", async (req, res) => {
  const userId = req.params.userId;
  console.log(userId);
  try {
    const cartItems = await Cart.find({ userId }); // fetch all cart items
    res.json({ cartItems }); // Sending the cart items as JSON response
  } catch (error) {
    console.log("Error fetching cart data", error);
    res.status(500).json({ error: "Error fetching cart data." });
  }
});

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
