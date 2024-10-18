import express from 'express';
import { createPatient, getAllPatients,getPatientById, updatePatientById, deletePatientById } from '../controllers/PatientController.js';

const router = express.Router();

// Route to create a new patient
router.post('/patients', async (req, res) => {
  try {
    // Call the createPatient controller function
    await createPatient(req, res);
  } catch (error) {
    // Handle any errors that occur during the creation of the patient
    res.status(500).json({ message: 'Error creating patient', error });
  }
});

// Route to get all patients
router.get('/patients', async (req, res) => {
  try {
    // Call the getAllPatients controller function
    await getAllPatients(req, res);
  } catch (error) {
    // Handle any errors that occur while fetching the patients
    res.status(500).json({ message: 'Error fetching patients', error });
  }
});

// Route to get a patient by ID
router.get('/patients/:id', async (req, res) => {
  try {
    // Call the getPatientById controller function
    await getPatientById(req, res);
  } catch (error) {
    // Handle any errors that occur while fetching the patient by ID
    res.status(500).json({ message: 'Error fetching patient', error });
  }
});

// Route to update a patient by ID
router.put('/patients/:id', async (req, res) => {
  try {
    // Call the updatePatientById controller function
    await updatePatientById(req, res);
  } catch (error) {
    // Handle any errors that occur while updating the patient by ID
    res.status(500).json({ message: 'Error updating patient', error });
  }
});

// Route to delete a patient by ID
router.delete('/patients/:id', async (req, res) => {
  try {
    // Call the deletePatientById controller function
    await deletePatientById(req, res);
  } catch (error) {
    // Handle any errors that occur while deleting the patient by ID
    res.status(500).json({ message: 'Error deleting patient', error });
  }
});

export default router;
