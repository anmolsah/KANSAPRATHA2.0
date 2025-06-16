import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Categorys = () => {
  const { categorys } = useSelector((state) => state.home);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="w-[87%] mx-auto relative">
      <div className="w-full">
        <div className="text-center flex justify-center items-center flex-col text-3xl text-slate-600 font-bold relative pb-[35px]">
          <h2>Categories</h2>
          <div className="w-[100px] h-[2px] bg-[#059473] mt-4"></div>
        </div>
      </div>
      <Carousel
        autoPlay={true}
        infinite={true}
        arrows={true}
        transitionDuration={500}
        responsive={responsive}
        itemClass="px-0"
      >
        {categorys.map((c, i) => (
          <Link key={i} to={`/products?category=${c.name}`} className="flex flex-col items-center space-y-2">
            <div className="w-[150px] h-[150px] rounded-full overflow-hidden border border-gray-300 shadow-md ">
              <img src={c.image} alt={c.name} className="w-full h-full object-cover" />
            </div>
            <span className="text-md text-gray-700 font-medium text-center">{c.name}</span>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default Categorys;
