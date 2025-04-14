import React from "react";
import { FaRegHeart, FaEye } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import Ratings from "./../Ratings";

const ShopProducts = ({ styles }) => {
  return (
    <div
      className={`w-full grid ${
        styles === "grid" ? "grid-cols-3" : "grid-cols-1"
      } gap-3`}
    >
      {[1, 2, 3, 4, 5, 6].map((p, i) => (
        <div
          key={i}
          className={`flex transition-all duration-300 ease-in-out ${
            styles === "grid"
              ? "flex-col justify-start items-start"
              : "justify-start items-center"
          } w-full gap-4 bg-white shadow-md rounded-md p-4`}
        >
          <div
            className={
              styles === "grid"
                ? "w-full relative group h-[210px] overflow-hidden"
                : "md:w-full  lg:w-full  relative group  h-[210px] overflow-hidden"
            }
          >
            <img
              className="w-full object-cover h-[240px] rounded-md"
              src={`/images/products/${i + 1}.jpg`}
              alt=""
            />
            <ul className=" flex transition-all duration-700 -bottom-10 justify-center items-center gap-2 absolute w-full group-hover:bottom-3">
              <li className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-pink-400 hover:text-white hover:rotate-[720deg] transition-all">
                <FaRegHeart />
              </li>
              <li className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-pink-400 hover:text-white hover:rotate-[720deg] transition-all">
                <FaEye />
              </li>
              <li className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-pink-400 hover:text-white hover:rotate-[720deg] transition-all">
                <RiShoppingCartLine />
              </li>
            </ul>
          </div>
          <div className="flex justify-start items-start gap-2 ">
            <h2 className="font-bold">Product Name</h2>
            <div className="flex justify-start items-center gap-3">
              <span className="text-md font-semibold">₹2543</span>
              <div className="flex">
                <Ratings ratings={4} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopProducts;
