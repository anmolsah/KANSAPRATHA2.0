// import React from "react";
// import { MdEmail } from "react-icons/md";
// import { IoMdArrowDropdown, IoMdPhonePortrait } from "react-icons/io";
// import {
//   FaFacebook,
//   FaGithub,
//   FaLinkedin,
//   FaLock,
//   FaTwitter,
//   FaUser,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const user = true;

//   return (
//     <div className="w-full bg-[add]">
//       <div className="header-top bg-[add] md-lg:hidden">
//         <div className="w-[85%] lg:w-[90%] mx-auto">
//           <div className="flex w-full justify-between items-center h-[50px] text-slate-500">
//             <ul className="flex justify-start items-center gap-8 font-semibold text-black">
//               <li className="flex relative justify-center items-center gap-2 text-sm after:absolute after:h-[80px] after:w-[1px] after:bg-[add] after:right-[16px]">
//                 <span>
//                   <MdEmail />
//                 </span>
//                 <span>kpsupport@gmail.com</span>
//               </li>
//               <li className="flex relative justify-center items-center gap-2 text-sm">
//                 <span>
//                   <IoMdPhonePortrait />
//                 </span>
//                 <span>+(91) 8250676762</span>
//               </li>
//             </ul>

//             <div>
//               <div className="flex justify-center items-center gap-10">
//                 <div className="flex justify-center items-center gap-4 text-black">
//                   <a href="#">
//                     <FaFacebook />
//                   </a>
//                   <a href="#">
//                     <FaTwitter />
//                   </a>
//                   <a href="#">
//                     <FaLinkedin />
//                   </a>
//                   <a href="#">
//                     <FaGithub />
//                   </a>
//                 </div>

//                 <div className="flex group cursor-pointer text-slate-800 text-sm justify-center items-center gap-1 relative after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:-right-[16px] after:absolute before:absolute before:h-[18px] before:bg-[#afafaf] before:w-[1px] before:-left-[20px]">
//                   <img
//                     className="w-6 h-4"
//                     src="images/india.png"
//                     alt="language"
//                   />
//                   <span>
//                     <IoMdArrowDropdown />
//                   </span>
//                   <ul className="absolute invisible transition-all top-12 rounded-sm duration-200 text-white p-2 w-[100ox] flex flex-col gap-3 group-hover:visible group-hover:top-6 group-hover:bg-black z-10">
//                     <li>English</li>
//                     <li>Hindi</li>
//                     <li>Spanish</li>
//                     <li>French</li>
//                     <li>German</li>
//                   </ul>
//                 </div>

//                 {user ? (
//                   <Link
//                     className="flex justify-center items-center gap-4 text-black cursor-pointer"
//                     to="/dashboard"
//                   >
//                     <span>
//                       <FaUser />
//                     </span>
//                     <span>Anni Khana</span>
//                   </Link>
//                 ) : (
//                   <Link
//                     className="flex justify-center items-center gap-4 text-black cursor-pointer"
//                     to="/login"
//                   >
//                     <span>
//                       <FaLock />
//                     </span>
//                     <span>Login</span>
//                   </Link>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;


import React from "react";
import { MdEmail } from "react-icons/md";
import { IoMdArrowDropdown, IoMdPhonePortrait } from "react-icons/io";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaLock,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const user = true;

  return (
    <div className="w-full bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 shadow-xl">
      <div className="header-top bg-gray-900 md-lg:hidden">
        <div className="w-[85%] lg:w-[90%] mx-auto">
          <div className="flex w-full justify-between items-center h-[60px] text-white">
            <ul className="flex justify-start items-center gap-8 font-medium">
              <li className="flex relative justify-center items-center gap-2 text-sm after:absolute after:h-[25px] after:w-[1px] after:bg-yellow-400 after:right-[-16px]">
                <span className="text-yellow-400 bg-white p-1 rounded-full shadow-md">
                  <MdEmail className="text-gray-900" />
                </span>
                <span className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
                  kpsupport@gmail.com
                </span>
              </li>
              <li className="flex relative justify-center items-center gap-2 text-sm">
                <span className="text-yellow-400 bg-white p-1 rounded-full shadow-md">
                  <IoMdPhonePortrait className="text-gray-900" />
                </span>
                <span className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
                  +(91) 8250676762
                </span>
              </li>
            </ul>

            <div className="flex justify-center items-center gap-8">
              <div className="flex justify-center items-center gap-4">
                {[FaFacebook, FaTwitter, FaLinkedin, FaGithub].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-white hover:text-yellow-400 hover:scale-110 transition-all duration-300 text-lg"
                  >
                    <Icon />
                  </a>
                ))}
              </div>

              <div className="flex group cursor-pointer text-sm justify-center items-center gap-1 relative">
                <div className="flex items-center gap-2 bg-yellow-400 px-3 py-1 rounded-full hover:bg-yellow-500 transition-colors duration-300 shadow-lg">
                  <img className="w-5 h-4 rounded-sm" src="images/india.png" alt="language" />
                  <span className="text-gray-900">
                    <IoMdArrowDropdown />
                  </span>
                </div>
                <ul className="absolute invisible group-hover:visible transition-all duration-300 top-full mt-2 rounded-md shadow-xl bg-gray-800 text-white w-[120px] py-2 z-50 border border-yellow-400">
                  {['English', 'Hindi', 'Spanish', 'French', 'German'].map((lang, i) => (
                    <li key={i} className="px-3 py-1 hover:bg-yellow-500 hover:text-gray-900 cursor-pointer">
                      {lang}
                    </li>
                  ))}
                </ul>
              </div>

              {user ? (
                <Link
                  className="flex justify-center items-center gap-2 bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-full transition-all duration-300 shadow-md text-gray-900 font-bold"
                  to="/dashboard"
                >
                  <span className="bg-white p-1 rounded-full shadow-md">
                    <FaUser className="text-sm text-yellow-400" />
                  </span>
                  <span>Anni Khana</span>
                </Link>
              ) : (
                <Link
                  className="flex justify-center items-center gap-2 bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-full transition-all duration-300 shadow-md text-gray-900 font-bold"
                  to="/login"
                >
                  <span className="bg-white p-1 rounded-full shadow-md">
                    <FaLock className="text-sm text-yellow-400" />
                  </span>
                  <span>Login</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;