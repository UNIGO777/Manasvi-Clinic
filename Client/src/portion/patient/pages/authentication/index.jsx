import React, { useState } from "react";
import axios from "axios";
import AuthImage from './img.webp'; // Import your image here

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between sign-in and sign-up forms
  const [fullName, setFullName] = useState(""); // State for full name input
  const [email, setEmail] = useState(""); // State for email input
  const [phone, setPhone] = useState(""); // State for phone number input
  const [password, setPassword] = useState(""); // State for password input
  const [confirmPassword, setConfirmPassword] = useState(""); // State for confirm password input
  const [errors, setErrors] = useState({}); // State for storing validation errors

  // Function to validate form inputs
  const validateForm = () => {
    let formErrors = {}; // Object to hold validation errors
    if (isSignUp && !fullName) {
      formErrors.fullName = "Full Name is required"; // Check if full name is provided
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex to validate email format
    if (!email) {
      formErrors.email = "Email is required"; // Check if email is provided
    } else if (!emailRegex.test(email)) {
      formErrors.email = "Invalid email format"; // Check if email matches the regex
    }

    const phoneRegex = /^\d{10}$/; // Regex to validate phone number (10 digits)
    if (isSignUp && phone && !phoneRegex.test(phone)) {
      formErrors.phone = "Phone number must be a valid 10-digit number"; // Validate phone number format
    }

    if (!password) {
      formErrors.password = "Password is required"; // Check if password is provided
    } else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters"; // Check password length
    }

    if (isSignUp && password !== confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match"; // Validate password match
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
      if (isSignUp) {
        const response = await axios.post("/register", { fullName, email, phone, password }); // Handle sign-up
        console.log("Sign Up Success:", response.data); 
      } else {
        const response = await axios.post("/login", { email, password }); // Handle sign-in
        console.log("Sign In Success:", response.data); 
      }
    } catch (error) {
      console.error("Error:", error); // Log any errors
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Side Form Section */}
      <div className="md:w-1/2 bg-gray-50 flex items-center justify-center p-10">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6"> {/* Form box for sign-in/sign-up */}
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800"> {/* Darker text for heading */}
            {isSignUp ? "Sign Up" : "Sign In"}
          </h2>
          <p className="mb-4 text-center text-gray-700"> {/* Darker text for paragraph */}
            {isSignUp
              ? "Create a new account to get started!"
              : "Welcome back, you've been missed!"}
          </p>

          <form onSubmit={handleSubmit}>
            {isSignUp && (
              <div className="mb-4">
                <label className="block mb-1 text-gray-700">Full Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="John Doe"
                  required
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>
            )}

            <div className="mb-4">
              <label className="block mb-1 text-gray-700">Your Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
                placeholder="name@example.com"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {isSignUp && (
              <div className="mb-4">
                <label className="block mb-1 text-gray-700">Phone Number</label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md"
                  placeholder="1234567890"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
            )}

            <div className="mb-4">
              <label className="block mb-1 text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
                required
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {isSignUp && (
              <div className="mb-4">
                <label className="block mb-1 text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md"
                  required
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                )}
              </div>
            )}

            <div className="flex justify-between items-center mb-6">
              {!isSignUp && (
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2 text-gray-700">Remember Me</span>
                </label>
              )}
              {!isSignUp && (
                <a href="#" className="text-blue-600 hover:underline">
                  Forgot Password?
                </a>
              )}
            </div>

            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 bg-gradient-to-r from-purple-600 to-blue-600">
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </form>

          <p className="mt-4 text-center text-gray-700"> {/* Darker text for paragraph */}
            {isSignUp ? (
              <>
                Already have an account?{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline"
                  onClick={() => setIsSignUp(false)}
                >
                  Sign In
                </a>
              </>
            ) : (
              <>
                Don't have an account?{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline"
                  onClick={() => setIsSignUp(true)}
                >
                  Sign Up
                </a>
              </>
            )}
          </p>
        </div>
      </div>

      {/* Right Side Image and Content Section */}
      <div className="md:w-1/2 bg-blue-600 flex flex-col items-center justify-center p-10 text-white bg-gradient-to-b from-purple-600 to-blue-600">
        <div className="flex flex-col items-center">
          <img
            src={AuthImage}
            alt="Auth Illustration"
            className="w-3/4 max-w-lg mb-4" // Adjust image size here
          />
           {isSignUp ? (
          <h1 className="text-3xl font-bold mb-2">Join Us Today!</h1>
        ) : (
          <h1 className="text-3xl font-bold mb-2">Welcome Today!</h1>
        )}
          <p className="text-lg text-center">
            Start turning your ideas into reality. Sign now and take advantage
            of a wealth of information that will help you improve your business
            and stay ahead of the competition.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
