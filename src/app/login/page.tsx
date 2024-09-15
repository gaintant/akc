'use client';

import { useState } from 'react';
import axios from 'axios';

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    const item = {
      id: 4,
      email: email,
      password: 'password',
      role: 'user',
      verified: false
    }; // Example item

    try {
      const response = await fetch('/api/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ item }), // Send item in the request body
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Item added:', data.message);
        setSuccess('email registered')
      } else {
        console.error('Error adding item:', data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {

      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const { token } = await response.json();
        // Save the token in localStorage
        localStorage.setItem('token', token);
        setSuccess('Login successful! Redirecting...');
        // Redirect after a delay (for demonstration purposes)
        setTimeout(() => {
          window.location.href = '/aboutAKC';
        }, 1000);
      } else {
        const { message } = await response.json();
        setError(message || 'An error occurred');
      }
    } catch (error) {
      setError('An error occurred');
    }
  };

  // return (
  //   <div className="flex items-center justify-center min-h-screen bg-gray-100">
  //     <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
  //       <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
  //       <form onSubmit={handleLogin}>
  //         {error && <p className="text-red-500">{error}</p>}
  //         {success && <p className="text-green-500">{success}</p>}
  //         <div className="mb-4">
  //           <label htmlFor="email" className="block mb-2 text-sm font-medium">
  //             Email
  //           </label>
  //           <input
  //             type="email"
  //             id="email"
  //             className="w-full p-2 border border-gray-300 rounded-lg"
  //             value={email}
  //             onChange={(e) => setEmail(e.target.value)}
  //             required
  //           />
  //         </div>
  //         <div className="mb-4">
  //           <label htmlFor="password" className="block mb-2 text-sm font-medium">
  //             Password
  //           </label>
  //           <input
  //             type="password"
  //             id="password"
  //             className="w-full p-2 border border-gray-300 rounded-lg"
  //             value={password}
  //             onChange={(e) => setPassword(e.target.value)}
  //             required
  //           />
  //         </div>
  //         <button
  //           type="submit"
  //           className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
  //         >
  //           Login
  //         </button>
  //       </form>
  //     </div>
  //   </div>
  // );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <div className="mb-6">
          <button
            className={`mr-4 p-2 font-bold ${activeTab === 'login' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button
            className={`p-2 font-bold ${activeTab === 'signup' ? 'text-blue-500 border-b-2 border-blue-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('signup')}
          >
            Sign Up
          </button>
        </div>

        {activeTab === 'login' ? (
          <form onSubmit={handleLogin}>
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2 text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleSignUp}>
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
