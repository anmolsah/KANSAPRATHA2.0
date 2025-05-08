import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { get_seller_order } from "../../store/reducers/OrderReducer";

const OrderDetails = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const { order, errorMessage, successMessage } = useSelector(
    (state) => state.order
  );

  useEffect(() => {
    dispatch(get_seller_order(orderId));
  }, [orderId]);
  return (
    <div className="px-4 md:px-8 py-8 bg-gray-100 min-h-screen lg:ml-[235px] transition-all">
      <div className="w-full p-6 rounded-lg bg-white shadow-md">
        <div className="flex justify-between items-center p-4 bg-blue-600 text-white rounded-md">
          <h2 className="text-xl font-semibold">Order Details</h2>
          <select name="" id="" className="px-4 py-2 rounded-md text-gray-800">
            <option value="">Pending</option>
            <option value="">Processing</option>
            <option value="">Warehouse</option>
            <option value="">Placed</option>
            <option value="">Cancelled</option>
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
              <p className="text-gray-600">{order.shippingInfo}</p>

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

                {order?.products?.map((p, i) => (
                  <div key={i} className="flex gap-3 items-center p-3 border-b">
                    <img
                      className="w-[45px] h-[45px] rounded-md"
                      src={p.images[0]}
                      alt="Product"
                    />
                    <div>
                      <h4 className="text-gray-800 font-semibold">{p.name}</h4>
                      <p className="text-gray-600 text-sm">
                        Brand: {p.brand} | Quantity: {p.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
