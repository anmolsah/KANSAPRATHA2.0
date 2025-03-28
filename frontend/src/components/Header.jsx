import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { IoMdArrowDropdown, IoMdPhonePortrait } from "react-icons/io";
import {
  FaCartPlus,
  FaFacebook,
  FaGithub,
  FaHeart,
  FaLinkedin,
  FaList,
  FaLock,
  FaPhoneAlt,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const [showSideBar, setShowSideBar] = useState(true);
  const [categoryShow, setCategoryShow] = useState(true);
  const user = true;
  const wishlist_count = 4;

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
                {[
                  { Icon: FaFacebook, link: "https://www.facebook.com" },
                  { Icon: FaTwitter, link: "https://www.twitter.com" },
                  { Icon: FaLinkedin, link: "https://www.linkedin.com" },
                  { Icon: FaGithub, link: "https://www.github.com" },
                ].map(({ Icon, link }, index) => (
                  <a
                    key={index}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-yellow-400 hover:scale-110 transition-all duration-300 text-lg"
                  >
                    <Icon />
                  </a>
                ))}
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

      <div className="bg-gradient-to-r from-purple-700 to-pink-500">
        <div className="w-[85%] lg:w-[90%] mx-auto">
          <div className="h-[80px] md-lg:h-[100px] flex justify-between items-center flex-wrap">
            <div className="md-lg:w-full w-[3/12] md-lg:pt-4">
              <div className="flex justify-center items-center gap-4">
                <Link to="/">
                  <img src="/logo01.png" alt="" className="h-10" />
                </Link>
                <div
                  className="justify-center items-center w-[30px] h-[30px] bg-yellow-400 text-gray-900 border border-yellow-400 rounded-md cursor-pointer md-lg:flex xl:hidden lg:hidden hidden hover:bg-yellow-500 transition-colors"
                  onClick={() => setShowSideBar(false)}
                >
                  <span>
                    <FaList />
                  </span>
                </div>
              </div>
            </div>
            <div className="md:lg:w-full w-9/12">
              <div className="flex justify-end items-center md-lg:justify-center flex-wrap pk-8">
                <ul className="flex justify-start items-start gap-8 text-sm font-bold uppercase md-lg:hidden">
                  {[
                    { path: "/", label: "Home" },
                    { path: "/shop", label: "Shop" },
                    { path: "/blog", label: "Blog" },
                    { path: "/about", label: "About Us" },
                    { path: "/contact", label: "Contact Us" },
                  ].map((item) => (
                    <li key={item.path}>
                      <Link
                        className={`p-2 block ${
                          pathname === item.path
                            ? "text-yellow-400"
                            : "text-white hover:text-yellow-400"
                        } transition-colors duration-300`}
                        to={item.path}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="flex md-lg:hidden justify-center items-center gap-5">
                  <div className="flex justify-center gap-5">
                    <div className="relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-white hover:bg-yellow-400 transition-colors">
                      <span className="text-xl text-yellow-400 hover:text-white">
                        <FaHeart />
                      </span>
                      <div className="w-[20px] h-[20px] absolute bg-yellow-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px] text-xs">
                        {wishlist_count}
                      </div>
                    </div>
                    <div className="relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-white hover:bg-yellow-400 transition-colors">
                      <span className="text-xl text-yellow-400 hover:text-white">
                        <FaCartPlus />
                      </span>
                      <div className="w-[20px] h-[20px] absolute bg-yellow-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px] text-xs">
                        {wishlist_count}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-white">
        <div className="w-[85%] lg:w-[90%] mx-auto">
          <div className="h-[80px] md-lg:h-[100px] flex justify-between items-center flex-wrap">
            <div className="md-lg:w-full w-[3/12] md-lg:pt-4">
              <div className="flex justify-center items-cente">
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
            <div className="md:lg:w-full w-9/12">
              <div className="flex justify-end items-center md-lg:justify-center flex-wrap pk-8">
                <ul className="flex justify-start items-start gap-8 text-sm font-bold uppercase md-lg:hidden">
                  <li>
                    <Link
                      className={`p-2 block ${
                        pathname === "/" ? "text-yellow-500" : "text-slate-600"
                      }`}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`p-2 block ${
                        pathname === "/shop"
                          ? "text-yellow-500"
                          : "text-slate-600"
                      }`}
                    >
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`p-2 block ${
                        pathname === "/blog"
                          ? "text-yellow-500"
                          : "text-slate-600"
                      }`}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`p-2 block ${
                        pathname === "/about"
                          ? "text-yellow-500"
                          : "text-slate-600"
                      }`}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`p-2 block ${
                        pathname === "/contact"
                          ? "text-yellow-500"
                          : "text-slate-600"
                      }`}
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>

                <div className="flex md-lg:hidden justify-center items-center gap-5">
                  <div className="flex justify-center gap-5">
                    <div className="relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-[add the color]">
                      <span className="text-xl text-pink-500">
                        <FaHeart />
                      </span>
                      <div className="w-[20px] h-[20px] absolute bg-red-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px]">
                        {wishlist_count}
                      </div>
                    </div>
                    <div className="relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-[add the color]">
                      <span className="text-xl text-pink-500">
                        <FaCartPlus />
                      </span>
                      <div className="w-[20px] h-[20px] absolute bg-red-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px]">
                        {wishlist_count}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="hidden md-lg:block">
        <div
          onClick={() => setShowSideBar(true)}
          className={`fixed duration-200 transition-all ${
            showSideBar ? "invisible" : "visible"
          } hidden md-lg:block w-screen h-screen bg-[rgba(0,0,0,0.7)] top-0 left-0 z-20`}
        ></div>
        <div
          className={`w-[300px] z-[9999] transition-all duration-200 fixed ${
            showSideBar ? "-left-[300px]" : "left-0 top-0"
          } overflow-y-auto bg-gray-900 h-screen py-6 px-8`}
        >
          <div className="flex justify-center flex-col gap-6">
            <Link to="/">
              <img
                src="/logo01.png"
                alt=""
                className="filter brightness-0 invert"
              />
            </Link>
            <div className="flex justify-end items-center gap-10">
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

            <ul className="flex flex-col justify-start items-start gap-1 text-sm font-bold uppercase">
              {[
                { path: "/", label: "Home" },
                { path: "/shop", label: "Shop" },
                { path: "/blog", label: "Blog" },
                { path: "/about", label: "About Us" },
                { path: "/contact", label: "Contact Us" },
              ].map((item) => (
                <li key={item.path} className="w-full">
                  <Link
                    className={`py-2 block w-full ${
                      pathname === item.path
                        ? "text-yellow-400"
                        : "text-white hover:text-yellow-400"
                    } transition-colors duration-300`}
                    to={item.path}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex justify-start items-center gap-4 text-white">
              {[
                { Icon: FaFacebook, link: "https://www.facebook.com" },
                { Icon: FaTwitter, link: "https://www.twitter.com" },
                { Icon: FaLinkedin, link: "https://www.linkedin.com" },
                { Icon: FaGithub, link: "https://www.github.com" },
              ].map(({ Icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 hover:scale-110 transition-all duration-300 text-lg"
                >
                  <Icon />
                </a>
              ))}
            </div>

            <div className="w-full flex justify-end md-lg:justify-start gap-3 items-center">
              <div className="w-[48px] h-[48px] rounded-full flex bg-gray-800 justify-center items-center">
                <span className="text-yellow-400">
                  <FaPhoneAlt />
                </span>
              </div>

              <div className="flex justify-end flex-col gap-1">
                <h2 className="text-sm font-medium text-white">
                  (+91) 8250676762
                </h2>
                <span className="text-xs text-gray-400">support 24/7</span>
              </div>
            </div>

            <ul className="flex flex-col justify-start items-start gap-3">
              <li className="flex justify-start items-center gap-2 text-sm">
                <span className="bg-yellow-400 p-1 rounded-full shadow-md">
                  <MdEmail className="text-gray-900" />
                </span>
                <a
                  href="mailto:kpsupport@gmail.com"
                  className="text-white hover:text-yellow-400 transition-colors duration-300"
                >
                  kpsupport@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <div className="hidden md-lg:block">
        <div
          onClick={() => setShowSideBar(true)}
          className={`fixed duration-200 transition-all ${
            showSideBar ? "invisible" : "visible"
          } hidden md-lg:block w-screen h-screen bg-[rgba(0,0,0,0.5)] top-0 left-0 z-20`}
        ></div>
        <div
          className={`w-[300px] z-[9999] transition-all duration-200 fixed ${
            showSideBar ? "-left-[300px]" : "left-0 top-0"
          } overflow-y-auto bg-white h-screen py-6 px-8`}
        >
          <div className="flex justify-center flex-col gap-6">
            <Link to="/">
              <img src="/logo01.png" alt="" />
            </Link>
            <div className="flex justify-end items-center gap-10">
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

            <ul className="flex flex-col justify-start items-start gap-1 text-sm font-bold uppercase">
              <li>
                <Link
                  className={`py-2 block ${
                    pathname === "/" ? "text-yellow-500" : "text-slate-600"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`py-2 block ${
                    pathname === "/shop" ? "text-yellow-500" : "text-slate-600"
                  }`}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  className={`py-2 block ${
                    pathname === "/blog" ? "text-yellow-500" : "text-slate-600"
                  }`}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className={`py-2 block ${
                    pathname === "/about" ? "text-yellow-500" : "text-slate-600"
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className={`py-2 block ${
                    pathname === "/contact"
                      ? "text-yellow-500"
                      : "text-slate-600"
                  }`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="flex justify-start items-center gap-4 text-black">
              {[
                { Icon: FaFacebook, link: "https://www.facebook.com" },
                { Icon: FaTwitter, link: "https://www.twitter.com" },
                { Icon: FaLinkedin, link: "https://www.linkedin.com" },
                { Icon: FaGithub, link: "https://www.github.com" },
              ].map(({ Icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 hover:scale-110 transition-all duration-300 text-lg"
                >
                  <Icon />
                </a>
              ))}
            </div>

            <div className="w-full flex justify-end md-lg:justify-start gap-3 items-center">
              <div className="w-[48px] h-[48px] rounded-full flex bg-[#f5f5f5] justify-center">
                <span>
                  <FaPhoneAlt />
                </span>
              </div>

              <div classNamr="flex justify-end flex-col gap-1">
                <h2 className="text-sm font-medium text-slate-700">
                  (+91) 8250676762
                </h2>
                <span className="text-x">support 24/7</span>
              </div>
            </div>

            <ul className="flex flex-col justify-start items-start gap-3 text-pink-600">
              <li className="flex justify-start items-center gap-2 text-sm">
                <span className="text-yellow-400 text-black p-1 rounded-full shadow-md">
                  <MdEmail className="text-gray-900" />
                </span>
                <span className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
                  kpsupport@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div> */}

      <div classNmae="w-[85%] lg:w-[90%] mx-auto">
        <div className="flex w-full flex-wrap md-lg:gap-8">
          <div classNmae="w-3/12 md-lg:w-full">
            <div classNmae="bg-white relative">
              <div
                onClick={() => setCategoryShow(!categoryShow)}
                className="h-[50px] bg-red-600 text-white flex justify-center md-lg:justify-between md-lg:px-6 items-center gap-3 font-bold text-md cursor-pointer"
              >
                <div className="flex justify-center items-center gap-3">
                  <span>
                    <FaList />
                  </span>
                  <span>All Category</span>
                </div>
                <span className="py-1">
                  <IoMdArrowDropdown />
                </span>
              </div>

              <div
                className={`${
                  categoryShow ? "h-0" : "h-[400px]"
                } overflow-hidden transition-all duration-500 absolute z-[99999] bg-green-500 w-full border-x`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
// from-purple-700 via-pink-500 to-red-500 bg-gradient-to-r  shadow-xl
