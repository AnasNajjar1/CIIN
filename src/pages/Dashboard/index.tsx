import { Box } from "@chakra-ui/react";
import CiinLogo from "../../assets/ciin-logo.png";

export const Dashboard = () => {
  return (
    <Box p="150px">
      <img src={CiinLogo} className="logo" alt="Ciin logo" />
    </Box>
  );
};

export default Dashboard;