import React from "react";
import { FaRegHeart, FaEye } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import Ratings from "./../Ratings";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  add_to_cart,
  add_to_wishlist,
  messageClear,
} from "../../store/reducers/cartReducer";
import toast from "react-hot-toast";
import { useEffect } from "react";

const ShopProducts = ({ styles, products }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const { successMessage, errorMessage } = useSelector((state) => state.cart);

  const add_cart = (id) => {
    if (userInfo) {
      dispatch(
        add_to_cart({
          userId: userInfo.id,
          quantity: 1,
          productId: id,
        })
      );
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
  }, [successMessage, errorMessage]);

  const add_wishlist = (pro) => {
    if (!userInfo?.id) {
      toast.error("Please login first");
      return navigate("/login");
    }

    const wishlistData = {
      userId: userInfo.id,
      productId: pro._id,
      name: pro.name,
      price: pro.price,
      image: pro.images[0],
      discount: pro.discount,
      rating: pro.rating,
      slug: pro.slug,
    };

    //console.log("Sending to backend:", wishlistData);

    dispatch(add_to_wishlist(wishlistData));
  };
  return (
    <div
      className={`w-full grid ${
        styles === "grid"
          ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          : "grid-cols-1"
      } gap-6`}
    >
      {products.map((p, i) => (
        <div
          key={i}
          className={`group flex ${
            styles === "grid" ? "flex-col" : "flex-col md:flex-row items-center"
          } bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden`}
        >
          <div
            className={`relative ${
              styles === "grid"
                ? "w-full aspect-square"
                : "w-full md:w-1/3 lg:w-1/4 aspect-square"
            }`}
          >
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              src={p.images[0]}
              alt="Product"
            />
            <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pb-4">
              <ul className="flex transition-all duration-700 -bottom-8 sm:-bottom-10 justify-center items-center gap-1 sm:gap-2 absolute w-full group-hover:bottom-2 sm:group-hover:bottom-3">
                <li
                  onClick={() => add_wishlist(p)}
                  className="w-[30px] h-[30px] sm:w-[38px] sm:h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-yellow-400 hover:text-white hover:rotate-[720deg] transition-all"
                >
                  <FaRegHeart />
                </li>
                <Link
                  to={`/product/details/${p.slug}`}
                  className="w-[30px] h-[30px] sm:w-[38px] sm:h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-yellow-400 hover:text-white hover:rotate-[720deg] transition-all"
                >
                  <FaEye />
                </Link>
                <li
                  onClick={() => add_cart(p._id)}
                  className="w-[30px] h-[30px] sm:w-[38px] sm:h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-yellow-400 hover:text-white hover:rotate-[720deg] transition-all"
                >
                  <RiShoppingCartLine />
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`p-4 w-full ${
              styles !== "grid" && "md:pl-6"
            } flex flex-col gap-2`}
          >
            <h2 className="text-lg font-semibold text-gray-800">{p.name}</h2>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <span className="text-yellow-900 font-bold text-lg">
                ₹{p.price}
              </span>
              <div className="flex items-center gap-2">
                <Ratings ratings={p.rating} />
              </div>
            </div>
            {styles === "list" && (
              <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                {p.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopProducts;
