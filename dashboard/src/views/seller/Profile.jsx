import React from "react";
import { FaImages } from "react-icons/fa";
import { FadeLoader } from "react-spinners";

const Profile = () => {
  const image = true;
  const loader = false;
  return (
    <div className="px-4 md:px-8 py-8 bg-gray-100 min-h-screen lg:ml-[235px] transition-all">
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-6/12 ">
          <div className="w-full p-4 bg-[add some color] rounded-md">
            <div className="flex justify-center items-center py-3">
              {image ? (
                <label htmlFor=""></label>
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
            </div>
          </div>
        </div>
        <div className="w-full md:w-6/12 "></div>
      </div>
    </div>
  );
};

export default Profile;
