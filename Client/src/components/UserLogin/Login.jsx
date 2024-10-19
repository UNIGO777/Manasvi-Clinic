import React, { useState } from 'react';
import LoginImage from '../../assets/Loing.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here, such as calling an API with the username and password.
    console.log('Username:', username, 'Password:', password);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-100">
      {/* Left Section with Image */}
      <div className="lg:w-1/2 w-full flex items-center justify-center bg-white p-12 lg:min-h-screen">
        <img
          src={LoginImage}
          alt="Login Password"
          className="w-full h-auto max-w-lg lg:max-h-screen"
        />
      </div>

      {/* Right Section with Form */}
      <div className="lg:w-1/2 w-full flex items-center justify-center bg-white p-12 lg:min-h-screen">
        <div className="w-full max-w-lg">
          <h2 className="text-2xl font-semibold underline text-indigo-600 cursor-pointer mb-6 text-left">
            LOGIN
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="username">
                Username
              </label>
              <input 
                type="text" 
                id="username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-2 block w-full px-4 py-3 border rounded-full shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                placeholder="Enter your username" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="password">
                Password
              </label>
              <input 
                type="password" 
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 block w-full px-4 py-3 border rounded-full shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                placeholder="Enter your password" 
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-indigo-600 text-white py-3 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
