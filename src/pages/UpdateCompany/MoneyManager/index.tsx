import AssetClasses from "./AssetClasses";
import Clients from "./Clients";
import Offices from "./Offices";
import Mandates from "./Mandates";
import Administrative from "./Administrative";

export const tabsMoneyManager = [
  {
    title: "Offices",
    component: <Offices />,
  },
  {
    title: "Clients",
    component: <Clients />,
  },
  {
    title: "Asset Classes",
    component: <AssetClasses />,
  },
  {
    title: "Mandates",
    component: <Mandates />,
  },
  {
    title: "Administrative",
    component: <Administrative />,
  },
];
