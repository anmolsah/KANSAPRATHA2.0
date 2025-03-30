import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const Categorys = () => {
  const categories = [
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
    mdtablet: {
      breakpoint: { max: 991, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
    smmobile: {
      breakpoint: { max: 640, min: 0 },
      items: 2,
    },
    xsmobile: {
      breakpoint: { max: 440, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="w-[87%] mx-auto relative ">
      <Carousel
        autoPlay={true}
        infinite={true}
        arrows={true}
        transitionDuration={500}
        responsive={responsive}
      >
        {categories.map((c, i) => (
          <Link className="h-[185px] border block" key={i} to="#">
            <div className="w-ful h-full relative p-3">
              <img src={`/images/products/${i + 1}.jpg`} alt="" />
              <div className="absolute bottom-6 w-full mx-auto left-0 flex items-center justify-center">
              <span className="py-[2px] px-6 bg-[#33303305d] text-white">{c}</span>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default Categorys;
