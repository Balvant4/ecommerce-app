import { useRoutes } from "react-router-dom";

function Router({ allRoutes }) {
  const routers = useRoutes([...allRoutes]);
  return routers;
}

export default Router;
