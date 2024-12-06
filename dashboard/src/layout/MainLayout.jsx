import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function MainLayout() {
  return (
    <div>
      <Header />
      <Sidebar />
      <div>
        Main Layout <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
