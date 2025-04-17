import React from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import img1 from "../assets/img1.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Details = () => {
  const images = [1, 2, 3, 4, 5, 6];
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
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
              <h2 className="text-4xl font-bold text-gray-50 mb-2">
                Product Details
              </h2>
              <div className="flex items-center text-gray-200">
                <Link
                  to="/"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Home
                </Link>
                <IoIosArrowForward className="mx-2" />
                <span className="text-gray-50"> Product Details </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-slate-100 py-5 mb-5">
          <div className="w-[85%] h-full mx-auto">
            <div className="flex justify-start items-center text-md text-slate-600 w-full">
              <Link to="/">Home</Link>
              <span>
                <IoIosArrowForward className="mx-2" />
              </span>
              <Link to="/">Category</Link>
              <span>
                <IoIosArrowForward className="mx-2" />
              </span>
              <span>Product Name</span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-[85%] h-full mx-auto">
          <div className="grid grid-cols-2 gap-8">
            <div>
            <div className="p-5 border">
              <img
                className="h-[400px] w-full"
                src="/images/products/1.jpg"
                alt=""
              />
            </div>

            <div className="py-3">
              {images && (
                <Carousel
                  autoPlay={true}
                  infinite={true}
                  transitionDuration={500}
                  responsive={responsive}
                >
                  {images.map((img, i) => {
                    return (
                      <div>
                        <img className="h-[120px]" src={`/images/products/${i + 1}.jpg`} alt="" />
                      </div>
                    );
                  })}
                </Carousel>
              )}
            </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Details;
