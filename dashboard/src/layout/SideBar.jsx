// import React from "react";

// const SideBar = () => {
//   return (
//     <div>
//       <div></div>
//       <div className={`w-[260px] fixed z-50 top-0 h-screen shadow-[0_0_10px_0_rgba(0,0,0,0.1)] transition-all`}>
//         <div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default SideBar;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiHome,
  FiShoppingCart,
  FiGrid,
  FiUsers,
  FiDollarSign,
  FiUserX,
  FiUserPlus,
  FiMessageCircle,
  FiLogOut,
} from "react-icons/fi";

const SideBar = () => {
  const [allNav, setAllNav] = useState([]);
  useEffect(() => {
    const navs = getNav("admin");
  },[]);
  return (
    <div className="w-[260px] fixed top-0 left-0 h-screen bg-white shadow-md flex flex-col p-4">
      <div className="flex items-center justify-center py-4">
        <Link to="/">
          <img
            src="/logo01.png"
            alt="Admin Logo"
            className="w-48 h-auto object-contain"
          />
        </Link>
      </div>

      <nav className="flex flex-col gap-4 mt-4">
        <SidebarItem icon={<FiHome />} text="Dashboard" link="/" />
        <SidebarItem icon={<FiShoppingCart />} text="Orders" link="/orders" />
        <SidebarItem icon={<FiGrid />} text="Category" link="/category" />
        <SidebarItem icon={<FiUsers />} text="Sellers" link="/sellers" />
        <SidebarItem
          icon={<FiDollarSign />}
          text="Payment Request"
          link="/payments"
        />
        <SidebarItem
          icon={<FiUserX />}
          text="Deactivated Sellers"
          link="/deactivated-sellers"
        />
        <SidebarItem
          icon={<FiUserPlus />}
          text="Seller Request"
          link="/seller-request"
        />
        <SidebarItem
          icon={<FiMessageCircle />}
          text="Live Chat"
          link="/live-chat"
        />
      </nav>

      <div className="mt-auto">
        <SidebarItem icon={<FiLogOut />} text="Logout" link="/logout" />
      </div>
    </div>
  );
};

// Sidebar Item Component
const SidebarItem = ({ icon, text, link }) => {
  return (
    <Link
      to={link}
      className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-200 rounded-lg transition"
    >
      <span className="text-xl">{icon}</span>
      <span className="text-md font-medium">{text}</span>
    </Link>
  );
};

export default SideBar;
