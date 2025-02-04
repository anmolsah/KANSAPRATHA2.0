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
import { getNav } from "../navigation";

const SideBar = () => {
  const [allNav, setAllNav] = useState([]);
  useEffect(() => {
    const navs = getNav("admin");
    setAllNav(navs);
  }, []);
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
        <ul className="space-y-2">
          {allNav.map((n, i) => (
            <li key={i}>
              <Link
                to={n.path}
                className="flex items-center gap-3 p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition"
              >
                <span className="text-xl">{n.icon}</span>
                <span className="text-lg">{n.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
