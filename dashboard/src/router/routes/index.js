import { lazy } from "react";
import { privateRoutes } from "./privateRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
const MainLayout = lazy(() => import("./../../layout/MainLayout"));

export const getRoutes = () => {
  privateRoutes.map((r) => {
    r.element = <ProtectedRoutes route={r}>{r.element}</ProtectedRoutes>;
  });

  return {
    path: "/",
    element: <MainLayout />,
    children: privateRoutes,
  };
};
