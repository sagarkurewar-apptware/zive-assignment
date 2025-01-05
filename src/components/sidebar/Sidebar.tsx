import React, { useState } from "react";
import { FaFolderOpen } from "react-icons/fa6"; // Import icons
import { LuLayoutDashboard } from "react-icons/lu";
import { AiFillIeCircle } from "react-icons/ai";
import { BiSolidShoppingBags } from "react-icons/bi";
import { IoEllipsisVerticalCircleOutline } from "react-icons/io5";
import { TbReportSearch } from "react-icons/tb";
import { BsGraphUp } from "react-icons/bs";
import { CiDollar } from "react-icons/ci";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { AiOutlineAudit } from "react-icons/ai";
import { FaRegCircleCheck } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const [activeItem, setActiveItem] = useState<string>("Dashboard");

  const navItems = [
    { icon: <LuLayoutDashboard size={20} />, label: "Dashboard" },
    { icon: <BiSolidShoppingBags size={20} />, label: "Authorized Shares" },
    { icon: <IoEllipsisVerticalCircleOutline size={20} />, label: "Cap Table" },
    { icon: <FaFolderOpen size={20} />, label: "Portfolio View" },
    { icon: <TbReportSearch size={20} />, label: "Reports" },
    { icon: <BsGraphUp size={20} />, label: "Simulations" },
    { icon: <CiDollar size={25} />, label: "409A" },
    { icon: <MdOutlineCreateNewFolder size={25} />, label: "Data Room" },
    { icon: <AiOutlineAudit size={20} />, label: "Audit Log" },
    { icon: <FaRegCircleCheck size={20} />, label: "Transfer Agent" },
  ];

  const settingsItems = [
    { icon: <CiUser size={20} />, label: "User Management" },
    { icon: <IoSettingsOutline size={20} />, label: "Settings" },
  ];

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-100 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col`}
    >
      <div className="flex items-center gap-2 p-6">
        <AiFillIeCircle size={30} />
        <h2 className="text-base font-semibold">Contra Venture Fund</h2>
      </div>
      <nav className="flex flex-col flex-1 px-6 py-4">
        {navItems.map(({ icon, label }) => (
          <button
            key={label}
            onClick={() => setActiveItem(label)}
            className={`flex items-center px-4 py-3 rounded-lg space-x-4 transition-colors duration-200 ${
              activeItem === label
                ? "text-blue-800 font-bold"
                : "text-gray-800 hover:text-blue-800"
            }`}
          >
            {icon}
            <span className="text-sm">{label}</span>
          </button>
        ))}

        <div className="flex-1"></div>

        <div className="">
          {settingsItems.map(({ icon, label }) => (
            <button
              key={label}
              onClick={() => setActiveItem(label)}
              className={`flex items-center px-4 py-3 rounded-lg space-x-4 transition-colors duration-200 ${
                activeItem === label
                  ? "text-blue-800 font-bold "
                  : "text-gray-800 hover:text-blue-800"
              }`}
            >
              {icon}
              <span className="text-sm">{label}</span>
            </button>
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
