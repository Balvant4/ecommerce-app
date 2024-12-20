import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getNav } from "../navigation/index";
import { RiLogoutBoxLine } from "react-icons/ri";

function Sidebar() {
  const { pathname } = useLocation();
  const [allNav, setAllNav] = useState([]);

  useEffect(() => {
    const navs = getNav("admin");
    setAllNav(navs);
  }, []);

  return (
    <div>
      <div className="w-[260px] fixed bg-gray-100 z-50 top-0 h-screen shadow-md transition-all">
        {/* Logo Section */}
        <div className="h-[80px] flex justify-center items-center border-b border-gray-200">
          <Link to="/" className="w-[180px] h-[50px]">
            <img
              className="w-full h-full object-contain"
              src="/images/logo.png"
              alt="logo"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="px-4 py-4">
          <ul>
            {/* Render Navigation Items */}
            {allNav.map((n, i) => (
              <li key={i} className="mb-2">
                <Link
                  to={n.path}
                  className={`flex items-center gap-4 px-4 py-3 rounded-md transition-all ${
                    pathname === n.path
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                  }`}
                >
                  <span className="text-lg">{n.icon}</span>
                  <span className="font-medium">{n.title}</span>
                </Link>
              </li>
            ))}

            {/* Logout Button */}
            <li>
              <button className="flex items-center gap-4 px-4 py-3 rounded-md text-gray-700 hover:bg-gray-200 hover:text-gray-900 transition-all w-full">
                <span className="text-lg">
                  <RiLogoutBoxLine />
                </span>
                <span className="font-medium">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
