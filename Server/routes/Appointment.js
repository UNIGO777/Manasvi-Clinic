import express from 'express';
import { createAppointment, getAppointmentById, updateAppointmentById, deleteAppointmentById } from '../controllers/AppointmentController.js';

const router = express.Router();

// Route to create a new appointment
router.post('/appointments', async (req, res) => {
  try {
    // Call the createAppointment controller function
    await createAppointment(req, res);
  } catch (error) {
    // Handle any errors that occur during the creation of the appointment
    res.status(500).json({ message: 'Error creating appointment', error });
  }
});

// Route to get all appointments
router.get('/appointments', async (req, res) => {
  try {
    // Call the getAllAppointments controller function
    await getAllAppointments(req, res);
  } catch (error) {
    // Handle any errors that occur while fetching the appointments
    res.status(500).json({ message: 'Error fetching appointments', error });
  }
});

// Route to get an appointment by ID
router.get('/appointments/:id', async (req, res) => {
  try {
    // Call the getAppointmentById controller function
    await getAppointmentById(req, res);
  } catch (error) {
    // Handle any errors that occur while fetching the appointment by ID
    res.status(500).json({ message: 'Error fetching appointment', error });
  }
});

// Route to update an appointment by ID
router.put('/appointments/:id', async (req, res) => {
  try {
    // Call the updateAppointmentById controller function
    await updateAppointmentById(req, res);
  } catch (error) {
    // Handle any errors that occur while updating the appointment by ID
    res.status(500).json({ message: 'Error updating appointment', error });
  }
});

// Route to delete an appointment by ID
router.delete('/appointments/:id', async (req, res) => {
  try {
    // Call the deleteAppointmentById controller function
    await deleteAppointmentById(req, res);
  } catch (error) {
    // Handle any errors that occur while deleting the appointment by ID
    res.status(500).json({ message: 'Error deleting appointment', error });
  }
});

export default router;
