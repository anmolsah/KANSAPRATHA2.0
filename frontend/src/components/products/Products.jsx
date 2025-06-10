// import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { Link } from "react-router-dom";
// const Products = () => {
//   const responsive = {
//     superLargeDesktop: {
//       breakpoint: { max: 4000, min: 3000 },
//       items: 1,
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 1,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 1,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//     },
//   };

//   const products = [
//     [1, 2, 3],
//     [4, 5, 6],
//   ];

//   const ButtonGroup = () => {};
//   return (
//     <div className="flex gap-8">
//       <Carousel
//         autoPlay={false}
//         infinite={false}
//         arrows={false}
//         responsive={responsive}
//         transitionDuration={500}
//         renderButtonGroupOutside={true}
//         customButtonGroup={<ButtonGroup />}
//       >
//         {products.map((p, i) => {
//           return (
//             <div className="flex flex-col justify-start gap-2">
//               {p.map((pl, j) => (
//                 <Link to="#">
//                   <img
//                     className="w-full h-[300px]"
//                     src={`/images/products/${pl}.jpg`}
//                     alt="all products"
//                   />
//                   <div className="px-3 flex justify-start items-start gap-1 flex-col text-slate-600">
//                     <h2>Product Name</h2>
//                     <span>$256</span>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           );
//         })}
//       </Carousel>
//     </div>
//   );
// };

// export default Products;

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
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };


  const ButtonGroup = ({ next, previous }) => {
    return (
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold text-slate-600">{title}</div>
        <div className="flex justify-center items-center gap-3 text-slate-600">
          <button
            onClick={() => previous()}
            className="w-[30px] h-[30px] flex justify-center items-center bg-slate-300 border border-slate-200"
          >
            <FaCircleChevronLeft />
          </button>
          <button
            onClick={() => next()}
            className="w-[30px] h-[30px] flex justify-center items-center bg-slate-300 border border-slate-200"
          >
            <FaCircleChevronRight />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex gap-8 flex-col-reverse w-full">
      {" "}
      {/* Added w-full */}
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
          <div key={i} className="flex flex-col gap-2 p-4 w-full">
            {" "}
            {/* Added padding and key */}
            {p.map((pl, j) => (
              <Link
                key={j}
                to="#"
                //className="block w-full" // Added block display
                className="flex justify-start items-start"
              >
                <div className="w-[110px] h-[110px] bg-gray-100">
                  {" "}
                  {/* Added bg for debugging */}
                  <img
                    className="w-full h-full object-cover" // Ensure image fills container
                    src={pl.images[0]}
                    alt={`Product ${pl}`}
                  />
                </div>
                <div className="px-3 py-2">
                  {" "}
                  {/* Added padding */}
                  <h2 className="text-lg font-semibold text-slate-600">
                    {pl.name}
                  </h2>
                  <span className="text-lg font-bold">₹{pl.price}</span>
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
