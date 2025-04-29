// import React, { useState } from "react";
// import Header from "./../components/Header";
// import Footer from "./../components/Footer";
// import { IoIosArrowForward } from "react-icons/io";
// import { Link } from "react-router-dom";
// import img1 from "../assets/img1.jpg";

// const Shipping = () => {
//   const [res, setRes] = useState(false);
//   const [state, setState] = useState({
//     name: "",
//     address: "",
//     phone: "",
//     post: "",
//     province: "",
//     city: "",
//     area: "",
//   });

//   const inputHandle = (e) => {
//     setState({ ...state, [e.target.name]: e.target.value });
//   };

//   const save = (e) => {
//     e.preventDefault();
//     const { name, address, phone, post, province, city, area } = state;
//     if (name && address && phone && post && province && city && area) {
//       setRes(true);
//     }
//   };
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
//               <h2 className="text-4xl font-bold text-gray-50 mb-2">Shipping</h2>
//               <div className="flex items-center text-gray-200">
//                 <Link
//                   to="/"
//                   className="hover:text-emerald-400 transition-colors"
//                 >
//                   Home
//                 </Link>
//                 <IoIosArrowForward className="mx-2" />
//                 <span className="text-gray-50">Shipping</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="bg-[#eeeeee]">
//         <div className="w-[85%]">
//           <div className="w-full flex flex-wrap">
//             <div className="w-[67%]">
//               <div className="flex flex-col gap-3">
//                 <div className="bg-white p-6 shadow-sm rounded-md">
//                   <h2 className="text-slate-600 font-bold pb-3">
//                     Shipping Information
//                   </h2>
//                   {!res && (
//                     <>
//                       <form onSubmit={save}>
//                         <div className="flex w-full gap-5 text-slate-600">
//                           <div className="flex flex-col gap-1 mb-2 w-full">
//                             <label htmlFor="name" className="text-slate-600">
//                               Name
//                             </label>
//                             <input
//                               onChange={inputHandle}
//                               value={state.name}
//                               type="text"
//                               name="name"
//                               id="name"
//                               className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md"
//                               placeholder="Enter Your Name"
//                             />
//                           </div>
//                           <div className="flex flex-col gap-1 mb-2 w-full">
//                             <label htmlFor="address" className="text-slate-600">
//                               Address
//                             </label>
//                             <input
//                               onChange={inputHandle}
//                               value={state.address}
//                               type="text"
//                               name="address"
//                               id="address"
//                               className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md"
//                               placeholder="Enter Your Address"
//                             />
//                           </div>
//                         </div>
//                         <div className="flex w-full gap-5 text-slate-600">
//                           <div className="flex flex-col gap-1 mb-2 w-full">
//                             <label htmlFor="phone" className="text-slate-600">
//                               Phone
//                             </label>
//                             <input
//                               onChange={inputHandle}
//                               value={state.phone}
//                               type="text"
//                               name="phone"
//                               id="phone"
//                               className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md"
//                               placeholder="Enter Your Phone Number"
//                             />
//                           </div>
//                           <div className="flex flex-col gap-1 mb-2 w-full">
//                             <label htmlFor="post" className="text-slate-600">
//                               Post
//                             </label>
//                             <input
//                               onChange={inputHandle}
//                               value={state.post}
//                               type="text"
//                               name="post"
//                               id="post"
//                               className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md"
//                               placeholder="Enter Your Post"
//                             />
//                           </div>
//                         </div>
//                         <div className="flex w-full gap-5 text-slate-600">
//                           <div className="flex flex-col gap-1 mb-2 w-full">
//                             <label
//                               htmlFor="province"
//                               className="text-slate-600"
//                             >
//                               Province
//                             </label>
//                             <input
//                               onChange={inputHandle}
//                               value={state.province}
//                               type="text"
//                               name="province"
//                               id="province"
//                               className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md"
//                               placeholder="Enter Your Province"
//                             />
//                           </div>
//                           <div className="flex flex-col gap-1 mb-2 w-full">
//                             <label htmlFor="city" className="text-slate-600">
//                               City
//                             </label>
//                             <input
//                               onChange={inputHandle}
//                               value={state.city}
//                               type="text"
//                               name="city"
//                               id="city"
//                               className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md"
//                               placeholder="Enter Your City"
//                             />
//                           </div>
//                         </div>
//                         <div className="flex w-full gap-5 text-slate-600">
//                           <div className="flex flex-col gap-1 mb-2 w-full">
//                             <label htmlFor="area" className="text-slate-600">
//                               Area
//                             </label>
//                             <input
//                               onChange={inputHandle}
//                               value={state.area}
//                               type="text"
//                               name="area"
//                               id="area"
//                               className="w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md"
//                               placeholder="Enter Your Area"
//                             />
//                           </div>
//                           <div className="flex flex-col gap-1 mb-2 mt-5 w-full">
//                             <button className="px-3 py-[6px] rounded-sm hover:shadow-green-500/50 hover:shadow-lg bg-green-500 text-white">
//                               Save Change
//                             </button>
//                           </div>
//                         </div>
//                       </form>
//                     </>
//                   )}

//                   {res && (
//                     <div className="flex flex-col gap-1">
//                       <h2 className="text-slate-600 font-bold pb-3">
//                         Deliver To {state.name}
//                       </h2>
//                       <p>
//                         <span className="bg-blue-200 text-blue-800 text-sm font-medium mr-2 px-2 py-1 rounded">
//                           Home
//                         </span>
//                         <span>
//                           {state.phone} {state.address} {state.province}{" "}
//                           {state.city} {state.area}
//                         </span>
//                         <span
//                           onClick={() => setRes(false)}
//                           className="text-indigo-500 cursor-pointer"
//                         >
//                           Change
//                         </span>
//                       </p>
//                       <p className="text-slate-600 text-sm">
//                         Email to xyz@gmail.com
//                       </p>
//                     </div>
//                   )}
//                 </div>

//                 {[1, 2].map((p, i) => (
//                   <div key={i} className="space-y-4">
//                     <div className="bg-gray-50 rounded-lg p-4">
//                       <h3 className="font-semibold text-gray-800 mb-2">
//                         KhansaPratha
//                       </h3>
//                       {[1, 2].map((item, idx) => (
//                         <div
//                           key={idx}
//                           className="py-4 border-t border-gray-200"
//                         >
//                           <div className="flex flex-col md:flex-row justify-between items-start gap-4">
//                             <div className="flex items-center gap-4">
//                               <img
//                                 className="w-20 h-20 object-cover rounded-lg"
//                                 src={`/images/products/${idx + 1}.jpg`}
//                                 alt="Product"
//                               />
//                               <div>
//                                 <h4 className="font-medium text-gray-800">
//                                   Product Name
//                                 </h4>
//                                 <p className="text-sm text-gray-600">
//                                   Brand: XYZ
//                                 </p>
//                               </div>
//                             </div>
//                             <div className="flex flex-col md:items-end gap-4 w-full md:w-auto">
//                               <div className="text-emerald-500 font-bold text-lg">
//                                 ₹2560
//                                 <span className="text-gray-400 line-through ml-2">
//                                   ₹5642
//                                 </span>
//                                 <span className="text-emerald-400 text-sm ml-2">
//                                   (-15%)
//                                 </span>
//                               </div>
//                               <div className="flex items-center gap-4">
//                                 <div className="flex bg-gray-100 rounded-lg">
//                                   <button className="px-3 py-1 hover:bg-emerald-500 hover:text-white rounded-l-lg transition-colors">
//                                     -
//                                   </button>
//                                   <span className="px-3 py-1">2</span>
//                                   <button className="px-3 py-1 hover:bg-emerald-500 hover:text-white rounded-r-lg transition-colors">
//                                     +
//                                   </button>
//                                 </div>
//                                 <button className="px-4 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
//                                   Delete
//                                 </button>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="w-[33%]">
//               <div className="pl-3">
//                 <div className="bg-white p-3 text-slate-600 flex flex-col gap-3">
//                   <h2 className="text-xl font-bold">Order Summary</h2>
//                   <div className="flex justify-between items-center">
//                     <span>Total Items (5)</span>
//                     <span>₹2560</span>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span>Delivery Fee</span>
//                     <span>₹100</span>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span>Total Payment</span>
//                     <span>₹100</span>
//                   </div>

//                   <div className="flex justify-between items-center">
//                     <span>Total</span>
//                     <span className="font-bold">₹2660</span>
//                   </div>

//                   <button
//                     disabled={res ? false : true}
//                     className={`px-5 py-[6px] rounded-sm ${
//                       res ? "bg-red-500" : "bg-red-300"
//                     }  text-white text-sm`}
//                   >
//                     Place Order
//                   </button>
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

// export default Shipping;

import React, { useState } from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img1 from "../assets/img1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { place_order } from "../store/reducers/orderReducer";

const Shipping = () => {
  const {
    state: { products, price, shipping_fee, items },
  } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  const [res, setRes] = useState(false);
  const [state, setState] = useState({
    name: "",
    address: "",
    phone: "",
    post: "",
    province: "",
    city: "",
    area: "",
  });

  const inputHandle = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const save = (e) => {
    e.preventDefault();
    const { name, address, phone, post, province, city, area } = state;
    if (name && address && phone && post && province && city && area) {
      setRes(true);
    }
  };

  const placeOrder = () => {
    dispatch(
      place_order({
        price,
        products,
        shipping_fee,
        items,
        shippingInfo: state,
        userId: userInfo,
        navigate,
      })
    );
  };
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
              <h2 className="text-4xl font-bold text-gray-50 mb-2">Shipping</h2>
              <div className="flex items-center text-gray-200">
                <Link
                  to="/"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Home
                </Link>
                <IoIosArrowForward className="mx-2" />
                <span className="text-gray-50">Shipping</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Shipping Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Shipping Information
                </h2>
                {!res ? (
                  <form onSubmit={save} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label htmlFor="name" className="text-gray-600 text-sm">
                          Name
                        </label>
                        <input
                          onChange={inputHandle}
                          type="text"
                          name="name"
                          id="name"
                          value={state.name}
                          className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                          placeholder="Enter Your Name"
                        />
                      </div>
                      <div className="space-y-1">
                        <label
                          htmlFor="address"
                          className="text-gray-600 text-sm"
                        >
                          Address
                        </label>
                        <input
                          onChange={inputHandle}
                          type="text"
                          name="address"
                          id="address"
                          value={state.address}
                          className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                          placeholder="Enter Your Address"
                        />
                      </div>
                      <div className="space-y-1">
                        <label
                          htmlFor="phone"
                          className="text-gray-600 text-sm"
                        >
                          Phone
                        </label>
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          value={state.phone}
                          onChange={inputHandle}
                          className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                          placeholder="Enter Phone Number"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-gray-600 text-sm">Post</label>
                        <input
                          onChange={inputHandle}
                          type="text"
                          name="post"
                          id="post"
                          value={state.post}
                          className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                          placeholder="Enter Postal Code"
                        />
                      </div>
                      <div className="space-y-1">
                        <label
                          htmlFor="province"
                          className="text-gray-600 text-sm"
                        >
                          Province
                        </label>
                        <input
                          onChange={inputHandle}
                          type="text"
                          name="province"
                          id="province"
                          value={state.province}
                          className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                          placeholder="Enter Province"
                        />
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="city" className="text-gray-600 text-sm">
                          City
                        </label>
                        <input
                          onChange={inputHandle}
                          type="text"
                          name="city"
                          id="city"
                          value={state.city}
                          className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                          placeholder="Enter City"
                        />
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="area" className="text-gray-600 text-sm">
                          Area
                        </label>
                        <input
                          onChange={inputHandle}
                          type="text"
                          name="area"
                          id="area"
                          value={state.area}
                          className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-transparent"
                          placeholder="Enter Area"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
                    >
                      Save Changes
                    </button>
                  </form>
                ) : (
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Deliver To {state.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="bg-emerald-200 text-emerald-800 px-2 py-1 rounded-full text-sm">
                        Home
                      </span>
                      <span className="text-gray-600">
                        {state.phone} | {state.address}, {state.city},{" "}
                        {state.province}
                      </span>
                      <button
                        onClick={() => setRes(false)}
                        className="text-emerald-500 hover:text-emerald-600 ml-2"
                      >
                        Change
                      </button>
                    </div>
                    <p className="text-gray-500 text-sm">
                      Email notifications will be sent to: xyz@gmail.com
                    </p>
                  </div>
                )}
              </div>

              {/* Cart Items */}
              <div className="space-y-6">
                {products.map((p, i) => (
                  <div key={i} className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                      {p.shopName}
                    </h3>
                    {p.products.map((item, idx) => (
                      <div key={idx} className="py-4 border-t border-gray-200">
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
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 h-fit sticky top-6">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  Order Summary
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Total Items ({items})</span>
                    <span>₹{price}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Delivery Fee</span>
                    <span>₹{shipping_fee}</span>
                  </div>
                  <div className="flex justify-between font-bold text-gray-800 pt-4">
                    <span>Total Payment</span>
                    <span>₹{price + shipping_fee}</span>
                  </div>
                  <button
                    onClick={placeOrder}
                    disabled={!res}
                    className={`w-full py-3 rounded-lg transition-colors ${
                      res
                        ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                        : "bg-emerald-300 cursor-not-allowed text-gray-50"
                    }`}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shipping;
