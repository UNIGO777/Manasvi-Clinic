import Appointment from '../models/Appointment.js';
import Patient from '../models/Patient.js';
import Staff from '../models/Staff.js';

// Create a new appointment
export const createAppointment = async (req, res) => {
  try {
    const { patientEmail, doctorId, date, time, status, consultationType, notes } = req.body;
    // Validate required fields
    if (!patientEmail || !doctorId || !date || !time || !status || !consultationType) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Validate patient existence by email
  // Find the patient by email
      const patient = await Patient.findOne({ email: patientEmail });
      const doctor = await Staff.findById(doctorId);

    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    // Create a new appointment instance
    const newAppointment = new Appointment({
      patientId: patient._id, // Use the patient's ID
      doctorId,
      date,
      time,
      status,
      consultationType,
      notes
    });

    // Save the appointment to the database
    const savedAppointment = await newAppointment.save();
    res.status(201).json(savedAppointment);
  } catch (error) {
    res.status(500).json({ message: 'Error creating appointment', error });
  }
};

// Get an appointment by ID
export const getAppointmentById = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ID
    if (!id) {
      return res.status(400).json({ message: 'Appointment ID is required' });
    }

    // Find the appointment by ID
    const appointment = await Appointment.findById(id);

    // Check if appointment exists
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching appointment', error });
  }
};

// Get all appointments
export const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching appointments', error });
  }
};


// Update an appointment by ID
export const updateAppointmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    // Validate ID
    if (!id) {
      return res.status(400).json({ message: 'Appointment ID is required' });
    }

    // Find the appointment by ID and update with new data
    const updatedAppointment = await Appointment.findByIdAndUpdate(id, updates, { new: true });

    // Check if appointment exists
    if (!updatedAppointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    res.status(200).json(updatedAppointment);
  } catch (error) {
    res.status(500).json({ message: 'Error updating appointment', error });
  }
};

// Delete an appointment by ID
export const deleteAppointmentById = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ID
    if (!id) {
      return res.status(400).json({ message: 'Appointment ID is required' });
    }

    // Find the appointment by ID and delete
    const deletedAppointment = await Appointment.findByIdAndDelete(id);

    // Check if appointment exists
    if (!deletedAppointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    res.status(200).json({ message: 'Appointment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting appointment', error });
  }
};
