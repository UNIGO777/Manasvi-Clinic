import express from 'express';
import { createStaff, getAllStaff, getStaffById, updateStaffById, deleteStaffById } from '../controllers/StaffController.js';

const router = express.Router();

// Route to create a new staff member
router.post('/staff', async (req, res) => {
  try {
    // Call the createStaff controller function
    await createStaff(req, res);
  } catch (error) {
    // Handle any errors that occur during the creation of the staff member
    console.error(error.stack);
    res.status(500).json({ message: 'Error creating staff', error: error.message });
  }
});

// Route to get a staff member by ID
router.get('/staff/:id', async (req, res) => {
  try {
    // Call the getStaffById controller function
    await getStaffById(req, res);
  } catch (error) {
    // Handle any errors that occur while fetching the staff member by ID
    console.error(error.stack);
    res.status(500).json({ message: 'Error fetching staff', error: error.message });
  }
});

// Route to get all staff members
router.get('/staff', async (req, res) => {
  try {
    // Fetch all staff members from the database
    const staffMembers = await getAllStaff();
    // Send the list of staff members as a JSON response
    res.status(200).json(staffMembers);
  } catch (error) {
    // Handle any errors that occur while fetching the staff members
    console.error(error.stack);
    res.status(500).json({ message: 'Error fetching staff members', error: error.message });
  }
});

// Route to update a staff member by ID
router.put('/staff/:id', async (req, res) => {
  try {
    // Call the updateStaffById controller function
    await updateStaffById(req, res);
  } catch (error) {
    // Handle any errors that occur while updating the staff member by ID
    console.error(error.stack);
    res.status(500).json({ message: 'Error updating staff', error: error.message });
  }
});

// Route to delete a staff member by ID
router.delete('/staff/:id', async (req, res) => {
  try {
    // Call the deleteStaffById controller function
    await deleteStaffById(req, res);
  } catch (error) {
    // Handle any errors that occur while deleting the staff member by ID
    console.error(error.stack);
    res.status(500).json({ message: 'Error deleting staff', error: error.message });
  }
});

export default router;
