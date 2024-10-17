import mongoose from 'mongoose';

// Define the schema for the Appointment model
const appointmentSchema = new mongoose.Schema({
  // Reference to the patient
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true
  },
  // Reference to the doctor
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Staff',
    required: true
  },
  // Date of the appointment
  date: {
    type: Date,
    required: true
  },
  // Time of the appointment
  time: {
    type: String,
    required: true,
    trim: true
  },
  // Status of the appointment
  status: {
    type: String,
    enum: ['Scheduled', 'Completed', 'Cancelled'],
    required: true
  },
  // Type of consultation
  consultationType: {
    type: String,
    enum: ['Physical', 'Online'],
    required: true
  },
  // Additional notes about the appointment
  notes: {
    type: String,
    trim: true
  },
  // Timestamp when the appointment was created
  createdAt: {
    type: Date,
    default: Date.now
  },
  // Timestamp when the appointment was last updated
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Middleware to update the updatedAt field before saving
appointmentSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

// Create the Appointment model using the schema
const Appointment = mongoose.model('Appointment', appointmentSchema);

// Export the Appointment model
export default Appointment;
