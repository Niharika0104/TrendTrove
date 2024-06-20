const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
    if (err) {
      console.error('Token verification failed:', err);
      return res.status(403).json({ message: 'Token is not valid' });
    }

    req.userId = decodedToken.userId; // Attach user ID to the request object
    next(); // Proceed to the route handler if token is valid
  });
};

module.exports = verifyToken;
