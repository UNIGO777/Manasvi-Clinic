import mongoose from 'mongoose';

// Define the Payment schema
const paymentSchema = new mongoose.Schema({
  // Patient reference
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: [true, 'Patient is required']
  },
  // Payment amount
  amount: {
    type: Number,
    required: [true, 'Amount is required'],
    min: [0, 'Amount cannot be negative']
  },
  // Payment method
  paymentMethod: {
    type: String,
    required: [true, 'Payment method is required'],
    enum: {
      values: ['cash', 'credit card', 'debit card', 'insurance', 'other'],
      message: '{VALUE} is not a valid payment method'
    }
  },
  // Date of payment
  paymentDate: {
    type: Date,
    default: Date.now
  },
  // Payment status
  status: {
    type: String,
    required: [true, 'Payment status is required'],
    enum: {
      values: ['pending', 'completed', 'failed', 'refunded'],
      message: '{VALUE} is not a valid payment status'
    },
    default: 'pending'
  },
  // Optional description
  description: {
    type: String,
    trim: true
  },
  // Related appointment reference
  relatedAppointment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Appointment'
  },
  // Related prescription reference
  relatedPrescription: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Prescription'
  }
}, {
  timestamps: true
});

// Virtual for payment's URL
paymentSchema.virtual('url').get(function() {
  return `/payments/${this._id}`;
});

// Pre-save hook to ensure amount is not negative
paymentSchema.pre('save', function(next) {
  if (this.amount < 0) {
    next(new Error('Amount cannot be negative'));
  } else {
    next();
  }
});

// Create the Payment model
const Payment = mongoose.model('Payment', paymentSchema);

export default Payment;
