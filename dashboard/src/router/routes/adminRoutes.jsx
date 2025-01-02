import { lazy } from "react";
const AdminDashboard = lazy(() => import("../../views/admin/AdminDashboard"));
const Orders = lazy(() => import("../../views/admin/Orders"));

const adminDashboard = [
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
];

export default adminDashboard;
