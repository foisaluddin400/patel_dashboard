import logo from "../../assets/header/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";
import { logout } from "../../page/redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { FiUser } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { TbCategory2 } from "react-icons/tb";

const items = [
  { key: "overview-heading", type: "heading", label: "OVERVIEW" },
  { key: "dashboard", label: "Dashboard", icon: <FaHome />, link: "/" },

  { key: "management-heading", type: "heading", label: "MANAGEMENT" },
  { key: "users", label: "Users", icon: <FiUser />, link: "/dashboard/UserManagement" },
  { key: "subscriptions", label: "Subscriptions", icon: <TbCategory2 />, link: "/dashboard/Subscription" },
  { key: "plans", label: "Plans", icon: <TbCategory2 />, link: "/dashboard/plans" },
  { key: "regeneration", label: "Regeneration", icon: <TbCategory2 />, link: "/dashboard/regeneration" },
  { key: "exercise-library", label: "Exercise Library", icon: <TbCategory2 />, link: "/dashboard/exercise-library" },

  { key: "intelligence-heading", type: "heading", label: "INTELLIGENCE" },
  { key: "ai-monitoring", label: "AI Monitoring", icon: <TbCategory2 />, link: "/dashboard/ai-monitoring" },
  { key: "payments", label: "Payments", icon: <TbCategory2 />, link: "/dashboard/payments" },

  { key: "platform-heading", type: "heading", label: "PLATFORM" },
  { key: "support-tickets", label: "Support Tickets", icon: <TbCategory2 />, link: "/dashboard/support-tickets" },
  { key: "legal-pages", label: "Legal Pages", icon: <TbCategory2 />, link: "/dashboard/legal-pages" },

  { key: "system-heading", type: "heading", label: "SYSTEM" },
  { key: "system-settings", label: "System Settings", icon: <IoSettingsOutline />, link: "/dashboard/system-settings" },
];

const SidBar = () => {
  const [selectedKey, setSelectedKey] = useState("dashboard");

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Active route sync
  useEffect(() => {
    const currentPath = location.pathname;

    const activeItem = items.find(
      (item) => item.link === currentPath
    );

    if (activeItem) {
      setSelectedKey(activeItem.key);
    }
  }, [location.pathname]);

  // Logout
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="h-screen flex flex-col bg-[#111111] text-[#888888] border-r border-[#1f1f1f]">
      {/* Logo */}
      <div className="flex justify-center border-b border-[#1f1f1f]">
        <img src={logo} alt="Logo" className="w-[130px]" />
      </div>

      {/* Menu */}
      <div className="flex-1 overflow-y-auto no-scrollbar px-3 py-4">
        {items.map((item) => {
          if (item.type === "heading") {
            return (
              <div
                key={item.key}
                className="text-[11px] tracking-[2px] text-[#666666] font-semibold mt-6 mb-3 px-3"
              >
                {item.label}
              </div>
            );
          }

          const isActive = selectedKey === item.key;

          return (
            <Link
              key={item.key}
              to={item.link}
              onClick={() => setSelectedKey(item.key)}
              className={`relative flex items-center justify-between px-4 py-3 rounded-xl mb-2 border transition-all duration-300 ${
                isActive
                  ? "bg-[#C8A44D1A] border-[#C8A44D33] text-white"
                  : "border-transparent text-[#888888] hover:bg-[#1a1a1a]"
              }`}
            >
              {/* Left */}
              <div className="flex items-center gap-3">
                <span className={isActive ? "text-white" : "text-[#888888]"}>
                  {item.icon}
                </span>

                <span className="text-sm font-medium">
                  {item.label}
                </span>
              </div>

              {/* Active dot */}
              <div
                className={`w-2 h-2 rounded-full ${
                  isActive ? "bg-[#C8A44D]" : "bg-transparent"
                }`}
              />
            </Link>
          );
        })}
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-[#1f1f1f]">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl border border-red-500/20 text-red-500 hover:bg-red-500/10 transition-all"
        >
          <IoIosLogIn className="text-xl" />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default SidBar;