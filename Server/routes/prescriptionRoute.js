import express from 'express';
import {
  createPrescription,
  getAllPrescriptions,
  getPrescriptionById,
  updatePrescription,
  deletePrescription
} from '../controllers/Prescription.js';

const router = express.Router();

// Protect all routes (Assuming you have a protect function)
const protect = (req, res, next) => {
  // Your authentication logic here
  next();
};

// Protect all routes
router.use(protect);

// Create a new prescription
router.post('/', async (req, res) => {
  try {
    await createPrescription(req, res);
  } catch (error) {
    console.error(error.stack);
    res.status(500).json({ message: 'Something went wrong!', error: error.message });
  }
});

// Get all prescriptions
router.get('/', async (req, res) => {
  try {
    await getAllPrescriptions(req, res);
  } catch (error) {
    console.error(error.stack);
    res.status(500).json({ message: 'Something went wrong!', error: error.message });
  }
});

// Get a single prescription by ID
router.get('/:id', async (req, res) => {
  try {
    await getPrescriptionById(req, res);
  } catch (error) {
    console.error(error.stack);
    res.status(500).json({ message: 'Something went wrong!', error: error.message });
  }
});

// Update a prescription
router.put('/:id', async (req, res) => {
  try {
    await updatePrescription(req, res);
  } catch (error) {
    console.error(error.stack);
    res.status(500).json({ message: 'Something went wrong!', error: error.message });
  }
});

// Delete a prescription
router.delete('/:id', async (req, res) => {
  try {
    await deletePrescription(req, res);
  } catch (error) {
    console.error(error.stack);
    res.status(500).json({ message: 'Something went wrong!', error: error.message });
  }
});

export default router;
