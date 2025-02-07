import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

const MainLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <SideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

      {/* Main Content */}
      <div
        className={`flex flex-col flex-1 transition-all ${
          showSidebar ? "ml-0 lg:ml-[260px]" : "ml-0"
        }`}
      >
        {/* Header */}
        <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

        {/* Page Content */}
        <div className="flex-1 p-6 overflow-y-auto bg-white shadow-md rounded-lg mt-16">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
