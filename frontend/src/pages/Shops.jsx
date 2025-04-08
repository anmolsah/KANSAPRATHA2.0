import React, { useState } from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import img1 from "../assets/img1.jpg";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Shops = () => {
  const [filter, setFilter] = useState(true);
  const categorys = [
    "Cookware & Kitchenware",
    "Drinkware",
    "Tableware & Dinnerware",
    "Home Decor",
    "Gifting",
    "Brass Products",
    "Copper Products",
    "Best Sellers",
    "New Arrivals",
  ];
  return (
    <div>
      <Header />
      <section
        className="h-[220px] bg-cover bg-no-repeat relative bg-left"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundPosition: "center",
        }}
      >
        <div className="absolute left-0 top-0 w-full h-full bg-[#2422228a]">
          <div className="w-[85%] h-full mx-auto">
            <div className="flex flex-col justify-center gap-1 items-center h-full w-full text-white">
              <h2 className="text-3xl font-bold">Shop Page</h2>
              <div className="flex justify-center items-center gap-2 text-2xl w-full">
                <Link to="/">Home</Link>
                <span className="pt-1">
                  <IoIosArrowForward />
                </span>
                <span>Shop</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="w-[85%] md:w-[90%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
          <div className={`block md:hidden ${!filter ? "mb-6" : "mb-0"}`}>
            <button
              onClick={() => setFilter(!filter)}
              className="text-center w-full py-2 px-3 bg-indigo-500 text-white"
            >
              Filter Product
            </button>
          </div>

          <div className="w-full flex flex-wrap">
            <div
              className={`w-3/12  md:w-full pr-8 ${
                filter
                  ? "md:h-0 md:overflow-hidden md:mb-6"
                  : "md:h-auto md:overflow-auto md:mb-0"
              }`}
            >
              <h2 className="text-3xl font-bold mb-3 text-slate-600">
                Category
              </h2>
              <div className="py-2">
                {categorys.map((c, i) => (
                  <div
                    className="flex justify-start items-center gap-2 py-2"
                    key={i}
                  >
                    <input type="checkbox" id={c} />
                    <label
                      htmlFor={c}
                      className="text-slate-600 block cursor-pointer"
                    >
                      {c}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shops;
