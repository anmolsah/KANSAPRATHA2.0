import React from "react";

const SellerDetails = () => {
  return (
    <div className="px-4 md:px-8 py-8 bg-gray-100 min-h-screen lg:ml-[235px] transition-all">
      <h1 className="">Seller Details</h1>
      <div className="w-full p-4 bg-[add somee color] rounded-md">
        <div className="w-full flex flex-wrap text-[add some color]">
          <div className="w-3/12 flex justify-center items-center">
            <div>
              <img className="w-full h-[230px]" src="/admin.png" alt="" />
            </div>
          </div>
          <div className="w-4/12">
            <div className="px-0 md:px-4 py-2">
              <div className="py-2 text-lg">
                <h2 className="">Basic Info</h2>
              </div>
              <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-[add some color] rounded-md">
                <div className="flex gap-2 font-semibold text-[add some color]">
                  <span>Name : </span>
                  <span>Anmol Sah</span>
                </div>
                <div className="flex gap-2 font-semibold text-[add some color]">
                  <span>Email : </span>
                  <span>xyz@gmail.com</span>
                </div>
                <div className="flex gap-2 font-semibold text-[add some color]">
                  <span>Roll : </span>
                  <span>Seller</span>
                </div>
                <div className="flex gap-2 font-semibold text-[add some color]">
                  <span>Status : </span>
                  <span>Active</span>
                </div>
                <div className="flex gap-2 font-semibold text-[add some color]">
                  <span>Payment Status : </span>
                  <span>Active</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-4/12">
            <div className="px-0 md:px-4 py-2">
              <div className="py-2 text-lg">
                <h2 className="">Address</h2>
              </div>
              <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-[add some color] rounded-md">
                <div className="flex gap-2 font-semibold text-[add some color]">
                  <span>Shop Name : </span>
                  <span>KhansaPratha</span>
                </div>
                <div className="flex gap-2 font-semibold text-[add some color]">
                  <span>Division : </span>
                  <span>Kolkata</span>
                </div>
                <div className="flex gap-2 font-semibold text-[add some color]">
                  <span>District : </span>
                  <span>Sonarpur</span>
                </div>
                <div className="flex gap-2 font-semibold text-[add some color]">
                  <span>State : </span>
                  <span>West Bengal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <form>
            <div className="flex gap-4">
              <select
                className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                name=""
                id=""
              >
                <option value="">--Select Status--</option>
                <option value="active">Active</option>
                <option value="deactive">Deactive</option>
              </select>
              <button className="w-full bg-gray-900 text-white font-semibold py-2 rounded-md hover:bg-gray-700 transition-all">
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
