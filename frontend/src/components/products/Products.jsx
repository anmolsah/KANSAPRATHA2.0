import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Products = () => {
  const products = [
    [1, 2, 3],
    [4, 5, 6],
  ];
  return (
    <div className="flex gap-8">
      <Carousel
        autoPlay={true}
        infinite={true}
        arrows={true}
        showDots={true}
        responsive={responsive}
      >
        <div className="flex flex-col justify-start gap-2"></div>
      </Carousel>
    </div>
  );
};

export default Products;
