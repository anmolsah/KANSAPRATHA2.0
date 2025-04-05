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

const Products = () => {
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

  const products = [
    [1, 2, 3],
    [4, 5, 6],
  ];

  const ButtonGroup = () => null; // Ensure it returns valid JSX

  return (
    <div className="flex gap-8 w-full"> {/* Added w-full */}
      <Carousel
        autoPlay={false}
        infinite={false}
        arrows={false}
        responsive={responsive}
        transitionDuration={500}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
        
      >
        {products.map((p, i) => (
          <div key={i} className="flex flex-col gap-2 p-4 w-full"> {/* Added padding and key */}
            {p.map((pl, j) => (
              <Link
                key={j}
                to="#"
                //className="block w-full" // Added block display
                className="flex justify-start items-start"
              >
                <div className="w-[110px] h-[110px] bg-gray-100"> {/* Added bg for debugging */}
                  <img
                    className="w-full h-full object-cover" // Ensure image fills container
                    src={`/images/products/${pl}.jpg`}
                    alt={`Product ${pl}`}
                  />
                </div>
                <div className="px-3 py-2"> {/* Added padding */}
                  <h2 className="text-lg font-semibold text-slate-600">
                    Product Name
                  </h2>
                  <span className="text-slate-600">$256</span>
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