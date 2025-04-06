import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-400">
      <div className="w-[85%] flex flex-wrap mx-auto border-b py-16">
        <div classNmae="w-3/12 lg:w-4/12">
          <div className="flex flex-col gap-3">
            <img src="/logo01.png" alt="logo" className="w-[250px] h-10" />
            <ul className="flex flex-col gap-2 text-slate-600">
              <li>2nd Floor Bangalore, Karnataka - 560001 India</li>
              <li>Phone: 8569746565</li>
              <li>Email: support@gmail.com</li>
            </ul>
          </div>
        </div>
        <div classNmae="w-5/12 lg:w-8/12 sm:w-full">
          <div className="flex justify-center sm:justify-start sm:mt-6 w-full">
            <div className="">
              <h2 className="font-bold text-lg">UseFull Links</h2>
              <div className="flex justify-between gap-[80px] lg:gap-[40px]">
                <ul className="flex flex-col gap-2 text-slate-600 text-sm font-semibold">
                  <li>
                    <Link>About Us</Link>
                  </li>
                  <li>
                    <Link>About Our Shop</Link>
                  </li>
                  <li>
                    <Link>Delivery Information</Link>
                  </li>
                  <li>
                    <Link>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link>About Us</Link>
                  </li>
                  <li>
                    <Link>Blogs</Link>
                  </li>
                </ul>

                <ul className="flex flex-col gap-2 text-slate-600 text-sm font-semibold">
                  <li>
                    <Link>Our Service</Link>
                  </li>
                  <li>
                    <Link>Company Profile</Link>
                  </li>
                  <li>
                    <Link>Delivery Information</Link>
                  </li>
                  <li>
                    <Link>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link>About Us</Link>
                  </li>
                  <li>
                    <Link>Blogs</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="w-4/12 lg:w-full lg:mt-6">
          <div className="w-full flex flex-col justify-start gap-5">
            <h2 className="font-bold text-lg mb-2">Join our Shop</h2>
            <span>
              Get Email updates about our latest shop and special offer
            </span>
            <div classsName="h-[50px] w-full bg-white border relative">
                <input className="h-full bg-transparent w-full px-3 outline-0" 
                type="text"
                placeholder="Enter your email"
                />
                <button className="h-full absolute right-0 uppercase px-4 font-bold text-sm text-black bg-red-600">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
