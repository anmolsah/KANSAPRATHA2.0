import React, { forwardRef, useEffect, useState } from "react";
import { BsCurrencyRupee } from "react-icons/bs";
import { FixedSizeList as List } from "react-window";
import { useDispatch, useSelector } from "react-redux";
import {
  get_seller_payment_details,
  send_withdraw_request,
} from "../../store/reducers/PaymentReducer";
import { toast } from "react-hot-toast";

function handleOnWheel({ deltaY }) {
  console.log("handleOnWheel", deltaY);
}
const outerElementType = forwardRef((props, ref) => (
  <div ref={ref} onWheel={handleOnWheel} {...props} />
));

const Payments = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const {
    successMessage,
    errorMessage,
    loader,
    pendingWithdraw,
    successWithdraw,
    totalAmount,
    withdrawAmount,
    pendingAmount,
    availableAmount,
  } = useSelector((state) => state.payment);
  const [amount, setAmount] = useState(0);

  const sendRequest = (e) => {
    e.preventDefault();
    if (availableAmount - amount > 10) {
      dispatch(send_withdraw_request({ amount, sellerId: userInfo._id }));
      setAmount(0);
    } else {
      toast.error("Insufficient balance to withdraw");
    }
  };
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

  useEffect(() => {
    dispatch(get_seller_payment_details(userInfo._id));
  }, []);

  return (
    <div className="px-4 md:px-8 py-8 bg-gray-100 min-h-screen lg:ml-[235px] transition-all">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[
          {
            value: totalAmount,
            label: "Total Sales",
            icon: <BsCurrencyRupee />,
            color: "from-blue-500 to-blue-700",
          },
          {
            value: availableAmount,
            label: "Available Amount",
            icon: <BsCurrencyRupee />,
            color: "from-green-500 to-green-700",
          },
          {
            value: withdrawAmount,
            label: "Withdrawal Amount",
            icon: <BsCurrencyRupee />,
            color: "from-yellow-500 to-yellow-700",
          },
          {
            value: pendingAmount,
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
              <h2 className="text-2xl font-bold">₹{item.value}</h2>
              <span className="text-md font-normal">{item.label}</span>
            </div>
            <div className="text-4xl opacity-80">{item.icon}</div>
          </div>
        ))}
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Send Request
          </h2>
          <div className="pt-4 mb-6">
            <form onSubmit={sendRequest}>
              <div className="flex gap-4 flex-wrap">
                <input
                  onChange={(e) => setAmount(e.target.value)}
                  value={amount}
                  min="0"
                  type="number"
                  name="amount"
                  className="p-3 md:w-[70%] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter Amount"
                />
                <button
                  disabled={loader}
                  className="px-8 bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all"
                >
                  {loader ? "Processing..." : "Submit"}
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
