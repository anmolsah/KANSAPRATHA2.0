import React, { forwardRef, useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FixedSizeList as List } from "react-window";
import { confirm_payment_request, get_payment_request,messageClear } from "../../store/reducers/PaymentReducer";
import moment from "moment";
import toast from "react-hot-toast";

function handleOnWheel({ deltaY }) {
  console.log("handleOnWheel", deltaY);
}
const outerElementType = forwardRef((props, ref) => (
  <div ref={ref} onWheel={handleOnWheel} {...props} />
));

const PaymentRequest = () => {
  const dispatch = useDispatch();
  const { successMessage, errorMessage, pendingWithdraw, loader } = useSelector(
    (state) => state.payment
  );
  const [paymentId, setPaymentId] = useState("");

  useEffect(() => {
    dispatch(get_payment_request());
  }, []);

  const confirm_request = (id)=>{
    setPaymentId(id);
    dispatch(confirm_payment_request(id))
  }


   useEffect(() => {
      if (errorMessage) {
        toast.error(errorMessage);
        dispatch(messageClear());
      }
  
      if (successMessage) {
        toast.success(successMessage);
        dispatch(messageClear());
      }
    }, [successMessage, errorMessage]);

  const Row = ({ index, style }) => {
    return (
      <div style={style} className="flex text-sm font-mono">
        <div className="w-[25%] p-2 whitespace-normal">{index + 1}</div>
        <div className="w-[25%] p-2 whitespace-normal">
          ₹{pendingWithdraw[index]?.amount}
        </div>
        <div className="w-[25%] p-2 whitespace-normal">
          <span className="py-1 px-2 text-sm">
            {pendingWithdraw[index]?.status}
          </span>
        </div>
        <div className="w-[25%] p-2 whitespace-normal">
          {moment(pendingWithdraw[index]?.createdAt).format("LL")}
        </div>
        <div className="w-[25%] p-2 whitespace-normal">
          <button
            disabled={loader}
            onClick={() => confirm_request(pendingWithdraw[index]?._id)}
            className="bg-indigo-500 shadow-lg hover:shadow-indigo-600/50 px-3 py-[2px] cursor-pointer text-white rounded-sm text-sm"
          >
            {loader && paymentId === pendingWithdraw[index]?._id
              ? "Processing..."
              : "Confirm"}
          </button>
        </div>
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
            {
              <List
                style={{ minWidth: "340px" }}
                className="List"
                height={390}
                itemCount={pendingWithdraw.length}
                itemSize={35}
                outerElementType={outerElementType}
              >
                {Row}
              </List>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentRequest;
