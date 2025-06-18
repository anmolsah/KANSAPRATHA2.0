import React, { useState, useEffect } from "react";
import { FaEdit, FaImages } from "react-icons/fa";
import { FadeLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import {
  profile_image_upload,
  messageClear,
  profile_info_add
} from "../../store/reducers/authReducer.js";
import toast from "react-hot-toast";
import { create_stripe_connect_account } from "../../store/reducers/sellerReducer.js";

const Profile = () => {
  const [state, setState] = useState({
    division: "",
    district: "",
    shopName: "",
    sub_district: "",
  });

  const dispatch = useDispatch();
  const { userInfo, loader, successMessage } = useSelector(
    (state) => state.auth
  );

  

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      messageClear();
    }
  }, [successMessage]);

  const add_image = (e) => {
    if (e.target.files.length > 0) {
      const formData = new FormData();
      formData.append("image", e.target.files[0]);
      dispatch(profile_image_upload(formData));
    }
  };

  const inputHandle = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const add = (e) => {
    e.preventDefault();
    dispatch(profile_info_add(state))
  };

  return (
    <div className="px-4 md:px-8 py-8 bg-gray-50 min-h-screen lg:ml-[235px] transition-all">
      <div className="w-full flex flex-wrap gap-6">
        {/* Left Column */}
        <div className="w-full md:w-6/12">
          <div className="w-full p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            {/* Profile Image Section */}
            <div className="flex justify-center items-center py-3 mb-6">
              {userInfo?.image ? (
                <label
                  htmlFor="img"
                  className="h-40 w-40 relative cursor-pointer group rounded-full overflow-hidden border-4 border-blue-50 hover:border-blue-100 transition-colors"
                >
                  <img
                    src={userInfo.image}
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                  {loader && (
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
              <input
                onChange={add_image}
                type="file"
                className="hidden"
                id="img"
              />
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
                    <span className="text-gray-700">{userInfo.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Email:</span>
                    <span className="text-gray-700">{userInfo.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Role:</span>
                    <span className="text-gray-700">{userInfo.role}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Status:</span>
                    <span className="text-green-600 font-semibold">
                      {userInfo.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Payment Account:</span>
                    {userInfo.payment === "active" ? (
                      <span className="bg-yellow-100 text-yellow-700 text-xs font-medium px-3 py-1 rounded-full">
                        {userInfo.payment}
                      </span>
                    ) : (
                      <span onClick={()=>dispatch(create_stripe_connect_account())} className="bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full cursor-pointer">
                        Click Active
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Shop Info Section */}
              {!userInfo?.shopInfo ? (
                <form onSubmit={add} className="space-y-4">
                  <div className="flex flex-col w-full gap-2">
                    <label
                      htmlFor="Shop"
                      className="text-sm font-medium text-gray-600"
                    >
                      Shop Name
                    </label>
                    <input
                      value={state.shopName}
                      onChange={inputHandle}
                      type="text"
                      name="shopName"
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
                      value={state.division}
                      onChange={inputHandle}
                      type="text"
                      name="division"
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
                      value={state.district}
                      onChange={inputHandle}
                      type="text"
                      id="district"
                      name="district"
                      placeholder="District name..."
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all outline-none"
                    />
                  </div>
                  <div className="flex flex-col w-full gap-2">
                    <label
                      htmlFor="sub"
                      className="text-sm font-medium text-gray-600"
                    >
                      Sub District
                    </label>
                    <input
                      value={state.sub_district}
                      onChange={inputHandle}
                      type="text"
                      id="sub"
                      name="sub_district"
                      placeholder="Sub District name..."
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all outline-none"
                    />
                  </div>

                  <button
                    disabled={loader ? true : false}
                    type="submit"
                    className="w-full px-6 bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all shadow-sm hover:shadow-md"
                  >
                    {loader ? <ClipLoader color="#ffffff" /> : "Save Changes"}
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
                      <span className="text-gray-700">
                        {userInfo.shopInfo?.shopName}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Division:</span>
                      <span className="text-gray-700">
                        {userInfo.shopInfo?.division}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">District:</span>
                      <span className="text-gray-700">
                        {userInfo.shopInfo?.district}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sub District:</span>
                      <span className="text-gray-700">
                        {userInfo.shopInfo?.sub_district}
                      </span>
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
