import express from 'express';
import { register, login, getCurrentUser, updateUser, deleteUser } from '../controllers/AuthController.js';

const router = express.Router();

// Error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
};

// Public routes
router.post('/register', async (req, res, next) => {
  try {
    await register(req, res);
  } catch (error) {
    next(error);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    await login(req, res);
  } catch (error) {
    next(error);
  }
});

// Inline protect function for protected routes
const protect = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Authorization denied, no token provided' });
  }
  
  // You can add token validation logic here, e.g., verify the token
  // If valid, call next(); otherwise, return an error

  next();
};

// Protected routes
router.get('/me', protect, async (req, res, next) => {
  try {
    await getCurrentUser(req, res);
  } catch (error) {
    next(error);
  }
});

router.put('/update', protect, async (req, res, next) => {
  try {
    await updateUser(req, res);
  } catch (error) {
    next(error);
  }
});

router.delete('/delete', protect, async (req, res, next) => {
  try {
    await deleteUser(req, res);
  } catch (error) {
    next(error);
  }
});

// Apply error handling middleware
router.use(errorHandler);

export default router;
