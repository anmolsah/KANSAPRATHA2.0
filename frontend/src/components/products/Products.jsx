import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

const Products = ({ title, products }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  const ButtonGroup = ({ next, previous }) => {
    return (
      <div className="flex justify-between items-center px-2 sm:px-0">
        <div className="text-lg sm:text-xl font-bold text-slate-600">{title}</div>
        <div className="flex justify-center items-center gap-2 sm:gap-3 text-slate-600">
          <button
            onClick={() => previous()}
            className="w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] flex justify-center items-center bg-slate-300 border border-slate-200 hover:bg-slate-400 transition-colors"
          >
            <FaCircleChevronLeft className="text-sm sm:text-base" />
          </button>
          <button
            onClick={() => next()}
            className="w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] flex justify-center items-center bg-slate-300 border border-slate-200 hover:bg-slate-400 transition-colors"
          >
            <FaCircleChevronRight className="text-sm sm:text-base" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex gap-4 sm:gap-6 md:gap-8 flex-col-reverse w-full px-2 sm:px-0">
      <Carousel
        autoPlay={false}
        infinite={false}
        arrows={false}
        responsive={responsive}
        transitionDuration={500}
        renderButtonGroupOutside={true}
        containerClass="w-full"
        customButtonGroup={<ButtonGroup />}
      >
        {products.map((p, i) => (
          <div key={i} className="flex flex-col gap-2 sm:gap-3 p-2 sm:p-4 w-full">
            {p.map((pl, j) => (
              <Link
                key={j}
                to="#"
                className="flex justify-start items-start hover:bg-gray-50 transition-colors rounded"
              >
                <div className="w-[80px] h-[80px] sm:w-[110px] sm:h-[110px] bg-gray-100 flex-shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    src={pl.images[0]}
                    alt={pl.name}
                  />
                </div>
                <div className="px-2 sm:px-3 py-1 sm:py-2 overflow-hidden">
                  <h2 className="text-sm sm:text-base md:text-lg font-semibold text-slate-600 truncate">
                    {pl.name}
                  </h2>
                  <span className="text-sm sm:text-base md:text-lg font-bold">₹{pl.price}</span>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Products;