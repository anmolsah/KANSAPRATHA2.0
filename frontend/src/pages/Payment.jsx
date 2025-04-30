// import React, { useState } from "react";
// import Header from "./../components/Header";
// import Footer from "./../components/Footer";
// import { useLocation } from "react-router-dom";
// import Stripe from "./../components/Stripe";

// const Payment = () => {
//   const {
//     state: { price, items, orderId },
//   } = useLocation();
//   const [paymentMethod, setPaymentMethod] = React.useState("stripe");
//   return (
//     <div>
//       <Header />

//       <section className="bg-[#eeeeee]">
//         <div className="w-[85%] mx-auto py-16 mt-4">
//           <div className="flex flex-wrap">
//             <div className="w-7/12">
//               <div className="pr-2">
//                 <div className="flex flex-wrap">
//                   <div
//                     onClick={() => setPaymentMethod("stripe")}
//                     className={`w-[20%] border-r cursor-pointer py-8 px-12 ${
//                       paymentMethod === "stripe" ? "bg-white" : "bg-slate-100"
//                     }`}
//                   >
//                     <div className="flex flex-col gap-[3px] justify-center items-center">
//                       <img src="/stripe.webp" alt="" />
//                     </div>
//                     <span className="text-slate-600">Stripe</span>
//                   </div>
//                   <div
//                     onClick={() => setPaymentMethod("cod")}
//                     className={`w-[20%] border-r cursor-pointer py-8 px-12 ${
//                       paymentMethod === "cod" ? "bg-white" : "bg-slate-100"
//                     }`}
//                   >
//                     <div className="flex flex-col gap-[3px] justify-center items-center">
//                       <img src="/cash.jpg" alt="" />
//                     </div>
//                     <span className="text-slate-600">COD</span>
//                   </div>
//                 </div>

//                 {paymentMethod === "stripe" && (
//                   <div>
//                     <Stripe />
//                   </div>
//                 )}
//                 {paymentMethod === "cod" && (
//                   <div className="w-full px-4 py-8 bg-white rounded-md shadow-md">
//                     <button className="px-10 py-[6px] rounded-sm hover:shadow-green-500/20 hover:shadow-lg bg-green-500 text-white">
//                       Pay Now
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>

//             <div className="w-5/12">
//               <div className="pl-2">
//                 <div className="bg-white shadow p-5 text-slate-600 flex flex-col gap-3">
//                   <h3 className="font-bold text-lg">Order Summary</h3>
//                   <div className="flex justify-between items-center">
//                     <span>{items} Items and Shipping Fee Included</span>
//                     <span>₹{price}</span>
//                   </div>

//                   <div className="flex justify-between items-center font-semibold">
//                     <span>Total Amount</span>
//                     <span>₹{price}</span>
//                   </div>
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

// export default Payment;

import React, { useState } from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import { useLocation } from "react-router-dom";
import Stripe from "./../components/Stripe";

const Payment = () => {
  const {
    state: { price, items, orderId },
  } = useLocation();
  const [paymentMethod, setPaymentMethod] = React.useState("stripe");

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="flex-1 bg-gradient-to-br from-indigo-50 to-purple-50  py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Payment Methods Section */}
            <div className="w-full lg:w-7/12">
              <div className="bg-white rounded-xl shadow-xl p-6">
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <button
                    onClick={() => setPaymentMethod("stripe")}
                    className={`p-6 rounded-lg border-2 flex flex-col items-center justify-center transition-all ${
                      paymentMethod === "stripe"
                        ? "border-emerald-500 bg-emerald-50"
                        : "border-gray-300 hover:border-emerald-300 hover:bg-indigo-50"
                    }`}
                  >
                    <img
                      src="/stripe.webp"
                      alt="Stripe Logo"
                      className="h-12 w-auto mb-2"
                    />
                    <span className="text-gray-800 font-medium">Stripe</span>
                  </button>

                  <button
                    onClick={() => setPaymentMethod("cod")}
                    className={`p-6 rounded-lg border-2 flex flex-col items-center justify-center transition-all ${
                      paymentMethod === "cod"
                        ? "border-emerald-500 bg-emerald-50"
                        : "border-gray-300 hover:border-emerald-300 hover:bg-indigo-50"
                    }`}
                  >
                    <img
                      src="/cash.jpg"
                      alt="Cash on Delivery"
                      className="h-12 w-auto mb-2 rounded-full"
                    />
                    <span className="text-gray-800 font-medium">COD</span>
                  </button>
                </div>

                {paymentMethod === "stripe" && <Stripe />}

                {paymentMethod === "cod" && (
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <button
                      className="w-full bg-emerald-500 text-white py-3 px-6 rounded-lg font-semibold
                        hover:bg-emerald-600 transform transition-all duration-200 hover:scale-[1.02]
                        focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 shadow-md"
                    >
                      Confirm Order
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Order Summary Section */}
            <div className="w-full lg:w-5/12">
              <div className="bg-white rounded-xl shadow-xl p-6 h-fit">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Order Summary
                </h3>

                <div className="space-y-4 text-gray-600">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <span>{items} Items + Shipping</span>
                    <span className="font-medium">₹{price}</span>
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <span className="font-semibold text-gray-800">
                      Total Amount
                    </span>
                    <span className="text-xl font-bold text-emerald-600">
                      ₹{price}
                    </span>
                  </div>
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

export default Payment;
