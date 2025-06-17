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
            
            <div className="relative overflow-hidden">
              {p.discount !== 0 && (
                <div className="absolute left-2 top-2 bg-yellow-500 text-white px-3 py-1 rounded-lg text-sm font-semibold z-10">
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

              <div className="absolute inset-x-0 bottom-0 bg-white/90 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center gap-3 p-3">
                <button
                  onClick={() => dispatch(remove_wishlist(p._id))}
                  className="p-2 rounded-full bg-white text-yellow-600 hover:bg-yellow-400 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <MdDelete className="text-lg" />
                </button>
                <Link
                  to={`/product/details/${p.slug}`}
                  className="p-2 rounded-full bg-white text-yellow-600 hover:bg-yellow-400 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <FaEye className="text-lg" />
                </Link>
                <button className="p-2 rounded-full bg-white text-yellow-600 hover:bg-yellow-400 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg">
                  <RiShoppingCartLine className="text-lg" />
                </button>
              </div>
            </div>

            
            <div className="p-4 space-y-2">
              <h2 className="text-gray-800 font-semibold truncate">{p.name}</h2>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-600 font-bold text-lg">
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