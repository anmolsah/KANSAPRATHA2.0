import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FaList,
  FaTachometerAlt,
  FaShoppingCart,
  FaHeart,
  FaComments,
  FaKey,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const [filterShow, setFilterShow] = useState(false);

  return (
    <div>
      <Header />
      <div className="bg-slate-200 mt-5">
        <div className="w-[90%] mx-auto hidden">
          <div className="">
            <button
              onClick={() => setFilterShow(!filterShow)}
              className="text-center py-3 px-3 bg-green-600 text-white rounded-md hover:shadow-lg hover:shadow-green-500/20"
            >
              <FaList />
            </button>
          </div>
        </div>

        <div className="h-full mx-auto">
          <div className="py-5 flex mx-auto relative">
            <div
              className={`rounded-md z-50 ${
                filterShow ? "-left-4" : "-left-[360px]"
              } w-[270px] ml-4 bg-white`}
            >
              <ul className="py-2 text-slate-600 px-4">
                <li className="flex justify-start items-center gap-2 py-2">
                  <span className="text-xl">
                    <FaTachometerAlt />
                  </span>
                  <Link to="/dashboard" className="block">
                    Dashboard
                  </Link>
                </li>
                <li className="flex justify-start items-center gap-2 py-2">
                  <span className="text-xl">
                    <FaShoppingCart />
                  </span>
                  <Link to="/dashboard/my-orders" className="block">
                    My Orders
                  </Link>
                </li>
                <li className="flex justify-start items-center gap-2 py-2">
                  <span className="text-xl">
                    <FaHeart />
                  </span>
                  <Link to="/dashboard/wishlist" className="block">
                    Wishlist
                  </Link>
                </li>
                <li className="flex justify-start items-center gap-2 py-2">
                  <span className="text-xl">
                    <FaComments />
                  </span>
                  <Link to="/dashboard/chat" className="block">
                    Chat
                  </Link>
                </li>
                <li className="flex justify-start items-center gap-2 py-2">
                  <span className="text-xl">
                    <FaKey />
                  </span>
                  <Link to="/dashboard/change-password" className="block">
                    Change Password
                  </Link>
                </li>
                <li className="flex justify-start items-center gap-2 py-2">
                  <span className="text-xl">
                    <FaSignOutAlt />
                  </span>
                  <Link to="/logout" className="block">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-[calc(100%-270px)]">
                <div className="mx-4">
                    <Outlet />
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
