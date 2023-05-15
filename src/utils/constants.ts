import DashboardIcon from "../assets/menuIcons/home.svg";
import SearchIcon from "../assets/menuIcons/search.svg";
import ManagementIcon from "../assets/menuIcons/briefcase.svg";
import PublicationIcon from "../assets/menuIcons/file.svg";
import RankingIcon from "../assets/menuIcons/trending-up.svg";
import AnalysisIcon from "../assets/menuIcons/percent.svg";
import DataExportIcon from "../assets/menuIcons/cloud-download.svg";
import { sidebarMenuListType } from "./constantsTypes.ts";

export const appBackgroundColor = "#F5F5F5";
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
