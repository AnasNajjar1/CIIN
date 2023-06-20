import DashboardIcon from "../assets/menuIcons/home.svg";
import SearchIcon from "../assets/menuIcons/search.svg";
import ManagementIcon from "../assets/menuIcons/briefcase.svg";
import PublicationIcon from "../assets/menuIcons/file.svg";
import RankingIcon from "../assets/menuIcons/trending-up.svg";
import AnalysisIcon from "../assets/menuIcons/percent.svg";
import DataExportIcon from "../assets/menuIcons/cloud-download.svg";
import { sidebarMenuListType } from "./constantsTypes.ts";

export const appBackgroundColor = "#F5F5F5";
export const ROUTES = {
  DASHBOARD: "dashboard",
  USER: "user",
  USERPROFILE: "user-profile",
  CONTACTS: "contacts",
  FAQ: "faq",
  COMPANY: "company",
  UPDATECOMPANY: "company/update",
};
export const QueryConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
};

export const apiURI = import.meta.env.VITE_API_URI || `http://localhost:8000/`;
export const sidebarMenuList: sidebarMenuListType[] = [
  {
    icon: DashboardIcon,
    title: "Dashboard",
    link: "",
  },
  {
    icon: SearchIcon,
    title: "Advanced search",
    link: "",
  },
  {
    icon: ManagementIcon,
    title: "Management",
    link: "",
  },
  {
    icon: PublicationIcon,
    title: "Publications",
    link: "",
  },
  {
    icon: RankingIcon,
    title: "Rankings",
    link: "",
  },
  {
    icon: AnalysisIcon,
    title: "Analysis",
    link: "",
  },
  {
    icon: DataExportIcon,
    title: "Data export",
    link: "",
  },
];
export const pieColors = [
  "#042B51",
  "#82A8C1",
  "#9ACBFC",
  "#3B87D2",
  "#8382C1",
  "#C18295",
  "#82C1A7",
  "#B8C182",
  "#C1A082",
  "#C9CAD0",
  "#DF8620",
  "#E41B23",
  "#66666F",
];
