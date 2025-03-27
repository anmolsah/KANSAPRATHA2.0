import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { IoMdArrowDropdown, IoMdPhonePortrait } from "react-icons/io";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaList,
  FaLock,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [showSideBar, setShowSideBar] = useState(true);
  const user = true;

  return (
    <div className="w-full ">
      <div className="header-top bg-gray-900 md-lg:hidden">
        <div className="w-[85%] lg:w-[90%] mx-auto">
          <div className="flex w-full justify-between items-center h-[60px] text-white">
            <ul className="flex justify-start items-center gap-8 font-medium">
              <li className="flex relative justify-center items-center gap-2 text-sm after:absolute after:h-[25px] after:w-[1px] after:bg-yellow-400 after:right-[-16px]">
                <span className="text-yellow-400 bg-white p-1 rounded-full shadow-md">
                  <MdEmail className="text-gray-900" />
                </span>
                <span className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
                  kpsupport@gmail.com
                </span>
              </li>
              <li className="flex relative justify-center items-center gap-2 text-sm">
                <span className="text-yellow-400 bg-white p-1 rounded-full shadow-md">
                  <IoMdPhonePortrait className="text-gray-900" />
                </span>
                <span className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
                  +(91) 8250676762
                </span>
              </li>
            </ul>

            <div className="flex justify-center items-center gap-8">
              <div className="flex justify-center items-center gap-4">
                {[FaFacebook, FaTwitter, FaLinkedin, FaGithub].map(
                  (Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="text-white hover:text-yellow-400 hover:scale-110 transition-all duration-300 text-lg"
                    >
                      <Icon />
                    </a>
                  )
                )}
              </div>

              <div className="flex group cursor-pointer text-sm justify-center items-center gap-1 relative">
                <div className="flex items-center gap-2 bg-yellow-400 px-3 py-1 rounded-full hover:bg-yellow-500 transition-colors duration-300 shadow-lg">
                  <img
                    className="w-5 h-4 rounded-sm"
                    src="images/india.png"
                    alt="language"
                  />
                  <span className="text-gray-900">
                    <IoMdArrowDropdown />
                  </span>
                </div>
                <ul className="absolute invisible group-hover:visible transition-all duration-300 top-full mt-2 rounded-md shadow-xl bg-gray-800 text-white w-[120px] py-2 z-50 border border-yellow-400">
                  {["English", "Hindi", "Spanish", "French", "German"].map(
                    (lang, i) => (
                      <li
                        key={i}
                        className="px-3 py-1 hover:bg-yellow-500 hover:text-gray-900 cursor-pointer"
                      >
                        {lang}
                      </li>
                    )
                  )}
                </ul>
              </div>

              {user ? (
                <Link
                  className="flex justify-center items-center gap-2 bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-full transition-all duration-300 shadow-md text-gray-900 font-bold"
                  to="/dashboard"
                >
                  <span className="bg-white p-1 rounded-full shadow-md">
                    <FaUser className="text-sm text-yellow-400" />
                  </span>
                  <span>Anni Khana</span>
                </Link>
              ) : (
                <Link
                  className="flex justify-center items-center gap-2 bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-full transition-all duration-300 shadow-md text-gray-900 font-bold"
                  to="/login"
                >
                  <span className="bg-white p-1 rounded-full shadow-md">
                    <FaLock className="text-sm text-yellow-400" />
                  </span>
                  <span>Login</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="w-white">
        <div className="w-[85%] lg:w-[90%] mx-auto">
          <div className="h-[80px] md-lg:h-[100px] flex justify-between items-center flex-wrap">
            <Link to="/">
              <img src="/logo01.png" alt="" />
            </Link>
            <div
              className="justify-center items-center w-[30px] h-[30px] bg-white text-slate-600 border border-slate-600 rounded-md cursor-pointer md-lg:flex xl:hidden lg:hidden hidden"
              onClick={() => setShowSideBar(false)}
            >
              <span>
                <FaList />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
// from-purple-700 via-pink-500 to-red-500 bg-gradient-to-r  shadow-xl
