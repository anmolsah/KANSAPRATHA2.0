import React,{useState} from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import { useLocation } from "react-router-dom";

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
                  <div>
                    <div className="flex flex-col gap-[3px] justify-center items-center">
                      <img src="/stripe.webp" alt="" />
                    </div>
                    <span className="text-slate-600">Stripe</span>
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
