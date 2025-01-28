import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

const AdminLogin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-2xl">
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src="/path-to-your-logo/logo.png" // Replace with the actual logo path
            alt="Logo"
            className="h-16"
          />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-extrabold text-gray-800 text-center">Admin Login</h2>
        <p className="text-center text-gray-600">Sign in to manage the platform</p>

        {/* Form */}
        <form className="space-y-4">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <Link to="/admin-forgot-password" className="text-sm text-gray-700 underline">
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-gray-800 rounded-md shadow-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Log In
          </button>
        </form>

        {/* Or Divider */}
        <div className="relative flex justify-center items-center mt-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative bg-white px-4 text-sm text-gray-600">Or log in with</div>
        </div>

        {/* Social Login */}
        <div className="flex justify-center space-x-4 mt-6">
          <button
            className="flex items-center justify-center px-4 py-2 text-white bg-red-600 rounded-full shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            <FaGoogle className="text-xl" />
          </button>
          <button
            className="flex items-center justify-center px-4 py-2 text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <FaFacebook className="text-xl" />
          </button>
        </div>

        {/* No Account */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Not an admin?{' '}
          <Link to="/login" className="text-gray-700 underline">Go to User Login</Link>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
