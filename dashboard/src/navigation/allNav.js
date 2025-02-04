import {
  FiDollarSign,
  FiGrid,
  FiHome,
  FiLogOut,
  FiMessageCircle,
  FiShoppingCart,
  FiUser,
  FiUserPlus,
  FiUserX,
} from "react-icons/fi";

export const allNav = [
  {
    id: 1,
    title: "Dashboard",
    icon: <FiHome />,
    role: "admin",
    path: "/admin/dashboard",
  },
  {
    id: 2,
    title: "Orders",
    icon: <FiShoppingCart />,
    role: "admin",
    path: "/admin/dashboard/orders",
  },
  {
    id: 3,
    title: "Category",
    icon: <FiGrid />,
    role: "admin",
    path: "/admin/dashboard/category",
  },
  {
    id: 4,
    title: "Sellers",
    icon: <FiUser />,
    role: "admin",
    path: "/admin/dashboard/sellers",
  },
  {
    id: 5,
    title: "Payment Request",
    icon: <FiDollarSign />,
    role: "admin",
    path: "/admin/dashboard/payment-request",
  },
  {
    id: 6,
    title: "Deactive Seller",
    icon: <FiUserX />,
    role: "admin",
    path: "/admin/dashboard/deactive-seller",
  },
  {
    id: 7,
    title: "Seller Request",
    icon: <FiUserPlus />,
    role: "admin",
    path: "/admin/dashboard/seller-request",
  },
  {
    id: 8,
    title: "Live Chat",
    icon: <FiMessageCircle />,
    role: "admin",
    path: "/admin/dashboard/live-chat",
  },
];
