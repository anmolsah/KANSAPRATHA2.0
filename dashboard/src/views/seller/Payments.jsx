import React, { forwardRef } from "react";
import { BsCurrencyRupee } from "react-icons/bs";
import { FixedSizeList as List } from "react-window";

function handleOnWheel({ deltaY }) {
  console.log("handleOnWheel", deltaY);
}
const outerElementType = forwardRef((props, ref) => (
  <div ref={ref} onWheel={handleOnWheel} {...props} />
));

const Payments = () => {
  const Row = ({ index, style }) => {
    return (
      <div style={style} className="flex text-sm font-mono">
        <div className="w-[25%] pl-4 p-2 whitespace-normal">{index + 1}</div>
        <div className="w-[25%] pl-1 p-2 whitespace-normal">₹3586</div>
        <div className="w-[25%] p-2 pl-1 whitespace-normal">
          <span className="py-1 px-2 text-sm bg-yellow-100 text-yellow-800 rounded-full">
            Pending
          </span>
        </div>
        <div className="w-[25%] p-2 whitespace-normal">25 Dec 2024</div>
      </div>
    );
  };
  return (
    <div className="px-4 md:px-8 py-8 bg-gray-100 min-h-screen lg:ml-[235px] transition-all">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[
          {
            value: "₹40036",
            label: "Total Sales",
            icon: <BsCurrencyRupee />,
            color: "from-blue-500 to-blue-700",
          },
          {
            value: "₹10050",
            label: "Available Amount",
            icon: <BsCurrencyRupee />,
            color: "from-green-500 to-green-700",
          },
          {
            value: "₹10000",
            label: "Withdrawal Amount",
            icon: <BsCurrencyRupee />,
            color: "from-yellow-500 to-yellow-700",
          },
          {
            value: "₹0",
            label: "Pending Amount",
            icon: <BsCurrencyRupee />,
            color: "from-red-500 to-red-700",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`flex justify-between items-center bg-gradient-to-r ${item.color} text-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition`}
          >
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold">{item.value}</h2>
              <span className="text-md font-normal">{item.label}</span>
            </div>
            <div className="text-4xl opacity-80">{item.icon}</div>
          </div>
        ))}
      </div>
      {/* <div className="w-full grid grid-cols-1 md:grid-cols-2  gap-4 pb-4">
        <div className="bg-[add some color] text-[add some color] rounded-md p-5">
          <h2 className="text-lg font-normal mb-2">Send Request</h2>
          <div className="pt-5 mb-4">
            <form>
              <div className="flex gap-3 flex-wrap">
                <input
                  min="0"
                  type="number"
                  name="amount"
                  className="p-2 md:w-[75%] border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                  placeholder="Enter Amount"
                />
                <button className="px-6 bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-all">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="">
            <h2 className="text-lg font-normal pb-2">Pending Request</h2>

            <div className="w-full overflow-x-auto">
              <div className="flex bg-gray-200 uppercase text-sm min-w-[340px] font-semibold rounded-lg text-gray-700">
                <div className="w-[20%] p-3">No</div>
                <div className="w-[20%] p-3">Amount</div>
                <div className="w-[20%] p-3">Status</div>
                <div className="w-[20%] p-3">Date</div>
              </div>
              {
                <List
                  style={{ minWidth: "340px" }}
                  className="List"
                  height={390}
                  itemCount={100}
                  itemSize={35}
                  outerElementType={outerElementType}
                >
                  {Row}
                </List>
              }
            </div>
          </div>
        </div>

        <div className="bg-[add some color] text-[add some color] rounded-md p-5">
          <div className="">
            <h2 className="text-lg font-normal pb-2">Success Withdrawal</h2>

            <div className="w-full overflow-x-auto">
              <div className="flex bg-gray-200 uppercase text-sm min-w-[340px] font-semibold rounded-lg text-gray-700">
                <div className="w-[20%] p-3">No</div>
                <div className="w-[20%] p-3">Amount</div>
                <div className="w-[20%] p-3">Status</div>
                <div className="w-[20%] p-3">Date</div>
              </div>
              {
                <List
                  style={{ minWidth: "340px" }}
                  className="List"
                  height={390}
                  itemCount={100}
                  itemSize={35}
                  outerElementType={outerElementType}
                >
                  {Row}
                </List>
              }
            </div>
          </div>
        </div>
      </div> */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Send Request
          </h2>
          <div className="pt-4 mb-6">
            <form>
              <div className="flex gap-4 flex-wrap">
                <input
                  min="0"
                  type="number"
                  name="amount"
                  className="p-3 md:w-[70%] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter Amount"
                />
                <button className="px-8 bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Pending Requests
            </h2>
            <div className="w-full overflow-x-auto">
              <div className="flex bg-gray-100 uppercase text-sm min-w-[340px] font-semibold rounded-t-lg text-gray-700">
                <div className="w-[20%]  p-3">No</div>
                <div className="w-[20%] p-3">Amount</div>
                <div className="w-[20%] p-2 pl-14">Status</div>
                <div className="w-[20%] p-3 placeholder-gray-200">Date</div>
              </div>
              <List
                style={{ minWidth: "340px" }}
                className="List"
                height={390}
                itemCount={100}
                itemSize={35}
                outerElementType={outerElementType}
              >
                {Row}
              </List>
            </div>
          </div>
        </div>

        {/* Success Withdrawal Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Success Withdrawals
          </h2>
          <div className="w-full overflow-x-auto">
            <div className="flex bg-gray-100 uppercase text-sm min-w-[340px] font-semibold rounded-t-lg text-gray-700">
              <div className="w-[20%] p-3">No</div>
              <div className="w-[20%] p-3">Amount</div>
              <div className="w-[20%] p-3 pl-14">Status</div>
              <div className="w-[20%] p-3 pl-20">Date</div>
            </div>
            <List
              style={{ minWidth: "340px" }}
              className="List"
              height={390}
              itemCount={100}
              itemSize={35}
              outerElementType={outerElementType}
            >
              {Row}
            </List>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
