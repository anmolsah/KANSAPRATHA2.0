import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { get_orders_details } from "../../store/reducers/orderReducer";

const OrderDetails = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_orders_details(orderId));
  },[orderId]);
  return <div>OrderDetails</div>;
};

export default OrderDetails;
