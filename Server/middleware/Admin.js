import jwt from 'jsonwebtoken';

const adminMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    // Check if the user is an admin
    if (decoded.role !== 'admin') {
      return res.status(403).json({ message: 'Require Admin Role!' });
    }

    req.userId = decoded.id;
    next();
  });
};

export default adminMiddleware;
