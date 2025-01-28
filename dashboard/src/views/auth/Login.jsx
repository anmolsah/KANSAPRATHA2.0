import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-2xl">
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src="/logo01.png" // Replace with your actual logo path
            alt="Logo"
            className="h-16 w-[400px] object-contain"
          />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-extrabold text-amber-700 text-center">
          Welcome Back
        </h2>
        <p className="text-center text-gray-600">
          Log in to continue exploring our collection
        </p>

        {/* Form */}
        <form className="space-y-4">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <Link
              to="/forgot-password"
              className="text-sm text-amber-700 underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-amber-700 rounded-md shadow-md hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            Log In
          </button>
        </form>

        {/* No Account */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="text-amber-700 underline">
            Sign up
          </Link>
        </p>

        {/* Social Login */}
        <div className="flex justify-center space-x-4 mt-6">
          <button className="flex items-center justify-center px-8 py-2 text-white bg-red-600 rounded-xl shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
            <FaGoogle className="text-xl" />
          </button>
          <button className="flex items-center justify-center px-8 py-2 text-white bg-blue-600 rounded-xl shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <FaFacebook className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
