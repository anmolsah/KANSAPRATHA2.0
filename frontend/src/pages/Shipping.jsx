import React from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import img1 from "../assets/img1.jpg";

const Shipping = () => {
  return (
    <div>
      <Header />
      <section
        className="h-64 bg-cover bg-no-repeat relative"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-indigo-950/80">
          <div className="max-w-7xl mx-auto h-full px-4">
            <div className="flex flex-col justify-center items-center h-full text-center">
              <h2 className="text-4xl font-bold text-gray-50 mb-2">Shipping</h2>
              <div className="flex items-center text-gray-200">
                <Link
                  to="/"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Home
                </Link>
                <IoIosArrowForward className="mx-2" />
                <span className="text-gray-50">Shipping</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eeeeee]">
        <div className="w-[85%]">
          <div className="w-full flex flex-wrap">
            <div className="w-[67%]">
              <div className="flex flex-col gap-3">
                <div className="bg-white p-6 shadow-sm rounded-md">
                  <h2 className="text-slate-600 font-bold pb-3">
                    Shipping Information
                  </h2>
                  <form>
                    <div className="flex w-full gap-5 text-slate-600">
                      <div className="flex flex-col gap-1 mb-2 w-full">
                        <label htmlFor="name" className="text-slate-600">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md"
                          placeholder="Enter Your Name"
                        />
                      </div>
                      <div className="flex flex-col gap-1 mb-2 w-full">
                        <label htmlFor="address" className="text-slate-600">
                          Address
                        </label>
                        <input
                          type="text"
                          name="address"
                          id="address"
                          className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md"
                          placeholder="Enter Your Address"
                        />
                      </div>
                    </div>
                    <div className="flex w-full gap-5 text-slate-600">
                      <div className="flex flex-col gap-1 mb-2 w-full">
                        <label htmlFor="phone" className="text-slate-600">
                          Phone
                        </label>
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md"
                          placeholder="Enter Your Phone Number"
                        />
                      </div>
                      <div className="flex flex-col gap-1 mb-2 w-full">
                        <label htmlFor="post" className="text-slate-600">
                          Post
                        </label>
                        <input
                          type="text"
                          name="post"
                          id="post"
                          className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md"
                          placeholder="Enter Your Post"
                        />
                      </div>
                    </div>
                    <div className="flex w-full gap-5 text-slate-600">
                      <div className="flex flex-col gap-1 mb-2 w-full">
                        <label htmlFor="province" className="text-slate-600">
                          Province
                        </label>
                        <input
                          type="text"
                          name="province"
                          id="province"
                          className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md"
                          placeholder="Enter Your Province"
                        />
                      </div>
                      <div className="flex flex-col gap-1 mb-2 w-full">
                        <label htmlFor="city" className="text-slate-600">
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md"
                          placeholder="Enter Your City"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Shipping;
