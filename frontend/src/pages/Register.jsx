// import React, { useState } from "react";
// import Footer from "../components/Footer";
// import Header from "./../components/Header";
// import { FaFacebookF } from "react-icons/fa6";
// import { FaGoogle } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Register = () => {
//   const [state, setState] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const inputHandle = (e) => {
//     setState({
//       ...state,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const register = (e) => {
//     e.preventDefault();
//    console.log(state);
//   };
//   return (
//     <div>
//       <Header />
//       <div className="bg-slate-200 mt-4">
//         <div className="w-full justify-center items-center p-10">
//           <div className="grid grid-cols-2 w-[60%] bg-white mx-auto rounded-md">
//             <div className="px-8 py-8">
//               <h2 className="text-center w-full text-xl text-slate-600 font-bold">
//                 Register
//               </h2>

//               <div>
//                 <form onSubmit={register} className="text-slate-600">
//                   <div className="flex flex-col gap-1 mb-2">
//                     <label htmlFor="name">Name</label>
//                     <input
//                       onChange={inputHandle}
//                       value={state.name}
//                       type="text"
//                       id="name"
//                       placeholder="Enter Your Name"
//                       required
//                       className="border-2 border-slate-300 p-2 w-full rounded-md focus:outline-none focus:border-slate-600"
//                     />
//                   </div>
//                   <div className="flex flex-col gap-1 mb-2">
//                     <label htmlFor="email">Email</label>
//                     <input
//                       onChange={inputHandle}
//                       value={state.email}
//                       type="email"
//                       id="email"
//                       placeholder="Enter Your Email"
//                       required
//                       className="border-2 border-slate-300 p-2 w-full rounded-md focus:outline-none focus:border-slate-600"
//                     />
//                   </div>
//                   <div className="flex flex-col gap-1 mb-2">
//                     <label htmlFor="password">Password</label>
//                     <input
//                       onChange={inputHandle}
//                       value={state.password}
//                       type="password"
//                       id="password"
//                       placeholder="Enter Your Password"
//                       required
//                       className="border-2 border-slate-300 p-2 w-full rounded-md focus:outline-none focus:border-slate-600"
//                     />
//                   </div>

//                   <button className=" px-8 w-full py-2 bg-green-400 shadow-lg rounded-md text-white hover:bg-green-500 transition-colors focus:outline-none ">
//                     Register
//                   </button>
//                 </form>

//                 <div className="flex justify-center items-center py-2">
//                   <div className="h-[1px] bg-slate-300 w-[95%]"></div>
//                   <span className="px-3 text-slate-600">or</span>
//                   <div className="h-[1px] bg-slate-300 w-[95%]"></div>
//                 </div>
//                 <button className="flex justify-center items-center gap-2 mb-3 px-8 w-full py-2 bg-indigo-400 shadow-lg rounded-md text-white hover:bg-indigo-500 transition-colors focus:outline-none ">
//                   <span>
//                     <FaFacebookF />
//                   </span>
//                   <span>Login With Facebook</span>
//                 </button>
//                 <button className="flex justify-center items-center gap-2 mb-3 px-8 w-full py-2 bg-blue-400 shadow-lg rounded-md text-white hover:bg-blue-500 transition-colors focus:outline-none ">
//                   <span>
//                     <FaGoogle />
//                   </span>
//                   <span>Login With Google</span>
//                 </button>
//               </div>

//               <div className="text-center text-slate-600 pt-1">
//                 <p>
//                   You Have No Account?{" "}
//                   <Link className="text-blue-500" to="/login">
//                     Login
//                   </Link>{" "}
//                 </p>
//               </div>
//             </div>

//             <div className="w-full h-full py-4 pr-4">
//               <img src="/login.jpg" alt="" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Register;

import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "./../components/Header";
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { customer_register, messageClear } from "../store/reducers/authReducer";
import toast from "react-hot-toast";
import { FadeLoader } from "react-spinners";

const Register = () => {
  const { loader, errorMessage, successMessage } = useSelector(
    (state) => state.auth
  );

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const register = (e) => {
    e.preventDefault();
    dispatch(customer_register(state));
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
  }, [successMessage, errorMessage]);

  return (
    <div className="min-h-screen flex flex-col">
      {loader && (
        <div className="w-screen h-screen flex justify-center items-center bg-[rgba(0,0,0,0.7)] fixed top-0 left-0 z-[999]">
          <FadeLoader />
        </div>
      )}
      <Header />
      <div className="flex-1 bg-gradient-to-br from-indigo-50 to-purple-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row w-full bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Left Form Section */}
            <div className="w-full md:w-1/2 p-8 sm:p-10 lg:p-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Create Account
              </h2>

              <form onSubmit={register} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    onChange={inputHandle}
                    value={state.name}
                    name="name"
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    onChange={inputHandle}
                    name="email"
                    value={state.email}
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Password
                  </label>
                  <input
                    onChange={inputHandle}
                    value={state.password}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-500 text-white py-3 px-4 rounded-lg font-semibold 
                    hover:bg-emerald-600 transform transition-all duration-200 hover:scale-105 
                    focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 shadow-md"
                >
                  Register Now
                </button>
              </form>

              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-600">
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <button
                    className="flex items-center justify-center gap-2 w-full p-3 border border-gray-300 rounded-lg 
                      hover:border-emerald-500 hover:text-emerald-600 transform transition-all duration-200 
                      hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <FaFacebookF className="text-[#1877F2]" />
                    <span className="text-sm font-medium">Facebook</span>
                  </button>

                  <button
                    className="flex items-center justify-center gap-2 w-full p-3 border border-gray-300 rounded-lg 
                      hover:border-emerald-500 hover:text-emerald-600 transform transition-all duration-200 
                      hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <FaGoogle className="text-[#EA4335]" />
                    <span className="text-sm font-medium">Google</span>
                  </button>
                </div>

                <p className="mt-8 text-center text-gray-600">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="hidden md:block w-full md:w-1/2 bg-indigo-50">
              <img
                src="/login.jpg"
                alt="Registration Visual"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
