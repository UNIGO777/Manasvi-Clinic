import express from 'express';
import { register, login, getCurrentUser, updateUser, deleteUser } from '../controllers/AuthController.js';
import { protect } from '../middleware/authMiddleware.js';

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

// Protected routes
router.use(protect);

router.get('/me', async (req, res, next) => {
  try {
    await getCurrentUser(req, res);
  } catch (error) {
    next(error);
  }
});

router.put('/update', async (req, res, next) => {
  try {
    await updateUser(req, res);
  } catch (error) {
    next(error);
  }
});

router.delete('/delete', async (req, res, next) => {
  try {
    await deleteUser(req, res);
  } catch (error) {
    next(error);
  }
});

// Apply error handling middleware
router.use(errorHandler);

export default router;
