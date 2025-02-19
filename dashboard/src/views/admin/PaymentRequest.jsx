import React, { forwardRef } from "react";
import { FixedSizeList as List } from "react-window";

function handleOnWheel({ deltaY }) {
  console.log("handleOnWheel", deltaY);
}
const outerElementType = forwardRef((props, ref) => {
  <div ref={ref} onWheel={handleOnWheel} {...props} />;
});

const PaymentRequest = () => {
  const Row = ({ index, style }) => {
    return (
      <div style={style} className="flex text-sm">
        <div className="w-[25%] p-2 whitespace-normal">{index + 1}</div>
        <div className="w-[25%] p-2 whitespace-normal">{index + 1}</div>
        <div className="w-[25%] p-2 whitespace-normal">{index + 1}</div>
        <div className="w-[25%] p-2 whitespace-normal">{index + 1}</div>
        <div className="w-[25%] p-2 whitespace-normal">{index + 1}</div>
      </div>
    );
  };

  return (
    <div className="px-4 md:px-8 py-8 bg-gray-100 min-h-screen lg:ml-[230px] transition-all">
      <div className="w-full p-6 rounded-lg bg-white shadow-md border border-gray-200">
        <h2 className="text-2xl font-semibold pb-5 text-gray-800">
          💰 Withdrawal Request
        </h2>
        <div className="w-full">
          <div className="w-full overflow-x-auto">
            <div className="flex bg-gray-200 uppercase text-sm min-w-[340px] font-semibold rounded-lg text-gray-700">
              <div className="w-[20%] p-3">No</div>
              <div className="w-[20%] p-3">Amount</div>
              <div className="w-[20%] p-3">Status</div>
              <div className="w-[20%] p-3">Date</div>
              <div className="w-[20%] p-3">Action</div>
            </div>
            {/* Data rows go here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentRequest;
