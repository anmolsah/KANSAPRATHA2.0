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
import { Link, Outlet, useNavigate } from "react-router-dom";
import api from "../api/api";
import { useDispatch } from "react-redux";
import { user_reset } from "../store/reducers/authReducer";
import { reset_count } from "../store/reducers/cartReducer";

const Dashboard = () => {
  const [filterShow, setFilterShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = async () => {
    try {
      const { data } = await api.get("/customer/logout");
      localStorage.removeItem("customerToken");
      dispatch(user_reset());
      dispatch(reset_count())
      navigate("/login");
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="bg-slate-200 mt-5 flex-1">
        
        <div className="lg:hidden fixed top-20 left-4 z-50">
          <button
            onClick={() => setFilterShow(!filterShow)}
            className="p-3 bg-yellow-600 text-white rounded-lg shadow-lg hover:bg-yellow-700 transition-colors"
          >
            <FaList className="text-xl" />
          </button>
        </div>

        <div className="max-w-[1920px] mx-auto">
          <div className="py-5 flex flex-col lg:flex-row relative">
            
            <div
              className={`fixed lg:static z-50 lg:z-auto h-screen lg:h-auto w-64 bg-white shadow-lg lg:shadow-none transform transition-transform duration-300 ${
                filterShow ? "translate-x-0" : "-translate-x-full"
              } lg:translate-x-0`}
            >
              <ul className="py-4 text-slate-600 px-4">
                <li className="flex items-center gap-3 py-3 px-3 hover:bg-slate-100 rounded-lg transition-colors">
                  <span className="text-xl text-yellow-600">
                    <FaTachometerAlt />
                  </span>
                  <Link to="/dashboard" className="block font-medium">
                    Dashboard
                  </Link>
                </li>
                <li className="flex items-center gap-3 py-3 px-3 hover:bg-slate-100 rounded-lg transition-colors">
                  <span className="text-xl text-yellow-600">
                    <FaShoppingCart />
                  </span>
                  <Link to="/dashboard/my-orders" className="block font-medium">
                    My Orders
                  </Link>
                </li>
                <li className="flex items-center gap-3 py-3 px-3 hover:bg-slate-100 rounded-lg transition-colors">
                  <span className="text-xl text-yellow-600">
                    <FaHeart />
                  </span>
                  <Link to="/dashboard/my-wishlist" className="block font-medium">
                    Wishlist
                  </Link>
                </li>
                <li className="flex items-center gap-3 py-3 px-3 hover:bg-slate-100 rounded-lg transition-colors">
                  <span className="text-xl text-yellow-600">
                    <FaComments />
                  </span>
                  <Link to="/dashboard/chat" className="block font-medium">
                    Chat
                  </Link>
                </li>
                <li className="flex items-center gap-3 py-3 px-3 hover:bg-slate-100 rounded-lg transition-colors">
                  <span className="text-xl text-yellow-600">
                    <FaKey />
                  </span>
                  <Link to="/dashboard/change-password" className="block font-medium">
                    Change Password
                  </Link>
                </li>
                <li
                  onClick={logout}
                  className="flex items-center gap-3 py-3 px-3 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                >
                  <span className="text-xl text-yellow-600">
                    <FaSignOutAlt />
                  </span>
                  <span className="font-medium">Logout</span>
                </li>
              </ul>
            </div>

            
            <div className="flex-1 lg:ml-64 mt-16 lg:mt-0 px-4 lg:px-6">
              <div className="bg-white rounded-lg shadow-sm p-4 lg:p-6 min-h-[calc(100vh-270px)]">
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