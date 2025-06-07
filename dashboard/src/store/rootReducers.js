import authReducer from "./reducers/authReducer";
import categoryReducer from "./reducers/categoryReducer";
import dashboardReducer from "./reducers/dashboardReducer";
import OrderReducer from "./reducers/OrderReducer";
import PaymentReducer from "./reducers/PaymentReducer";
import productReducer from "./reducers/productReducer";
import sellerReducer from "./reducers/sellerReducer";

const rootReducer = {
  auth: authReducer,
  category: categoryReducer,
  product: productReducer,
  seller: sellerReducer,
  order: OrderReducer,
  payment: PaymentReducer,
  dashboard: dashboardReducer,
};

export default rootReducer;
