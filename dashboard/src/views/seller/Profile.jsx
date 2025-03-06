import React from "react";
import { FaEdit, FaImages } from "react-icons/fa";
import { FadeLoader } from "react-spinners";

const Profile = () => {
  const status = "active";
  const image = true;
  const loader = true;
  const userInfo = true;
  return (
    <div className="px-4 md:px-8 py-8 bg-gray-100 min-h-screen lg:ml-[235px] transition-all">
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-6/12 ">
          <div className="w-full p-4 bg-[add some color] rounded-md">
            <div className="flex justify-center items-center py-3">
              {image ? (
                <label
                  htmlFor="img"
                  className="h-[150px] w-[200px] relative p-3 cursor-pointer overflow-hidden"
                >
                  <img src="/admin.png" alt="profile" />
                  {!loader && (
                    <div className="bg-[adds some color] absolute top-0 left-0 h-full w-full opcacity-70 flex justify-center items-center z-20">
                      <span>
                        <FadeLoader />
                      </span>
                    </div>
                  )}
                </label>
              ) : (
                <label
                  className="flex justify-center items-center flex-col h-[150px] w-[200px] cursor-pointer border border-dashed relative"
                  htmlFor="img"
                >
                  <span>
                    <FaImages />
                  </span>
                  <span>Select Image</span>
                  {loader && (
                    <div className="bg-[adds some color] absolute top-0 left-0 h-full w-full opcacity-70 flex justify-center items-center z-20">
                      <span>
                        <FadeLoader />
                      </span>
                    </div>
                  )}
                </label>
              )}
              <input type="file" className="hidden" id="img" />
            </div>

            <div className="px-0 md:px-5 py-2">
              <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-[add some color] rounded-md relative">
                <span className="p-[6px] bg-[add some color] rounded-md absolute right-2 top-2 cursor-pointer">
                  <FaEdit />
                </span>
                <div className="flex gap-2">
                  <span>Name: </span>
                  <span>Anmol Sah</span>
                </div>
                <div className="flex gap-2">
                  <span>Email: </span>
                  <span>xyz@gmail.com</span>
                </div>
                <div className="flex gap-2">
                  <span>Role: </span>
                  <span>Seller </span>
                </div>
                <div className="flex gap-2">
                  <span>Status: </span>
                  <span>Active</span>
                </div>
                <div className="flex gap-2">
                  <span>Payment Account: </span>
                  <p>
                    {status === "active" ? (
                      <span className="bg-[add some color] text-xs cursor-pointer font-normal ml-2 px-2 py-0.5 rounded">
                        Pending
                      </span>
                    ) : (
                      <span className="bg-[add some color] text-xs cursor-pointer font-normal ml-2 px-2 py-0.5 rounded">
                        Active
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div className="px-0 md:px-5 py-2">
              {!userInfo ? (
                <form>
                  <div className="flex flex-col w-full gap-2 mb-2">
                    <label
                      htmlFor="Shop"
                      className="text-sm font-medium text-gray-700"
                    >
                      Shop Name
                    </label>
                    <input
                      type="text"
                      name="shopName"
                      id="Shop"
                      placeholder="Shop name..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex flex-col w-full gap-2">
                    <label
                      htmlFor="division"
                      className="text-sm font-medium text-gray-700"
                    >
                      Division Name
                    </label>
                    <input
                      type="text"
                      name="division"
                      id="division"
                      placeholder="Division name..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex flex-col w-full gap-2">
                    <label
                      htmlFor="district"
                      className="text-sm font-medium text-gray-700"
                    >
                      District Name
                    </label>
                    <input
                      type="text"
                      name="district"
                      id="district"
                      placeholder="District name..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex flex-col w-full gap-2">
                    <label
                      htmlFor="subdis"
                      className="text-sm font-medium text-gray-700"
                    >
                      Sub District
                    </label>
                    <input
                      type="text"
                      name="subdis"
                      id="subdis"
                      placeholder="Sub District name..."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <button className="px-6 bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-all">
                    Save Changes
                  </button>
                </form>
              ) : (
                <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-[add some color] rounded-md relative">
                  <span className="p-[6px] bg-[add some color] rounded-md absolute right-2 top-2 cursor-pointer">
                    <FaEdit />
                  </span>
                  <div className="flex gap-2">
                    <span>Shop Name: </span>
                    <span>Kansapratha</span>
                  </div>
                  <div className="flex gap-2">
                    <span>Division: </span>
                    <span>Kolkata</span>
                  </div>
                  <div className="flex gap-2">
                    <span>District: </span>
                    <span>Sonarpur </span>
                  </div>
                  <div className="flex gap-2">
                    <span>Sub District: </span>
                    <span> Rubi</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 "></div>
      </div>
    </div>
  );
};

export default Profile;
