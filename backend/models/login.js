const mongoose = require("mongoose");

const LoginSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "Email cannot be blank"],
  },
  hashedPassword: {
    type: String,
    required: [true, "Password cannot be blank"],
  },
});

module.exports = mongoose.model("Login", LoginSchema);
