// import React from "react";
// import { FaList } from "react-icons/fa";

// const Header = ({ showSidebar, setShowSidebar }) => {
//   return (
//     <div className="fixed top-0 left-0 w-full py-5 px-2 z-40 lg:px-7">
//       <div className="ml:0 lg:ml-[260px] rounded-mdh-[65px] flex justify-between items-center bg-[#b1addf] px-5 transition-all">
//         <div onClick={() => setShowSidebar(!showSidebar)}>
//           <span>
//             <FaList />
//           </span>
//         </div>
//         <div className="hidden ">
//           <input type="text" placeholder="Search..." className="" />
//         </div>

//         <div className="">
//           <div className="">
//             <div className="">
//               <div className="">
//                 <h2>Ananth Pradhan</h2>
//                 <span>Admin</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";
import { FaList } from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = ({ showSidebar, setShowSidebar }) => {
  const {userInfo } = useSelector(state => state.auth)
  return (
    <header className="fixed top-0 left-0 w-full py-4 px-4 z-40 bg-[#E6E9F0] shadow-md lg:px-7">
      <div className="flex justify-between items-center lg:ml-[260px]">
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition duration-300"
        >
          <FaList size={24} />
        </button>

        <div className="hidden lg:block flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition duration-300"
          />
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <h2 className="text-lg font-semibold text-gray-800">
              {userInfo.name}
            </h2>
            <span className="text-sm text-gray-600">{userInfo.role}</span>
          </div>

          {
            userInfo.role === 'admin' ? <img
            src="/admin.png"
            alt="Admin Profile"
            className="w-12 h-12 rounded-full border-2 border-gray-300 shadow-sm"
          /> :
          <img
            src={userInfo.image}
            alt="Seller Profile"
            className="w-12 h-12 rounded-full border-2 border-gray-300 shadow-sm"
          />
          }
        </div>
      </div>
    </header>
  );
};

export default Header;

// // export default Header;
// import React from "react";
// import { FaList } from "react-icons/fa";

// const Header = ({ showSidebar, setShowSidebar }) => {
//   return (
//     // <div className="fixed top-0 left-0 w-full py-5 px-4 z-40 bg-white shadow-md">
//     //   <div className="flex justify-between items-center">
//     //     {/* Left Side: Search Bar */}
//     //     <div className="flex items-center space-x-2">
//     //       <input
//     //         type="text"
//     //         placeholder="Search..."
//     //         className="p-2 border rounded-lg focus:outline-none"
//     //       />
//     //     </div>

//     //     {/* Right Side: Logo and Name */}
//     //     <div className="flex items-center space-x-4">
//     //       <div
//     //         onClick={() => setShowSidebar(!showSidebar)}
//     //         className="cursor-pointer text-2xl"
//     //       >
//     //         <FaList />
//     //       </div>
//     //       <img
//     //         src="/path-to-your-logo.png"
//     //         alt="Logo"
//     //         className="h-10 w-10"
//     //       />
//     //       <h1 className="text-xl font-semibold">Your Website</h1>
//     //     </div>
//     //   </div>
//     // </div>
//   );
// };

//export default Header;
