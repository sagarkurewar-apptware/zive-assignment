import React from "react";
import { MdOutlineNotifications } from "react-icons/md";
import { LuDownload } from "react-icons/lu";
interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="flex justify-between items-center bg-gray-100 p-[1rem]">
      <div></div>
      <div className="flex items-center space-x-4">
        <div className="flex gap-3 items-center">
          <div className="flex gap-3 cursor-pointer">
            <LuDownload size={20} color="gray" />
            <MdOutlineNotifications size={20} color="gray" />
          </div>
          <div className="flex items-center gap-2">
            <p className="text-gray-400 text-sm">John Cena</p>
            <img
              src="https://pbs.twimg.com/profile_images/685700874434314240/80T5j3HF_400x400.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          </div>
        </div>

        <button
          className="md:hidden text-gray-500 hover:text-gray-700"
          onClick={toggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 7.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
