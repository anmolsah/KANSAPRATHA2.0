import { lazy } from "react";
const OrderDetails = lazy(() => import("../../views/admin/OrderDetails"));
const ChatSeller = lazy(() => import("../../views/admin/ChatSeller"));
const SellerDetails = lazy(() => import("../../views/admin/SellerDetails"));
const SellerRequest = lazy(() => import("../../views/admin/SellerRequest"));
const DeactivateSeller = lazy(() =>
  import("../../views/admin/DeactivateSeller")
);
const PaymentRequest = lazy(() => import("../../views/admin/PaymentRequest"));
const Sellers = lazy(() => import("../../views/admin/Sellers"));
const Category = lazy(() => import("../../views/admin/Category"));
const Orders = lazy(() => import("../../views/admin/Orders"));
const AdminDashboard = lazy(() => import("../../views/admin/AdminDashboard"));

export const adminRoutes = [
  {
    path: "admin/dashboard",
    element: <AdminDashboard />,
    role: "admin",
  },
  {
    path: "admin/dashboard/orders",
    element: <Orders />,
    role: "admin",
  },
  {
    path: "admin/dashboard/category",
    element: <Category />,
    role: "admin",
  },
  {
    path: "admin/dashboard/sellers",
    element: <Sellers />,
    role: "admin",
  },
  {
    path: "admin/dashboard/payment-request",
    element: <PaymentRequest />,
    role: "admin",
  },
  {
    path: "admin/dashboard/deactive-seller",
    element: <DeactivateSeller />,
    role: "admin",
  },
  {
    path: "admin/dashboard/seller-request",
    element: <SellerRequest />,
    role: "admin",
  },
  {
    path: "admin/dashboard/seller/details/:sellerId",
    element: <SellerDetails />,
    role: "admin",
  },
  {
    path: "admin/dashboard/live-chat",
    element: <ChatSeller />,
    role: "admin",
  },
  {
    path: "admin/dashboard/order/details/:orderId",
    element: <OrderDetails />,
    role: "admin",
  },
];
