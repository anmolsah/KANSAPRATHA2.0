import React from "react";
import { FaRegHeart, FaEye } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import Ratings from "./../Ratings";

const ShopProducts = ({ styles, products }) => {
  return (
    <div
      className={`w-full grid ${
        styles === "grid"
          ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          : "grid-cols-1"
      } gap-6`}
    >
      {products.map((p, i) => (
        <div
          key={i}
          className={`group flex ${
            styles === "grid" ? "flex-col" : "flex-col md:flex-row items-center"
          } bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden`}
        >
          <div
            className={`relative ${
              styles === "grid"
                ? "w-full aspect-square"
                : "w-full md:w-1/3 lg:w-1/4 aspect-square"
            }`}
          >
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              src={p.images[0]}
              alt="Product"
            />
            <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pb-4">
              {[FaRegHeart, FaEye, RiShoppingCartLine].map((Icon, index) => (
                <button
                  key={index}
                  className="p-3 bg-white/90 text-gray-600 rounded-full shadow-md hover:bg-emerald-500 hover:text-white transition-colors duration-200"
                >
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          <div
            className={`p-4 w-full ${
              styles !== "grid" && "md:pl-6"
            } flex flex-col gap-2`}
          >
            <h2 className="text-lg font-semibold text-gray-800">{p.name}</h2>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <span className="text-emerald-500 font-bold text-lg">
                ₹{p.price}
              </span>
              <div className="flex items-center gap-2">
                <Ratings ratings={p.rating} />
                
              </div>
            </div>
            {styles === "list" && (
              <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                {p.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopProducts;
