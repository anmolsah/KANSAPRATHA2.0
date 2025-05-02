import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { get_orders_details } from "../../store/reducers/orderReducer";

const OrderDetails = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const { myOrder } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(get_orders_details(orderId));
  }, [orderId]);

  return <div className="bg-white p-5">
    <h2 className="text-slate-600 font-semibold">#{myOrder._id} , <span className="text-green-600">{myOrder.date}</span></h2>
    <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
            {/* <h2 className="">Deliver To : {myOrder.shippingInfo?.name}</h2> */}
            <h2 className="">Deliver To : {myOrder.shippingInfo?.name?.toString()}</h2>
            <p>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-2 rounded">Home</span>
                <span>{myOrder.shippingInfo?.address} {myOrder.shippingInfo?.province} {myOrder.shippingInfo?.city} {myOrder.shippingInfo?.area}</span>
                
             
            </p>
            <p className="text-slate-600 text-sm ">
                Email To {userInfo.email}
            </p>

        </div>
    </div>
    

  </div>;
};

export default OrderDetails;
