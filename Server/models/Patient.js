import mongoose from 'mongoose';
import validator from 'validator';

// Define the schema for the Patient model
const patientSchema = new mongoose.Schema({
  // First name of the patient
  firstName: {
    // User ID reference
    // userId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'User',
    //   required: true
    // },
    // Array to store patient's medical history
    medicalHistory: [
      {
        // Medical condition of the patient
        condition: {
          type: String,
          required: true
        },
        // Date when the condition was diagnosed
        dateDiagnosed: {
          type: Date,
          required: true
        },
        // Additional notes about the condition
        notes: {
          type: String,
          trim: true
        }
      }
    ],
    // Array to store patient's prescriptions
    prescriptions: [
      {
        // Reference to the prescription document
        prescriptionId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true
        },
        // Doctor ID reference
        doctorId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Staff',
          required: true
        },
        // List of medications
        medications: [
          {
            type: String,
            required: true
          }
        ],
        // Additional notes about the prescription
        notes: {
          type: String,
          trim: true
        },
        // Date of the prescription
        date: {
          type: Date,
          required: true
        }
      }
    ],
    // Array to store patient's appointments
    appointments: [
      {
        // Appointment ID reference
        appointmentId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true
        },
        // Doctor ID reference
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
        }
      }
    ],
    // Array to store patient's payments
    payments: [
      {
        // Payment ID reference
        paymentId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true
        },
        // Amount of the payment
        amount: {
          type: Number,
          required: true
        },
        // Date of the payment
        paymentDate: {
          type: Date,
          required: true
        },
        // Method of the payment
        method: {
          type: String,
          enum: ['Card', 'PayPal', 'Cash'],
          required: true
        }
      }
    ]
  },
  // Last name of the patient
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    trim: true,
    minlength: [2, 'Last name must be at least 2 characters long']
  },
  // Email of the patient
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    validate: [validator.isEmail, 'Invalid email']
  },
  // Date of birth of the patient
  dateOfBirth: {
    type: Date,
    required: [true, 'Date of birth is required'],
    validate: {
      validator: function(value) {
        return value <= new Date();
      },
      message: 'Date of birth cannot be in the future'
    }
  },
  // Phone number of the patient
  phoneNumber: {
    type: String,
    required: [true, 'Phone number is required'],
    validate: {
      validator: function(value) {
        return validator.isMobilePhone(value, 'any', { strictMode: true });
      },
      message: 'Invalid phone number'
    }
  },
  // Address of the patient
  address: {
    type: String,
    required: [true, 'Address is required'],
    trim: true
  }
});

// Create the Patient model using the patientSchema
const Patient = mongoose.model('Patient', patientSchema);

export default Patient;