import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaCartShopping, FaHeart } from "react-icons/fa6";

const Footer = () => {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  const { cart_product_count, wishlist_count } = useSelector(
    (state) => state.cart
  ); 
  return (
    <footer className="bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 py-16 border-b border-gray-200/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex flex-col gap-4">
              <img
                src="/logo01.png"
                alt="logo"
                className="w-48 h-10 object-contain"
              />
              <ul className="flex flex-col gap-2 text-gray-50">
                <li className="text-sm">
                  2nd Floor Bangalore, Karnataka - 560001 India
                </li>
                <li className="text-sm">Phone: 8569746565</li>
                <li className="text-sm">Email: support@gmail.com</li>
              </ul>
            </div>
          </div>

          {/* Useful Links */}
          <div className="md:col-span-1">
            <div className="flex justify-center md:justify-start">
              <div>
                <h2 className="font-bold text-lg text-gray-800 mb-4">
                  Useful Links
                </h2>
                <div className="flex gap-12">
                  <ul className="flex flex-col gap-3 text-gray-50 text-sm">
                    {[
                      "About Us",
                      "Our Shop",
                      "Delivery",
                      "Privacy",
                      "Blogs",
                    ].map((link) => (
                      <li key={link}>
                        <Link className="hover:text-emerald-400 transition-colors">
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <ul className="flex flex-col gap-3 text-gray-50 text-sm">
                    {[
                      "Services",
                      "Profile",
                      "Information",
                      "Policy",
                      "Contact",
                    ].map((link) => (
                      <li key={link}>
                        <Link className="hover:text-emerald-400 transition-colors">
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <div className="flex flex-col gap-5">
              <h2 className="font-bold text-lg text-gray-800 mb-2">
                Join our Shop
              </h2>
              <span className="text-gray-50 text-sm">
                Get Email updates about our latest shop and special offers
              </span>
              <div className="relative">
                <input
                  className="w-full h-12 px-4 rounded-lg bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="absolute right-0 top-0 h-full bg-emerald-500 text-white px-6 rounded-r-lg hover:bg-emerald-600 transition-colors text-sm font-semibold">
                  Subscribe
                </button>
              </div>
              <div className="flex gap-4 mt-2">
                {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="p-2 bg-white/10 rounded-full text-gray-50 hover:bg-emerald-500 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-indigo-950 py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-gray-50 text-sm">
            Copyright &copy; 2023 All Rights Reserved
          </span>
        </div>
      </div>


      {/* <div className="hidden fixed-[50px] h-[110px] bottom-3 right-2 bg-white rounded-full p-2">
        <div className="w-full h-full flex gap-3 flex-col justify-center items-center">
          <div className="relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-white hover:bg-green-400 transition-colors">
            <span>
              <FaCartShopping />
            </span>
          </div>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
