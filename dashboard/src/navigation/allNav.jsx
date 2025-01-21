import { AiOutlineDashboard, AiOutlineShoppingCart } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { FaUserTimes } from "react-icons/fa";
import { VscGitPullRequestNewChanges } from "react-icons/vsc";
import { BsChatDotsFill } from "react-icons/bs";

export const allNav = [
  {
    id: 1,
    title: "Dashboard",
    icon: <AiOutlineDashboard />,
    role: "admin",
    path: "/admin/dashboard",
  },
  {
    id: 2,
    title: "Orders",
    icon: <AiOutlineShoppingCart />,
    role: "admin",
    path: "/admin/dashboard/orders",
  },
  {
    id: 3,
    title: "Category",
    icon: <BiCategory />,
    role: "admin",
    path: "/admin/dashboard/category",
  },
  {
    id: 4,
    title: "Sellers",
    icon: <FaUserFriends />,
    role: "admin",
    path: "/admin/dashboard/sellers",
  },
  {
    id: 5,
    title: "Payment Request",
    icon: <MdOutlinePayment />,
    role: "admin",
    path: "/admin/dashboard/payment-request",
  },
  {
    id: 6,
    title: "Decative Sellers",
    icon: <FaUserTimes />,
    role: "admin",
    path: "/admin/dashboard/decative-sellers",
  },
  {
    id: 7,
    title: "Seller Request",
    icon: <VscGitPullRequestNewChanges />,
    role: "admin",
    path: "/admin/dashboard/seller-request",
  },
  {
    id: 8,
    title: "Live Chat",
    icon: <BsChatDotsFill />,
    role: "admin",
    path: "/admin/dashboard/seller-chat",
  },

  // Seller Route start here
  {
    id: 9,
    title: "Dashboard",
    icon: <AiOutlineDashboard />,
    role: "seller",
    path: "/seller/dashboard",
  },
  {
    id: 10,
    title: "Add Product",
    icon: <AiOutlineDashboard />,
    role: "seller",
    path: "/seller/dashboard/add-product",
  },
  {
    id: 11,
    title: "All Product",
    icon: <AiOutlineDashboard />,
    role: "seller",
    path: "/seller/all-product",
  },
  {
    id: 12,
    title: "Discount Product",
    icon: <AiOutlineDashboard />,
    role: "seller",
    path: "/seller/dashboard/discount-product",
  },
  {
    id: 13,
    title: "Orders",
    icon: <AiOutlineDashboard />,
    role: "seller",
    path: "/seller/dashboard/orders",
  },
  {
    id: 14,
    title: "Payments",
    icon: <AiOutlineDashboard />,
    role: "seller",
    path: "/seller/dashboard/payments",
  },
  {
    id: 15,
    title: "Chat-Customer",
    icon: <AiOutlineDashboard />,
    role: "seller",
    path: "/seller/dashboard/chat-customer",
  },
  {
    id: 16,
    title: "Chat-Support",
    icon: <AiOutlineDashboard />,
    role: "seller",
    path: "/seller/dashboard/chat-support",
  },
];
