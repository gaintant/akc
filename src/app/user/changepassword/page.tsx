// "use client";
// import React, { useState } from 'react';

// const ChangePassword: React.FC = () => {
//   const [newPassword, setNewPassword] = useState('');
//   const [message, setMessage] = useState('');

//     return (
//     <form onSubmit={handleChangePassword} className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-semibold mb-4 text-gray-800">Change Password</h2>

//       <div className="mb-6">
//         <label className="block text-gray-700 font-medium mb-2">
//           New Password
//         </label>
//         <input
//           type="password"
//           value={newPassword}
//           onChange={(e) => setNewPassword(e.target.value)}
//           className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
//           placeholder="Enter new password"
//           pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}"
//           title="Must contain at least 8 characters, including one uppercase letter, one lowercase letter, one special character and one number."
//           required
//         />
//       </div>

//       <button
//         type="submit"
//         className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
//       >
//         Change Password
//       </button>

//       {message && <p className="mt-4 text-red-500">{message}</p>}
//     </form>

//   )
// };

// export default ChangePassword;
