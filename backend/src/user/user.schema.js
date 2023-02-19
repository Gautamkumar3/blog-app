const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: [true, "Email is required please provide"],
    unique: true,
    validate: [validator.isEmail, "Please enter valid email address"],
  },
  password: {
    type: String,
    required: [true, "Password is required please provide"],
  },
  role: {
    type: String,
    enum: ["User", "Writer", "Admin"],
    required: [true, "Pleae select your role"],
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
