const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Signup
const signup = async (req, res) => {
  const { email, password, fullName } = req.body;
  try {
    if (!email || !fullName || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const existingUser = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const passwordHash = await bcrypt.hash(password, 10);

    const user = new User({
      email,
      fullName,
      password: passwordHash,
    });

    await user.save();

    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Login
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const isPasswordValid = User.validatePassword(password);
    if (!isPasswordValid) {
      throw new Error("Invalid Credentials");
    } else {
      const token = User.getJwt();
      res.cookie("token", token);
      res.json({ message: "Login successful" });
    }
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

const logout = (req, res) => {
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
    });
    res.json({ message: "Logout successful" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { signup, login, logout };
