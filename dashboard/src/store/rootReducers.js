import authReducer from "./reducers/authReducer";
import categoryReducer from "./reducers/categoryReducer";
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
};

export default rootReducer;
