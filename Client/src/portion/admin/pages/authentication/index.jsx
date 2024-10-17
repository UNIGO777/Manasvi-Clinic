import React, { useState } from "react";
import axios from "axios";
import AuthImage from '../authentication/img1.png'; 

const AuthPage = () => {
  const [email, setEmail] = useState(""); // State for email input
  const [password, setPassword] = useState(""); // State for password input
  const [errors, setErrors] = useState({}); // State for storing validation errors

  // Function to validate form inputs
  const validateForm = () => {
    let formErrors = {}; // Object to hold validation errors

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex to validate email format
    if (!email) {
      formErrors.email = "Email is required"; // Check if email is provided
    } else if (!emailRegex.test(email)) {
      formErrors.email = "Invalid email format"; // Check if email matches the regex
    }

    if (!password) {
      formErrors.password = "Password is required"; // Check if password is provided
    } else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters"; // Check password length
    }

    return formErrors; // Return any validation errors
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setErrors({}); // Reset errors
    const validationErrors = validateForm(); // Validate form inputs
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set errors if validation fails
      return; 
    }

    try {
      const response = await axios.post("/login", { email, password }); // Handle sign-in
      console.log("Sign In Success:", response.data); 
    } catch (error) {
      console.error("Error:", error); // Log any errors
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
    {/* Left Side Form Section */}
    <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8 md:p-12 shadow-lg">
      <div className="w-full max-w-md bg-gray-50 rounded-lg shadow-xl p-8 md:p-10 transition-transform transform hover:scale-105">
        {/* Form box for sign-in */}
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">
          Admin Sign In
        </h2>
  
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block mb-2 text-lg font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow"
              placeholder="name@example.com"
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">{errors.email}</p>
            )}
          </div>
  
          <div className="mb-6">
            <label className="block mb-2 text-lg font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow"
              required
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-2">{errors.password}</p>
            )}
          </div>
  
          <div className="flex justify-between items-center mb-6">
            <label className="inline-flex items-center text-gray-600">
              <input type="checkbox" className="form-checkbox rounded text-purple-600" />
              <span className="ml-2">Remember Me</span>
            </label>
            <a href="#" className="text-purple-600 hover:underline">
              Forgot Password?
            </a>
          </div>
  
          <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-md shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
            Sign In
          </button>
        </form>
      </div>
    </div>
  
    {/* Right Side Image and Content Section */}
    <div className="hidden md:flex md:w-1/2 bg-gradient-to-b from-purple-600 to-blue-600 flex-col items-center justify-center p-6 text-white relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div> {/* Gradient Overlay */}
      <div className="relative z-10 flex flex-col items-center">
        <img
          src={AuthImage}
          alt="Auth Illustration"
          className="w-3/4 max-w-md mb-4 opacity-90 hover:opacity-100 transition-opacity" // Adjust image size here
        />
        <h1 className="text-4xl font-bold mb-2">Join Us Today!</h1>
        <p className="text-lg text-center max-w-md leading-relaxed">
          Efficient care starts with efficient admin. Your work keeps the clinic running smoothly, ensuring every patient is cared for.
        </p>
      </div>
    </div>
  </div>
  );
};

export default AuthPage;
