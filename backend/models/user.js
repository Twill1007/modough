const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    unique: true,
    required: [true, "First name cannot be blank"],
  },
  streetAddress: {
    type: String,
    unique: true,
    required: [true, "Street address cannot be blank"],
  },
  city: {
    type: String,
    unique: true,
    required: [true, "City cannot be blank"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email cannot be blank"],
  },
  // hashedPassword: {
  //   type: String,
  //   required: [true, "Password cannot be blank"],
  // },
});

module.exports = mongoose.model("User", userSchema);
