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
    "Kansa (Bronze) Products",
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
      items: 3,
    },
    xsmobile: {
      breakpoint: { max: 440, min: 0 },
      items: 2,
    },
  };
  return (
    <div className="w-full ">
      <div className="w-[85%] lg:w-[90%] mx-auto">
        <div className="w-full flex flex-wrap">
          <div className="w-full">
            <div className="my-8">
              <Carousel
                autoPlay={true}
                infinite={true}
                arrows={true}
                showDots={true}
                responsive={responsive}
              >
                {[1, 2, 3].map((img, i) => (
                  <Link key={i} to="#">
                    <img
                      className="w-full h-[600px] "
                      src={`/images/banners/${img}.png`}
                      alt="banners"
                    />
                  </Link>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categorys;
