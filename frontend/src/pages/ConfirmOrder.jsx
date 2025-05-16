import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const load = async () => {
  return await loadStripe(
    "pk_test_51RMPtLCA9mwR1gU8OohjoppIO4vNsIxZ3qlW8CKB1uSUVAuGp5UWiF0FzNnkXGiqRxjtyVNwdHlIBbR9dZdReaA100Le8GwzjC"
  );
};

const ConfirmOrder = () => {
  const [loader, setLoader] = useState(false);
  const [stripe, setStripe] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!stripe) {
      return;
    }
    const clientSceret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );
    if (!clientSceret) {
      return;
    }
    stripe.retrievePaymentIntent(clientSceret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const get_load = async () => {
    const tempStripe = await load();
    setStripe(tempStripe);
  };

  useEffect(() => {
    get_load();
  }, []);
  return <div className="">loader</div>;
};

export default ConfirmOrder;
