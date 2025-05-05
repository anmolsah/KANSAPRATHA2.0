// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { getNav } from "../navigation";
// import { FiLogOut } from "react-icons/fi";

// const SideBar = ({ showSidebar, setShowSidebar }) => {
//   const { pathname } = useLocation();
//   const [allNav, setAllNav] = useState([]);
//   useEffect(() => {
//     const navs = getNav("admin");
//     setAllNav(navs);
//   }, []);
//   return (
//     <div className="w-[260px] fixed top-0 left-0 h-screen bg-gray-100 shadow-md flex flex-col p-4">
//       <div
//         onClick={() => setShowSidebar(false)}
//         className={`${!showSidebar ? "invisible" : "visible"} w-screen `}
//       ></div>
//       <div className="flex items-center justify-center py-4">
//         <Link to="/">
//           <img
//             src="/logo01.png"
//             alt="Admin Logo"
//             className="w-52 h-auto object-contain"
//           />
//         </Link>
//       </div>

//       <nav className="flex flex-col gap-4 mt-4">
//         <ul className="space-y-2">
//           {allNav.map((n, i) => (
//             <li key={i}>
//               <Link
//                 to={n.path}
//                 className={`flex items-center gap-3 p-2 rounded-lg transition ${
//                   pathname === n.path
//                     ? "bg-blue-200 text-blue-900 font-semibold"
//                     : "text-gray-700 hover:bg-gray-200"
//                 }`}
//               >
//                 <span className="text-xl">{n.icon}</span>
//                 <span className="text-lg">{n.title}</span>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>

//       <button className="text-gray-700 mt-auto  hover:bg-gray-200 flex items-center gap-3 p-2 rounded-lg transition">
//         <span className="text-xl">
//           <FiLogOut />
//         </span>
//         <span className="text-lg">Logout</span>
//       </button>
//     </div>
//   );
// };

// export default SideBar;

import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getNav } from "../navigation";
import { FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/reducers/authReducer";

const SideBar = ({ showSidebar, setShowSidebar }) => {
  const dispatch = useDispatch();
  const { role } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const { pathname } = useLocation();
  const [allNav, setAllNav] = useState([]);

  useEffect(() => {
    const navs = getNav(role);
    setAllNav(navs);
  }, [role]);

  return (
    <>
      <div
        className={`fixed inset-0 z-40 transition-opacity lg:hidden ${
          showSidebar ? "bg-black bg-opacity-50 visible" : "invisible"
        }`}
        onClick={() => setShowSidebar(false)}
      ></div>

      <div
        className={`fixed top-0 left-0 h-screen w-[260px] bg-gray-100 shadow-md flex flex-col p-4 z-50 transition-transform duration-300 
          ${
            showSidebar ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 lg:flex`}
      >
        <div className="flex items-center justify-center py-4">
          <Link to="/" onClick={() => setShowSidebar(false)}>
            <img
              src="/logo01.png"
              alt="Admin Logo"
              className="w-52 h-auto object-contain"
            />
          </Link>
        </div>

        <nav className="flex flex-col gap-4 mt-4">
          <ul className="space-y-2">
            {allNav.map((n, i) => (
              <li key={i}>
                <Link
                  to={n.path}
                  onClick={() => setShowSidebar(false)}
                  className={`flex items-center gap-3 p-2 rounded-lg transition ${
                    pathname === n.path
                      ? "bg-blue-200 text-blue-900 font-semibold"
                      : "text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <span className="text-xl">{n.icon}</span>
                  <span className="text-lg">{n.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="text-gray-700 mt-auto hover:bg-gray-200 flex items-center gap-3 p-2 rounded-lg transition"
          onClick={() => {
            // setShowSidebar(false);
            dispatch(logout({ navigate, role }));
          }}
        >
          <span className="text-xl">
            <FiLogOut />
          </span>
          <span className="text-lg">Logout</span>
        </button>
      </div>
    </>
  );
};

export default SideBar;
