import { lazy } from "react";
const Success = lazy(() => import("../../views/Success"));
const Unauthorized = lazy(() => import("../../views/Unauthorized"));
const AdminLogin = lazy(() => import("../../views/auth/AdminLogin"));
const Login = lazy(() => import("../../views/auth/Login"));
const Register = lazy(() => import("../../views/auth/Register"));
const Home = lazy(() => import("../../views/Home"));

const publicRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/unauthorized",
    element: <Unauthorized />,
  },
  {
    path: "/success?",
    element: <Success />,
  },
];

export default publicRoutes;
