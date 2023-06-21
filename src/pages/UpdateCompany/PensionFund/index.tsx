import AssetAllocation from "./AssetAllocation";
import Associates from "./Associates";
import Details from "./Details";
import PlanSummary from "./planSummary";
export const tabsPensionFund = [
  {
    title: "Plan Summary",
    component: <PlanSummary />,
  },
  {
    title: "Associates",
    component: <Associates />,
  },
  {
    title: "Asset Alocation",
    component: <AssetAllocation />,
  },
  {
    title: "Details",
    component: <Details />,
  },
];
