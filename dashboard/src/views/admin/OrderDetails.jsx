import React from "react";

const OrderDetails = () => {
  return (
    <div className="px-4 md:px-8 py-8 bg-gray-100 min-h-screen lg:ml-[235px] transition-all">
      <div className="w-full p-4 rounded-md bg-[add soem color]">
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl font-semibold text-gray-800">Order Details</h2>
          <select name="" id="" className="px-4 py-2 rounded-md">
            <option value="">Pending</option>
            <option value="">Processing</option>
            <option value="">WareHouse</option>
            <option value="">Placed</option>
            <option value="">Cancelled</option>
          </select>
        </div>
        <div className="p-4">
          <div className="flex gap-2 text-xl text-[add some color]">
            <h2 className="">#3568</h2>
            <span className="">3 jan 2024</span>
          </div>
          <div className="flex flex-wrap">
            <div className="w-[30%]">
              <div className="pr-3 text-[add some color] text-lg">
                <div className="flex flex-col gap-2">
                  <h2 className="">Deliver : Yash Paswan</h2>
                  <p className="">
                    House No 123, Devidanga Baazar, Siliguri, West Bengal,
                    734003
                  </p>
                </div>
                <div className="flex justify-start items-center gap-3">
                  <h2 className="">Payment Status :</h2>
                  <span className="">Paid</span>
                </div>
                <span>Price : $56</span>
                <div className="mt-4 flex flex-col gap-4 bg-[add some color] rounded-md">
                  <div className="text-[add some color]">
                    <div className="flex gap-3 text-md">
                      <img
                        className="w-[45px] h-[45px]"
                        src="/images/05.jpg"
                        alt=""
                      />
                      <div className="">
                        <h2>Product Name</h2>
                        <p>
                          <span className="">Brand : </span>
                          <span className="">Wrogan</span>
                          <span className="text-lg">Quantity : 1</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-4 bg-[add some color] rounded-md">
                  <div className="text-[add some color]">
                    <div className="flex gap-3 text-md">
                      <img
                        className="w-[45px] h-[45px]"
                        src="/images/05.jpg"
                        alt=""
                      />
                      <div className="">
                        <h2>Product Name</h2>
                        <p>
                          <span className="">Brand : </span>
                          <span className="">Wrogan</span>
                          <span className="text-lg">Quantity : 1</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-4 bg-[add some color] rounded-md">
                  <div className="text-[add some color]">
                    <div className="flex gap-3 text-md">
                      <img
                        className="w-[45px] h-[45px]"
                        src="/images/05.jpg"
                        alt=""
                      />
                      <div className="">
                        <h2>Product Name</h2>
                        <p>
                          <span className="">Brand : </span>
                          <span className="">Wrogan</span>
                          <span className="text-lg">Quantity : 1</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[70%]">
              <div className="pl-3 ">
                <div className="mt-4 flex flex-col bg-[add some color] rounded-md p-4">
                  <div className="text-[add some color]">
                    <div className="flex justify-start items-center gap-3">
                      <h2 className="">Seller 1 Order : </h2>
                      <span>Pending</span>
                    </div>
                    <div className="flex gap-3 text-md">
                      <img
                        className="w-[45px] h-[45px]"
                        src="/images/05.jpg"
                        alt=""
                      />
                      <div className="">
                        <h2>Product Name</h2>
                        <p>
                          <span className="">Brand : </span>
                          <span className="">Wrogan</span>
                          <span className="text-lg">Quantity : 1</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-[add some color]">
                    <div className="flex justify-start items-center gap-3">
                      <h2 className="">Seller 1 Order : </h2>
                      <span>Pending</span>
                    </div>
                    <div className="flex gap-3 text-md">
                      <img
                        className="w-[45px] h-[45px]"
                        src="/images/05.jpg"
                        alt=""
                      />
                      <div className="">
                        <h2>Product Name</h2>
                        <p>
                          <span className="">Brand : </span>
                          <span className="">Wrogan</span>
                          <span className="text-lg">Quantity : 1</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
