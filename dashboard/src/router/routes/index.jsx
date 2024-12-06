import MainLayout from "../../layout/MainLayout";
import privateRoutes from "./privateRoute";

const getRoutes = () => {
  return {
    path: "/",
    element: <MainLayout />,
    children: privateRoutes,
  };
};

export default getRoutes;
