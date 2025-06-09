// import React, { useState } from "react";
// import { MdEmail } from "react-icons/md";
// import { IoMdArrowDropdown, IoMdPhonePortrait } from "react-icons/io";
// import {
//   FaCartPlus,
//   FaFacebook,
//   FaGithub,
//   FaHeart,
//   FaLinkedin,
//   FaList,
//   FaLock,
//   FaPhoneAlt,
//   FaTwitter,
//   FaUser,
// } from "react-icons/fa";
// import { Link, useLocation } from "react-router-dom";

// const Header = () => {
//   const { pathname } = useLocation();
//   const [showSideBar, setShowSideBar] = useState(true);
//   const [categoryShow, setCategoryShow] = useState(true);
//   const [searchValue, setSearchValue] = useState("");
//   const [category, setCategory] = useState("");
//   const user = true;
//   const wishlist_count = 4;
//   const categorys = [
//     "laptops",
//     "mobiles",
//     "tablets",
//     "accessories",
//     "accessories",
//     "accessories",
//     "accessories",
//     "accessories",
//     "accessories",
//     "accessories",
//     "accessories",
//     "accessories",
//   ];

//   return (
//     <div className="w-full ">
//       <div className="header-top bg-gray-900 md-lg:hidden">
//         <div className="w-[85%] lg:w-[90%] mx-auto">
//           <div className="flex w-full justify-between items-center h-[60px] text-white">
//             <ul className="flex justify-start items-center gap-8 font-medium">
//               <li className="flex relative justify-center items-center gap-2 text-sm after:absolute after:h-[25px] after:w-[1px] after:bg-yellow-400 after:right-[-16px]">
//                 <span className="text-yellow-400 bg-white p-1 rounded-full shadow-md">
//                   <MdEmail className="text-gray-900" />
//                 </span>
//                 <span className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
//                   kpsupport@gmail.com
//                 </span>
//               </li>
//               <li className="flex relative justify-center items-center gap-2 text-sm">
//                 <span className="text-yellow-400 bg-white p-1 rounded-full shadow-md">
//                   <IoMdPhonePortrait className="text-gray-900" />
//                 </span>
//                 <span className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
//                   +(91) 8250676762
//                 </span>
//               </li>
//             </ul>

//             <div className="flex justify-center items-center gap-8">
//               <div className="flex justify-center items-center gap-4">
//                 {[
//                   { Icon: FaFacebook, link: "https://www.facebook.com" },
//                   { Icon: FaTwitter, link: "https://www.twitter.com" },
//                   { Icon: FaLinkedin, link: "https://www.linkedin.com" },
//                   { Icon: FaGithub, link: "https://www.github.com" },
//                 ].map(({ Icon, link }, index) => (
//                   <a
//                     key={index}
//                     href={link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-white hover:text-yellow-400 hover:scale-110 transition-all duration-300 text-lg"
//                   >
//                     <Icon />
//                   </a>
//                 ))}
//               </div>

//               <div className="flex group cursor-pointer text-sm justify-center items-center gap-1 relative">
//                 <div className="flex items-center gap-2 bg-yellow-400 px-3 py-1 rounded-full hover:bg-yellow-500 transition-colors duration-300 shadow-lg">
//                   <img
//                     className="w-5 h-4 rounded-sm"
//                     src="images/india.png"
//                     alt="language"
//                   />
//                   <span className="text-gray-900">
//                     <IoMdArrowDropdown />
//                   </span>
//                 </div>
//                 <ul className="absolute invisible group-hover:visible transition-all duration-300 top-full mt-2 rounded-md shadow-xl bg-gray-800 text-white w-[120px] py-2 z-50 border border-yellow-400">
//                   {["English", "Hindi", "Spanish", "French", "German"].map(
//                     (lang, i) => (
//                       <li
//                         key={i}
//                         className="px-3 py-1 hover:bg-yellow-500 hover:text-gray-900 cursor-pointer"
//                       >
//                         {lang}
//                       </li>
//                     )
//                   )}
//                 </ul>
//               </div>

//               {user ? (
//                 <Link
//                   className="flex justify-center items-center gap-2 bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-full transition-all duration-300 shadow-md text-gray-900 font-bold"
//                   to="/dashboard"
//                 >
//                   <span className="bg-white p-1 rounded-full shadow-md">
//                     <FaUser className="text-sm text-yellow-400" />
//                   </span>
//                   <span>Anni Khana</span>
//                 </Link>
//               ) : (
//                 <Link
//                   className="flex justify-center items-center gap-2 bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-full transition-all duration-300 shadow-md text-gray-900 font-bold"
//                   to="/login"
//                 >
//                   <span className="bg-white p-1 rounded-full shadow-md">
//                     <FaLock className="text-sm text-yellow-400" />
//                   </span>
//                   <span>Login</span>
//                 </Link>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-gradient-to-r from-purple-700 to-pink-500">
//         <div className="w-[85%] lg:w-[90%] mx-auto">
//           <div className="h-[80px] md-lg:h-[100px] flex justify-between items-center flex-wrap">
//             <div className="md-lg:w-full w-[3/12] md-lg:pt-4">
//               <div className="flex justify-center items-center gap-4">
//                 <Link to="/">
//                   <img src="/logo01.png" alt="" className="h-10" />
//                 </Link>
//                 <div
//                   className="justify-center items-center w-[30px] h-[30px] bg-yellow-400 text-gray-900 border border-yellow-400 rounded-md cursor-pointer md-lg:flex xl:hidden lg:hidden hidden hover:bg-yellow-500 transition-colors"
//                   onClick={() => setShowSideBar(false)}
//                 >
//                   <span>
//                     <FaList />
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className="md:lg:w-full w-9/12">
//               <div className="flex justify-end items-center md-lg:justify-center flex-wrap pk-8">
//                 <ul className="flex justify-start items-start gap-8 text-sm font-bold uppercase md-lg:hidden">
//                   {[
//                     { path: "/", label: "Home" },
//                     { path: "/shop", label: "Shop" },
//                     { path: "/blog", label: "Blog" },
//                     { path: "/about", label: "About Us" },
//                     { path: "/contact", label: "Contact Us" },
//                   ].map((item) => (
//                     <li key={item.path}>
//                       <Link
//                         className={`p-2 block ${
//                           pathname === item.path
//                             ? "text-yellow-400"
//                             : "text-white hover:text-yellow-400"
//                         } transition-colors duration-300`}
//                         to={item.path}
//                       >
//                         {item.label}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>

//                 <div className="flex md-lg:hidden justify-center items-center gap-5">
//                   <div className="flex justify-center gap-5">
//                     <div className="relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-white hover:bg-yellow-400 transition-colors">
//                       <span className="text-xl text-yellow-400 hover:text-white">
//                         <FaHeart />
//                       </span>
//                       <div className="w-[20px] h-[20px] absolute bg-yellow-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px] text-xs">
//                         {wishlist_count}
//                       </div>
//                     </div>
//                     <div className="relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-white hover:bg-yellow-400 transition-colors">
//                       <span className="text-xl text-yellow-400 hover:text-white">
//                         <FaCartPlus />
//                       </span>
//                       <div className="w-[20px] h-[20px] absolute bg-yellow-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px] text-xs">
//                         {wishlist_count}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="hidden md-lg:block">
//         <div
//           onClick={() => setShowSideBar(true)}
//           className={`fixed duration-200 transition-all ${
//             showSideBar ? "invisible" : "visible"
//           } hidden md-lg:block w-screen h-screen bg-[rgba(0,0,0,0.7)] top-0 left-0 z-20`}
//         ></div>
//         <div
//           className={`w-[300px] z-[9999] transition-all duration-200 fixed ${
//             showSideBar ? "-left-[300px]" : "left-0 top-0"
//           } overflow-y-auto bg-gray-900 h-screen py-6 px-8`}
//         >
//           <div className="flex justify-center flex-col gap-6">
//             <Link to="/">
//               <img
//                 src="/logo01.png"
//                 alt=""
//                 className="filter brightness-0 invert"
//               />
//             </Link>
//             <div className="flex justify-end items-center gap-10">
//               <div className="flex group cursor-pointer text-sm justify-center items-center gap-1 relative">
//                 <div className="flex items-center gap-2 bg-yellow-400 px-3 py-1 rounded-full hover:bg-yellow-500 transition-colors duration-300 shadow-lg">
//                   <img
//                     className="w-5 h-4 rounded-sm"
//                     src="images/india.png"
//                     alt="language"
//                   />
//                   <span className="text-gray-900">
//                     <IoMdArrowDropdown />
//                   </span>
//                 </div>
//                 <ul className="absolute invisible group-hover:visible transition-all duration-300 top-full mt-2 rounded-md shadow-xl bg-gray-800 text-white w-[120px] py-2 z-50 border border-yellow-400">
//                   {["English", "Hindi", "Spanish", "French", "German"].map(
//                     (lang, i) => (
//                       <li
//                         key={i}
//                         className="px-3 py-1 hover:bg-yellow-500 hover:text-gray-900 cursor-pointer"
//                       >
//                         {lang}
//                       </li>
//                     )
//                   )}
//                 </ul>
//               </div>
//               {user ? (
//                 <Link
//                   className="flex justify-center items-center gap-2 bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-full transition-all duration-300 shadow-md text-gray-900 font-bold"
//                   to="/dashboard"
//                 >
//                   <span className="bg-white p-1 rounded-full shadow-md">
//                     <FaUser className="text-sm text-yellow-400" />
//                   </span>
//                   <span>Anni Khana</span>
//                 </Link>
//               ) : (
//                 <Link
//                   className="flex justify-center items-center gap-2 bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-full transition-all duration-300 shadow-md text-gray-900 font-bold"
//                   to="/login"
//                 >
//                   <span className="bg-white p-1 rounded-full shadow-md">
//                     <FaLock className="text-sm text-yellow-400" />
//                   </span>
//                   <span>Login</span>
//                 </Link>
//               )}
//             </div>

//             <ul className="flex flex-col justify-start items-start gap-1 text-sm font-bold uppercase">
//               {[
//                 { path: "/", label: "Home" },
//                 { path: "/shop", label: "Shop" },
//                 { path: "/blog", label: "Blog" },
//                 { path: "/about", label: "About Us" },
//                 { path: "/contact", label: "Contact Us" },
//               ].map((item) => (
//                 <li key={item.path} className="w-full">
//                   <Link
//                     className={`py-2 block w-full ${
//                       pathname === item.path
//                         ? "text-yellow-400"
//                         : "text-white hover:text-yellow-400"
//                     } transition-colors duration-300`}
//                     to={item.path}
//                   >
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>

//             <div className="flex justify-start items-center gap-4 text-white">
//               {[
//                 { Icon: FaFacebook, link: "https://www.facebook.com" },
//                 { Icon: FaTwitter, link: "https://www.twitter.com" },
//                 { Icon: FaLinkedin, link: "https://www.linkedin.com" },
//                 { Icon: FaGithub, link: "https://www.github.com" },
//               ].map(({ Icon, link }, index) => (
//                 <a
//                   key={index}
//                   href={link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:text-yellow-400 hover:scale-110 transition-all duration-300 text-lg"
//                 >
//                   <Icon />
//                 </a>
//               ))}
//             </div>

//             <div className="w-full flex justify-end md-lg:justify-start gap-3 items-center">
//               <div className="w-[48px] h-[48px] rounded-full flex bg-gray-800 justify-center items-center">
//                 <span className="text-yellow-400">
//                   <FaPhoneAlt />
//                 </span>
//               </div>

//               <div className="flex justify-end flex-col gap-1">
//                 <h2 className="text-sm font-medium text-white">
//                   (+91) 8250676762
//                 </h2>
//                 <span className="text-xs text-gray-400">support 24/7</span>
//               </div>
//             </div>

//             <ul className="flex flex-col justify-start items-start gap-3">
//               <li className="flex justify-start items-center gap-2 text-sm">
//                 <span className="bg-yellow-400 p-1 rounded-full shadow-md">
//                   <MdEmail className="text-gray-900" />
//                 </span>
//                 <a
//                   href="mailto:kpsupport@gmail.com"
//                   className="text-white hover:text-yellow-400 transition-colors duration-300"
//                 >
//                   kpsupport@gmail.com
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div className="w-[85%] lg:w-[90%] mx-auto">
//         <div className="flex w-full flex-wrap md-lg:gap-8">
//           <div className="w-3/12 md-lg:w-full">
//             <div className="bg-white relative">
//               {/* Category Dropdown Header */}
//               <div
//                 onClick={() => setCategoryShow(!categoryShow)}
//                 className="h-[50px] bg-yellow-400 text-gray-900 flex justify-center md-lg:justify-between md-lg:px-6 items-center gap-3 font-bold text-md cursor-pointer hover:bg-yellow-500 transition-colors"
//               >
//                 <div className="flex justify-center items-center gap-3">
//                   <span className="text-gray-900">
//                     <FaList />
//                   </span>
//                   <span>All Category</span>
//                 </div>
//                 <span className="py-1">
//                   <IoMdArrowDropdown />
//                 </span>
//               </div>

//               {/* Category Dropdown List */}
//               <div
//                 className={`${
//                   categoryShow ? "h-0" : "h-[400px]"
//                 } overflow-hidden transition-all duration-500 absolute z-[99999] bg-gray-800 w-full border border-yellow-400`}
//               >
//                 <ul className="flex flex-col justify-start items-start gap-1">
//                   {categorys.map((c, i) => (
//                     <li
//                       className="flex justify-start items-center gap-2 px-6 py-2 w-full hover:bg-yellow-400 hover:text-gray-900 transition-colors"
//                       key={i}
//                     >
//                       <Link className="text-white hover:text-gray-900 w-full">
//                         {c}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div className="w-9/12 md-lg:pl-0 md-lg:w-full">
//             <div className="w-full flex flex-wrap justify-between items-center md-lg:gap-6">
//               {/* Search Section */}
//               <div className="w-8/12 md-lg:w-full">
//                 <div className="flex border-2 border-transparent bg-gradient-to-r from-purple-700 to-pink-500 h-[50px] items-center relative gap-6 rounded-md overflow-hidden">
//                   <div className="relative after:absolute after:h-[25px] after:w-[1px] after:bg-yellow-400 after:right-[-16px]">
//                     <select
//                       onChange={(e) => setCategory(e.target.value)}
//                       value={categorys}
//                       className="w-[150px] text-white font-semibold bg-transparent px-2 h-full outline-none border-none"
//                     >
//                       <option value="" className="bg-gray-800">
//                         Select Category
//                       </option>
//                       {categorys.map((c, i) => (
//                         <option
//                           value={c}
//                           key={i}
//                           className="bg-gray-800 text-white"
//                         >
//                           {c}
//                         </option>
//                       ))}
//                     </select>
//                   </div>

//                   <input
//                     className="w-full relative bg-transparent outline-none px-3 h-full text-white placeholder-gray-300"
//                     onChange={(e) => setSearchValue(e.target.value)}
//                     type="text"
//                     placeholder="Search Product"
//                   />
//                   <button className="bg-yellow-400 absolute right-0 px-8 h-full font-semibold text-gray-900 hover:bg-yellow-500 transition-colors">
//                     Search
//                   </button>
//                 </div>
//               </div>

//               {/* Contact Info */}
//               <div className="w-4/12 block md-lg:hidden pl-2 md-lg:w-full md-lg:pl-0">
//                 <div className="w-full flex justify-end md-lg:justify-start gap-3 items-center">
//                   <div className="w-[48px] h-[48px] rounded-full flex bg-gray-800 justify-center items-center hover:bg-yellow-400 transition-colors">
//                     <span className="text-yellow-400 hover:text-gray-900">
//                       <FaPhoneAlt />
//                     </span>
//                   </div>

//                   <div className="flex justify-end flex-col gap-1">
//                     <h2 className="text-md font-medium text-white">
//                       (+91) 8250676762
//                     </h2>
//                     <span className="text-sm text-gray-400">support 24/7</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React, { useEffect, useState } from "react";
import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Github,
  Linkedin,
  ChevronDown,
  Menu,
  Heart,
  ShoppingCart,
  Lock,
  User,
  Search,
  X,
} from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { get_cart_product } from "../store/reducers/cartReducer";
import { get_wishlist_products } from "./../store/reducers/cartReducer";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categorys } = useSelector((state) => state.home);
  const { userInfo } = useSelector((state) => state.auth);
  const { cart_product_count, wishlist_count } = useSelector(
    (state) => state.cart
  );

  const [showSideBar, setShowSideBar] = useState(false);
  const [categoryShow, setCategoryShow] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [category, setCategory] = useState("");
  const pathname = "/";

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/shops", label: "Shop" },
    { path: "/blog", label: "Blog" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const search = () => {
    navigate(`/products/search?category=${category}&&value=${searchValue}`);
  };

  const redirect_cart_page = () => {
    if (userInfo) {
      navigate("/card");
    } else {
      navigate("/login");
    }
  };

  const redirect_wishlist_page = () => {
    if (userInfo) {
      navigate("/dashboard/my-wishlist");
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    if (userInfo) {
      dispatch(get_cart_product(userInfo.id));
      dispatch(get_wishlist_products(userInfo.id));
    }
  }, [userInfo]);

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-indigo-950 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <a
                href="mailto:support@techstore.com"
                className="flex items-center space-x-2 hover:text-emerald-400 transition-all duration-300 group"
              >
                <Mail
                  size={16}
                  className="text-emerald-400 group-hover:scale-110 transition-transform duration-300"
                />
                <span className="text-sm">support@techstore.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center space-x-2 hover:text-emerald-400 transition-all duration-300 group"
              >
                <Phone
                  size={16}
                  className="text-emerald-400 group-hover:scale-110 transition-transform duration-300"
                />
                <span className="text-sm">+1 (234) 567-890</span>
              </a>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-4">
                {[
                  { Icon: Facebook, href: "#" },
                  { Icon: Twitter, href: "#" },
                  { Icon: Linkedin, href: "#" },
                  { Icon: Github, href: "#" },
                ].map(({ Icon, href }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    className="hover:text-emerald-400 transition-all duration-300 hover:scale-110"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>

              <div className="relative group">
                <button className="flex items-center space-x-2 bg-emerald-500 text-white px-3 py-1 rounded-full hover:bg-emerald-600 transition-all duration-300 group-hover:ring-2 group-hover:ring-emerald-300">
                  <img
                    src="images/india.png"
                    alt="English"
                    className="w-4 h-3"
                  />
                  <ChevronDown
                    size={16}
                    className="group-hover:rotate-180 transition-transform duration-300"
                  />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform group-hover:translate-y-0 translate-y-2">
                  <div className="py-2">
                    {["English", "Spanish", "French", "German"].map(
                      (lang, idx) => (
                        <a
                          key={idx}
                          href="#"
                          className="block px-4 py-2 text-gray-800 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-300"
                        >
                          {lang}
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <a
                href="/"
                className="text-2xl font-bold text-white tracking-tight"
              >
                <img
                  src="/logo01.png"
                  alt="KhansaPratha Logo"
                  className=" h-10"
                />
              </a>
              <button
                onClick={() => setShowSideBar(true)}
                className="ml-4 p-2 text-white lg:hidden hover:bg-white/10 rounded-lg transition-colors duration-300"
              >
                <Menu size={24} />
              </button>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map(({ path, label }) => (
                <a
                  key={path}
                  href={path}
                  className={`text-sm font-medium ${
                    pathname === path
                      ? "text-emerald-400"
                      : "text-white hover:text-emerald-400"
                  } transition-all duration-300 hover:scale-105`}
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-6">
              <div className="hidden lg:flex items-center space-x-4">
                <button
                  onClick={redirect_wishlist_page}
                  className="relative p-2 text-white hover:text-emerald-400 transition-all duration-300 hover:scale-110"
                >
                  <Heart size={24} />
                  {wishlist_count !== 0 && (
                    <span className="absolute -top-1 -right-1 bg-emerald-400 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">
                      {wishlist_count}
                    </span>
                  )}
                </button>
                <button
                  onClick={redirect_cart_page}
                  className="relative p-2 text-white hover:text-emerald-400 transition-all duration-300 hover:scale-110"
                >
                  <ShoppingCart size={24} />

                  {cart_product_count !== 0 && (
                    <span className="absolute -top-1 -right-1 bg-emerald-400 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">
                      {cart_product_count}
                    </span>
                  )}
                </button>
              </div>

              {userInfo ? (
                <Link
                  to="/dashboard"
                  className="flex items-center space-x-2 bg-emerald-500 text-white px-4 py-2 rounded-full hover:bg-emerald-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <User size={18} />
                  <span className="font-medium hidden sm:inline">
                    {userInfo.name}
                  </span>
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center space-x-2 bg-emerald-500 text-white px-4 py-2 rounded-full hover:bg-emerald-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <Lock size={18} />
                  <span className="font-medium hidden sm:inline">Login</span>
                </Link>
              )}
            </div>
          </div>

          {/* Search Bar */}
          <div className="pb-6">
            <div className="flex">
              <div className="w-full max-w-3xl mx-auto">
                <div className="flex bg-white rounded-lg overflow-hidden shadow-lg ring-1 ring-white/20">
                  <select
                    className="px-4 py-3 bg-gray-50 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">All Categories</option>
                    {categorys.map((c, i) => (
                      <option key={i} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    placeholder="Search for products..."
                    className="flex-1 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                  <button
                    onClick={search}
                    className="px-6 bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-all duration-300 flex items-center hover:shadow-lg"
                  >
                    <Search size={20} className="mr-2" />
                    <span className="hidden sm:inline">Search</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {showSideBar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
          <div className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform transition-transform duration-300">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-bold text-gray-800">Menu</h2>
                <button
                  onClick={() => setShowSideBar(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="space-y-4">
                {navLinks.map(({ path, label }) => (
                  <a
                    key={path}
                    href={path}
                    className={`block py-2 ${
                      pathname === path
                        ? "text-emerald-600"
                        : "text-gray-600 hover:text-emerald-600"
                    } transition-colors duration-300`}
                  >
                    {label}
                  </a>
                ))}
              </nav>

              <div className="mt-8 space-y-4">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors duration-300">
                  <Heart size={20} />
                  <span>Wishlist ({wishlist_count})</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-emerald-600 transition-colors duration-300">
                  <ShoppingCart size={20} />
                  <span>Cart ({wishlist_count})</span>
                </button>
              </div>

              <div className="mt-8 flex flex-col space-y-4">
                <a
                  href="tel:+1234567890"
                  className="flex items-center space-x-2 text-gray-600"
                >
                  <Phone size={16} className="text-emerald-500" />
                  <span>+1 (234) 567-890</span>
                </a>
                <a
                  href="mailto:support@techstore.com"
                  className="flex items-center space-x-2 text-gray-600"
                >
                  <Mail size={16} className="text-emerald-500" />
                  <span>support@techstore.com</span>
                </a>
              </div>

              <div className="mt-8 flex justify-center space-x-4">
                {[Facebook, Twitter, Linkedin, Github].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="text-gray-600 hover:text-emerald-600 transition-colors duration-300"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
