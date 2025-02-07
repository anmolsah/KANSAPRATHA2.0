// import React from "react";
// import { BsCurrencyRupee } from "react-icons/bs";
// import { FaUser, FaShoppingCart } from "react-icons/fa";
// import { MdProductionQuantityLimits } from "react-icons/md";

// const AdminDashboard = () => {
//   return (
//     <div className="px-2 md:px-7 py-20">
//       <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7">
//         <div className="fles justify-between items-center bg-red-400 gap-3 p-5">
//           <div className="flex flex-col justify-start items-start text-black">
//             <h2>$3436</h2>
//             <span>Total Sales</span>
//           </div>
//           <div className="">
//             <BsCurrencyRupee className="" />
//           </div>
//         </div>
//         <div className="fles justify-between items-center bg-red-400 gap-3 p-5">
//           <div className="flex flex-col justify-start items-start text-black">
//             <h2>30</h2>
//             <span>Products</span>
//           </div>
//           <div className="">
//             <MdProductionQuantityLimits className="" />
//           </div>
//         </div>
//         <div className="fles justify-between items-center bg-red-400 gap-3 p-5">
//           <div className="flex flex-col justify-start items-start text-black">
//             <h2>100</h2>
//             <span>Sellers</span>
//           </div>
//           <div className="">
//             <FaUser className="" />
//           </div>
//         </div>
//         <div className="fles justify-between items-center bg-red-400 gap-3 p-5">
//           <div className="flex flex-col justify-start items-start text-black">
//             <h2>4352</h2>
//             <span>Orders</span>
//           </div>
//           <div className="">
//             <FaShoppingCart className="" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

import React from "react";
import { BsCurrencyRupee } from "react-icons/bs";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";

const AdminDashboard = () => {
  return (
    <div className="px-4 md:px-8 py-8 bg-gray-100 min-h-screen lg:ml-[235px] transition-all">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Sales Card */}
        <div className="flex justify-between items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold">$3436</h2>
            <span className="text-lg">Total Sales</span>
          </div>
          <BsCurrencyRupee className="text-4xl opacity-80" />
        </div>

        {/* Products Card */}
        <div className="flex justify-between items-center bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold">30</h2>
            <span className="text-lg">Products</span>
          </div>
          <MdProductionQuantityLimits className="text-4xl opacity-80" />
        </div>

        {/* Sellers Card */}
        <div className="flex justify-between items-center bg-gradient-to-r from-yellow-500 to-yellow-700 text-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold">100</h2>
            <span className="text-lg">Sellers</span>
          </div>
          <FaUser className="text-4xl opacity-80" />
        </div>

        {/* Orders Card */}
        <div className="flex justify-between items-center bg-gradient-to-r from-red-500 to-red-700 text-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold">4352</h2>
            <span className="text-lg">Orders</span>
          </div>
          <FaShoppingCart className="text-4xl opacity-80" />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
