// import React from "react";
// import { FaEdit, FaImages } from "react-icons/fa";
// import { FadeLoader } from "react-spinners";

// const Profile = () => {
//   const status = "active";
//   const image = true;
//   const loader = true;
//   const userInfo = true;
//   return (
//     <div className="px-4 md:px-8 py-8 bg-gray-100 min-h-screen lg:ml-[235px] transition-all">
//       <div className="w-full flex flex-wrap">
//         <div className="w-full md:w-6/12 ">
//           <div className="w-full p-4 bg-[add some color] rounded-md">
//             <div className="flex justify-center items-center py-3">
//               {image ? (
//                 <label
//                   htmlFor="img"
//                   className="h-[150px] w-[200px] relative p-3 cursor-pointer overflow-hidden"
//                 >
//                   <img src="/admin.png" alt="profile" />
//                   {!loader && (
//                     <div className="bg-[adds some color] absolute top-0 left-0 h-full w-full opcacity-70 flex justify-center items-center z-20">
//                       <span>
//                         <FadeLoader />
//                       </span>
//                     </div>
//                   )}
//                 </label>
//               ) : (
//                 <label
//                   className="flex justify-center items-center flex-col h-[150px] w-[200px] cursor-pointer border border-dashed relative"
//                   htmlFor="img"
//                 >
//                   <span>
//                     <FaImages />
//                   </span>
//                   <span>Select Image</span>
//                   {loader && (
//                     <div className="bg-[adds some color] absolute top-0 left-0 h-full w-full opcacity-70 flex justify-center items-center z-20">
//                       <span>
//                         <FadeLoader />
//                       </span>
//                     </div>
//                   )}
//                 </label>
//               )}
//               <input type="file" className="hidden" id="img" />
//             </div>

//             <div className="px-0 md:px-5 py-2">
//               <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-[add some color] rounded-md relative">
//                 <span className="p-[6px] bg-[add some color] rounded-md absolute right-2 top-2 cursor-pointer">
//                   <FaEdit />
//                 </span>
//                 <div className="flex gap-2">
//                   <span>Name: </span>
//                   <span>Anmol Sah</span>
//                 </div>
//                 <div className="flex gap-2">
//                   <span>Email: </span>
//                   <span>xyz@gmail.com</span>
//                 </div>
//                 <div className="flex gap-2">
//                   <span>Role: </span>
//                   <span>Seller </span>
//                 </div>
//                 <div className="flex gap-2">
//                   <span>Status: </span>
//                   <span>Active</span>
//                 </div>
//                 <div className="flex gap-2">
//                   <span>Payment Account: </span>
//                   <p>
//                     {status === "active" ? (
//                       <span className="bg-[add some color] text-xs cursor-pointer font-normal ml-2 px-2 py-0.5 rounded">
//                         Pending
//                       </span>
//                     ) : (
//                       <span className="bg-[add some color] text-xs cursor-pointer font-normal ml-2 px-2 py-0.5 rounded">
//                         Active
//                       </span>
//                     )}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="px-0 md:px-5 py-2">
//               {!userInfo ? (
//                 <form>
//                   <div className="flex flex-col w-full gap-2 mb-2">
//                     <label
//                       htmlFor="Shop"
//                       className="text-sm font-medium text-gray-700"
//                     >
//                       Shop Name
//                     </label>
//                     <input
//                       type="text"
//                       name="shopName"
//                       id="Shop"
//                       placeholder="Shop name..."
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
//                   <div className="flex flex-col w-full gap-2">
//                     <label
//                       htmlFor="division"
//                       className="text-sm font-medium text-gray-700"
//                     >
//                       Division Name
//                     </label>
//                     <input
//                       type="text"
//                       name="division"
//                       id="division"
//                       placeholder="Division name..."
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
//                   <div className="flex flex-col w-full gap-2">
//                     <label
//                       htmlFor="district"
//                       className="text-sm font-medium text-gray-700"
//                     >
//                       District Name
//                     </label>
//                     <input
//                       type="text"
//                       name="district"
//                       id="district"
//                       placeholder="District name..."
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
//                   <div className="flex flex-col w-full gap-2">
//                     <label
//                       htmlFor="subdis"
//                       className="text-sm font-medium text-gray-700"
//                     >
//                       Sub District
//                     </label>
//                     <input
//                       type="text"
//                       name="subdis"
//                       id="subdis"
//                       placeholder="Sub District name..."
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                   </div>
//                   <button className="px-6 bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-all">
//                     Save Changes
//                   </button>
//                 </form>
//               ) : (
//                 <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-[add some color] rounded-md relative">
//                   <span className="p-[6px] bg-[add some color] rounded-md absolute right-2 top-2 cursor-pointer">
//                     <FaEdit />
//                   </span>
//                   <div className="flex gap-2">
//                     <span>Shop Name: </span>
//                     <span>Kansapratha</span>
//                   </div>
//                   <div className="flex gap-2">
//                     <span>Division: </span>
//                     <span>Kolkata</span>
//                   </div>
//                   <div className="flex gap-2">
//                     <span>District: </span>
//                     <span>Sonarpur </span>
//                   </div>
//                   <div className="flex gap-2">
//                     <span>Sub District: </span>
//                     <span> Rubi</span>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//         <div className="w-full md:w-6/12 ">
//           <div className="w-full pl-0 md:pl-7 mt-6 md:mt-0">
//             <div className=" bg-[add some color] rounded-md p-4">
//               <h1 className="text-lg mb-3 font-semibold">Change Password</h1>
//               <form>
//                 <div className="flex flex-col w-full gap-2 mb-2">
//                   <label
//                     htmlFor="email"
//                     className="text-sm font-medium text-gray-700"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     id="email"
//                     placeholder="Email"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//                 <div className="flex flex-col w-full gap-2">
//                   <label
//                     htmlFor="o_password"
//                     className="text-sm font-medium text-gray-700"
//                   >
//                     Old Password
//                   </label>
//                   <input
//                     type="password"
//                     name="old_password"
//                     id="o_password"
//                     placeholder="Old Password"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//                 <div className="flex flex-col w-full gap-2">
//                   <label
//                     htmlFor="n_passowrd"
//                     className="text-sm font-medium text-gray-700"
//                   >
//                     New Password
//                   </label>
//                   <input
//                     type="password"
//                     name="new_passowrd"
//                     id="n_passowrd"
//                     placeholder="New Password"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>

//                 <button className="px-6 bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-all">
//                   Save Changes
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React from "react";
import { FaEdit, FaImages } from "react-icons/fa";
import { FadeLoader } from "react-spinners";

const Profile = () => {
  const status = "active";
  const image = true;
  const loader = true;
  const userInfo = true;
  return (
    <div className="px-4 md:px-8 py-8 bg-gray-50 min-h-screen lg:ml-[235px] transition-all">
      <div className="w-full flex flex-wrap gap-6">
        {/* Left Column */}
        <div className="w-full md:w-6/12">
          <div className="w-full p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            {/* Profile Image Section */}
            <div className="flex justify-center items-center py-3 mb-6">
              {image ? (
                <label
                  htmlFor="img"
                  className="h-40 w-40 relative cursor-pointer group rounded-full overflow-hidden border-4 border-blue-50 hover:border-blue-100 transition-colors"
                >
                  <img
                    src="/admin.png"
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                  {!loader && (
                    <div className="bg-black/50 absolute inset-0 flex justify-center items-center z-20 transition-opacity opacity-0 group-hover:opacity-100">
                      <span className="text-white">
                        <FadeLoader color="#fff" />
                      </span>
                    </div>
                  )}
                </label>
              ) : (
                <label
                  className="flex justify-center items-center flex-col h-40 w-40 cursor-pointer border-2 border-dashed border-gray-300 rounded-full relative group hover:border-blue-500 transition-colors"
                  htmlFor="img"
                >
                  <span className="text-gray-400 group-hover:text-blue-500 mb-2">
                    <FaImages className="text-2xl" />
                  </span>
                  <span className="text-sm text-gray-500 group-hover:text-blue-500">
                    Select Image
                  </span>
                  {loader && (
                    <div className="bg-black/50 absolute inset-0 flex justify-center items-center z-20">
                      <span>
                        <FadeLoader color="#fff" />
                      </span>
                    </div>
                  )}
                </label>
              )}
              <input type="file" className="hidden" id="img" />
            </div>

            {/* User Info Section */}
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-lg relative transition-shadow hover:shadow-sm border border-gray-200">
                <span className="p-2 bg-white rounded-md absolute right-2 -top-2 cursor-pointer text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors shadow-sm">
                  <FaEdit className="text-lg" />
                </span>
                <div className="space-y-3 text-gray-600">
                  <div className="flex justify-between">
                    <span className="font-medium">Name:</span>
                    <span className="text-gray-700">Anmol Sah</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Email:</span>
                    <span className="text-gray-700">xyz@gmail.com</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Role:</span>
                    <span className="text-gray-700">Seller</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Status:</span>
                    <span className="text-green-600 font-semibold">Active</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Payment Account:</span>
                    {status === "active" ? (
                      <span className="bg-yellow-100 text-yellow-700 text-xs font-medium px-3 py-1 rounded-full">
                        Pending
                      </span>
                    ) : (
                      <span className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
                        Active
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Shop Info Section */}
              {!userInfo ? (
                <form className="space-y-4">
                  <div className="flex flex-col w-full gap-2">
                    <label
                      htmlFor="Shop"
                      className="text-sm font-medium text-gray-600"
                    >
                      Shop Name
                    </label>
                    <input
                      type="text"
                      id="Shop"
                      placeholder="Shop name..."
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all outline-none"
                    />
                  </div>
                  <div className="flex flex-col w-full gap-2">
                    <label
                      htmlFor="division"
                      className="text-sm font-medium text-gray-600"
                    >
                      Division Name
                    </label>
                    <input
                      type="text"
                      id="division"
                      placeholder="Division name..."
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all outline-none"
                    />
                  </div>
                  <div className="flex flex-col w-full gap-2">
                    <label
                      htmlFor="district"
                      className="text-sm font-medium text-gray-600"
                    >
                      District Name
                    </label>
                    <input
                      type="text"
                      id="district"
                      placeholder="District name..."
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all outline-none"
                    />
                  </div>
                  <div className="flex flex-col w-full gap-2">
                    <label
                      htmlFor="subdis"
                      className="text-sm font-medium text-gray-600"
                    >
                      Sub District
                    </label>
                    <input
                      type="text"
                      id="subdis"
                      placeholder="Sub District name..."
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all outline-none"
                    />
                  </div>
                  <button className="w-full px-6 bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all shadow-sm hover:shadow-md">
                    Save Changes
                  </button>
                </form>
              ) : (
                <div className="p-6 bg-gray-50 rounded-lg relative transition-shadow hover:shadow-sm border border-gray-200">
                  <span className="p-2 bg-white rounded-md absolute right-3 -top-2 cursor-pointer text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors shadow-sm">
                    <FaEdit className="text-lg" />
                  </span>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex justify-between">
                      <span className="font-medium">Shop Name:</span>
                      <span className="text-gray-700">Kansapratha</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Division:</span>
                      <span className="text-gray-700">Kolkata</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">District:</span>
                      <span className="text-gray-700">Sonarpur</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sub District:</span>
                      <span className="text-gray-700">Rubi</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column - Change Password */}
        <div className="w-full md:w-5/12">
          <div className="w-full bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <h1 className="text-xl font-semibold mb-6 text-gray-700">
              Change Password
            </h1>
            <form className="space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all outline-none"
                  placeholder="Email"
                />
              </div>
              <div>
                <label
                  htmlFor="o_password"
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  Old Password
                </label>
                <input
                  type="password"
                  id="o_password"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all outline-none"
                  placeholder="Old Password"
                />
              </div>
              <div>
                <label
                  htmlFor="n_passowrd"
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  New Password
                </label>
                <input
                  type="password"
                  id="n_passowrd"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all outline-none"
                  placeholder="New Password"
                />
              </div>
              <button className="w-full px-6 bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all shadow-sm hover:shadow-md">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
