import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const Banner = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="w-full  py-8">
      <div className="max-w-7xl mx-auto px-4">
        <Carousel
          autoPlay={true}
          infinite={true}
          arrows={true}
          showDots={true}
          responsive={responsive}
          containerClass="rounded-xl overflow-hidden shadow-xl"
          itemClass="carousel-item"
          dotListClass="custom-dot-list"
          arrowButtonClass="custom-arrow"
          renderDotsOutside={true}
        >
          {[1, 2, 3, 4, 5, 6].map((img, i) => (
            <Link key={i} to="#" className="block group">
              <img
                className="w-full h-[300px] md:h-[400px] lg:h-[600px] object-cover object-center transition-transform duration-500 group-hover:scale-105"
                src={`/images/banners/${img}.jpg`}
                alt="banner"
              />
            </Link>
          ))}
        </Carousel>
      </div>

      {/* Custom Styles */}
      <style>
        {`
          .custom-arrow {
            background-color: #34d399 !important;
            padding: 12px !important;
            border-radius: 50% !important;
            transition: all 0.3s !important;
          }
          
          .custom-arrow:hover {
            background-color: #059669 !important;
          }
          
          .custom-arrow::before {
            color: white !important;
            font-size: 1.2rem !important;
          }
          
          .custom-dot-list li button {
            border: 2px solid #34d399 !important;
            background: transparent !important;
          }
          
          .custom-dot-list li.react-multi-carousel-dot--active button {
            background: #34d399 !important;
          }
        `}
      </style>
    </div>
  );
};

export default Banner;
