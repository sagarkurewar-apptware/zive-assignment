import React, { useState } from "react";
import { Chart } from "react-google-charts";

const ChartSection: React.FC = () => {
  const indexArray = [
    { id: "summary", label: "Summary" },
    { id: "shareholder", label: "Shareholder" },
    { id: "vote", label: "Vote" },
    { id: "type", label: "Type" },
  ];

  const subArray = [
    {
      id: "shares-issued-and-outstanding",
      label: "Shares issued and outstanding",
      data: [
        ["Task", "Hours per Day"],
        ["task1", 8],
        ["task2", 2],
        ["task3", 3],
        ["task4", 14],
        ["task5", 5],
      ],
    },
    {
      id: "fully-diluted-shares",
      label: "fully diluted shares",
      data: [
        ["Task", "Hours per Day"],
        ["task1", 2],
        ["task2", 12],
        ["task3", 1],
        ["task4", 3],
        ["task5", 5],
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(indexArray[0]);
  const [activeSubArrIndex, setActiveSubArrIndex] = useState(subArray[0]);

  const options = {
    title: "",
    pieHole: 0.7, // Adjust the size of the inner hole (higher values = bigger hole)
    pieStartAngle: 0, // Starting angle for the pie chart
    legend: {
      position: "bottom",
      alignment: "center",
    },
    chartArea: {
      width: "100%", // Adjust chart width within the container
      height: "100%", // Adjust chart height within the container
    },
    backgroundColor: "transparent",
    colors: ["#7dafb8", "#8079f2", "#D8A7B1", "#de577b", "#dee058", "#4b4b4b"],
  };

  return (
    <div className="w-full h-full flex flex-col bg-white rounded-md pt-5 px-[0.8rem] pb-[0.8rem]">
      <div className="flex gap-3 mb-4">
        {indexArray.map((ele) => (
          <button
            key={ele.id}
            className={`px-[0.8rem] py-[0.3rem] text-sm font-medium rounded-full transition-colors duration-200 ${
              activeIndex.id === ele.id
                ? "bg-blue-600 text-white"
                : "text-gray-400 border border-gray-300 shadow-sm hover:bg-blue-100 hover:text-blue-800"
            }`}
            onClick={() => setActiveIndex(ele)}
          >
            {ele.label}
          </button>
        ))}
      </div>

      <div className="flex gap-3 mb-[0.8rem]">
        {subArray.map((ele) => (
          <button
            key={ele.id}
            className={`px-[0.7rem] py-[0.6rem] text-sm font-medium ${
              activeSubArrIndex.id === ele.id
                ? "border-b-2 border-blue-600 text-blue-600 font-semibold"
                : "text-gray-400 hover:text-blue-800"
            }`}
            onClick={() => setActiveSubArrIndex(ele)}
          >
            {ele.label}
          </button>
        ))}
      </div>

      <div className="relative mb-[0.5rem]">
        <svg
          className="absolute w-4 h-4 text-gray-400 left-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
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
          className="w-1/4 h-9 pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-offset-blue-200"
        />
      </div>

      <div className="flex-1 rounded-lg bg-gray-100 p-4">
        <Chart
          chartType="PieChart"
          width="100%"
          height="100%"
          data={activeSubArrIndex.data}
          options={options}
        />
      </div>
    </div>
  );
};

export default ChartSection;
