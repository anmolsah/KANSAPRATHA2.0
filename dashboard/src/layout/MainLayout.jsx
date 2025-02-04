import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

const MainLayout = () => {
  return (
    // <div className="bg-blue w-full min-h-screen">
    //   <Header />
    //   <SideBar />
    //   <div className="ml-0 lg:ml-[260px] pt-[95px] transition-all">
    //     <Outlet />
    //   </div>
    // </div>
    <div className="flex h-screen bg-gray-100">
      <SideBar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex-1 p-6 overflow-y-auto bg-white shadow-md rounded-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
