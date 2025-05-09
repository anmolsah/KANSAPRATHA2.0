// import React from "react";

// const OrderDetails = () => {
//   return (
//     <div className="px-4 md:px-8 py-8 bg-gray-100 min-h-screen lg:ml-[235px] transition-all">
//       <div className="w-full p-4 rounded-md bg-[add soem color]">
//         <div className="flex justify-between items-center p-4">
//           <h2 className="text-xl font-semibold text-gray-800">Order Details</h2>
//           <select name="" id="" className="px-4 py-2 rounded-md">
//             <option value="">Pending</option>
//             <option value="">Processing</option>
//             <option value="">WareHouse</option>
//             <option value="">Placed</option>
//             <option value="">Cancelled</option>
//           </select>
//         </div>
//         <div className="p-4">
//           <div className="flex gap-2 text-xl text-[add some color]">
//             <h2 className="">#3568</h2>
//             <span className="">3 jan 2024</span>
//           </div>
//           <div className="flex flex-wrap">
//             <div className="w-[30%]">
//               <div className="pr-3 text-[add some color] text-lg">
//                 <div className="flex flex-col gap-2">
//                   <h2 className="">Deliver : Yash Paswan</h2>
//                   <p className="">
//                     House No 123, Devidanga Baazar, Siliguri, West Bengal,
//                     734003
//                   </p>
//                 </div>
//                 <div className="flex justify-start items-center gap-3">
//                   <h2 className="">Payment Status :</h2>
//                   <span className="">Paid</span>
//                 </div>
//                 <span>Price : $56</span>
//                 <div className="mt-4 flex flex-col gap-4 bg-[add some color] rounded-md">
//                   <div className="text-[add some color]">
//                     <div className="flex gap-3 text-md">
//                       <img
//                         className="w-[45px] h-[45px]"
//                         src="/images/05.jpg"
//                         alt=""
//                       />
//                       <div className="">
//                         <h2>Product Name</h2>
//                         <p>
//                           <span className="">Brand : </span>
//                           <span className="">Wrogan</span>
//                           <span className="text-lg">Quantity : 1</span>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mt-4 flex flex-col gap-4 bg-[add some color] rounded-md">
//                   <div className="text-[add some color]">
//                     <div className="flex gap-3 text-md">
//                       <img
//                         className="w-[45px] h-[45px]"
//                         src="/images/05.jpg"
//                         alt=""
//                       />
//                       <div className="">
//                         <h2>Product Name</h2>
//                         <p>
//                           <span className="">Brand : </span>
//                           <span className="">Wrogan</span>
//                           <span className="text-lg">Quantity : 1</span>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mt-4 flex flex-col gap-4 bg-[add some color] rounded-md">
//                   <div className="text-[add some color]">
//                     <div className="flex gap-3 text-md">
//                       <img
//                         className="w-[45px] h-[45px]"
//                         src="/images/05.jpg"
//                         alt=""
//                       />
//                       <div className="">
//                         <h2>Product Name</h2>
//                         <p>
//                           <span className="">Brand : </span>
//                           <span className="">Wrogan</span>
//                           <span className="text-lg">Quantity : 1</span>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="w-[70%]">
//               <div className="pl-3 ">
//                 <div className="mt-4 flex flex-col bg-[add some color] rounded-md p-4">
//                   <div className="text-[add some color]">
//                     <div className="flex justify-start items-center gap-3">
//                       <h2 className="">Seller 1 Order : </h2>
//                       <span>Pending</span>
//                     </div>
//                     <div className="flex gap-3 text-md">
//                       <img
//                         className="w-[45px] h-[45px]"
//                         src="/images/05.jpg"
//                         alt=""
//                       />
//                       <div className="">
//                         <h2>Product Name</h2>
//                         <p>
//                           <span className="">Brand : </span>
//                           <span className="">Wrogan</span>
//                           <span className="text-lg">Quantity : 1</span>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="text-[add some color]">
//                     <div className="flex justify-start items-center gap-3">
//                       <h2 className="">Seller 1 Order : </h2>
//                       <span>Pending</span>
//                     </div>
//                     <div className="flex gap-3 text-md">
//                       <img
//                         className="w-[45px] h-[45px]"
//                         src="/images/05.jpg"
//                         alt=""
//                       />
//                       <div className="">
//                         <h2>Product Name</h2>
//                         <p>
//                           <span className="">Brand : </span>
//                           <span className="">Wrogan</span>
//                           <span className="text-lg">Quantity : 1</span>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderDetails;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  admin_order_status_update,
  get_admin_order,
  messageClear,
} from "../../store/reducers/OrderReducer";
import toast from "react-hot-toast";

const OrderDetails = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const [status, setStatus] = useState("");
  const { order, errorMessage, successMessage } = useSelector(
    (state) => state.order
  );
  useEffect(() => {
    setStatus(order?.delivery_status);
  }, [order]);

  useEffect(() => {
    dispatch(get_admin_order(orderId));
  }, [orderId]);

  const status_update = (e) => {
    dispatch(
      admin_order_status_update({ orderId, info: { status: e.target.value } })
    );
    setStatus(e.target.value);
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
    }
    if (errorMessage) {
      toast.success(errorMessage);
      dispatch(messageClear());
    }
  }, [successMessage, errorMessage]);
  return (
    <div className="px-4 md:px-8 py-8 bg-gray-100 min-h-screen lg:ml-[235px] transition-all">
      <div className="w-full p-6 rounded-lg bg-white shadow-md">
        <div className="flex justify-between items-center p-4 bg-blue-600 text-white rounded-md">
          <h2 className="text-xl font-semibold">Order Details</h2>
          <select
            onChange={status_update}
            value={status}
            name=""
            id=""
            className="px-4 py-2 rounded-md text-gray-800"
          >
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="warehouse">Warehouse</option>
            <option value="placed">Placed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
        <div className="p-4">
          <div className="flex gap-2 text-xl text-gray-700">
            <h2>#{order._id}</h2>
            <span>{order.date}</span>
          </div>
          <div className="flex flex-wrap gap-6 mt-4">
            <div className="w-full lg:w-[30%] bg-gray-50 p-4 rounded-md shadow">
              <h3 className="text-lg font-semibold text-gray-800">
                Deliver To:
              </h3>
              <p className="text-gray-600">{order.shippingInfo?.name}</p>
              <p className="text-gray-600">
                {order.shippingInfo?.address}, {order.shippingInfo?.phone},{" "}
                {order.shippingInfo?.province}, {order.shippingInfo?.city},{" "}
                {order.shippingInfo?.area}
              </p>
              <div className="mt-3 flex items-center gap-3 text-gray-700">
                <h4 className="font-medium">Payment Status:</h4>
                <span className="font-semibold text-green-600">
                  {order.payment_status}
                </span>
              </div>
              <span className="block mt-2 text-gray-700 font-semibold">
                Price: ₹{order.price}
              </span>

              <div className="bg-white shadow-md p-4 rounded-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Product Details
                </h3>

                {order.products &&
                  order.products.map((p, i) => (
                    <div
                      key={i}
                      className="flex gap-3 items-center p-3 border-b"
                    >
                      <img
                        className="w-[45px] h-[45px] rounded-md"
                        src={p.images[0]}
                        alt="Product"
                      />
                      <div>
                        <h4 className="text-gray-800 font-semibold">
                          {p.name}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Brand: {p.brand} | Quantity: {p.quantity}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="w-full lg:w-[65%]">
              {order?.suborder?.map((o, i) => (
                <div key={i} className="bg-white shadow-md p-4 rounded-md">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Seller Details
                  </h3>
                  <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md mb-2">
                    <h4 className="text-gray-700 font-medium">
                      Seller {i + 1} Order:
                    </h4>
                    <span className="text-orange-600 font-semibold">
                      {o.delivery_status}
                    </span>
                  </div>

                  {o.products?.map((p, i) => (
                    <div className="flex gap-3 items-center p-3 border-b">
                      <img
                        className="w-[45px] h-[45px] rounded-md"
                        src={p.images[0]}
                        alt="Product"
                      />
                      <div>
                        <h4 className="text-gray-800 font-semibold">
                          {p.name}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Brand: {p.brand} | Quantity: {p.quantity}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
