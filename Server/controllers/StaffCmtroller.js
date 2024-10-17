import Staff from '../models/Staff.js';

// Create a new staff member
export const createStaff = async (req, res) => {
  try {
    const { firstName, lastName, email, role, phoneNumber, address } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !role || !phoneNumber || !address) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create a new staff instance
    const newStaff = new Staff({
      firstName,
      lastName,
      email,
      role,
      phoneNumber,
      address
    });

    // Save the staff to the database
    const savedStaff = await newStaff.save();
    res.status(201).json(savedStaff);
  } catch (error) {
    // Handle any errors that occur during the creation of the staff member
    res.status(500).json({ message: 'Error creating staff', error });
  }
};

// Get a staff member by ID
export const getStaffById = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ID
    if (!id) {
      return res.status(400).json({ message: 'Staff ID is required' });
    }

    // Find the staff by ID
    const staff = await Staff.findById(id);

    // Check if staff exists
    if (!staff) {
      return res.status(404).json({ message: 'Staff not found' });
    }

    // Send the staff member as a JSON response
    res.status(200).json(staff);
  } catch (error) {
    // Handle any errors that occur while fetching the staff member by ID
    res.status(500).json({ message: 'Error fetching staff', error });
  }
};

// Get all staff members
export const getAllStaff = async (req, res) => {
  try {
    // Fetch all staff members from the database
    const staffMembers = await Staff.find();
    // Send the list of staff members as a JSON response
    res.status(200).json(staffMembers);
  } catch (error) {
    // Handle any errors that occur while fetching the staff members
    res.status(500).json({ message: 'Error fetching staff members', error });
  }
};

// Update a staff member by ID
export const updateStaffById = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    // Validate ID
    if (!id) {
      return res.status(400).json({ message: 'Staff ID is required' });
    }

    // Find the staff by ID and update with new data
    const updatedStaff = await Staff.findByIdAndUpdate(id, updates, { new: true });

    // Check if staff exists
    if (!updatedStaff) {
      return res.status(404).json({ message: 'Staff not found' });
    }

    // Send the updated staff member as a JSON response
    res.status(200).json(updatedStaff);
  } catch (error) {
    // Handle any errors that occur while updating the staff member by ID
    res.status(500).json({ message: 'Error updating staff', error });
  }
};

// Delete a staff member by ID
export const deleteStaffById = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ID
    if (!id) {
      return res.status(400).json({ message: 'Staff ID is required' });
    }

    // Find the staff by ID and delete
    const deletedStaff = await Staff.findByIdAndDelete(id);

    // Check if staff exists
    if (!deletedStaff) {
      return res.status(404).json({ message: 'Staff not found' });
    }

    // Send a success message as a JSON response
    res.status(200).json({ message: 'Staff deleted successfully' });
  } catch (error) {
    // Handle any errors that occur while deleting the staff member by ID
    res.status(500).json({ message: 'Error deleting staff', error });
  }
};
