import React from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import img1 from "../assets/img1.jpg";

const Card = () => {
  const card_products = [1, 2];
  const outOfStockProducts = [1, 2];
  return (
    <div>
      <Header />
      <section
        className="h-64 bg-cover bg-no-repeat relative"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-indigo-950/80">
          <div className="max-w-7xl mx-auto h-full px-4">
            <div className="flex flex-col justify-center items-center h-full text-center">
              <h2 className="text-4xl font-bold text-gray-50 mb-2">Card</h2>
              <div className="flex items-center text-gray-200">
                <Link
                  to="/"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Home
                </Link>
                <IoIosArrowForward className="mx-2" />
                <span className="text-gray-50">Shop</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eeeeee]">
        <div className="w-[85%]">
          {card_products.length > 0 || outOfStockProducts > 0 ? (
            <div className="flex flex-wrap">
              <div className="w-[67%]">
                <div className="pr-3">
                  <div className="flex flex-col gap-3">
                    <div className="bg-white p-4">
                      <h2 className="text-md text-green-500 font-semibold">Stock Products {card_products.length}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <Link className="px-4 py-1 bg-indigo-500 text-white to='/shops">
                Shop Now
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Card;
