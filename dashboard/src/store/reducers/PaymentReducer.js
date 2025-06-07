import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const get_seller_payment_details = createAsyncThunk(
  "payment/get_seller_payment_details",
  async (sellerId, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get(
        `/payment/seller-payment-details/${sellerId}`,
        {
          withCredentials: true,
        }
      );

      return fulfillWithValue(data);
    } catch (error) {
      //console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const send_withdraw_request = createAsyncThunk(
  "payment/send_withdraw_request",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post(`/payment/withdraw-request`, info, {
        withCredentials: true,
      });

      return fulfillWithValue(data);
    } catch (error) {
      //console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const PaymentReducer = createSlice({
  name: "payment",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    pendingWithdraw: [],
    successWithdraw: [],
    totalAmount: 0,
    withdrawAmount: 0,
    pendingAmount: 0,
    availableAmount: 0,
  },
  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(get_seller_payment_details.fulfilled, (state, { payload }) => {
        state.pendingWithdraw = payload.pendingWithdraw;
        state.successWithdraw = payload.successWithdraw;
        state.totalAmount = payload.totalAmount;
        state.availableAmount = payload.availableAmount;
        state.withdrawAmount = payload.withdrawAmount;
        state.pendingAmount = payload.pendingAmount;
        // state.pendingAmount = payload.availableAmount;
      })
      .addCase(send_withdraw_request.pending, (state, { payload }) => {
        state.loader = true;
      })
      .addCase(send_withdraw_request.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload.error || "Failed to send withdraw request";
      })
      .addCase(send_withdraw_request.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = payload.message;
        state.pendingWithdraw = [...state.pendingWithdraw, payload.withdraw];
        state.availableAmount = state.availableAmount - payload.withdraw.amount;
        state.pendingWithdraw = payload.withdraw.amount;
      });
  },
});

export const { messageClear } = PaymentReducer.actions;
export default PaymentReducer.reducer;
