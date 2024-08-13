import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gmail, setGmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      setMessageType('error');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        username,
        password,
        gmail
      });

      if (response.status === 201) {
        setMessage('Registration successful');
        setMessageType('success');
      }
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setMessage('Registration failed: Username or Gmail might already exist');
      } else {
        setMessage('Registration failed: An error occurred');
      }
      setMessageType('error');
    }
  };

  return (
    <div className="flex justify-evenly flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Left Section */}
      <div className="lg:w-5/12 flex flex-col justify-center items-start p-8 lg:p-12 lg:ml-12 ">
        <h1 className="text-4xl lg:text-5xl font-bold mb-2">Welcome to <span className="text-blue-600">BookStore</span></h1>
        <p className="text-lg lg:text-xl text-gray-700">Your digital library awaits. Register to start exploring!</p>
      </div>

      {/* Right Section */}
      <div className="lg:w-7/12 flex justify-center items-center p-4 lg:p-0 ">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border-2 border-blue-300   hover:border-blue-500 transition-colors duration-300">
          <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>
          {message && (
            <div className={`mb-4 p-2 rounded ${messageType === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {message}
            </div>
          )}
          <div className="mb-4">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg placeholder-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              value={gmail}
              onChange={(e) => setGmail(e.target.value)}
              placeholder="Gmail"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg placeholder-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg placeholder-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg placeholder-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
