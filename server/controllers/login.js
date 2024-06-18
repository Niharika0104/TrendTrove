const User = require('../models/User'); // Assuming your User model is in models/User.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config(); // Assuming you're using JWT for authentication

const login = async (req, res) => {
  const { email, password } = req.body;

  // Validate request body
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    // Find userDoc by email
    const userDoc = await User.findOne({ email });

    // Check if userDoc exists
    if (!userDoc) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Compare password hashes
    const isMatch = await bcrypt.compare(password, userDoc.password);

    // Check if passwords match
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token (replace with your secret key and expiration time)
    const token = jwt.sign({ userId: userDoc._id }, process.env.JWT_SECRET, {
      expiresIn: '1h', // Adjust expiration time as needed
    });
res
.cookie("token",token,{ httpOnly: true})
.status(200)
.json(userDoc);

  } 
  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { login };
