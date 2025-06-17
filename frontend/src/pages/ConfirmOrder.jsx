import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import error from "../assets/error.jpeg";
import success from "../assets/success.png";
import { Link } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import axios from "axios";

const load = async () => {
  return await loadStripe(
    "pk_test_51RMPtLCA9mwR1gU8OohjoppIO4vNsIxZ3qlW8CKB1uSUVAuGp5UWiF0FzNnkXGiqRxjtyVNwdHlIBbR9dZdReaA100Le8GwzjC"
  );
};

const ConfirmOrder = () => {
  const [loader, setLoader] = useState(false);
  const [stripe, setStripe] = useState("");
  const [message, setMessage] = useState("");
  const [isCOD, setIsCOD] = useState(false);

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
          setMessage("succeeded");
          break;
        case "processing":
          setMessage("processing");
          break;
        case "requires_payment_method":
          setMessage("failed");
          break;
        default:
          setMessage("failed");
          break;
      }
    });
  }, [stripe]);

  const get_load = async () => {
    const tempStripe = await load();
    setStripe(tempStripe);
  };

  useEffect(() => {
    const paymentMethod = new URLSearchParams(window.location.search).get('payment_method');
    if (paymentMethod === 'cod') {
      setIsCOD(true);
      setMessage('succeeded');
    } else {
      get_load();
    }
  }, []);

  const update_payment = async () => {
    const orderId = localStorage.getItem("orderId");
    if (orderId) {
      try {
        await axios.get(`http://localhost:9999/api/order/confirm/${orderId}`);
        localStorage.removeItem("orderId");
        setLoader(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (message === "succeeded") {
      update_payment();
    }
  }, [message]);

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col gap-4">
      {isCOD ? (
        <>
          <img src={success} alt="" />
          <h2 className="text-2xl font-bold text-yellow-600">Order Placed Successfully!</h2>
          <p className="text-gray-600">Your order will be delivered via Cash on Delivery</p>
          <Link
            className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            to="/dashboard"
          >
            Go to Dashboard
          </Link>
        </>
      ) : message === "failed" || message === "processing" ? (
        <>
          <img src={error} alt="" />
          <Link
            className="px-5 py-2 bg-red-600 text-white rounded-md"
            to="/dashboard/my-orders"
          >
            Back to Dashboard
          </Link>
        </>
      ) : message === "succeeded" ? (
        loader ? (
          <FadeLoader />
        ) : (
          <>
            <img src={success} alt="" />
            <Link
              className="px-5 py-2 bg-red-600 text-white rounded-md"
              to="/dashboard/my-orders"
            >
              Back to Dashboard
            </Link>
          </>
        )
      ) : (
        <FadeLoader />
      )}
    </div>
  );
};

export default ConfirmOrder;


