import { lazy } from "react";
const AdminDashboard = lazy(() => import("../../views/admin/AdminDashboard"));
const Orders = lazy(() => import("../../views/admin/Orders"));
const PaymentRequest = lazy(() => import("../../views/admin/PaymentRequest"));
const Category = lazy(() => import("../../views/admin/Category"));
const DecativeSellers = lazy(() => import("../../views/admin/DecativeSellers"));
const SellerRequest = lazy(() => import("../../views/admin/SellerRequest"));
const Sellers = lazy(() => import("../../views/admin/Sellers"));

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
  {
    path: "admin/dashboard/category",
    element: <Category />,
    role: "admin",
  },
  {
    path: "admin/dashboard/payment-request",
    element: <PaymentRequest />,
    role: "admin",
  },
  {
    path: "admin/dashboard/decative-sellers",
    element: <DecativeSellers />,
    role: "admin",
  },
  {
    path: "admin/dashboard/seller-request",
    element: <SellerRequest />,
    role: "admin",
  },

  {
    path: "admin/dashboard/sellers",
    element: <Sellers />,
    role: "admin",
  },
];

export default adminDashboard;
