import mongoose from 'mongoose';

// Schema for individual medications within a prescription
const medicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Medication name is required'],
    trim: true
  },
  dosage: {
    type: String,
    required: [true, 'Dosage is required'],
    trim: true
  },
  frequency: {
    type: String,
    required: [true, 'Frequency is required'],
    trim: true
  },
  duration: {
    type: String,
    trim: true
  }
});

// Main prescription schema
const prescriptionSchema = new mongoose.Schema({
  // Reference to the patient receiving the prescription
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: [true, 'Patient is required']
  },
  // Reference to the doctor issuing the prescription
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Staff',
    required: [true, 'Doctor is required']
  },
  // Array of medications, using the medicationSchema
  medications: {
    type: [medicationSchema],
    validate: {
      validator: (medications) => medications.length > 0,
      message: 'At least one medication is required'
    }
  },
  // Additional instructions for the prescription
  instructions: {
    type: String,
    required: [true, 'Instructions are required'],
    trim: true
  },
  // Date when the prescription was issued
  dateIssued: {
    type: Date,
    default: Date.now
  },
  // Current status of the prescription
  status: {
    type: String,
    enum: {
      values: ['active', 'completed', 'cancelled'],
      message: '{VALUE} is not a valid status'
    },
    default: 'active'
  }
}, { 
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual for generating the prescription's URL
prescriptionSchema.virtual('url').get(function() {
  return `/prescriptions/${this._id}`;
});

// Pre-save hook to ensure the medications array is not empty
prescriptionSchema.pre('save', function(next) {
  if (this.medications.length === 0) {
    next(new Error('At least one medication is required'));
  } else {
    next();
  }
});

// Create and export the Prescription model
const Prescription = mongoose.model('Prescription', prescriptionSchema);

export default Prescription;
