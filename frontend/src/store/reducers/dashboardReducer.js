import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const get_dashboard_index_data = createAsyncThunk(
  "dashboard/get_dashboard_index_data",
  async (userId, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get(
        `/home/customer/get-dashboard-data/${userId}`
      );

      //console.log(data);
      return fulfillWithValue(data);
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error.response.data);
    }
  }
);

export const dashboardReducer = createSlice({
  name: "dashboard",
  initialState: {
    recentOrders: [],
    totalOrder: 0,
    pendingOrder: 0,
    cancelledOrder: 0,
    errorMessage: "",
    successMessage: "",
  },

  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      get_dashboard_index_data.fulfilled,
      (state, { payload }) => {
        state.totalOrder = payload.totalOrders;
        state.pendingOrder = payload.pendingOrders;
        state.cancelledOrder = payload.cancelledOrders;
        state.recentOrders = payload.recentOrders;
        state.successMessage = payload.message;
        state.loader = false;
      }
    );
  },
});

export const { messageClear } = dashboardReducer.actions;
export default dashboardReducer.reducer;
