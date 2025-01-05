import React from "react";
import { IoChevronDownSharp } from "react-icons/io5";

const SharesInfoSection: React.FC = () => {
  const sharesData = [
    {
      title: "COMMON STOCK",
      parValue: "$0.0001",
      authorized: 25000,
      allocated: 17942833,
      issued: 16442833,
    },
    {
      title: "SEED PREFERRED (PSA)",
      parValue: "$0.0001",
      authorized: 2200000,
      allocated: 1715828,
      issued: 16442833,
    },
    {
      title: "2020 EQUITY INCENTIVE PLAN",
      parValue: "$0.0000001",
      authorized: 25000,
      allocated: 17942833,
      issued: 16442833,
    },
    {
      title: "WARRANT SEED",
      parValue: "$0.0001",
      authorized: 1500000,
      allocated: 25000,
      issued: 25000,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {sharesData.map((share, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md p-5 border border-gray-200"
        >
          <h3 className=" flex justify-between text-lg font-medium text-gray-800">
            {share.title} <IoChevronDownSharp />
          </h3>
          <p className="text-sm text-gray-500 my-5">
            Par Value <br />{" "}
            <span className="text-xl font-medium text-blue-800">
              {share.parValue}
            </span>
          </p>
          <div className="flex justify-between text-sm text-gray-600">
            <div>
              <p>Authorized</p>
              <p className="text-base font-medium text-blue-800">
                {share.authorized.toLocaleString()}
              </p>
            </div>
            <div>
              <p>Allocated</p>
              <p className="text-base font-medium text-blue-800">
                {share.allocated.toLocaleString()}
              </p>
            </div>
            <div>
              <p>Issued</p>
              <p className="text-base font-medium text-blue-800">{share.issued.toLocaleString()}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SharesInfoSection;
