import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

const MainLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="flex h-screen bg-gray-100">
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <SideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className="flex flex-col flex-1">
        <div className="flex-1 p-6 overflow-y-auto bg-white shadow-md rounded-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
