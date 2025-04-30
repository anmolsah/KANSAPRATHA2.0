import React from "react";
import { RiShoppingBag2Fill } from "react-icons/ri";

const Index = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        <div className="flex justify-center items-center p-5 bg-white rounded-md gap-5">
          <div className="bg-green-60 w-[47px] h-[47px] rounded-full flex justify-center items-center text-xl">
            <span className="text-xl text-green-800">
              <RiShoppingBag2Fill />
            </span>
          </div>

          <div classNmae="flex flex-col justify-start items-start text-slate-600">
            <h2 className="text-3xl font-bold">45</h2>
            <span>Orders</span>
          </div>
        </div>
        <div className="flex justify-center items-center p-5 bg-white rounded-md gap-5">
          <div className="bg-green-60 w-[47px] h-[47px] rounded-full flex justify-center items-center text-xl">
            <span className="text-xl text-green-800">
              <RiShoppingBag2Fill />
            </span>
          </div>

          <div classNmae="flex flex-col justify-start items-start text-slate-600">
            <h2 className="text-3xl font-bold">25</h2>
            <span>Pending Orders</span>
          </div>
        </div>
        <div className="flex justify-center items-center p-5 bg-white rounded-md gap-5">
          <div className="bg-green-60 w-[47px] h-[47px] rounded-full flex justify-center items-center text-xl">
            <span className="text-xl text-green-800">
              <RiShoppingBag2Fill />
            </span>
          </div>

          <div classNmae="flex flex-col justify-start items-start text-slate-600">
            <h2 className="text-3xl font-bold">5</h2>
            <span>Cancelled Orders</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-5 mt-5 rounded-md">
        <h2>Recent Orders</h2>
        <div className="pt-2">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                <tr scope="col" className="px-5 py-3">
                  Order Id
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
