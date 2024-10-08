import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const navigate = useNavigate();
  const location = useLocation(); // Initialize useLocation

  // Check if there's a message passed from redirect
  React.useEffect(() => {
    if (location.state?.message) {
      setMessage(location.state.message);
      setMessageType('error'); // Set message type based on the situation
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { username, password });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data));
      const isAdmin = res.data.isAdmin;

      setMessage('Login successful, redirecting...');
      setMessageType('success');

      // Redirect based on role
      setTimeout(() => {
        if (isAdmin) {
          navigate('/admin');
        } else {
          navigate('/home');
        }
      }, 2000);
    } catch (err) {
      console.error(err);
      setMessage('Username or password incorrect');
      setMessageType('error');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        {message && (
          <div className={`mb-4 p-2 rounded ${messageType === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {message}
          </div>
        )}
        <div className="mb-4">
          <label className="block text-gray-700">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={messageType === 'success'}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
