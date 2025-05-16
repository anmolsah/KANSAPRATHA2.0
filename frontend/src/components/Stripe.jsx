import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51RMPtLCA9mwR1gU8OohjoppIO4vNsIxZ3qlW8CKB1uSUVAuGp5UWiF0FzNnkXGiqRxjtyVNwdHlIBbR9dZdReaA100Le8GwzjC"
);

const Stripe = ({ orderId, price }) => {
  const [clientSecret, setClientSecret] = useState("");
  const appearance = {
    theme: "stripe",
  };
  const options = {
    appearance,
    clientSecret,
  };


  return <div className="mt-4">
    {
      clientSecret ? (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      ):<button className="px-10 py-[6px] rounded-sm hover:shadow-green-500/20 hover:shadow-lg bg-green-500 text-white">Start Payment</button>
    }
  </div>;
};

export default Stripe;
