import React, { useEffect } from "react";
import { FaRegHeart, FaEye } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import Ratings from "../Ratings";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  add_to_cart,
  add_to_wishlist,
  messageClear,
} from "../../store/reducers/cartReducer";
import toast from "react-hot-toast";

const FeatureProduct = ({ products }) => {
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
    <div className="w-full md:w-[85%] flex flex-wrap mx-auto px-2 sm:px-0">
      <div className="w-full">
        <div className="text-center flex justify-center items-center flex-col text-2xl sm:text-3xl md:text-4xl text-slate-600 font-bold relative pb-[30px] md:pb-[45px]">
          <h2>Feature Products</h2>
          <div className="w-[80px] sm:w-[100px] h-[2px] bg-yellow-700 mt-3 sm:mt-4"></div>
        </div>
      </div>

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 rounded-md">
        {products.map((p, i) => (
          <div
            key={i}
            className="border group transition-all duration-500 hover:shadow-md hover:-mt-2 sm:hover:-mt-3 md:hover:-mt-5"
          >
            <div className="relative overflow-hidden">
              {p.discount ? (
                <div className="flex justify-center items-center absolute text-white w-[25px] h-[30px] sm:w-[30px] sm:h-[38px] rounded-full bg-red-500 font-semibold text-[10px] sm:text-xs left-2 top-2">
                  {p.discount}%
                </div>
              ) : (
                ""
              )}
              <img
                className="w-full h-[150px] sm:h-[180px] md:h-[240px] object-cover"
                src={p.images[0]}
                alt=""
              />
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

            <div className="py-2 sm:py-3 text-slate-600 px-2">
              <h2 className="font-bold text-sm sm:text-base">{p.name}</h2>
              <div className="flex justify-start items-center gap-2 sm:gap-3">
                <span className="text-sm sm:text-md font-semibold">
                  ₹{p.price}
                </span>
                <div className="flex">
                  <Ratings ratings={p.rating} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureProduct;
