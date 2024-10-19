import Patient from '../models/Patient.js';

// Create a new patient
export const createPatient = async (req, res) => {
  try {
    const { firstName, lastName, email, dateOfBirth, phoneNumber, address } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !dateOfBirth || !phoneNumber || !address) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create a new patient instance
    const newPatient = new Patient({
      firstName,
      lastName,
      email,
      dateOfBirth,
      phoneNumber,
      address
    });

    // Save the patient to the database
    const savedPatient = await newPatient.save();
    res.status(201).json(savedPatient);
  } catch (error) {
    res.status(500).json({ message: 'Error creating patient', error });
  }
};

// Get all patients
export const getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching patients', error });
  }
};

// Get a patient by ID
export const getPatientById = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ID
    if (!id) {
      return res.status(400).json({ message: 'Patient ID is required' });
    }

    // Find the patient by ID
    const patient = await Patient.findById(id);

    // Check if patient exists
    if (!patient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    res.status(200).json(patient);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching patient', error });
  }
};

// Update a patient by ID
export const updatePatientById = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    // Validate ID
    if (!id) {
      return res.status(400).json({ message: 'Patient ID is required' });
    }

    // Find the patient by ID and update with new data
    const updatedPatient = await Patient.findByIdAndUpdate(id, updates, { new: true });

    // Check if patient exists
    if (!updatedPatient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    res.status(200).json(updatedPatient);
  } catch (error) {
    res.status(500).json({ message: 'Error updating patient', error });
  }
};

// Delete a patient by ID
export const deletePatientById = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ID
    if (!id) {
      return res.status(400).json({ message: 'Patient ID is required' });
    }

    // Find the patient by ID and delete
    const deletedPatient = await Patient.findByIdAndDelete(id);

    // Check if patient exists
    if (!deletedPatient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    res.status(200).json({ message: 'Patient deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting patient', error });
  }
};