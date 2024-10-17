import express from 'express';
import { createStaff, getStaffById, updateStaffById, deleteStaffById } from '../controllers/StaffController.js';

const router = express.Router();

// Route to create a new staff member
router.post('/staff', async (req, res) => {
  try {
    // Call the createStaff controller function
    await createStaff(req, res);
  } catch (error) {
    // Handle any errors that occur during the creation of the staff member
    res.status(500).json({ message: 'Error creating staff', error });
  }
});

// Route to get a staff member by ID
router.get('/staff/:id', async (req, res) => {
  try {
    // Call the getStaffById controller function
    await getStaffById(req, res);
  } catch (error) {
    // Handle any errors that occur while fetching the staff member by ID
    res.status(500).json({ message: 'Error fetching staff', error });
  }
});

// Route to get all staff members
router.get('/staff', async (req, res) => {
  try {
    // Fetch all staff members from the database
    const staffMembers = await Staff.find();
    // Send the list of staff members as a JSON response
    res.status(200).json(staffMembers);
  } catch (error) {
    // Handle any errors that occur while fetching the staff members
    res.status(500).json({ message: 'Error fetching staff members', error });
  }
});

// Route to update a staff member by ID
router.put('/staff/:id', async (req, res) => {
  try {
    // Call the updateStaffById controller function
    await updateStaffById(req, res);
  } catch (error) {
    // Handle any errors that occur while updating the staff member by ID
    res.status(500).json({ message: 'Error updating staff', error });
  }
});

// Route to delete a staff member by ID
router.delete('/staff/:id', async (req, res) => {
  try {
    // Call the deleteStaffById controller function
    await deleteStaffById(req, res);
  } catch (error) {
    // Handle any errors that occur while deleting the staff member by ID
    res.status(500).json({ message: 'Error deleting staff', error });
  }
});

export default router;
