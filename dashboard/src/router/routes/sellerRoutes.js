import { lazy } from "react";
const Orders = lazy(() => import("../../views/seller/Orders"));
const DiscountProducts = lazy(() =>
  import("../../views/seller/DiscountProducts")
);
const Products = lazy(() => import("../../views/seller/Products"));
const AddProduct = lazy(() => import("../../views/seller/AddProduct"));
const SellerDashboard = lazy(() =>
  import("../../views/seller/SellerDashboard")
);
const Home = lazy(() => import("../../views/Home"));

export const sellerRoutes = [
  {
    path: "/",
    element: <Home />,
    ability: ["admin", "seller"],
  },
  {
    path: "/seller/dashboard",
    element: <SellerDashboard />,
    ability: ["seller"],
  },
  {
    path: "/seller/dashboard/add-product",
    element: <AddProduct />,
    ability: ["seller"],
  },
  {
    path: "/seller/dashboard/products",
    element: <Products />,
    ability: ["seller"],
  },
  {
    path: "/seller/dashboard/discount-product",
    element: <DiscountProducts />,
    ability: ["seller"],
  },
  {
    path: "/seller/dashboard/orders",
    element: <Orders />,
    ability: ["seller"],
  },
];
