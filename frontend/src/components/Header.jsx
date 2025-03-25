import React from "react";
import { MdEmail } from "react-icons/md";
import { IoMdArrowDropdown, IoMdPhonePortrait } from "react-icons/io";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-full bg-[add]">
      <div className="header-top bg-[add] md-lg:hidden">
        <div className="w-[85%] lg:w-[90%] mx-auto">
          <div className="flex w-full justify-between items-center h-[50px] text-slate-500">
            <ul className="flex justify-start items-center gap-8 font-semibold text-black">
              <li className="flex relative justify-center items-center gap-2 text-sm after:absolute after:h-[80px] after:w-[1px] after:bg-[add] after:right-[16px]">
                <span>
                  <MdEmail />
                </span>
                <span>kpsupport@gmail.com</span>
              </li>
              <li className="flex relative justify-center items-center gap-2 text-sm">
                <span>
                  <IoMdPhonePortrait />
                </span>
                <span>+(91) 8250676762</span>
              </li>
            </ul>

            <div>
              <div className="flex justify-center items-center gap-10">
                <div className="flex justify-center items-center gap-4 text-black">
                  <a href="#">
                    <FaFacebook />
                  </a>
                  <a href="#">
                    <FaTwitter />
                  </a>
                  <a href="#">
                    <FaLinkedin />
                  </a>
                  <a href="#">
                    <FaGithub />
                  </a>
                </div>

                <div className="flex group cursor-pointer text-slate-800 text-sm justify-center items-center gap-1 relative after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:-right-[16px] after:absolute before:absolute before:h-[18px] before:bg-[#afafaf] before:w-[1px] before:-left-[20px]">
                  <img
                    className="w-4 h-4"
                    src="images/india.png"
                    alt="language"
                  />
                  <span>
                    <IoMdArrowDropdown />
                  </span>
                  <ul className="absolute invisible transition-all top-12 rounded-sm duration-200 text-white p-2 w-[100ox] flex flex-col gap-3 group-hover:visible group-hover:top-6 group-hover:bg-black z-10">
                    <li>English</li>
                    <li>Hindi</li>
                    <li>Spanish</li>
                    <li>French</li>
                    <li>German</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
