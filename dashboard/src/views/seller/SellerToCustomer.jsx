// import React, { useState } from "react";
// import { IoMdClose } from "react-icons/io";
// import { FaList } from "react-icons/fa";

// const ChatSeller = () => {
//   const [show, setShow] = useState(false);
//   const sellerId = 65;
//   return (
//     <div className="px-4 md:px-8 py-8 bg-gray-100 min-h-screen lg:ml-[235px] transition-all">
//       <div className="w-full bg-[add some color] px-4 py-4 rounded-md h-[calc(100vh-140px)]">
//         <div className="flex w-full h-full relative">
//           <div
//             className={`w-[280px] h-full absolute z-10 ${
//               show ? "-left-[16px]" : "-[336px]"
//             } md:left-0 md:relative transition-all`}
//           >
//             <div className="w-full h-[calc(100vh-170px)] bg-[add some color] overflow-y-auto">
//               <div className="flex text-xl justify-between items-center p-4">
//                 <h2 className="">Sellers</h2>
//                 <span
//                   onClick={() => setShow(!show)}
//                   className="block cursor-pointer md:hidden"
//                 >
//                   <IoMdClose />
//                 </span>
//               </div>
//               <div
//                 className={`h-[60px] flex justify-start items-center text-white px-2 py-2 rounded-md cursor-pointer bg-[add some color]`}
//               >
//                 <div className="relative">
//                   <img
//                     className="w-[38px] h-[38px] border-white border-2 max-w-[38px] rounded-full"
//                     src="/admin.png"
//                     alt=""
//                   />
//                   <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute bottom-0 right-0"></div>
//                 </div>
//                 <div className="flex justify-center items-start flex-col w-full">
//                   <div className="flex justify-between items-center w-full">
//                     <h2 className="text-base font-semibold text-black">
//                       Anmol Sah
//                     </h2>
//                   </div>
//                 </div>
//               </div>
//               <div
//                 className={`h-[60px] flex justify-start items-center text-white px-2 py-2 rounded-sm cursor-pointer`}
//               >
//                 <div className="relative">
//                   <img
//                     className="w-[38px] h-[38px] border-white border-2 max-w-[38px] rounded-full"
//                     src="/admin.png"
//                     alt=""
//                   />
//                   <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute bottom-0 right-0"></div>
//                 </div>
//                 <div className="flex justify-center items-start flex-col w-full">
//                   <div className="flex justify-between items-center w-full">
//                     <h2 className="text-base font-semibold text-black">
//                       Ananth Pradhan
//                     </h2>
//                   </div>
//                 </div>
//               </div>
//               <div
//                 className={`h-[60px] flex justify-start items-center text-white px-2 py-2 rounded-sm cursor-pointer`}
//               >
//                 <div className="relative">
//                   <img
//                     className="w-[38px] h-[38px] border-white border-2 max-w-[38px] rounded-full"
//                     src="/admin.png"
//                     alt=""
//                   />
//                   <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute bottom-0 right-0"></div>
//                 </div>
//                 <div className="flex justify-center items-start flex-col w-full">
//                   <div className="flex justify-between items-center w-full">
//                     <h2 className="text-base font-semibold text-black">
//                       Ananta
//                     </h2>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="w-full md:w-[calc(100%-200px)] md:pl-4">
//             <div className="flex justify-between items-center">
//               {sellerId && (
//                 <div className="flex justify-start items-center gap-3">
//                   <div className="relative">
//                     <img
//                       className="w-[45px] h-[45px] border-green-500 border-2 max-w-[45px] rounded-full"
//                       src="/images/04.jpg"
//                       alt=""
//                     />
//                     <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute bottom-0 right-0"></div>
//                   </div>
//                 </div>
//               )}
//               <div
//                 onClick={() => setShow(!show)}
//                 className="w-[35px] flex md:hidden h-[35px] rounded-sm bg-[add some color] shadow-lg hover:shadow-[add some color] cursor-pointer items-center text-white"
//               >
//                 <span>
//                   <FaList />
//                 </span>
//               </div>
//             </div>
//             <div className="py-4 ">
//               <div className="bg-[add some color] h-[calc(100vh-290px)] rounded-md p-3 overflow-y-auto">
//                 <div className="w-full flex justify-start items-center">
//                   <div className="flex justify-start items-start gap-2 max-w-full">
//                     <div>
//                       <img
//                         className="w-[45px] h-[45px] border-green-500 border-2 max-w-[45px] rounded-full"
//                         src="/images/05.jpg"
//                         alt=""
//                       />
//                     </div>
//                     <div className="flex justify-center items-start flex-col w-full bg-[add some color] shadow-lg shadow-[add some color] rounded-sm py-1 px-2">
//                       <span>How Are You ?</span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="w-full flex justify-end items-center">
//                   <div className="flex justify-start items-start gap-2 max-w-full">
//                     <div className="flex justify-center items-start flex-col w-full bg-[add some color] shadow-lg shadow-[add some color] rounded-sm py-1 px-2">
//                       <span>How Are You ?</span>
//                     </div>
//                     <div>
//                       <img
//                         className="w-[45px] h-[45px] border-green-500 border-2 max-w-[45px] rounded-full"
//                         src="/images/06.jpg"
//                         alt=""
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="w-full flex justify-start items-center">
//                   <div className="flex justify-start items-start gap-2 max-w-full">
//                     <div>
//                       <img
//                         className="w-[45px] h-[45px] border-green-500 border-2 max-w-[45px] rounded-full"
//                         src="/images/05.jpg"
//                         alt=""
//                       />
//                     </div>
//                     <div className="flex justify-center items-start flex-col w-full bg-[add some color] shadow-lg shadow-[add some color] rounded-sm py-1 px-2">
//                       <span>I Need some Help ?</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <form className="flex gap-2">
//               <input
//                 type="text"
//                 className="w-full flex justify-between px-2 border border-gray-400 rounded-md items-center py-[5px] text-[add some color] bg-transparent"
//                 placeholder="Type a message..."
//               />
//               <button className="shadow-lg bg-[add some color] hover:bg-[add some color] py-[5px] px-4 rounded-md flex justify-center items-center">
//                 Send
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatSeller;

import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaList } from "react-icons/fa";

const SellerToCustomer = () => {
  const [show, setShow] = useState(false);
  const sellerId = 65;
  return (
    <div className="px-4 md:px-8 py-8 bg-gray-100 min-h-screen lg:ml-[235px] transition-all">
      <div className="w-full bg-white shadow-md px-4 py-4 rounded-md h-[calc(100vh-140px)]">
        <div className="flex w-full h-full relative">
          <div
            className={`w-[280px] h-full absolute z-10 bg-gray-200 ${
              show ? "left-0" : "-left-[280px]"
            } md:left-0 md:relative transition-all duration-300 shadow-md`}
          >
            <div className="w-full h-[calc(100vh-170px)] bg-gray-100 overflow-y-auto">
              <div className="flex text-xl font-semibold justify-between items-center p-4 bg-blue-600 text-white">
                <h2 className="">Customers</h2>
                <span
                  onClick={() => setShow(!show)}
                  className="block cursor-pointer md:hidden"
                >
                  <IoMdClose />
                </span>
              </div>
              <div className="h-[60px] flex items-center px-2 py-2 cursor-pointer bg-gray-300 hover:bg-gray-400 rounded-md transition duration-200">
                <div className="relative">
                  <img
                    className="w-[38px] h-[38px] border-white border-2 rounded-full"
                    src="/admin.png"
                    alt=""
                  />
                  <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute bottom-0 right-0"></div>
                </div>
                <h2 className="ml-3 text-base font-semibold text-black">
                  Anmol Sah
                </h2>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[calc(100%-280px)] md:pl-4">
            <div className="flex justify-between items-center p-4 bg-blue-600 text-white rounded-md shadow-md">
              {sellerId && (
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      className="w-[45px] h-[45px] border-white border-2 rounded-full"
                      src="/images/04.jpg"
                      alt=""
                    />
                    <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute bottom-0 right-0"></div>
                  </div>
                  <span className="text-lg font-semibold">Chat</span>
                </div>
              )}
              <div
                onClick={() => setShow(!show)}
                className="w-[35px] flex md:hidden h-[35px] rounded bg-white shadow-lg text-blue-600 cursor-pointer justify-center items-center"
              >
                <FaList />
              </div>
            </div>
            <div className="py-4">
              <div className="bg-gray-100 h-[calc(100vh-290px)] rounded-md p-3 overflow-y-auto shadow-inner">
                <div className="w-full flex justify-start items-center mb-3">
                  <div className="flex items-start gap-2 max-w-full">
                    <img
                      className="w-[45px] h-[45px] border-white border-2 rounded-full"
                      src="/images/05.jpg"
                      alt=""
                    />
                    <div className="bg-white shadow-md rounded-md py-2 px-3 text-black">
                      How Are You?
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-end items-center mb-3">
                  <div className="flex items-start gap-2 max-w-full">
                    <div className="bg-blue-600 text-white shadow-md rounded-md py-2 px-3">
                      I am fine!
                    </div>
                    <img
                      className="w-[45px] h-[45px] border-white border-2 rounded-full"
                      src="/images/06.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <form className="flex gap-2 px-4">
              <input
                type="text"
                className="w-full border border-gray-400 rounded-md px-3 py-2 bg-white text-black shadow-sm"
                placeholder="Type a message..."
              />
              <button className="shadow-lg bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-all duration-200">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerToCustomer;
