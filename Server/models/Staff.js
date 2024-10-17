import mongoose from 'mongoose';

// Define the schema for the Staff model
const staffSchema = new mongoose.Schema({
  // Reference to the user
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  // Specialization of the staff member
  specialization: {
    type: String,
    required: true,
    trim: true
  },
  // Available days for appointments
  availableDays: {
    type: [String],
    required: true,
    validate: {
      validator: function(value) {
        return value.length > 0;
      },
      message: 'Available days cannot be empty'
    }
  },
  // Available time slots for appointments
  availableTimeSlots: {
    type: [String],
    required: true,
    validate: {
      validator: function(value) {
        return value.length > 0;
      },
      message: 'Available time slots cannot be empty'
    }
  },
  // Array to store appointments
  appointments: [
    {
      // Reference to the appointment
      appointmentId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
      },
      // Reference to the patient
      patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
      },
      // Status of the appointment
      status: {
        type: String,
        enum: ['Scheduled', 'Completed', 'Cancelled'],
        required: true
      },
      // Additional notes about the appointment
      notes: {
        type: String,
        trim: true
      },
      // Type of consultation
      consultationType: {
        type: String,
        enum: ['Physical', 'Online'],
        required: true
      }
    }
  ],
  // Array to store medical records
  medicalRecords: [
    {
      // Reference to the medical record
      recordId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
      },
      // Reference to the patient
      patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true
      },
      // Diagnosis of the patient
      diagnosis: {
        type: String,
        required: true,
        trim: true
      },
      // Treatment provided to the patient
      treatment: {
        type: String,
        required: true,
        trim: true
      },
      // Date of the medical record
      date: {
        type: Date,
        required: true
      },
      // Additional notes about the medical record
      notes: {
        type: String,
        trim: true
      }
    }
  ]
});

// Create the Staff model using the staffSchema
const Staff = mongoose.model('Staff', staffSchema);

// Export the Staff model
export default Staff;
