// import React, { useState } from "react";
// import { FaChartBar, FaTable, FaFolderOpen } from "react-icons/fa6"; // Import icons
// import { MdOutlineNotifications } from "react-icons/md";
// import { LuDownload, LuLayoutDashboard } from "react-icons/lu";
// import { AiFillIeCircle } from "react-icons/ai";
// import { BiSolidShoppingBags } from "react-icons/bi";
// import { IoEllipsisVerticalCircleOutline } from "react-icons/io5";
// import { TbReportSearch } from "react-icons/tb";
// import { BsGraphUp } from "react-icons/bs";
// import { CiDollar } from "react-icons/ci";
// import { MdOutlineCreateNewFolder } from "react-icons/md";
// import { AiOutlineAudit } from "react-icons/ai";
// import { FaRegCircleCheck } from "react-icons/fa6";
// import { CiUser } from "react-icons/ci";
// import { IoSettingsOutline } from "react-icons/io5";

// const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen((prev) => !prev);
//   };

//   return (
//     <div className="flex flex-col md:flex-row h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside
//         className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-100 shadow-sm transform ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col`}
//       >
//         <div className="flex items-center gap-2 p-6">
//           <AiFillIeCircle size={30} />
//           <h2 className="text-base font-semibold">Contra Venture Fund</h2>
//         </div>
//         <nav className="flex flex-col flex-1 px-6 py-4">
//           <div className="pb-4">
//             <a
//               href="#"
//               className="flex items-center px-4 py-3 text-gray-800 hover:text-blue-500 hover:text-bold rounded-lg space-x-4 transition-colors duration-200"
//             >
//               <LuLayoutDashboard className="text-xl" />
//               <span className="text-sm font-medium">Dashboard</span>
//             </a>
//             <a
//               href="#"
//               className="flex items-center px-4 py-3 text-gray-800 hover:text-blue-500 hover:text-bold rounded-lg space-x-4 transition-colors duration-200"
//             >
//               <BiSolidShoppingBags size={20} />
//               <span className="text-sm font-medium">Authorized Shares</span>
//             </a>
//             <a
//               href="#"
//               className="flex items-center px-4 py-3 text-gray-800 hover:text-blue-500 hover:text-bold rounded-lg space-x-4 transition-colors duration-200"
//             >
//               <IoEllipsisVerticalCircleOutline size={20} />
//               <span className="text-sm font-medium">Cap Table</span>
//             </a>
//             <a
//               href="#"
//               className="flex items-center px-4 py-3 text-gray-800 hover:text-blue-500 hover:text-bold rounded-lg space-x-4 transition-colors duration-200"
//             >
//               <FaFolderOpen className="text-gray-500 text-xl" />
//               <span className="text-sm font-medium">Portfolio View</span>
//             </a>
//             <a
//               href="#"
//               className="flex items-center px-4 py-3 text-gray-800 hover:text-blue-500 hover:text-bold rounded-lg space-x-4 transition-colors duration-200"
//             >
//               <TbReportSearch className="text-xl" />
//               <span className="text-sm font-medium">Reports</span>
//             </a>
//             <a
//               href="#"
//               className="flex items-center px-4 py-3 text-gray-800 hover:text-blue-500 hover:text-bold rounded-lg space-x-4 transition-colors duration-200"
//             >
//               <BsGraphUp size={20} />
//               <span className="text-sm font-medium">Simulations</span>
//             </a>
//             <a
//               href="#"
//               className="flex items-center px-4 py-3 text-gray-800 hover:text-blue-500 hover:text-bold rounded-lg space-x-4 transition-colors duration-200"
//             >
//               <CiDollar size={25} />
//               <span className="text-sm font-medium">409A</span>
//             </a>
//             <a
//               href="#"
//               className="flex items-center px-4 py-3 text-gray-800 hover:text-blue-500 hover:text-bold rounded-lg space-x-4 transition-colors duration-200"
//             >
//               <MdOutlineCreateNewFolder size={25} />
//               <span className="text-sm font-medium">Data Room</span>
//             </a>
//             <a
//               href="#"
//               className="flex items-center px-4 py-3 text-gray-800 hover:text-blue-500 hover:text-bold rounded-lg space-x-4 transition-colors duration-200"
//             >
//               <AiOutlineAudit size={20} />
//               <span className="text-sm font-medium">Audit Log</span>
//             </a>
//             <a
//               href="#"
//               className="flex items-center px-4 py-3 text-gray-800 hover:text-blue-500 hover:text-bold rounded-lg space-x-4 transition-colors duration-200"
//             >
//               <FaRegCircleCheck size={20} />
//               <span className="text-sm font-medium">Transfer Agent</span>
//             </a>
//           </div>

//           {/* Spacer to push "Settings" to the bottom */}
//           <div className="flex-1"></div>

//           <div className="border-t border-gray-200 pt-4">
//             <a
//               href="#"
//               className="flex items-center px-4 py-3 text-gray-800 hover:text-blue-500 hover:text-bold rounded-lg space-x-4 transition-colors duration-200"
//             >
//               <CiUser size={20} />
//               <span className="text-sm font-medium">User Management</span>
//             </a>
//             <a
//               href="#"
//               className="flex items-center px-4 py-3 text-gray-800 hover:text-blue-500 hover:text-bold rounded-lg space-x-4 transition-colors duration-200"
//             >
//               <IoSettingsOutline size={20} />
//               <span className="text-sm font-medium">Settings</span>
//             </a>
//           </div>
//         </nav>
//       </aside>

//       {/* Backdrop for Sidebar on Small Screens */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
//           onClick={toggleSidebar}
//         ></div>
//       )}

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Header */}
//         <header className="flex justify-between items-center bg-gray-100 p-[1rem] shadow-sm">
//           <div className=""></div>
//           <div className="flex items-center space-x-4">
//             <div className="flex gap-3 items-center">
//               <div className="flex gap-3 cursor-pointer">
//                 <LuDownload size={20} color="gray" />
//                 <MdOutlineNotifications size={20} color="gray" />
//               </div>
//               <div className="flex items-center gap-2">
//                 <p className="text-gray-400 text-sm">John Cena</p>
//                 <img
//                   src="https://pbs.twimg.com/profile_images/685700874434314240/80T5j3HF_400x400.jpg"
//                   alt="Profile"
//                   className="w-10 h-10 rounded-full border-2 border-white"
//                 />
//               </div>
//             </div>

//             {/* Toggle Sidebar Button for Small Screens */}
//             <button
//               className="md:hidden text-gray-500 hover:text-gray-700"
//               onClick={toggleSidebar}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="currentColor"
//                 className="w-6 h-6"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M3.75 7.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
//                 />
//               </svg>
//             </button>
//           </div>
//         </header>

//         {/* Content */}
//         <main className="flex-1 p-4 sm:p-6 overflow-y-auto">{children}</main>
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;

import Header from "components/header/Header";
import Sidebar from "components/sidebar/Sidebar";
import React, { useState } from "react";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-1 min-h-0 overflow-y-auto pr-4">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
