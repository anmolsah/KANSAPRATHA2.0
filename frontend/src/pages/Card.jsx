// import React from "react";
// import Header from "./../components/Header";
// import Footer from "./../components/Footer";
// import { IoIosArrowForward } from "react-icons/io";
// import { Link } from "react-router-dom";
// import img1 from "../assets/img1.jpg";

// const Card = () => {
//   const card_products = [1, 2];
//   const outOfStockProducts = [1, 2];
//   return (
//     <div>
//       <Header />
//       <section
//         className="h-64 bg-cover bg-no-repeat relative"
//         style={{
//           backgroundImage: `url(${img1})`,
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute inset-0 bg-indigo-950/80">
//           <div className="max-w-7xl mx-auto h-full px-4">
//             <div className="flex flex-col justify-center items-center h-full text-center">
//               <h2 className="text-4xl font-bold text-gray-50 mb-2">Card</h2>
//               <div className="flex items-center text-gray-200">
//                 <Link
//                   to="/"
//                   className="hover:text-emerald-400 transition-colors"
//                 >
//                   Home
//                 </Link>
//                 <IoIosArrowForward className="mx-2" />
//                 <span className="text-gray-50">Shop</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="bg-[#eeeeee]">
//         <div className="w-[85%]">
//           {card_products.length > 0 || outOfStockProducts > 0 ? (
//             <div className="flex flex-wrap">
//               <div className="w-[67%]">
//                 <div className="pr-3">
//                   <div className="flex flex-col gap-3">
//                     <div className="bg-white p-4">
//                       <h2 className="text-md text-green-500 font-semibold">
//                         Stock Products {card_products.length}
//                       </h2>
//                     </div>

//                     {card_products.map((p, i) => (
//                       <div className="flex bg-white p-4 flex-col gap-2">
//                         <div className="flex justify-start items-center">
//                           <h2 className="text-md text-slate-600 font-bold">
//                             KhansaPratha
//                           </h2>
//                         </div>
//                         {[1, 2].map((p, i) => (
//                           <div className="w-full flex flex-wrap">
//                             <div className="flex gap-2 w-7/12">
//                               <div className="flex gap-2 justify-start items-center">
//                                 <img
//                                   className="w-[80px] h-[80px]"
//                                   src={`/images/products/${i + 1}.jpg`}
//                                   alt=""
//                                 />
//                                 <div className="pr-4 text-slate-600">
//                                   <h2 className="text-md font-semibold">
//                                     Product Name
//                                   </h2>
//                                   <span className="text-sm">Brand: XYz</span>
//                                 </div>
//                               </div>
//                             </div>
//                             <div className="flex justify-between w-5/12">
//                               <div className="pl-4">
//                                 <h2 className="text-lg text-orange-500">
//                                   ₹2560
//                                 </h2>
//                                 <p className="line-through">₹5642</p>
//                                 <p>-15%</p>
//                               </div>

//                               <div className="flex gap-2 flex-col">
//                                 <div className="flex bg-slate-200 h-[30px] justify-center items-center text-xl">
//                                   <div className="px-3 cursor-pointer">-</div>
//                                   <div className="px-3">2</div>
//                                   <div className="px-3 cursor-pointer">+</div>
//                                 </div>
//                                 <button className="px-5 py-[3px] bg-red-500 text-white">
//                                   Delete
//                                 </button>
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     ))}

//                     {outOfStockProducts.length > 0 && (
//                       <div className="flex flex-col gap-3">
//                         <div className="bg-white p-4">
//                           <h2 className="text-md text-green-500 font-semibold">
//                             Out Of Stock {card_products.length}
//                           </h2>
//                         </div>

//                         <div className="bg-white p-4">
//                           {[1].map((p, i) => (
//                             <div className="w-full flex flex-wrap">
//                               <div className="flex gap-2 w-7/12">
//                                 <div className="flex gap-2 justify-start items-center">
//                                   <img
//                                     className="w-[80px] h-[80px]"
//                                     src={`/images/products/${i + 1}.jpg`}
//                                     alt=""
//                                   />
//                                   <div className="pr-4 text-slate-600">
//                                     <h2 className="text-md font-semibold">
//                                       Product Name
//                                     </h2>
//                                     <span className="text-sm">Brand: XYz</span>
//                                   </div>
//                                 </div>
//                               </div>
//                               <div className="flex justify-between w-5/12">
//                                 <div className="pl-4">
//                                   <h2 className="text-lg text-orange-500">
//                                     ₹2560
//                                   </h2>
//                                   <p className="line-through">₹5642</p>
//                                   <p>-15%</p>
//                                 </div>

//                                 <div className="flex gap-2 flex-col">
//                                   <div className="flex bg-slate-200 h-[30px] justify-center items-center text-xl">
//                                     <div className="px-3 cursor-pointer">-</div>
//                                     <div className="px-3">2</div>
//                                     <div className="px-3 cursor-pointer">+</div>
//                                   </div>
//                                   <button className="px-5 py-[3px] bg-red-500 text-white">
//                                     Delete
//                                   </button>
//                                 </div>
//                               </div>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               <div className="w-[33%]">
//                 <div className="pl-3">
//                   {
//                     card_products.length > 0 && <div className="bg-white p-3 text-slate-600 flex flex-col gap-3">
//                       <h2 className="text-xl font-bold">Order Summary</h2>
//                       <div className="flex justify-between items-center">
//                         <span>2 Items</span>
//                         <span>₹2560</span>
//                       </div>
//                       <div className="flex justify-between items-center">
//                         <span>Shipping Fee</span>
//                         <span>₹100</span>
//                       </div>

//                       <div className="flex gap-2">
//                         <input type="text" className="w-full px-3 py-2 border border-slate-200 outline-0 focus:border-green-500 rounded-sm" placeholder="Discount Coupan" />
//                         <button className="px-5 py-[1px] bg-green-500 text-white rounded-sm text-sm">Apply</button>
//                       </div>

//                       <div className="flex justify-between items-center">
//                         <span>Total</span>
//                         <span className="font-bold">₹2660</span>
//                       </div>

//                       <button className="px-5 py-[6px] rounded-sm bg-red-500 text-white text-sm">Procced to checkout</button>
//                     </div>
//                   }
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div>
//               <Link className="px-4 py-1 bg-indigo-500 text-white to='/shops">
//                 Shop Now
//               </Link>
//             </div>
//           )}
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Card;

import React, { useEffect } from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../assets/img1.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  get_cart_product,
  delete_cart_product,
  messageClear
} from "../store/reducers/cartReducer";
import toast from "react-hot-toast";

const Card = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const {
    cart_products,
    successMessage,
    price,
    buy_product_item,
    shipping_fee,
    outofstock_products,
  } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  // const card_products = [1, 2];
  // const outOfStockProducts = [1, 2];

  useEffect(() => {
    dispatch(get_cart_product(userInfo.id));

  }, []);
  const redirect = () => {
    navigate("/shipping", {
      state: {
        products: [],
        price: 500,
        shipping_fee: 40,
        items: 2,
      },
    });
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      dispatch(get_cart_product(userInfo.id));
    }
  }, [successMessage]);
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 min-h-screen">
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
              <h2 className="text-4xl font-bold text-gray-50 mb-2">Cart</h2>
              <div className="flex items-center text-gray-200">
                <Link
                  to="/"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Home
                </Link>
                <IoIosArrowForward className="mx-2" />
                <span className="text-gray-50">Cart</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {cart_products.length > 0 || outofstock_products.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-lg font-semibold text-emerald-500 mb-4">
                    Stock Products ({cart_products.length})
                  </h2>
                  {cart_products.map((p, i) => (
                    <div key={i} className="space-y-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h3 className="font-semibold text-gray-800 mb-2">
                          {p.shopName}
                        </h3>
                        {p.products.map((item, idx) => (
                          <div
                            key={idx}
                            className="py-4 border-t border-gray-200"
                          >
                            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                              <div className="flex items-center gap-4">
                                <img
                                  className="w-20 h-20 object-cover rounded-lg"
                                  src={item.productInfo.images[0]}
                                  alt="Product"
                                />
                                <div>
                                  <h4 className="font-medium text-gray-800">
                                    {item.productInfo.name}
                                  </h4>
                                  <p className="text-sm text-gray-600">
                                    Brand: {item.productInfo.brand}
                                  </p>
                                </div>
                              </div>
                              <div className="flex flex-col md:items-end gap-4 w-full md:w-auto">
                                <div className="text-emerald-500 font-bold text-lg">
                                  ₹
                                  {item.productInfo.price -
                                    Math.floor(
                                      (item.productInfo.price *
                                        item.productInfo.discount) /
                                        100
                                    )}
                                  <span className="text-gray-400 line-through ml-2">
                                    ₹{item.productInfo.price}
                                  </span>
                                  <span className="text-emerald-400 text-sm ml-2">
                                    -{item.productInfo.discount}%
                                  </span>
                                </div>
                                <div className="flex items-center gap-4">
                                  <div className="flex bg-gray-100 rounded-lg">
                                    <button className="px-3 py-1 hover:bg-emerald-500 hover:text-white rounded-l-lg transition-colors">
                                      -
                                    </button>
                                    <span className="px-3 py-1">
                                      {item.quantity}
                                    </span>
                                    <button className="px-3 py-1 hover:bg-emerald-500 hover:text-white rounded-r-lg transition-colors">
                                      +
                                    </button>
                                  </div>
                                  <button
                                    onClick={() =>
                                      dispatch(delete_cart_product(item._id))
                                    }
                                    className="px-4 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                                  >
                                    Delete
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Out of Stock Products */}
                {outofstock_products.length > 0 && (
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h2 className="text-lg font-semibold text-emerald-500 mb-4">
                      Out Of Stock ({outofstock_products.length})
                    </h2>
                    <div className="bg-gray-50 rounded-lg p-4">
                      {outofstock_products.map((item, idx) => (
                        <div key={idx} className="py-4">
                          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                            <div className="flex items-center gap-4">
                              <img
                                className="w-20 h-20 object-cover rounded-lg"
                                src={item.products[0].images[0]}
                                alt="Product"
                              />
                              <div>
                                <h4 className="font-medium text-gray-800">
                                  {item.products[0].name}
                                </h4>
                                <p className="text-sm text-gray-600">
                                  Brand: {item.products[0].brand}
                                </p>
                              </div>
                            </div>
                            <div className="text-emerald-500 font-bold text-lg">
                              ₹
                              {item.products[0].price -
                                Math.floor(
                                  (item.products[0].price *
                                    item.products[0].discount) /
                                    100
                                )}
                              <span className="text-gray-400 line-through ml-2">
                                ₹{item.products[0].price}
                              </span>
                              <span className="text-emerald-400 text-sm ml-2">
                                -{item.products[0].discount}%
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-md p-6 h-fit sticky top-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-6">
                    Order Summary
                  </h2>
                  <div className="space-y-4">
                    <div className="flex justify-between text-gray-600">
                      <span>{buy_product_item} Items</span>
                      <span>₹{price}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Shipping Fee</span>
                      <span>₹{shipping_fee}</span>
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                        placeholder="Discount Coupon"
                      />
                      <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
                        Apply
                      </button>
                    </div>
                    <div className="flex justify-between font-bold text-gray-800 pt-4">
                      <span>Total</span>
                      <span>₹{price + shipping_fee}</span>
                    </div>
                    <button
                      onClick={redirect}
                      className="w-full py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <Link
                to="/shops"
                className="px-8 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
              >
                Shop Now
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Card;
