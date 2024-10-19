import express from 'express';
import { register, login, getCurrentUser, updateUser, deleteUser, deleteAllUsers } from '../controllers/AuthController.js'; // Updated to include deleteAllUsers
import userMiddleware from '../middleware/User.js'; // Import user middleware for protected routes

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
// router.get('/me', userMiddleware, async (req, res, next) => {
//   try {
//     await getCurrentUser(req, res);
//   } catch (error) {
//     next(error);
//   }
// });

router.put('/update', userMiddleware, async (req, res, next) => {
  try {
    await updateUser(req, res);
  } catch (error) {
    next(error);
  }
});

// Updated delete route to accept an ID parameter
router.delete('/delete/:id', userMiddleware, async (req, res, next) => {
  try {
    await deleteUserById(req, res); // Updated to call deleteUserById
  } catch (error) {
    next(error);
  }
});

// New route to delete all users
router.delete('/delete', userMiddleware, async (req, res, next) => {
  try {
    await deleteAllUsers(req, res); // Call to delete all users
  } catch (error) {
    next(error);
  }
});

// Apply error handling middleware
router.use(errorHandler);

export default router;
