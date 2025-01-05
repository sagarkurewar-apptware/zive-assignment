import { MdOutlineNotifications } from "react-icons/md";
import { BiSortAlt2 } from "react-icons/bi";
import { FaCloud } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    // <div className="w-full h-screen p-16 bg-[#f8ffff]">
    <div className="w-full h-screen p-16 bg-gray-100">
      <section>
        <div className="flex justify-between">
          <div className="w-[10%] flex items-center ml-[-30px]">
            <img src="ziveLogo.png" alt="logo" className="bg-transparent" />
          </div>
          <div className="flex gap-2 items-center">
            <div className="cursor-pointer">
              <MdOutlineNotifications size={30} color="gray" />
            </div>
            <div className="p-4 flex items-center space-x-4">
              <p className="text-gray-400 text-base">John Cena</p>
              <img
                src="https://pbs.twimg.com/profile_images/685700874434314240/80T5j3HF_400x400.jpg"
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center py-4">
          <div className="relative">
            <svg
              className="absolute w-5 h-5 text-gray-400 left-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="search"
              placeholder="Search Funds"
              className="w-full h-10 pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-offset-blue-200"
            />
          </div>
          <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-blue-600 rounded-lg hover:text-blue-900">
            <BiSortAlt2 className="font-bold" />
            <span>SORT</span>
          </button>
        </div>
      </section>
      <section className="mt-8">
        <div className="flex flex-col w-1/2 bg-white shadow-md rounded-lg p-6 ">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 ">
              <FaCloud size={30} />
              <span className="text-lg font-bold text-gray-800">
                DroidCloud Inc
              </span>
            </div>
            <Link to="/dashboard">
              <button className="bg-blue-950 text-white text-base px-5 py-4 rounded-lg hover:bg-blue-700">
                Dashboard
              </button>
            </Link>
          </div>
          <div className="w-full flex justify-between mt-10">
            <div className="">
              <p className="text-sm text-gray-500 mt-1">Fund Size</p>
              <p className="text-2xl font-bold text-blue-900 mt-1">
                22,968,539.79
              </p>
            </div>
            <div className="w-1/2 flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">Shareholders</p>
                <p className="text-xl font-bold text-blue-900">28</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">Priced Rounds</p>
                <p className="text-xl font-bold text-blue-900">1</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">Allocated Shares</p>
                <p className="text-xl font-bold text-blue-900">19,658,715</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-500">Issue and Outstanding</p>
                <p className="text-xl font-bold text-blue-900">18,223,715</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
