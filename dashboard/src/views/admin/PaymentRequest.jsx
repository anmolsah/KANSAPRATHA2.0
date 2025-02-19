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
      </div>
    );
  };

  return (
    <div className="px-4 md:px-8 py-8 bg-gray-100 min-h-screen lg:ml-[235px] transition-all">
      <div className="w-full p-4 rounded-md bg-[add some color]">
        <h2 className="text-xl font-medium pb-5 text-[add some color]">
          Withdrawl Request
        </h2>
        <div className="w-full ">
          <div className="w-full overflow-x-auto">
            <div className="flex bg-[add some color] uppercase text-xs min-w-[340px] font-bold rounded-md">
              <div className="w-[25%] p-2">No</div>
              <div className="w-[25%] p-2">Amount</div>
              <div className="w-[25%] p-2">Status</div>
              <div className="w-[25%] p-2">Date</div>
              <div className="w-[25%] p-2">Action</div>
            </div>
            {}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentRequest;
