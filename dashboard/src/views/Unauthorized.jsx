import React from "react";

const Unauthorized = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-900 animate-gradient-x">
      <div className="text-center p-8 bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 transform transition-all hover:scale-105 duration-500">
        <h1 className="text-6xl font-bold text-white mb-4 animate-bounce">
          401
        </h1>
        <h2 className="text-4xl font-semibold text-white mb-6 animate-pulse">
          Unauthorized Access
        </h2>
        <p className="text-lg text-white/80 mb-8 animate-fade-in">
          Oops! You don't have permission to view this page.
        </p>
        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 bg-white text-purple-900 font-semibold rounded-full hover:bg-purple-100 transition-all duration-300 transform hover:scale-110 shadow-lg animate-float"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Unauthorized;
