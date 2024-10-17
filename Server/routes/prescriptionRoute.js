import express from 'express';
import {
  createPrescription,
  getAllPrescriptions,
  getPrescriptionById,
  updatePrescription,
  deletePrescription
} from '../controllers/Prescription.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// Protect all routes
router.use(protect);

// Error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
};

// Create a new prescription
router.post('/', async (req, res, next) => {
  try {
    await createPrescription(req, res);
  } catch (error) {
    next(error);
  }
});

// Get all prescriptions
router.get('/', async (req, res, next) => {
  try {
    await getAllPrescriptions(req, res);
  } catch (error) {
    next(error);
  }
});

// Get a single prescription by ID
router.get('/:id', async (req, res, next) => {
  try {
    await getPrescriptionById(req, res);
  } catch (error) {
    next(error);
  }
});

// Update a prescription
router.put('/:id', async (req, res, next) => {
  try {
    await updatePrescription(req, res);
  } catch (error) {
    next(error);
  }
});

// Delete a prescription
router.delete('/:id', async (req, res, next) => {
  try {
    await deletePrescription(req, res);
  } catch (error) {
    next(error);
  }
});

// Apply error handling middleware
router.use(errorHandler);

export default router;
