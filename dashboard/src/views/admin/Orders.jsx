// import React, { useState } from "react";
// import { TfiArrowCircleDown } from "react-icons/tfi";
// import { Link } from "react-router-dom";

// const Orders = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [searchValue, setSearchValue] = useState("");
//   const [perPage, setPerPage] = useState(5);
//   const [show, setShow] = useState(false);

//   return (
//     <div className="px-2 py-8">
//       <div className="w-full bg-[#37b2d1] rounded-md">
//         <div className="flex justify-between items-center">
//           <select
//             onChange={(e) => setPerPage(parseInt(e.target.value))}
//             className="bg-[give some color] "
//           >
//             <option value="5">5</option>
//             <option value="10">10</option>
//             <option value="15">15</option>
//             <option value="20">20</option>
//           </select>
//           <input type="text" placeholder="Search..." className="" />
//         </div>

//         <div className="relative overflow-x-auto">
//           <div className="w-full text-sm text-left bg-[give some color]">
//             <div className="">
//               <div className="flex justify-between items-center">
//                 <div className="">Order ID</div>
//                 <div className="">Price</div>
//                 <div className="">Payment Status</div>
//                 <div className="">Order Status</div>
//                 <div className="">Actions</div>
//                 <div className="">
//                   <TfiArrowCircleDown />
//                 </div>
//               </div>
//             </div>

//             <div className="">
//               <div className="flex justify-between items-center">
//                 <div className="">#34343</div>
//                 <div className="">$453</div>
//                 <div className="">Pending</div>
//                 <div className="">Pending </div>
//                 <div className="">
//                   <Link>View</Link>
//                 </div>
//                 <div onClick={(e)=>setShow(!show)} className="">
//                   <TfiArrowCircleDown />
//                 </div>
//               </div>
//               <div
//                 className={
//                   show ? "block border-b bg-[add some color" : "hidden"
//                 }
//               >
//                 <div className="flex justify-start items-start">
//                   <div className="">#34343</div>
//                   <div className="">$3</div>
//                   <div className="">Pending</div>
//                   <div className="">Pending </div>
//                 </div>
//                 <div className="flex justify-start items-start">
//                   <div className="">#34343</div>
//                   <div className="">$3</div>
//                   <div className="">Pending</div>
//                   <div className="">Pending </div>
//                 </div>

//                 <div className="flex justify-start items-start">
//                   <div className="">#34343</div>
//                   <div className="">$3</div>
//                   <div className="">Pending</div>
//                   <div className="">Pending </div>
//                 </div>
//                 <div className="flex justify-start items-start">
//                   <div className="">#34343</div>
//                   <div className="">$3</div>
//                   <div className="">Pending</div>
//                   <div className="">Pending </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Orders;

import React, { useState } from "react";
import { TfiArrowCircleDown } from "react-icons/tfi";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [expandedRow, setExpandedRow] = useState(null);

  const toggleExpand = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  return (
    <div className="px-4 md:px-8 py-8 bg-gray-100 min-h-screen lg:ml-[235px] transition-all">
      <div className="w-full bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <select
            onChange={(e) => setPerPage(parseInt(e.target.value))}
            className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="relative overflow-x-auto">
          <div className="w-full text-sm text-gray-600">
            {/* Table Headings */}
            <div className="grid grid-cols-6 gap-4 bg-gray-100 p-3 rounded-t-lg font-semibold">
              <div className="text-left pl-2">Order ID</div>
              <div className="text-left">Price</div>
              <div className="text-left">Payment Status</div>
              <div className="text-left">Order Status</div>
              <div className="text-left">Actions</div>
              <div className="text-center">Expand</div>
            </div>

            {/* Order Data Rows */}
            {[1, 2].map((order, index) => (
              <React.Fragment key={index}>
                <div className="grid grid-cols-6 gap-4 border-t border-gray-300 p-3 bg-white hover:bg-gray-50 transition">
                  <div className="pl-2">#34343</div>
                  <div className="font-bold text-blue-600">$453</div>
                  <div className="text-yellow-500 font-medium">Pending</div>
                  <div className="text-red-500 font-medium">Pending</div>
                  <div>
                    <Link to="#" className="text-blue-500 hover:underline">
                      View
                    </Link>
                  </div>
                  <div
                    onClick={() => toggleExpand(index)}
                    className="cursor-pointer text-center"
                  >
                    <TfiArrowCircleDown
                      className={
                        expandedRow === index
                          ? "text-blue-600"
                          : "text-gray-500"
                      }
                    />
                  </div>
                </div>

                {/* Hidden Expanded Data */}
                {expandedRow === index && (
                  <div className="border-t bg-gray-50 p-4 animate-fadeIn">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="grid grid-cols-6 gap-4 py-2">
                        <div className="pl-2">#34343</div>
                        <div className="text-blue-600 font-bold">$3</div>
                        <div className="text-yellow-500 font-medium">
                          Pending
                        </div>
                        <div className="text-red-500 font-medium">Pending</div>
                        <div className="col-span-2"></div>
                      </div>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <Pagination
          pageNumber={currentPage}
          setPageNumber={setCurrentPage}
          totalItem={50}
          perPage={perPage}
          showItem={3}
        />
      </div>
    </div>
  );
};

export default Orders;
