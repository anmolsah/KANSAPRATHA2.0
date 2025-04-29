import React, { useState } from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import { useLocation } from "react-router-dom";
import Stripe from './../components/Stripe';

const Payment = () => {
  const {
    state: { price, items, orderId },
  } = useLocation();
  const [paymentMethod, setPaymentMethod] = React.useState("stripe");
  return (
    <div>
      <Header />

      <section className="bg-[#eeeeee]">
        <div className="w-[85%] mx-auto py-16 mt-4">
          <div className="flex flex-wrap">
            <div className="w-7/12">
              <div className="pr-2">
                <div className="flex flex-wrap">
                  <div
                    onClick={() => setPaymentMethod("stripe")}
                    className={`w-[20%] border-r cursor-pointer py-8 px-12 ${
                      paymentMethod === "stripe" ? "bg-white" : "bg-slate-100"
                    }`}
                  >
                    <div className="flex flex-col gap-[3px] justify-center items-center">
                      <img src="/stripe.webp" alt="" />
                    </div>
                    <span className="text-slate-600">Stripe</span>
                  </div>
                  <div
                    onClick={() => setPaymentMethod("cod")}
                    className={`w-[20%] border-r cursor-pointer py-8 px-12 ${
                      paymentMethod === "cod" ? "bg-white" : "bg-slate-100"
                    }`}
                  >
                    <div className="flex flex-col gap-[3px] justify-center items-center">
                      <img src="/cash.jpg" alt="" />
                    </div>
                    <span className="text-slate-600">COD</span>
                  </div>
                </div>
              </div>

              {
                paymentMethod === "stripe" && <div>
                  <Stripe />
                </div>
                  
              }
              {
                paymentMethod === "cod" && <div className="w-full px-4 py-8 bg-white rounded-md shadow-md">
                  <button className="px-10 py-[6px] rounded-sm hover:shadow-green-500/20 hover:shadow-lg bg-green-500 text-white">Pay Now</button>
                </div>
              }
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Payment;
