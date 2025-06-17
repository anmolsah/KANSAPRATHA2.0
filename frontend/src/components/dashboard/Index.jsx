import React, { useEffect } from "react";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { Link, redirect, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_dashboard_index_data } from "../../store/reducers/dashboardReducer";

const Index = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const { recentOrders, totalOrder, pendingOrder, cancelledOrder } =
    useSelector((state) => state.dashboard);
  useEffect(() => {
    dispatch(get_dashboard_index_data(userInfo.id));
  }, []);

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
    <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Stat Cards */}
        {[
          { title: "Orders", value: totalOrder },
          { title: "Pending Orders", value: pendingOrder },
          { title: "Cancelled Orders", value: cancelledOrder },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center gap-4">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center">
                <RiShoppingBag2Fill className="text-yellow-600 text-xl" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-gray-800">
                  {stat.value}
                </h3>
                <span className="text-gray-600 text-sm">{stat.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white p-6 rounded-xl shadow-sm mt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Recent Orders
        </h2>
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
              {recentOrders.map((row, idx) => (
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
                  {/* <td className="px-6 py-4 space-y-2">
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
                  </td> */}
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-2">
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
                    </div>
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

export default Index;
