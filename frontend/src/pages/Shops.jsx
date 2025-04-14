// import React, { useState } from "react";
// import Header from "./../components/Header";
// import Footer from "./../components/Footer";
// import img1 from "../assets/img1.jpg";
// import { Link } from "react-router-dom";
// import { IoIosArrowForward } from "react-icons/io";
// import { Range } from "react-range";
// import { AiFillStar } from "react-icons/ai";
// import { CiStar } from "react-icons/ci";
// import Products from "../components/products/Products";
// import { BsFillGridFill } from "react-icons/bs";
// import { FaThList } from "react-icons/fa";
// import ShopProducts from "../components/products/ShopProducts";

// const Shops = () => {
//   const [filter, setFilter] = useState(true);
//   const [rating, setRating] = useState("");
//   const [styles, setStyles] = useState("grid");
//   const [state, setState] = useState({
//     values: [50, 5000],
//   });
//   const categorys = [
//     "Cookware & Kitchenware",
//     "Drinkware",
//     "Tableware & Dinnerware",
//     "Home Decor",
//     "Gifting",
//     "Brass Products",
//     "Copper Products",
//     "Best Sellers",
//   ];
//   return (
//     <div>
//       <Header />
//       <section
//         className="h-[220px] bg-cover bg-no-repeat relative bg-left"
//         style={{
//           backgroundImage: `url(${img1})`,
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute left-0 top-0 w-full h-full bg-[#2422228a]">
//           <div className="w-[85%] h-full mx-auto">
//             <div className="flex flex-col justify-center gap-1 items-center h-full w-full text-white">
//               <h2 className="text-3xl font-bold">Shop Page</h2>
//               <div className="flex justify-center items-center gap-2 text-2xl w-full">
//                 <Link to="/">Home</Link>
//                 <span className="pt-1">
//                   <IoIosArrowForward />
//                 </span>
//                 <span>Shop</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-16">
//         <div className="w-[85%] md:w-[90%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
//           <div className={`block md:hidden ${!filter ? "mb-6" : "mb-0"}`}>
//             <button
//               onClick={() => setFilter(!filter)}
//               className="text-center w-full py-2 px-3 bg-indigo-500 text-white"
//             >
//               Filter Product
//             </button>
//           </div>

//           <div className="w-full flex flex-wrap">
//             <div
//               className={`w-3/12  md:w-full pr-8 ${
//                 filter
//                   ? "md:h-0 md:overflow-hidden md:mb-6"
//                   : "md:h-auto md:overflow-auto md:mb-0"
//               }`}
//             >
//               <h2 className="text-3xl font-bold mb-3 text-slate-600">
//                 Category
//               </h2>
//               <div className="py-2">
//                 {categorys.map((c, i) => (
//                   <div
//                     className="flex justify-start items-center gap-2 py-2"
//                     key={i}
//                   >
//                     <input type="checkbox" id={c} />
//                     <label
//                       htmlFor={c}
//                       className="text-slate-600 block cursor-pointer"
//                     >
//                       {c}
//                     </label>
//                   </div>
//                 ))}
//               </div>

//               <div className="py-2 flex flex-col gap-5">
//                 <h2 className="text-3xl font-bold mb-3 text-slate-600">
//                   Price
//                 </h2>

//                 <Range
//                   step={5}
//                   min={50}
//                   max={5000}
//                   values={state.values}
//                   onChange={(values) => setState({ values })}
//                   renderTrack={({ props, children }) => (
//                     <div
//                       {...props}
//                       className="w-full h-[6px] bg-slate-200 rounded-full cursor-pointer"
//                     >
//                       {children}
//                     </div>
//                   )}
//                   renderThumb={({ props }) => (
//                     <div
//                       {...props}
//                       className="w-[15px] h-[15px] bg-indigo-500 rounded-full cursor-pointer"
//                     />
//                   )}
//                 />
//                 <div>
//                   <span className="text-slate-800 font-bold text-lg">
//                     ${Math.floor(state.values[0])} - $
//                     {Math.floor(state.values[1])}
//                   </span>
//                 </div>
//               </div>

//               <div className="py-3 flex flex-col gap-4">
//                 <h2 className="text-3xl font-bold mb-3 text-slate-600">
//                   Rating
//                 </h2>
//                 <div className="flex flex-col gap-3">
//                   <div
//                     onClick={() => setRating(5)}
//                     className="text-orange-500 flex justify-start items-start gap-2 text-xl cursor-pointer"
//                   >
//                     <span>
//                       <AiFillStar />
//                     </span>
//                     <span>
//                       <AiFillStar />
//                     </span>
//                     <span>
//                       <AiFillStar />
//                     </span>
//                     <span>
//                       <AiFillStar />
//                     </span>
//                     <span>
//                       <AiFillStar />
//                     </span>
//                     <span>
//                       <AiFillStar />
//                     </span>
//                   </div>
//                   <div
//                     onClick={() => setRating(4)}
//                     className="text-orange-500 flex justify-start items-start gap-2 text-xl cursor-pointer"
//                   >
//                     <span>
//                       <AiFillStar />
//                     </span>
//                     <span>
//                       <AiFillStar />
//                     </span>
//                     <span>
//                       <AiFillStar />
//                     </span>
//                     <span>
//                       <AiFillStar />
//                     </span>
//                     <span>
//                       <AiFillStar />
//                     </span>
//                     <span>
//                       <CiStar />
//                     </span>
//                   </div>
//                   <div
//                     onClick={() => setRating(3)}
//                     className="text-orange-500 flex justify-start items-start gap-2 text-xl cursor-pointer"
//                   >
//                     <span>
//                       <AiFillStar />
//                     </span>
//                     <span>
//                       <AiFillStar />
//                     </span>
//                     <span>
//                       <AiFillStar />
//                     </span>
//                     <span>
//                       <AiFillStar />
//                     </span>
//                     <span>
//                       <CiStar />
//                     </span>
//                     <span>
//                       <CiStar />
//                     </span>
//                   </div>
//                   <div
//                     onClick={() => setRating(2)}
//                     className="text-orange-500 flex justify-start items-start gap-2 text-xl cursor-pointer"
//                   >
//                     <span>
//                       <AiFillStar />
//                     </span>
//                     <span>
//                       <AiFillStar />
//                     </span>
//                     <span>
//                       <AiFillStar />
//                     </span>
//                     <span>
//                       <CiStar />
//                     </span>
//                     <span>
//                       <CiStar />
//                     </span>
//                     <span>
//                       <CiStar />
//                     </span>
//                   </div>
//                   <div
//                     onClick={() => setRating(1)}
//                     className="text-orange-500 flex justify-start items-start gap-2 text-xl cursor-pointer"
//                   >
//                     <span>
//                       <AiFillStar />
//                     </span>
//                     <span>
//                       <CiStar />
//                     </span>
//                     <span>
//                       <CiStar />
//                     </span>
//                     <span>
//                       <CiStar />
//                     </span>
//                     <span>
//                       <CiStar />
//                     </span>
//                     <span>
//                       <CiStar />
//                     </span>
//                   </div>
//                   <div className="text-orange-500 flex justify-start items-start gap-2 text-xl cursor-pointer">
//                     <span>
//                       <CiStar />
//                     </span>
//                     <span>
//                       <CiStar />
//                     </span>
//                     <span>
//                       <CiStar />
//                     </span>
//                     <span>
//                       <CiStar />
//                     </span>
//                     <span>
//                       <CiStar />
//                     </span>
//                     <span>
//                       <CiStar />
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               <div className="pt-5 flex flex-col gap-4">
//                 <Products title="Latest Product" />
//               </div>
//             </div>

//             <div className="w-9/12">
//               <div className="pl-8 md:pl-0 ">
//                 <div className="py-4 bg-white mb-10 px-3 rounded-md flex justify-between items-start border">
//                   <h2 className="text-xl font-medium">14 Products</h2>
//                   <div className="flex justify-center items-center gap-3">
//                     <select
//                       className="p-1 border outline-0 font-semibold"
//                       name=""
//                       id=""
//                     >
//                       <option value="">Sort By</option>
//                       <option value="low-to-high">Low to High Price</option>
//                       <option value="high-to-low">High to Low Price</option>
//                     </select>
//                     <div className="flex justify-center items-center gap-4">
//                       <div
//                         onClick={() => setStyles("grid")}
//                         className={`p-2 ${
//                           styles === "grid" && "bg-slate-300"
//                         } text-slate-600 hover:bg-slate-300 cursor-pointer rounded-md`}
//                       >
//                         <BsFillGridFill />
//                       </div>
//                       <div
//                         onClick={() => setStyles("list")}
//                         className={`p-2 ${
//                           styles === "list" && "bg-slate-300"
//                         } text-slate-600 hover:bg-slate-300 cursor-pointer rounded-md`}
//                       >
//                         <FaThList />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="pb-8 ">
//                   <ShopProducts styles={styles} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Shops;


import React, { useState } from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import img1 from "../assets/img1.jpg";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { Range } from "react-range";
import { AiFillStar } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import Products from "../components/products/Products";
import { BsFillGridFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import ShopProducts from "../components/products/ShopProducts";

const Shops = () => {
  const [filter, setFilter] = useState(true);
  const [rating, setRating] = useState("");
  const [styles, setStyles] = useState("grid");
  const [state, setState] = useState({
    values: [50, 5000],
  });
  const categorys = [
    "Cookware & Kitchenware",
    "Drinkware",
    "Tableware & Dinnerware",
    "Home Decor",
    "Gifting",
    "Brass Products",
    "Copper Products",
    "Best Sellers",
  ];
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 min-h-screen">
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
              <h2 className="text-4xl font-bold text-gray-50 mb-2">Shop Page</h2>
              <div className="flex items-center text-gray-200">
                <Link to="/" className="hover:text-emerald-400 transition-colors">
                  Home
                </Link>
                <IoIosArrowForward className="mx-2" />
                <span className="text-gray-50">Shop</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className={`md:hidden ${!filter ? "mb-6" : "mb-0"}`}>
            <button
              onClick={() => setFilter(!filter)}
              className="w-full py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
            >
              Filter Products
            </button>
          </div>

          <div className="flex flex-wrap gap-8">
            {/* Filters Sidebar */}
            <div
              className={`w-full md:w-3/12 ${
                filter ? "md:block" : "hidden"
              } transition-all duration-300`}
            >
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Category</h2>
                <div className="space-y-2">
                  {categorys.map((c, i) => (
                    <div className="flex items-center gap-2 py-1" key={i}>
                      <input
                        type="checkbox"
                        id={c}
                        className="text-emerald-500 border-gray-300 rounded focus:ring-emerald-400"
                      />
                      <label
                        htmlFor={c}
                        className="text-gray-600 hover:text-emerald-500 cursor-pointer transition-colors"
                      >
                        {c}
                      </label>
                    </div>
                  ))}
                </div>

                <div className="my-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Price</h2>
                  <div className="space-y-4">
                    <Range
                      step={5}
                      min={50}
                      max={5000}
                      values={state.values}
                      onChange={(values) => setState({ values })}
                      renderTrack={({ props, children }) => (
                        <div
                          {...props}
                          className="h-2 bg-gray-100 rounded-full"
                        >
                          <div className="h-2 bg-emerald-400 rounded-full" />
                        </div>
                      )}
                      renderThumb={({ props }) => (
                        <div
                          {...props}
                          className="h-5 w-5 bg-emerald-500 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                        />
                      )}
                    />
                    <div className="text-gray-800 font-medium">
                      ${Math.floor(state.values[0])} - ${Math.floor(state.values[1])}
                    </div>
                  </div>
                </div>

                <div className="my-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">Rating</h2>
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((stars) => (
                      <div
                        key={stars}
                        onClick={() => setRating(stars)}
                        className="flex items-center gap-1 cursor-pointer text-emerald-400 hover:text-emerald-500"
                      >
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>
                            {i < stars ? (
                              <AiFillStar className="w-6 h-6" />
                            ) : (
                              <CiStar className="w-6 h-6" />
                            )}
                          </span>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Products title="Latest Products" />
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="w-full md:w-8/12">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                  <h2 className="text-xl font-medium text-gray-800 mb-4 md:mb-0">
                    14 Products
                  </h2>
                  <div className="flex items-center gap-4">
                    <select
                      className="bg-gray-50 border border-gray-300 text-gray-600 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-400"
                    >
                      <option value="">Sort By</option>
                      <option value="low-to-high">Low to High Price</option>
                      <option value="high-to-low">High to Low Price</option>
                    </select>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setStyles("grid")}
                        className={`p-2 rounded-lg ${
                          styles === "grid"
                            ? "bg-emerald-500 text-white"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        <BsFillGridFill className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setStyles("list")}
                        className={`p-2 rounded-lg ${
                          styles === "list"
                            ? "bg-emerald-500 text-white"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        <FaThList className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                <ShopProducts styles={styles} />
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