// import React, { useEffect } from "react";
// import { FaEye, FaRegHeart } from "react-icons/fa";
// import { RiShoppingCartLine } from "react-icons/ri";
// import { Link } from "react-router-dom";
// import Ratings from "../Ratings";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   get_wishlist_products,
//   remove_wishlist,
//   messageClear,
// } from "../../store/reducers/cartReducer";
// import toast from "react-hot-toast";

// const Wishlist = () => {
//   const dispatch = useDispatch();
//   const { userInfo } = useSelector((state) => state.auth);
//   const { successMessage, wishlist } = useSelector((state) => state.cart);
//   useEffect(() => {
//     dispatch(get_wishlist_products(userInfo.id));
//   }, []);

//   useEffect(() => {
//     if (successMessage) {
//       toast.success(successMessage);
//       dispatch(messageClear());
//     }
//   }, [successMessage]);

//   return (
//     <div className="w-full grid grid-cols-4 gap-4 p-4 bg-white">
//       {wishlist.map((p, i) => (
//         <div
//           key={i}
//           className="border group transition-all duration-500 hover:shadow-md hover:-mt-5 bg-white"
//         >
//           <div className="relative overflow-hidden">
//             {p.discount !== 0 && (
//               <div className="flex justify-center items-center absolute text-white w-[30px] h-[38px] rounded-full bg-red-500 font-semibold text-xs left-2 top-2">
//                 {p.discount}%
//               </div>
//             )}

//             <img className="sm:w-full w-full h-[240px]" src={p.image} alt="" />
//             <ul className=" flex transition-all duration-700 -bottom-10 justify-center items-center gap-2 absolute w-full group-hover:bottom-3">
//               <li
//                 onClick={() => dispatch(remove_wishlist(p._id))}
//                 className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-pink-400 hover:text-white hover:rotate-[720deg] transition-all"
//               >
//                 <FaRegHeart />
//               </li>
//               <Link
//                 to={`/product/details/${p.slug}`}
//                 className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-pink-400 hover:text-white hover:rotate-[720deg] transition-all"
//               >
//                 <FaEye />
//               </Link>
//               <li className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-pink-400 hover:text-white hover:rotate-[720deg] transition-all">
//                 <RiShoppingCartLine />
//               </li>
//             </ul>
//           </div>

//           <div className="py-3 text-slate-600 px-2 ">
//             <h2 className="font-bold">{p.name}</h2>
//             <div className="flex justify-start items-center gap-3">
//               <span className="text-md font-semibold">₹{p.price}</span>
//               <div className="flex">
//                 <Ratings ratings={p.rating} />
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Wishlist;


import React, { useEffect } from "react";
import { FaEye, FaRegHeart } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Ratings from "../Ratings";
import { useDispatch, useSelector } from "react-redux";
import {
  get_wishlist_products,
  remove_wishlist,
  messageClear,
} from "../../store/reducers/cartReducer";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const { successMessage, wishlist } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(get_wishlist_products(userInfo.id));
  }, []);

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
    }
  }, [successMessage]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {wishlist.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden"
          >
            {/* Product Image Section */}
            <div className="relative overflow-hidden">
              {p.discount !== 0 && (
                <div className="absolute left-2 top-2 bg-emerald-500 text-white px-3 py-1 rounded-lg text-sm font-semibold z-10">
                  {p.discount}% OFF
                </div>
              )}
              
              <div className="relative pb-[120%]">
                <img
                  className="absolute w-full h-full object-cover"
                  src={p.image}
                  alt={p.name}
                />
              </div>

              {/* Action Buttons */}
              <div className="absolute inset-x-0 bottom-0 bg-white/90 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center gap-3 p-3">
                <button
                  onClick={() => dispatch(remove_wishlist(p._id))}
                  className="p-2 rounded-full bg-white text-emerald-600 hover:bg-emerald-400 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <MdDelete className="text-lg" />
                </button>
                <Link
                  to={`/product/details/${p.slug}`}
                  className="p-2 rounded-full bg-white text-emerald-600 hover:bg-emerald-400 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <FaEye className="text-lg" />
                </Link>
                <button className="p-2 rounded-full bg-white text-emerald-600 hover:bg-emerald-400 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
                  <RiShoppingCartLine className="text-lg" />
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className="p-4 space-y-2">
              <h2 className="text-gray-800 font-semibold truncate">{p.name}</h2>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold text-lg">
                    ₹{p.price}
                  </span>
                  {p.discount !== 0 && (
                    <span className="text-gray-400 line-through text-sm">
                      ₹{Math.round(p.price / (1 - p.discount / 100))}
                    </span>
                  )}
                </div>
                <Ratings ratings={p.rating} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;