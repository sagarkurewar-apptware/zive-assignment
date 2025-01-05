import React, { useState } from "react";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);

  return (
    <div className="w-full h-[85vh]">
      {/* Tab Navigation */}
      <div className="flex bg-white mb-[0.8rem] rounded-md shadow-md">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-10 py-[0.6rem] text-sm font-medium ${
              activeTab.id === tab.id
                ? "border-b-2 border-blue-800 text-blue-800 font-bold"
                : "text-gray-400 hover:text-blue-800"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="h-[90%] bg-white rounded-md pt-5 px-[0.8rem] pb-[0.8rem]">
        {activeTab.content || <div>Select a tab to view content.</div>}
      </div>
    </div>
  );
};

export default Tabs;
