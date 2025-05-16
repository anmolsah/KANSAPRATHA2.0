// import React, { useEffect, useState } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import error from "../assets/error.jpeg";
// import success from "../assets/success.png";
// import { Link } from "react-router-dom";
// import { FadeLoader } from "react-spinners";


// const load = async () => {
//   return await loadStripe(
//     "pk_test_51RMPtLCA9mwR1gU8OohjoppIO4vNsIxZ3qlW8CKB1uSUVAuGp5UWiF0FzNnkXGiqRxjtyVNwdHlIBbR9dZdReaA100Le8GwzjC"
//   );
// };

// const ConfirmOrder = () => {
//   const [loader, setLoader] = useState(false);
//   const [stripe, setStripe] = useState("");
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     if (!stripe) {
//       return;
//     }
//     const clientSceret = new URLSearchParams(window.location.search).get(
//       "payment_intent_client_secret"
//     );
//     if (!clientSceret) {
//       return;
//     }
//     stripe.retrievePaymentIntent(clientSceret).then(({ paymentIntent }) => {
//       switch (paymentIntent.status) {
//         case "succeeded":
//           setMessage("Payment succeeded!");
//           break;
//         case "processing":
//           setMessage("Your payment is processing");
//           break;
//         case "requires_payment_method":
//           setMessage("failed");
//           break;
//         default:
//           setMessage("failed");
//           break;
//       }
//     });
//   }, [stripe]);

//   const get_load = async () => {
//     const tempStripe = await load();
//     setStripe(tempStripe);
//   };

//   useEffect(() => {
//     get_load();
//   }, []);

//   return <div className="w-screen h-screen flex justify-center items-center flex-col gap-4">
//     {
//         (message === "failed" || message === "Your payment is processing") ? <>
//         <img src={error} alt="" />
//         <Link className="px-5 py-2 bg-red-600 text-white rounded-md" to="/dashboard/my-orders">Back to Dashboard</Link>
//         </>: message === "Payment succeeded!" ? loader? <FadeLoader /> : <>
        
//         <img src={success} alt="" />
//         <Link className="px-5 py-2 bg-red-600 text-white rounded-md" to="/dashboard/my-orders">Back to Dashboard</Link>
//         </>
//     }

//   </div>;
// };

// export default ConfirmOrder;


import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import error from "../assets/error.jpeg";
import success from "../assets/success.png";
import { Link } from "react-router-dom";
import { FadeLoader } from "react-spinners";

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
    if (!stripe) return;
    
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );
    
    if (!clientSecret) return;

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing");
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
    get_load();
  }, []);

  const update_payment = async()=>{
    
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 text-center">
        {message === "failed" || message === "Your payment is processing" ? (
          <div className="space-y-6">
            <img 
              src={error} 
              alt="Payment Error" 
              className="w-32 h-32 mx-auto object-contain"
            />
            <h2 className="text-2xl font-bold text-gray-800">
              {message === "failed" ? "Payment Failed" : "Payment Processing"}
            </h2>
            <p className="text-gray-600 mb-6">
              {message === "failed" 
                ? "There was an issue processing your payment. Please try again."
                : "Your payment is currently being processed. Please wait..."}
            </p>
            <Link
              to="/dashboard/my-orders"
              className="inline-block w-full py-3 px-6 bg-emerald-500 text-white rounded-lg
                font-semibold hover:bg-emerald-600 transition-all duration-200 hover:scale-105
                focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 shadow-md"
            >
              Back to Dashboard
            </Link>
          </div>
        ) : message === "Payment succeeded!" ? (
          loader ? (
            <div className="flex justify-center py-8">
              <FadeLoader color="#10b981" />
            </div>
          ) : (
            <div className="space-y-6">
              <img
                src={success}
                alt="Payment Success"
                className="w-32 h-32 mx-auto object-contain"
              />
              <h2 className="text-2xl font-bold text-gray-800">Payment Successful!</h2>
              <p className="text-gray-600 mb-6">
                Thank you for your purchase. Your order is being processed.
              </p>
              <Link
                to="/dashboard/my-orders"
                className="inline-block w-full py-3 px-6 bg-emerald-500 text-white rounded-lg
                  font-semibold hover:bg-emerald-600 transition-all duration-200 hover:scale-105
                  focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 shadow-md"
              >
                View Orders
              </Link>
            </div>
          )
        ) : (
          <div className="flex justify-center py-8">
            <FadeLoader color="#10b981" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfirmOrder;