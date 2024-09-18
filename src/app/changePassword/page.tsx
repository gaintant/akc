"use client";
import React, { useState } from 'react';

const ChangePassword: React.FC = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleChangePassword = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
      const response = await fetch('/api/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ oldPassword, newPassword }),
      });

      // const data = await response.json();

      if (response.ok) {
        setMessage('Password changed successfully!');
      } else {
        setMessage(`Error: `);
      }
    } catch (error) {
      setMessage('An error occurred.');
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleChangePassword} className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Change Password</h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Old Password
        </label>
        <input
          type="password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Enter old password"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          New Password
        </label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
          placeholder="Enter new password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}"
          title="Must contain at least 8 characters, including one uppercase letter, one lowercase letter, one special character and one number."
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
      >
        Change Password
      </button>

      {message && <p className="mt-4 text-red-500">{message}</p>}
    </form>

  )
};

export default ChangePassword;
