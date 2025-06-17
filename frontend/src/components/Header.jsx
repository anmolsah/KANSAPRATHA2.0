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
      <div className="bg-[#571307] text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <a
                href="mailto:support@techstore.com"
                className="flex items-center space-x-2 hover:text-yellow-400 transition-all duration-300 group"
              >
                <Mail
                  size={16}
                  className="text-yellow-400 group-hover:scale-110 transition-transform duration-300"
                />
                <span className="text-sm">kansapratha@gmail.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center space-x-2 hover:text-yellow-400 transition-all duration-300 group"
              >
                <Phone
                  size={16}
                  className="text-yellow-400 group-hover:scale-110 transition-transform duration-300"
                />
                <span className="text-sm">9836565761</span>
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
                    className="hover:text-yellow-400 transition-all duration-300 hover:scale-110"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>

              <div className="relative group">
                <button className="flex items-center space-x-2 bg-yellow-500 text-white px-3 py-1 rounded-full hover:bg-yellow-600 transition-all duration-300 group-hover:ring-2 group-hover:ring-yellow-300">
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
                          className="block px-4 py-2 text-gray-800 hover:bg-yellow-50 hover:yellow-yellow-600 transition-colors duration-300"
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

      {/* <div className="bg-gradient-to-r from-indigo-600 to-purple-600"> */}
      <div className="bg-[#8b2614]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
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

            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map(({ path, label }) => (
                <a
                  key={path}
                  href={path}
                  className={`text-sm font-medium ${
                    pathname === path
                      ? "text-yellow-400"
                      : "text-white hover:text-yellow-400"
                  } transition-all duration-300 hover:scale-105`}
                >
                  {label}
                </a>
              ))}
            </nav>

            
            <div className="flex items-center space-x-6">
              <div className="hidden lg:flex items-center space-x-4">
                <button
                  onClick={redirect_wishlist_page}
                  className="relative p-2 text-white hover:text-yellow-400 transition-all duration-300 hover:scale-110"
                >
                  <Heart size={24} />
                  {wishlist_count !== 0 && (
                    <span className="absolute -top-1 -right-1 bg-yellow-400 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">
                      {wishlist_count}
                    </span>
                  )}
                </button>
                <button
                  onClick={redirect_cart_page}
                  className="relative p-2 text-white hover:text-yellow-400 transition-all duration-300 hover:scale-110"
                >
                  <ShoppingCart size={24} />

                  {cart_product_count !== 0 && (
                    <span className="absolute -top-1 -right-1 bg-yellow-400 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">
                      {cart_product_count}
                    </span>
                  )}
                </button>
              </div>

              {userInfo ? (
                <Link
                  to="/dashboard"
                  className="flex items-center space-x-2 bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <User size={18} />
                  <span className="font-medium hidden sm:inline">
                    {userInfo.name}
                  </span>
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center space-x-2 bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <Lock size={18} />
                  <span className="font-medium hidden sm:inline">Login</span>
                </Link>
              )}
            </div>
          </div>

    
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
                    className="flex-1 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                  <button
                    onClick={search}
                    className="px-6 bg-yellow-500 text-white font-medium hover:bg-yellow-600 transition-all duration-300 flex items-center hover:shadow-lg"
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
                        : "text-gray-600 hover:text-yellow-600"
                    } transition-colors duration-300`}
                  >
                    {label}
                  </a>
                ))}
              </nav>

              <div className="mt-8 space-y-4">
                <button
                  onClick={redirect_wishlist_page}
                  className="flex items-center space-x-2 text-gray-600 hover:text-yellow-600 transition-colors duration-300"
                >
                  <Heart size={20} />
                  {wishlist_count !== 0 && (
                    <span className="absolute -top-1 -right-1 bg-yellow-400 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">
                      {wishlist_count}
                    </span>
                  )}
                </button>
                <button
                  onClick={redirect_cart_page}
                  className="flex items-center space-x-2 text-gray-600 hover:text-yellow-600 transition-colors duration-300"
                >
                  <ShoppingCart size={20} />
                  {cart_product_count !== 0 && (
                    <span className="absolute -top-1 -right-1 bg-yellow-400 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">
                      {cart_product_count}
                    </span>
                  )}
                </button>
              </div>

              <div className="mt-8 flex flex-col space-y-4">
                <a
                  href="tel:+1234567890"
                  className="flex items-center space-x-2 text-gray-600"
                >
                  <Phone size={16} className="text-yellow-500" />
                  <span>+1 (234) 567-890</span>
                </a>
                <a
                  href="mailto:support@techstore.com"
                  className="flex items-center space-x-2 text-gray-600"
                >
                  <Mail size={16} className="text-yellow-500" />
                  <span>support@techstore.com</span>
                </a>
              </div>

              <div className="mt-8 flex justify-center space-x-4">
                {[Facebook, Twitter, Linkedin, Github].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="text-gray-600 hover:text-yellow-600 transition-colors duration-300"
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
