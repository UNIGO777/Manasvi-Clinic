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

const router = express.Router();

// Protect all routes (Assuming you have a protect function)
const protect = (req, res, next) => {
  // Your authentication logic here
  next();
};

// Protect all routes
router.use(protect);

// Create a new payment
router.post('/', async (req, res) => {
  try {
    await createPayment(req, res);
  } catch (error) {
    console.error(error.stack);
    res.status(500).json({ message: 'Something went wrong!', error: error.message });
  }
});

// Get all payments
router.get('/', async (req, res) => {
  try {
    await getAllPayments(req, res);
  } catch (error) {
    console.error(error.stack);
    res.status(500).json({ message: 'Something went wrong!', error: error.message });
  }
});

// Get a single payment by ID
router.get('/:id', async (req, res) => {
  try {
    await getPaymentById(req, res);
  } catch (error) {
    console.error(error.stack);
    res.status(500).json({ message: 'Something went wrong!', error: error.message });
  }
});

// Update a payment
router.put('/:id', async (req, res) => {
  try {
    await updatePayment(req, res);
  } catch (error) {
    console.error(error.stack);
    res.status(500).json({ message: 'Something went wrong!', error: error.message });
  }
});

// Delete a payment
router.delete('/:id', async (req, res) => {
  try {
    await deletePayment(req, res);
  } catch (error) {
    console.error(error.stack);
    res.status(500).json({ message: 'Something went wrong!', error: error.message });
  }
});

// Get payments by patient ID
router.get('/patient/:patientId', async (req, res) => {
  try {
    await getPaymentsByPatient(req, res);
  } catch (error) {
    console.error(error.stack);
    res.status(500).json({ message: 'Something went wrong!', error: error.message });
  }
});

// Get payments by status
router.get('/status/:status', async (req, res) => {
  try {
    await getPaymentsByStatus(req, res);
  } catch (error) {
    console.error(error.stack);
    res.status(500).json({ message: 'Something went wrong!', error: error.message });
  }
});

export default router;
