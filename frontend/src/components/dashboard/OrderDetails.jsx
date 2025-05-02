// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useParams } from "react-router-dom";
// import { get_orders_details } from "../../store/reducers/orderReducer";

// const OrderDetails = () => {
//   const { orderId } = useParams();
//   const dispatch = useDispatch();
//   const { userInfo } = useSelector((state) => state.auth);
//   const { myOrder } = useSelector((state) => state.order);

//   useEffect(() => {
//     dispatch(get_orders_details(orderId));
//   }, [orderId]);

//   return (
//     <div className="bg-white p-5">
//       <h2 className="text-slate-600 font-semibold">
//         #{myOrder._id} , <span className="text-green-600">{myOrder.date}</span>
//       </h2>
//       <div className="grid grid-cols-2 gap-3">
//         <div className="flex flex-col gap-1">
//           {/* <h2 className="">Deliver To : {myOrder.shippingInfo?.name}</h2> */}
//           <h2 className="">
//             Deliver To : {myOrder.shippingInfo?.name?.toString()}
//           </h2>
//           <p>
//             <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-2 rounded">
//               Home
//             </span>
//             <span>
//               {myOrder.shippingInfo?.address} {myOrder.shippingInfo?.province}{" "}
//               {myOrder.shippingInfo?.city} {myOrder.shippingInfo?.area}
//             </span>
//           </p>
//           <p className="text-slate-600 text-sm ">Email To {userInfo.email}</p>
//         </div>

//         <div className="text-slate-600">
//           <h2 className="font-mono">
//             Price : ₹{myOrder.price} Included Shipping
//           </h2>
//           <p className="font-mono">
//             Payment Status :{" "}
//             <span
//               className={`py-[1px] text-xs px-3 ${
//                 myOrder.payment_status === "paid"
//                   ? "bg-green-300 text-green-800"
//                   : "bg-red-300 text-red-800"
//               } rounded-md`}
//             >
//               {myOrder.payment_status}
//             </span>
//           </p>
//           <p className="font-mono">
//             Order Status :{" "}
//             <span
//               className={`py-[1px] text-xs px-3 ${
//                 myOrder.delivery_status === "paid"
//                   ? "bg-green-300 text-green-800"
//                   : "bg-red-300 text-red-800"
//               } rounded-md`}
//             >
//               {myOrder.delivery_status}
//             </span>
//           </p>
//         </div>
//       </div>

//       <div className="mt-4">
//         <h2 className="text-slate-600 font-semibold">Order Products</h2>
//         <div className="flex gap-5 flex-col">
//             {
//                 myOrder.products?.map((p,i)=><div className="flex gap-5 justify-start items-center text-slate-600" key={i}>
//                     <div className="flex gap-2">
//                         <img src={p.images[0]} alt="" className="w-[55px] h-[55px]" />
//                         <div className="flex text-sm flex-col justify-start items-start">
//                             <Link>{p.name}</Link>
//                             <p>
//                                 <span>Brand : {p.brand}</span>

//                             </p>
//                             <p> <span>Quantity : {p.quantity}</span></p>

//                         </div>
//                     </div>

//                     <div className="pl-4 flex flex-col">
//                         <h2 className="text-md text-green-800"> ₹{p.price - Math.floor((p.price*p.discount)/100)}</h2>
//                         <p className="line-through">₹{p.price}</p>
//                         <p>{p.discount}%</p>
//                     </div>

//                 </div>)
//             }
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderDetails;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { get_orders_details } from "../../store/reducers/orderReducer";

const OrderDetails = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const { myOrder } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(get_orders_details(orderId));
  }, [orderId]);

  return (
    <div className="bg-gradient-to-br from-indigo-600 to-purple-600 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8">
        {/* Order Header */}
        <div className="border-b border-gray-200 pb-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Order #<span className="text-indigo-600">{myOrder._id}</span>
          </h2>
          <p className="text-gray-600 mt-1">{myOrder.date}</p>
        </div>

        {/* Shipping and Payment Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">
              Delivery Information
            </h3>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <p className="font-medium text-gray-800">
                {myOrder.shippingInfo?.name}
              </p>
              <p className="text-gray-600 text-sm mt-1">
                {myOrder.shippingInfo?.address} {myOrder.shippingInfo?.province}
                <br />
                {myOrder.shippingInfo?.city} {myOrder.shippingInfo?.area}
              </p>
              <span className="inline-block mt-2 bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full">
                Home Delivery
              </span>
            </div>
            <p className="text-sm text-gray-600">
              Contact Email:{" "}
              <span className="text-emerald-600">{userInfo.email}</span>
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Order Summary
              </h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Total Price:</span>
                <span className="font-semibold text-emerald-600">
                  ₹{myOrder.price}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Payment Status:</span>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    myOrder.payment_status === "paid"
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {myOrder.payment_status}
                </span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-600">Delivery Status:</span>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    myOrder.delivery_status === "delivered"
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {myOrder.delivery_status}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Ordered Products */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Ordered Products
          </h3>
          <div className="space-y-4">
            {myOrder.products?.map((p, i) => (
              <div
                key={i}
                className="flex items-center p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <img
                  src={p.images[0]}
                  alt={p.name}
                  className="w-16 h-16 object-cover rounded-lg border border-gray-200"
                />
                <div className="ml-4 flex-1">
                  <Link className="font-medium text-gray-800 hover:text-emerald-600 transition-colors">
                    {p.name}
                  </Link>
                  <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                    <span>Brand: {p.brand}</span>
                    <span>Qty: {p.quantity}</span>
                  </div>
                </div>
                <div className="text-right ml-4">
                  <p className="font-semibold text-emerald-600">
                    ₹{p.price - Math.floor((p.price * p.discount) / 100)}
                  </p>
                  <p className="text-sm text-gray-400 line-through">
                    ₹{p.price}
                  </p>
                  <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">
                    {p.discount}% off
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
