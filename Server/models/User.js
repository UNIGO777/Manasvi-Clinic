
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Define the User schema
const userSchema = new mongoose.Schema({
  // User's full name
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  // User's email address (used for login)
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: function(v) {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: props => `${props.value} is not a valid email address!`
    }
  },
  // User's password (hashed)
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [8, 'Password must be at least 8 characters long']
  },
  // User's role in the system
  role: {
    type: String,
    enum: {
      values: ['admin', 'doctor', 'staff'],
      message: '{VALUE} is not a valid role'
    },
    default: 'staff'
  },
  // Flag to indicate if the user account is active
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  // Add timestamps for when the document is created and last modified
  timestamps: true
});

// Pre-save hook to hash password before saving
userSchema.pre('save', async function(next) {
  // Only hash the password if it has been modified (or is new)
  if (!this.isModified('password')) return next();
  // Hash the password with a salt of 12 rounds
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Method to check if provided password is correct
userSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
  // Compare the candidate password with the stored hashed password
  return await bcrypt.compare(candidatePassword, userPassword);
};

// Create the User model from the schema
const User = mongoose.model('User', userSchema);

export default User;
