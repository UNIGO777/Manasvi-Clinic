import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
// import crypto from 'crypto'; // Importing crypto module
import { randomBytes } from 'crypto'; // Import randomBytes


// Import route files
import appointmentRoutes from './routes/Appointment.js';
import userRoutes from './routes/AuthRoute.js';
import patientRoutes from './routes/PatientRoute.js';
import paymentRoutes from './routes/Payment.js';
import prescriptionRoutes from './routes/PrescriptionRoute.js';
import staffRoutes from './routes/Staff.js';

dotenv.config();

console.log(process.env.PORT, process.env.MONGODB_URI, "process.env.PORT, process.env.MONGODB_URI");

const app = express();
const port = process.env.PORT || 5000;


// Generate the secret key
const secretKey = randomBytes(32).toString('hex');
console.log('Secret Key:', secretKey);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Base URL for API
app.use('/api', (req, res, next) => {
  console.log('API Route:', req.method, req.path); // Logging API requests
  next();
});

// Define routes
app.use('/api/appointments', appointmentRoutes);
app.use('/api/users', userRoutes);
app.use('/api/patient', patientRoutes);
app.use('/api/prescription', prescriptionRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/staff', staffRoutes);

// Example API Route
app.get('/api', (req, res) => {
  res.send('Welcome to the API!');
});

// // Example POST Route for Appointments
// app.post('/api/appointments', (req, res) => {
//   const appointmentData = req.body; // Get data from request body
//   // Here you would typically save the appointment data to the database
//   res.json({ message: 'Appointment created successfully', data: appointmentData });
// });

// Start server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
