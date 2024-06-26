import React from 'react';

const Register: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200 space-x-8">
      <div className="flex flex-col items-center space-y-2">
        <a href="/pre-registration" className="relative inline-block px-4 py-2 font-medium group">
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-gray-600 group-hover:translate-y-0 group-hover:translate-x-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-gray-600 group-hover:bg-gray-600"></span>
          <span className="relative text-black group-hover:text-white">For New School</span>
        </a>
        <span className="text-gray-700">This will take you to the registration page</span>
      </div>
      <div className="flex flex-col items-center space-y-2">
        <a href="/register/existing" className="relative inline-block px-4 py-2 font-medium group">
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-gray-600 group-hover:translate-y-0 group-hover:translate-x-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-gray-600 group-hover:bg-gray-600"></span>
          <span className="relative text-black group-hover:text-white">For Existing School</span>
        </a>
        <span className="text-gray-700">This will take to the login ID and password page</span>
      </div>
    </div>
  );
};

export default Register;
