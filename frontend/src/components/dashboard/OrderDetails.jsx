import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { get_orders_details } from "../../store/reducers/orderReducer";

const OrderDetails = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const { myOrder } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(get_orders_details(orderId));
  }, [orderId]);

  return (
    <div className="bg-white p-5">
      <h2 className="text-slate-600 font-semibold">
        #{myOrder._id} , <span className="text-green-600">{myOrder.date}</span>
      </h2>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-1">
          {/* <h2 className="">Deliver To : {myOrder.shippingInfo?.name}</h2> */}
          <h2 className="">
            Deliver To : {myOrder.shippingInfo?.name?.toString()}
          </h2>
          <p>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2 py-2 rounded">
              Home
            </span>
            <span>
              {myOrder.shippingInfo?.address} {myOrder.shippingInfo?.province}{" "}
              {myOrder.shippingInfo?.city} {myOrder.shippingInfo?.area}
            </span>
          </p>
          <p className="text-slate-600 text-sm ">Email To {userInfo.email}</p>
        </div>

        <div className="text-slate-600">
          <h2 className="font-mono">
            Price : ₹{myOrder.price} Included Shipping
          </h2>
          <p className="font-mono">
            Payment Status :{" "}
            <span
              className={`py-[1px] text-xs px-3 ${
                myOrder.payment_status === "paid"
                  ? "bg-green-300 text-green-800"
                  : "bg-red-300 text-red-800"
              } rounded-md`}
            >
              {myOrder.payment_status}
            </span>
          </p>
          <p className="font-mono">
            Order Status :{" "}
            <span
              className={`py-[1px] text-xs px-3 ${
                myOrder.delivery_status === "paid"
                  ? "bg-green-300 text-green-800"
                  : "bg-red-300 text-red-800"
              } rounded-md`}
            >
              {myOrder.delivery_status}
            </span>
          </p>
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-slate-600 font-semibold">Order Products</h2>
        <div className="flex gap-5 flex-col">
            {
                myOrder.products?.map((p,i)=><div className="flex gap-5 justify-start items-center text-slate-600" key={i}>
                    <div className="flex gap-2">
                        <img src={p.images[0]} alt="" className="w-[55px] h-[55px]" />
                        <div className="flex text-sm flex-col justify-start items-start">
                            <Link>{p.name}</Link>
                            <p>
                                <span>Brand : {p.brand}</span>
                               
                            </p>
                            <p> <span>Quantity : {p.quantity}</span></p>
                            
                        </div>
                    </div>

                    <div className="pl-4 flex flex-col">
                        <h2 className="text-md text-green-800"> ₹{p.price - Math.floor((p.price*p.discount)/100)}</h2>
                        <p className="line-through">₹{p.price}</p>
                        <p>{p.discount}%</p>
                    </div>

                </div>)
            }
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
