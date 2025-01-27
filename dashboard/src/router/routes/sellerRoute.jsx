import Home from "../../views/pages/Home";
import AddProduct from "../../views/seller/AddProduct";
import AllProduct from "../../views/seller/AllProduct";
import SellerDashboard from "../../views/seller/SellerDashboard";

const sellerRoutes = [
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
    path: "/seller/dashboard/all-product",
    element: <AllProduct />,
    ability: ["seller"],
  },
];

export default sellerRoutes;
