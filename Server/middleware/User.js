import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config(); // Ensure environment variables are loaded

const userMiddleware = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Extract token from Bearer

  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Check if the user role is valid
    // if (decoded.role !== 'user' ) {
    //   return res.status(403).json({ message: 'Login as a user' });
    // }

    req.userId = decoded.id;
    res.status(200).json({ message: 'User authenticated and updated successfully' }); // Success message on 200 status
    next();
  });
};

export default userMiddleware;
