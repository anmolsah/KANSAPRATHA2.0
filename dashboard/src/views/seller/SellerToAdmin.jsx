import React from "react";

const SellerToAdmin = () => {
  return (
    <div className="px-4 md:px-8 py-8 bg-gray-100 min-h-screen lg:ml-[235px] transition-all">
      <div className="w-full bg-white shadow-md px-4 py-4 rounded-md h-[calc(100vh-140px)]">
        <div className="flex w-full h-full relative">
          <div className="w-full  md:pl-4">
            <div className="flex justify-between items-center p-4 bg-blue-600 text-white rounded-md shadow-md">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    className="w-[45px] h-[45px] border-white border-2 rounded-full"
                    src="/images/04.jpg"
                    alt=""
                  />
                  <div className="w-[10px] h-[10px] bg-green-500 rounded-full absolute bottom-0 right-0"></div>
                </div>

                <span className="text-lg font-semibold">Support</span>
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

export default SellerToAdmin;
