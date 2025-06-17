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
              <span className="inline-block mt-2 bg-yellow-100 text-yellow-800 text-xs px-2.5 py-1 rounded-full">
                Home Delivery
              </span>
            </div>
            <p className="text-sm text-gray-600">
              Contact Email:{" "}
              <span className="text-yellow-600">{userInfo.email}</span>
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Order Summary
              </h3>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">Total Price:</span>
                <span className="font-semibold text-yellow-600">
                  ₹{myOrder.price}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Payment Status:</span>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    myOrder.payment_status === "paid"
                      ? "bg-yellow-100 text-yellow-800"
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
                      ? "bg-yellow-100 text-yellow-800"
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
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
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
