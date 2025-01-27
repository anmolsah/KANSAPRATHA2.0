// import React from "react";

// const Register = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white">
//       <div className="w-full max-w-md p-8 space-y-6 bg-gray-100 rounded-lg shadow-2xl">
//         {/* Logo */}
//         <div className="flex justify-center mb-6">
//           <img
//             src="/logo01.png"
//             alt="Website Logo"
//             className="h-16 w-[800px] object-contain"
//           />
//         </div>

//         {/* Title */}
//         <h2 className="text-3xl font-extrabold text-gray-800 text-center">
//           Create Your Account
//         </h2>
//         <p className="text-center text-gray-600">
//           Join us to explore our exclusive collection
//         </p>

//         {/* Form */}
//         <form className="space-y-4">
//           {/* Name Field */}
//           <div>
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               className="mt-1 block w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//               placeholder="Enter your name"
//               required
//             />
//           </div>

//           {/* Email Field */}
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="mt-1 block w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//               placeholder="Enter your email"
//               required
//             />
//           </div>

//           {/* Password Field */}
//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               className="mt-1 block w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
//               placeholder="Enter your password"
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//           >
//             Register
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-2xl">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/logo01.png"
            alt="Website Logo"
            className="h-16 w-[400px] object-contain"
          />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-extrabold text-amber-700 text-center">
          Create Your Account
        </h2>
        <p className="text-center text-gray-600">
          Join us to explore our exclusive collection
        </p>

        {/* Form */}
        <form className="space-y-4">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              placeholder="Enter your name"
              required
            />
          </div>

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

          {/* Privacy Policy Field */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="privacy"
              name="privacy"
              className="w-4 h-4 text-amber-500 border-gray-300 rounded focus:ring-amber-500"
              required
            />
            <label htmlFor="privacy" className="ml-2 text-sm text-gray-700">
              I agree to the{" "}
              <a href="/privacy-policy" className="text-amber-700 underline">
                Privacy Policy
              </a>{" "}
              &{" "}
              <a href="/terms" className="text-amber-700 underline">
                Terms
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-amber-700 rounded-md shadow-md hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
          >
            Register
          </button>
        </form>

        {/* Already Have an Account */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-amber-700 underline">
            Sign in
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

export default Register;
