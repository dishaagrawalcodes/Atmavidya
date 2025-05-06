const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const jwt = require("jsonwebtoken");

// Create User Schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) throw new Error("Invalid email" + value);
    },
  },
  password: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isStrongPassword(value))
        throw new Error("Password must be strong");
    },
  },
  fullName: {
    type: String,
    maxLength: 50,
    required: true,
  },
});

userSchema.methods.validatePassword = async function (userEnteredPassword) {
  const user = this;
  const passwordHash = user.password;
  const isPasswordValid = await bcrypt.compare(
    userEnteredPassword,
    passwordHash
  );
  return isPasswordValid;
};

userSchema.methods.getJwt = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id }, JWT_KEY, {
    expiresIn: "7d",
  });
  return token;
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model("User", userSchema);
