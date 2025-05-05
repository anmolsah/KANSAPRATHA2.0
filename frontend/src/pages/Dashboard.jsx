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
                  <Link to="/dashboard/my-wishlist" className="block">
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
                <li
                  onClick={logout}
                  className="flex justify-start items-center gap-2 py-2"
                >
                  <span className="text-xl">
                    <FaSignOutAlt />
                  </span>
                  <div className="block cursor-pointer">Logout</div>
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

// import React, { useState } from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import {
//   FaList,
//   FaTachometerAlt,
//   FaShoppingCart,
//   FaHeart,
//   FaComments,
//   FaKey,
//   FaSignOutAlt,
// } from "react-icons/fa";
// import { Link, Outlet } from "react-router-dom";
// import api from "./../api/api";

// const Dashboard = () => {
//   const [filterShow, setFilterShow] = useState(false);

//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-50 to-purple-50">
//       <Header />

//       <div className="flex-1 pt-5">
//         {/* Mobile Menu Toggle */}
//         <div className="lg:hidden fixed top-20 left-4 z-50">
//           <button
//             onClick={() => setFilterShow(!filterShow)}
//             className="p-3 bg-emerald-500 text-white rounded-lg shadow-lg hover:bg-emerald-600
//               transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2
//               focus:ring-emerald-500 focus:ring-offset-2"
//           >
//             <FaList className="text-xl" />
//           </button>
//         </div>

//         <div className="flex flex-col lg:flex-row mx-auto relative">
//           {/* Sidebar Navigation */}
//           <div
//             className={`fixed lg:relative lg:left-0 z-40 h-screen lg:h-auto w-64 transform transition-transform duration-300
//               ${filterShow ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 bg-indigo-950 shadow-xl`}
//           >
//             <div className="p-4">
//               <ul className="space-y-2 text-gray-100">
//                 {[
//                   { icon: <FaTachometerAlt />, text: "Dashboard", to: "/dashboard" },
//                   { icon: <FaShoppingCart />, text: "My Orders", to: "/dashboard/my-orders" },
//                   { icon: <FaHeart />, text: "Wishlist", to: "/dashboard/my-wishlist" },
//                   { icon: <FaComments />, text: "Chat", to: "/dashboard/chat" },
//                   { icon: <FaKey />, text: "Change Password", to: "/dashboard/change-password" },
//                   { icon: <FaSignOutAlt />, text: "Logout", to: "/logout" },
//                 ].map((item, index) => (
//                   <li key={index}>
//                     <Link
//                       to={item.to}
//                       className="flex items-center gap-3 p-3 rounded-lg hover:bg-emerald-500/20
//                         transition-colors duration-200 hover:text-emerald-400 group"
//                     >
//                       <span className="text-xl text-emerald-400 group-hover:text-emerald-300">
//                         {item.icon}
//                       </span>
//                       <span className="font-medium">{item.text}</span>
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="flex-1 lg:ml-64 p-4 lg:p-6">
//             <div className="bg-white rounded-xl shadow-lg min-h-[calc(100vh-270px)]">
//               <Outlet />
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Dashboard;
