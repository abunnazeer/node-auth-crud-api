const User = require("../models/User");
const generateToken = require("../utils/generateToken");

const registerUser = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    const emailPrefix = email.split("@")[0];
    const username = emailPrefix.replace(/[.\-_]/g, "");

    const userExists = await User.findOne({ username });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({
      email,
      username,
      password,
      role,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        username: user.username,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const authUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const query = username.includes("@") ? { email: username } : { username };

    const user = await User.findOne(query);

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        username: user.username,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { registerUser, authUser };
