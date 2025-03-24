// import React from "react";

// const SellerDetails = () => {
//   return (
//     <div className="px-4 md:px-8 py-8 bg-gray-100 min-h-screen lg:ml-[235px] transition-all">
//       <h1 className="">Seller Details</h1>
//       <div className="w-full p-4 bg-[add somee color] rounded-md">
//         <div className="w-full flex flex-wrap text-[add some color]">
//           <div className="w-3/12 flex justify-center items-center">
//             <div>
//               <img className="w-full h-[230px]" src="/admin.png" alt="" />
//             </div>
//           </div>
//           <div className="w-4/12">
//             <div className="px-0 md:px-4 py-2">
//               <div className="py-2 text-lg">
//                 <h2 className="">Basic Info</h2>
//               </div>
//               <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-[add some color] rounded-md">
//                 <div className="flex gap-2 font-semibold text-[add some color]">
//                   <span>Name : </span>
//                   <span>Anmol Sah</span>
//                 </div>
//                 <div className="flex gap-2 font-semibold text-[add some color]">
//                   <span>Email : </span>
//                   <span>xyz@gmail.com</span>
//                 </div>
//                 <div className="flex gap-2 font-semibold text-[add some color]">
//                   <span>Roll : </span>
//                   <span>Seller</span>
//                 </div>
//                 <div className="flex gap-2 font-semibold text-[add some color]">
//                   <span>Status : </span>
//                   <span>Active</span>
//                 </div>
//                 <div className="flex gap-2 font-semibold text-[add some color]">
//                   <span>Payment Status : </span>
//                   <span>Active</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="w-4/12">
//             <div className="px-0 md:px-4 py-2">
//               <div className="py-2 text-lg">
//                 <h2 className="">Address</h2>
//               </div>
//               <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-[add some color] rounded-md">
//                 <div className="flex gap-2 font-semibold text-[add some color]">
//                   <span>Shop Name : </span>
//                   <span>KhansaPratha</span>
//                 </div>
//                 <div className="flex gap-2 font-semibold text-[add some color]">
//                   <span>Division : </span>
//                   <span>Kolkata</span>
//                 </div>
//                 <div className="flex gap-2 font-semibold text-[add some color]">
//                   <span>District : </span>
//                   <span>Sonarpur</span>
//                 </div>
//                 <div className="flex gap-2 font-semibold text-[add some color]">
//                   <span>State : </span>
//                   <span>West Bengal</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//           <form>
//             <div className="flex gap-4">
//               <select
//                 className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
//                 name=""
//                 id=""
//               >
//                 <option value="">--Select Status--</option>
//                 <option value="active">Active</option>
//                 <option value="deactive">Deactive</option>
//               </select>
//               <button className="w-[150px] bg-gray-900 text-white font-semibold py-2 rounded-md hover:bg-gray-700 transition-all">
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SellerDetails;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { get_seller } from "../../store/reducers/sellerReducer";
const SellerDetails = () => {
  const dispatch = useDispatch();
  const { seller } = useSelector((state) => state.seller);
  const { sellerId } = useParams();

  useEffect(() => {
    dispatch(get_seller(sellerId));
  }, [sellerId]);

  const [status, setStatus] = useState("");
  const submit = (e) => {
    e.preventDefault();
    dispatch(
      seller_status_update({
        sellerId,
        status,
      })
    );
  };

  return (
    <div className="px-4 md:px-8 py-8 bg-gray-100 min-h-screen lg:ml-[235px] transition-all">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Seller Details</h1>
      <div className="w-full p-6 bg-white rounded-lg shadow-md border border-gray-200">
        <div className="w-full flex flex-wrap text-gray-800">
          <div className="w-3/12 flex justify-center items-center">
            <div>
              {seller?.image ? (
                <img
                  className="w-full h-[230px] object-cover rounded-md border border-gray-300"
                  src="/admin.png"
                  alt="Seller"
                />
              ) : (
                <span className="text-gray-600 text-center">
                  Image Not Uploaded
                </span>
              )}
            </div>
          </div>
          <div className="w-4/12">
            <div className="px-0 md:px-4 py-2">
              <div className="py-2 text-xl font-semibold text-gray-800">
                Basic Info
              </div>
              <div className="flex flex-col gap-3 p-5 bg-gray-50 rounded-md shadow-sm border border-gray-200">
                <div className="flex gap-2 font-medium text-gray-700">
                  <span className="font-semibold">Name:</span>
                  <span className="text-gray-900">{seller?.name}</span>
                </div>
                <div className="flex gap-2 font-medium text-gray-700">
                  <span className="font-semibold">Email:</span>
                  <span className="text-gray-900">{seller?.email}</span>
                </div>
                <div className="flex gap-2 font-medium text-gray-700">
                  <span className="font-semibold">Role:</span>
                  <span className="text-gray-900">{seller?.role}</span>
                </div>
                <div className="flex gap-2 font-medium text-gray-700">
                  <span className="font-semibold">Status:</span>
                  <span className="text-gray-900">{seller?.status}</span>
                </div>
                <div className="flex gap-2 font-medium text-gray-700">
                  <span className="font-semibold">Payment Status:</span>
                  <span className="text-gray-900">{seller?.payment}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-4/12">
            <div className="px-0 md:px-4 py-2">
              <div className="py-2 text-xl font-semibold text-gray-800">
                Address
              </div>
              <div className="flex flex-col gap-3 p-5 bg-gray-50 rounded-md shadow-sm border border-gray-200">
                <div className="flex gap-2 font-medium text-gray-700">
                  <span className="font-semibold">Shop Name:</span>
                  <span className="text-gray-900">
                    {seller?.shopInfo?.shopName}
                  </span>
                </div>
                <div className="flex gap-2 font-medium text-gray-700">
                  <span className="font-semibold">Division:</span>
                  <span className="text-gray-900">
                    {seller?.shopInfo?.division}
                  </span>
                </div>
                <div className="flex gap-2 font-medium text-gray-700">
                  <span className="font-semibold">District:</span>
                  <span className="text-gray-900">
                    {seller?.shopInfo?.district}
                  </span>
                </div>
                <div className="flex gap-2 font-medium text-gray-700">
                  <span className="font-semibold">State:</span>
                  <span className="text-gray-900">
                    {seller?.shopInfo?.sub_district}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <form onSubmit={submit}>
            <div className="flex gap-4">
              <select
                className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none bg-white"
                name=""
                id=""
                required
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">--Select Status--</option>
                <option value="active">Active</option>
                <option value="deactive">Deactive</option>
              </select>
              <button className="w-[150px] bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-all">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SellerDetails;
