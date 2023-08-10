const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../backend/models/user");

async function signup(req, res) {
  try {
    const { username, password } = req.body;
    //hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    //create a new user
    const user = new User({ username, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "An error occurred" });
  }
}

async function login(req, res) {
  try {
    const { username, password } = req.body;
    //find the user by username
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    }
    //compare passwords
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: "Invalid username or password" });
    }
    //create a JWT token
    const token = jwt.sign({ userId: user._id }, "your-secret-code", {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
}

module.exports = { signup, login };
