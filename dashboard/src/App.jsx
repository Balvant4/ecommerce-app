import { useState } from "react";

import Router from "./router/Router";
import publicRoutes from "./router/routes/publicRoute.jsx";

function App() {
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);

  return <Router allRoutes={allRoutes} />;
}

export default App;
