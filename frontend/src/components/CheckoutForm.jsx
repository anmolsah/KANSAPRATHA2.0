import React, { useState } from "react";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const CheckoutForm = ({ orderId }) => {
  localStorage.setItem("orderId", orderId);
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const paymentElementOptions = {
    layout: "tabs",
  };

  const submit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    setIsLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/order/confirm",
      },
    });
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }
    setIsLoading(false);
  };

  return (
    <form onSubmit={submit} id="payment-form" className="">
      <LinkAuthenticationElement id="link-authentication-element" />
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <button
        disabled={isLoading || !stripe || !elements}
        id="submit"
        className="px-10 py-[6px] rounded-sm hover:shadow-green-500/20 hover:shadow-lg bg-green-500 text-white"
      >
        <span id="button-text">
          {isLoading ? <div>Loading...</div> : "Pay Now"}
        </span>
      </button>
      {
        /* Show any error or success messages */
        message && <div>{message}</div>
      }
    </form>
  );
};

export default CheckoutForm;
