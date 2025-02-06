import React from "react";
import { FaList } from "react-icons/fa";

const Header = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className="fixed top-0 left-0 w-full py-5 px-2 z-40 lg:px-7">
      <div className="ml:0 lg:ml-[260px] rounded-mdh-[65px] flex justify-between items-start bg-[#b1addf] px-5 transition-all">
        <div onClick={() => setShowSidebar(!showSidebar)}>
          <span>
            <FaList />
          </span>
        </div>
      </div>
    </div>
  );
};

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

 export default Header;
