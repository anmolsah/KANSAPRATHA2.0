import React from "react";

const FeatureProduct = () => {
  return (
    <div className="w-[85%] fles flex-wrap mx-auto">
      <div className="w-full">
        <div className="text-center flex justify-center items-center flex-col text-4xl text-slate-600 font-bold relative pb-[45px]">
          <h2>Feature Products</h2>
          <div className="w-[100px] h-[2px] bg-[#059473] mt-4"></div>
        </div>
      </div>

      <div className="w-full grid grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((p, i) => (
          <div
            key={i}
            className="border group transition-all duration-500 hover:shadow-md hover:-mt-5"
          >
            <div className="relative overflow-hidden">
              <div className="flex justify-center items-center absolute text-white w-[30px] h-[38px] rounded-full bg-red-500 font-semibold text-xs left-2 top-2">
                8%
              </div>
              <img className="sm:w-full h-[240px]" src={`/images/products/${i + 1}.jpg`} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureProduct;
