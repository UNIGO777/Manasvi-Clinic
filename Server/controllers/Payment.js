import Payment from '../models/Payment';
import { validationResult } from 'express-validator';

// Create a new payment
export const createPayment = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const newPayment = new Payment(req.body);
    const savedPayment = await newPayment.save();
    res.status(201).json(savedPayment);
  } catch (error) {
    res.status(500).json({ message: 'Error creating payment', error: error.message });
  }
};

// Get all payments
export const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find().populate('patient').populate('relatedAppointment').populate('relatedPrescription');
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching payments', error: error.message });
  }
};

// Get a single payment by ID
export const getPaymentById = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id).populate('patient').populate('relatedAppointment').populate('relatedPrescription');
    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }
    res.status(200).json(payment);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching payment', error: error.message });
  }
};

// Update a payment
export const updatePayment = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const updatedPayment = await Payment.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedPayment) {
      return res.status(404).json({ message: 'Payment not found' });
    }
    res.status(200).json(updatedPayment);
  } catch (error) {
    res.status(500).json({ message: 'Error updating payment', error: error.message });
  }
};

// Delete a payment
export const deletePayment = async (req, res) => {
  try {
    const deletedPayment = await Payment.findByIdAndDelete(req.params.id);
    if (!deletedPayment) {
      return res.status(404).json({ message: 'Payment not found' });
    }
    res.status(200).json({ message: 'Payment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting payment', error: error.message });
  }
};

// Get payments by patient ID
export const getPaymentsByPatient = async (req, res) => {
  try {
    const payments = await Payment.find({ patient: req.params.patientId }).populate('relatedAppointment').populate('relatedPrescription');
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching payments for patient', error: error.message });
  }
};

// Get payments by status
export const getPaymentsByStatus = async (req, res) => {
  try {
    const payments = await Payment.find({ status: req.params.status }).populate('patient').populate('relatedAppointment').populate('relatedPrescription');
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching payments by status', error: error.message });
  }
};
