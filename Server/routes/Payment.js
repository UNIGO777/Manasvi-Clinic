import express from 'express';
import {
  createPayment,
  getAllPayments,
  getPaymentById,
  updatePayment,
  deletePayment,
  getPaymentsByPatient,
  getPaymentsByStatus
} from '../controllers/Payment.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Protect all routes
router.use(protect);

// Error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
};

// Create a new payment
router.post('/', async (req, res, next) => {
  try {
    await createPayment(req, res);
  } catch (error) {
    next(error);
  }
});

// Get all payments
router.get('/', async (req, res, next) => {
  try {
    await getAllPayments(req, res);
  } catch (error) {
    next(error);
  }
});

// Get a single payment by ID
router.get('/:id', async (req, res, next) => {
  try {
    await getPaymentById(req, res);
  } catch (error) {
    next(error);
  }
});

// Update a payment
router.put('/:id', async (req, res, next) => {
  try {
    await updatePayment(req, res);
  } catch (error) {
    next(error);
  }
});

// Delete a payment
router.delete('/:id', async (req, res, next) => {
  try {
    await deletePayment(req, res);
  } catch (error) {
    next(error);
  }
});

// Get payments by patient ID
router.get('/patient/:patientId', async (req, res, next) => {
  try {
    await getPaymentsByPatient(req, res);
  } catch (error) {
    next(error);
  }
});

// Get payments by status
router.get('/status/:status', async (req, res, next) => {
  try {
    await getPaymentsByStatus(req, res);
  } catch (error) {
    next(error);
  }
});

// Apply error handling middleware
router.use(errorHandler);

export default router;
