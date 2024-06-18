const express = require('express');
const User = require('../models/User'); // Assuming your User model

const router = express.Router();
const verifyToken = require('../controllers/profile'); // Import auth middleware

router.get('/profile', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId); // Use attached user ID
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Optionally, sanitize the user object before sending it to the client
    const { name, email, _id } = user;
    res.json({ name, email, _id });
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: 'Error fetching user data' });
  }
});

module.exports = router;
