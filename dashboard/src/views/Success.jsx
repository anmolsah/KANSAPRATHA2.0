import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { active_stripe_connect_account } from "../store/reducers/sellerReducer";

const Success = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryParams = new URLSearchParams(window.location.search);
  const activeCode = queryParams.get("activeCode");

  useEffect(() => {
    dispatch(active_stripe_connect_account(activeCode));
  },[activeCode]);

  return <div>Success</div>;
};

export default Success;
