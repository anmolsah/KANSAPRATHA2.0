import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { get_orders } from "../../store/reducers/orderReducer";

const Orders = () => {
  const [state, setState] = useState("all");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { userInfo } = useSelector((state) => state.auth);
  const { myOrders } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(
      get_orders({
        customerId: userInfo.id,
        status: state,
      })
    );
  }, [state]);

  const redirect = (order) => {
    let items = 0;
    for (let i = 0; i < order.length; i++) {
      items = order.products[i].quantity + items;
    }
    navigate("/payment", {
      state: {
        price: order.price,
        items,
        orderId: order._id,
      },
    });
  };
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-slate-600">My Orders</h2>
        <select
          name=""
          className="border border-slate-300 rounded-md p-2"
          id=""
          value={state}
          onChange={(e) => setState(e.target.value)}
        >
          <option value="all">--order status--</option>
          <option value="placed">Placed</option>
          <option value="pending">Pending</option>
          <option value="cancelled">Cancelled</option>
          <option value="warehouse">Warehouse</option>
        </select>
      </div>

      <div className="pt-4">
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="w-full">
            <thead className="bg-indigo-50">
              <tr>
                {[
                  "Order ID",
                  "Price",
                  "Payment Status",
                  "Order Status",
                  "Actions",
                ].map((header, idx) => (
                  <th
                    key={idx}
                    className="px-6 py-3 text-left text-sm font-semibold text-gray-800"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {myOrders.map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-gray-50 transition-colors duration-150"
                >
                  <td className="px-6 py-4 text-sm text-gray-800 font-medium">
                    #{row._id}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    ₹{row.price}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800">
                      {row.payment_status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                      {row.delivery_status}
                    </span>
                  </td>
                  <td className="px-6 py-4 space-x-2">
                    <Link
                      to={`/dashboard/order/details/${row._id}`}
                      className="px-4 py-2 text-sm font-medium text-yellow-600 hover:text-yellow-700 
                                           border border-yellow-600 rounded-lg hover:bg-yellow-50 transition-colors"
                    >
                      View
                    </Link>

                    {row.payment_status !== "paid" && (
                      <span
                        onClick={() => {
                          redirect(row);
                        }}
                        className="px-4 py-2 text-sm font-medium text-white bg-yellow-500 rounded-lg 
                                           hover:bg-yellow-600 transition-colors shadow-sm cursor-pointer"
                      >
                        Pay Now
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
