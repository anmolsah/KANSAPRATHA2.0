// import React from "react";
// import { RiShoppingBag2Fill } from "react-icons/ri";
// import { Link } from "react-router-dom";

// const Index = () => {
//   return (
//     <div>
//       <div className="grid grid-cols-3 gap-5">
//         <div className="flex justify-center items-center p-5 bg-white rounded-md gap-5">
//           <div className="bg-green-60 w-[47px] h-[47px] rounded-full flex justify-center items-center text-xl">
//             <span className="text-xl text-green-800">
//               <RiShoppingBag2Fill />
//             </span>
//           </div>

//           <div classNmae="flex flex-col justify-start items-start text-slate-600">
//             <h2 className="text-3xl font-bold">45</h2>
//             <span>Orders</span>
//           </div>
//         </div>
//         <div className="flex justify-center items-center p-5 bg-white rounded-md gap-5">
//           <div className="bg-green-60 w-[47px] h-[47px] rounded-full flex justify-center items-center text-xl">
//             <span className="text-xl text-green-800">
//               <RiShoppingBag2Fill />
//             </span>
//           </div>

//           <div classNmae="flex flex-col justify-start items-start text-slate-600">
//             <h2 className="text-3xl font-bold">25</h2>
//             <span>Pending Orders</span>
//           </div>
//         </div>
//         <div className="flex justify-center items-center p-5 bg-white rounded-md gap-5">
//           <div className="bg-green-60 w-[47px] h-[47px] rounded-full flex justify-center items-center text-xl">
//             <span className="text-xl text-green-800">
//               <RiShoppingBag2Fill />
//             </span>
//           </div>

//           <div classNmae="flex flex-col justify-start items-start text-slate-600">
//             <h2 className="text-3xl font-bold">5</h2>
//             <span>Cancelled Orders</span>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white p-5 mt-5 rounded-md">
//         <h2>Recent Orders</h2>
//         <div className="pt-2">
//           <div className="relative overflow-x-auto">
//             <table className="w-full text-sm text-left text-gray-500">
//               <thead className="text-xs text-gray-700 uppercase bg-gray-200">
//                 <tr>
//                   <th scope="col" className="px-5 py-3">
//                     Order Id
//                   </th>
//                   <th scope="col" className="px-5 py-3">
//                     Price
//                   </th>
//                   <th scope="col" className="px-5 py-3">
//                     Payment Status
//                   </th>
//                   <th scope="col" className="px-5 py-3">
//                     Order Status
//                   </th>
//                   <th scope="col" className="px-5 py-3">
//                     Action
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className="bg-white border-b hover:bg-gray-50">
//                   <td
//                     scope="row"
//                     className="px-5 py-4 font-medium text-gray-900 whitespace-nowrap"
//                   >
//                     #4567
//                   </td>
//                   <td
//                     scope="row"
//                     className="px-5 py-4 font-medium text-gray-900 whitespace-nowrap"
//                   >
//                     $456
//                   </td>
//                   <td
//                     scope="row"
//                     className="px-5 py-4 font-medium text-gray-900 whitespace-nowrap"
//                   >
//                     pending
//                   </td>
//                   <td
//                     scope="row"
//                     className="px-5 py-4 font-medium text-gray-900 whitespace-nowrap"
//                   >
//                     pending
//                   </td>
//                   <td
//                     scope="row"
//                     className="px-5 py-4 font-medium text-gray-900 whitespace-nowrap"
//                   >
//                     <Link>
//                       <span className="text-blue-600 text-md font-semibold mr-2 px-3 py-[2px] border border-blue-600">View</span>
//                     </Link>
//                     <Link>
//                       <span className="text-blue-600 text-md font-semibold mr-2 px-3 py-[2px] border border-blue-600">Pay Now</span>
//                     </Link>
//                   </td>
//                 </tr>
//                 <tr className="bg-white border-b hover:bg-gray-50">
//                   <td
//                     scope="row"
//                     className="px-5 py-4 font-medium text-gray-900 whitespace-nowrap"
//                   >
//                     #4567
//                   </td>
//                   <td
//                     scope="row"
//                     className="px-5 py-4 font-medium text-gray-900 whitespace-nowrap"
//                   >
//                     $456
//                   </td>
//                   <td
//                     scope="row"
//                     className="px-5 py-4 font-medium text-gray-900 whitespace-nowrap"
//                   >
//                     pending
//                   </td>
//                   <td
//                     scope="row"
//                     className="px-5 py-4 font-medium text-gray-900 whitespace-nowrap"
//                   >
//                     pending
//                   </td>
//                   <td
//                     scope="row"
//                     className="px-5 py-4 font-medium text-gray-900 whitespace-nowrap"
//                   >
//                     <Link>
//                       <span className="text-blue-600 text-md font-semibold mr-2 px-3 py-[2px] border border-blue-600">View</span>
//                     </Link>
//                     <Link>
//                       <span className="text-blue-600 text-md font-semibold mr-2 px-3 py-[2px] border border-blue-600">Pay Now</span>
//                     </Link>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Index;

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
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center">
                <RiShoppingBag2Fill className="text-emerald-600 text-xl" />
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
                  <td className="px-6 py-4 space-x-2">
                    <Link
                      to={`/dashboard/order/details/${row._id}`}
                      className="px-4 py-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 
                        border border-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors"
                    >
                      View
                    </Link>

                    {row.payment_status !== "paid" && (
                      <span
                        onClick={() => {
                          redirect(row);
                        }}
                        className="px-4 py-2 text-sm font-medium text-white bg-emerald-500 rounded-lg 
                        hover:bg-emerald-600 transition-colors shadow-sm"
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

export default Index;
