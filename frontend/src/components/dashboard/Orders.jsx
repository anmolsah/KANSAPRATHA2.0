import React, { useState } from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const [state, setState] = useState("all");
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
              {[1, 2].map((row, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-gray-50 transition-colors duration-150"
                >
                  <td className="px-6 py-4 text-sm text-gray-800 font-medium">
                    #{4567 + idx}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    ₹{456 * (idx + 1)}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-sm bg-yellow-100 text-yellow-800">
                      Pending
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                      Processing
                    </span>
                  </td>
                  <td className="px-6 py-4 space-x-2">
                    <Link
                      to="#"
                      className="px-4 py-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 
                            border border-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors"
                    >
                      View
                    </Link>
                    <Link
                      to="#"
                      className="px-4 py-2 text-sm font-medium text-white bg-emerald-500 rounded-lg 
                            hover:bg-emerald-600 transition-colors shadow-sm"
                    >
                      Pay Now
                    </Link>
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
