import React from "react";
import Footer from "../components/Footer";
import Header from "./../components/Header";

const Register = () => {
  return (
    <div>
      <Header />
      <div className="bg-slate-200 mt-4">
        <div className="w-full justify-center items-center p-10">
          <div className="grid grid-cols-2 w-[60%] bg-white mx-auto rounded-md">
            <div className="px-8 py-8">
              <h2 className="text-center w-full text-xl text-slate-600 font-bold">
                Register
              </h2>
            </div>

            <div>
              <form className="text-slate-600">
                <div className="flex flex-col gap-1 mb-2">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter Your Name"
                    required
                    className="border-2 border-slate-300 p-2 w-full rounded-md focus:outline-none focus:border-slate-600"
                  />
                </div>
                <div className="flex flex-col gap-1 mb-2">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter Your Email"
                    required
                    className="border-2 border-slate-300 p-2 w-full rounded-md focus:outline-none focus:border-slate-600"
                  />
                </div>
                <div className="flex flex-col gap-1 mb-2">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter Your Password"
                    required
                    className="border-2 border-slate-300 p-2 w-full rounded-md focus:outline-none focus:border-slate-600"
                  />
                </div>

                <button className=" px-8 w-full py-2 bg-green-400 shadow-lg rounded-md text-white hover:bg-green-500 transition-colors focus:outline-none ">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
