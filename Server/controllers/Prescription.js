import Prescription from '../models/Prescription';
import { validationResult } from 'express-validator';

// Create a new prescription
export const createPrescription = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const newPrescription = new Prescription(req.body);
    const savedPrescription = await newPrescription.save();
    res.status(201).json(savedPrescription);
  } catch (error) {
    res.status(500).json({ message: 'Error creating prescription', error: error.message });
  }
};

// Get all prescriptions
export const getAllPrescriptions = async (req, res) => {
  try {
    const prescriptions = await Prescription.find().populate('patient').populate('doctor');
    res.status(200).json(prescriptions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching prescriptions', error: error.message });
  }
};

// Get a single prescription by ID
export const getPrescriptionById = async (req, res) => {
  try {
    const prescription = await Prescription.findById(req.params.id).populate('patient').populate('doctor');
    if (!prescription) {
      return res.status(404).json({ message: 'Prescription not found' });
    }
    res.status(200).json(prescription);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching prescription', error: error.message });
  }
};

// Update a prescription
export const updatePrescription = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const updatedPrescription = await Prescription.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedPrescription) {
      return res.status(404).json({ message: 'Prescription not found' });
    }
    res.status(200).json(updatedPrescription);
  } catch (error) {
    res.status(500).json({ message: 'Error updating prescription', error: error.message });
  }
};

// Delete a prescription
export const deletePrescription = async (req, res) => {
  try {
    const deletedPrescription = await Prescription.findByIdAndDelete(req.params.id);
    if (!deletedPrescription) {
      return res.status(404).json({ message: 'Prescription not found' });
    }
    res.status(200).json({ message: 'Prescription deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting prescription', error: error.message });
  }
};
