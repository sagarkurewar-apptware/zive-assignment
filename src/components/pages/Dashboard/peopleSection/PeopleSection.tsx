import React, { useState } from "react";

interface Person {
  name: string;
  docs: string;
}

const peopleData = {
  founders: [
    { name: "Frank Dean", docs: "Documents" },
    { name: "Jenny Jones", docs: "Documents" },
    { name: "Michelle Rosenberg", docs: "Documents" },
  ],
  investors: [
    { name: "Investor A", docs: "Documents" },
    { name: "Investor B", docs: "Documents" },
  ],
  board: [
    { name: "Board Member 1", docs: "Documents" },
    { name: "Board Member 2", docs: "Documents" },
  ],
};

const PeopleSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "founders" | "investors" | "board"
  >("founders");

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <div className="flex space-x-4 mb-5">
        {(["founders", "investors", "board"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-[0.8rem] py-[0.3rem] text-sm font-medium rounded-full transition-colors duration-200 ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "text-gray-400 border border-gray-300 shadow-sm hover:bg-blue-100 hover:text-blue-800"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="flex justify-between items-center py-5 border-b border-gray-200">
        <p className="flex-1 text-gray-400 font-medium">Name</p>
        <p className="flex-1 text-gray-400 font-medium">Docs</p>
      </div>

      <div className="space-y-2">
        {peopleData[activeTab].map((person: Person, index: number) => (
          <div
            key={index}
            className="flex justify-between items-center py-3 border-b border-gray-300"
          >
            <p className="flex-1 text-gray-700 font-medium">{person.name}</p>
            <p className="flex-1 text-blue-500 cursor-pointer text-left">
              {person.docs}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleSection;
