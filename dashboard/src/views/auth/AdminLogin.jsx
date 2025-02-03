import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { admin_login } from "../../store/reducers/authReducer";
import { ClipLoader } from "react-spinners";
const AdminLogin = () => {
  const dispatch = useDispatch();
  const { loader } = useSelector((state) => state.auth);
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(admin_login(state));
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-2xl">
        <div className="flex justify-center">
          <img
            src="/logo01.png"
            alt="Logo"
            className="h-16 w-[300px] object-contain"
          />
        </div>

        <h2 className="text-3xl font-extrabold text-gray-800 text-center">
          Admin Login
        </h2>
        <p className="text-center text-gray-600">
          Sign in to manage the platform
        </p>

        <form onSubmit={submit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              onChange={inputHandle}
              value={state.email}
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              onChange={inputHandle}
              value={state.password}
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex justify-end">
            <Link
              to="/admin-forgot-password"
              className="text-sm text-gray-700 underline"
            >
              Forgot password?
            </Link>
          </div>

          <button
            disabled={loader ? true : false}
            type="submit"
            className="w-full px-4 py-2 text-white bg-gray-800 rounded-md shadow-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            {loader ? <ClipLoader color="#ffffff" /> : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
