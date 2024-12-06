import Home from "../../views/pages/Home";

const sellerRoutes = [
  {
    path: "/",
    element: <Home />,
    ability: ["admin", "seller"],
  },
];

export default sellerRoutes;
