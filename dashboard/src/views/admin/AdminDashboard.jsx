import React, { useEffect } from "react";
import { BsCurrencyRupee } from "react-icons/bs";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get_admin_dashboard_data } from "../../store/reducers/dashboardReducer";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { totaleSale, totalOrder, totalProduct, totalSeller, recentOrder } =
    useSelector((state) => state.dashboard);
  useEffect(() => {
    dispatch(get_admin_dashboard_data());
  }, []);
  const state = {
    series: [
      {
        name: "Orders",
        data: [23, 34, 45, 56, 67, 78, 89, 99, 87, 22],
      },
      {
        name: "Revenue",
        data: [55, 42, 34, 45, 56, 67, 78, 89, 99, 87],
      },
      {
        name: "Sellers",
        data: [15, 77, 45, 56, 67, 78, 89, 99, 87, 22],
      },
    ],
    options: {
      color: ["#181ee8", "#181ee8", "#181ee8"],
      plotOptions: {
        radius: 30,
      },
      chart: {
        background: "transparent",
        foreColor: "#d0d2d6",
      },
      dataLabels: {
        enabled: false,
      },
      strock: {
        show: true,
        curve: ["smooth", "straight", "stepline"],
        lineCap: "butt",
        colors: "#f0f0f0",
        width: 0.5,
        dashArray: 0,
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      legend: {
        position: "top",
      },
      responsive: [
        {
          breakpoint: 768,
          options: {
            chart: {
              height: "400px",
            },
            xaxis: {
              labels: {
                rotate: -45,
              },
            },
          },
        },
      ],
    },
  };
  return (
    <div className="px-4 md:px-8 py-8 bg-gray-100 min-h-screen lg:ml-[235px] transition-all">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Dashboard Cards */}
        {[
          {
            value: "₹" + totaleSale,
            label: "Total Sales",
            icon: <BsCurrencyRupee />,
            color: "from-blue-500 to-blue-700",
          },
          {
            value: totalProduct,
            label: "Products",
            icon: <MdProductionQuantityLimits />,
            color: "from-green-500 to-green-700",
          },
          {
            value: totalSeller,
            label: "Sellers",
            icon: <FaUser />,
            color: "from-yellow-500 to-yellow-700",
          },
          {
            value: totalOrder,
            label: "Orders",
            icon: <FaShoppingCart />,
            color: "from-red-500 to-red-700",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`flex justify-between items-center bg-gradient-to-r ${item.color} text-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition`}
          >
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold">{item.value}</h2>
              <span className="text-lg">{item.label}</span>
            </div>
            <div className="text-4xl opacity-80">{item.icon}</div>
          </div>
        ))}
      </div>

      <div className="w-full flex flex-wrap mt-7">
        <div className="w-full lg:w-7/12 lg:pr-3">
          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            height={350}
          />
        </div>
        <div className="w-full lg:w-5/12 lg:pl-4">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="flex justify-between items-center pb-3 border-b">
              <h2 className="font-semibold text-lg text-gray-600">
                Recent Seller Messages
              </h2>
              <Link className="text-blue-600">View All</Link>
            </div>
            <div className="pt-6">
              <ol className="relative border-l border-gray-200">
                {Array(3)
                  .fill()
                  .map((_, i) => (
                    <li
                      key={i}
                      className="mb-3 ml-6 flex items-start bg-slate-200 rounded-md py-2 px-1"
                    >
                      <img
                        src="/admin.png"
                        alt="Admin"
                        className="w-12 h-12 rounded-full border-2 border-gray-300 shadow-sm mr-3"
                      />
                      <div>
                        <div className="flex justify-between items-center space-x-56">
                          <Link className="text-blue-600">Admin</Link>
                          <time className="text-gray-500">2 days ago</time>
                        </div>
                        <p className="text-gray-700">How are you</p>
                      </div>
                    </li>
                  ))}
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-8 bg-white p-4 rounded-lg shadow-lg">
        <div className="flex justify-between items-center pb-3 border-b">
          <h2 className="font-semibold text-lg text-gray-600">Recent Orders</h2>
          <Link className="text-blue-600">View All</Link>
        </div>
        <div className="relative overflow-x-auto mt-4">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-6 py-3">Order Id</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Payment Status</th>
                <th className="px-6 py-3">Order Status</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {recentOrder.map((d, i) => (
                <tr key={i} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-3">#{d._id}</td>
                  <td className="px-6 py-3">₹{d.price}</td>
                  <td className="px-6 py-3">{d.payment_status}</td>
                  <td className="px-6 py-3">{d.delivery_status}</td>
                  <td className="px-6 py-3 text-blue-600 cursor-pointer">
                    <Link to={`/admin/dashboard/order/details/${d._id}`}>
                      View
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

export default AdminDashboard;
