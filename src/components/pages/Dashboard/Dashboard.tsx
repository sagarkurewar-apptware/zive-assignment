import React from "react";
import DashboardLayout from "@layouts/DashboardLayout";
import Tabs from "components/tabs/Tabs";
import ChartSection from "./chartSection/ChartSection";
import SharesInfoSection from "./sharesInfoSection/SharesInfoSection";
import PeopleSection from "./peopleSection/PeopleSection";

const DashboardPage: React.FC = () => {
  const tabs = [
    {
      id: "charts",
      label: "Charts",
      content: <ChartSection />,
    },
    {
      id: "shares-info",
      label: "Shares Info",
      content: <SharesInfoSection />,
    },
    {
      id: "people",
      label: "People",
      content: <PeopleSection />,
    },
    {
      id: "coi",
      label: "COI",
      content: <div>Details about the Certificate of Incorporation (COI).</div>,
    },
    {
      id: "corporate-history",
      label: "Corporate History",
      content: <div>Explore the Corporate History.</div>,
    },
    {
      id: "funding-history",
      label: "Funding History",
      content: <div>Check out the Funding History.</div>,
    },
  ];

  return (
    <DashboardLayout>
      <Tabs tabs={tabs} />
    </DashboardLayout>
  );
};

export default DashboardPage;
