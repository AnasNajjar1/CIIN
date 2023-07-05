import { Box, Flex, Text } from "@chakra-ui/react";
import DashboardCard from "../../components/Card/DashboardCard";
import EmailIcon from "../../icons/emailIcon";
import Tabs from "../../components/Shared/Tabs";
import Contacts from "./contacts";
import Overview from "./overview";
import Assets from "./assets";
import Associates from "./associates";
import FirstSectionCompany from "./firstSectionCompany";

const Company = () => {
  return (
    <Box p={{ base: "85px 0 0 0", md: "20px 190px 50px 50px" }}>
      <FirstSectionCompany />
      <DashboardCard icon={EmailIcon} title="Contacts">
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          gap={{ base: 10, md: 0 }}
        >
          <Box>
            <Text textStyle="base">P.O Box 5757, 300 Tartan Drive</Text>
            <Text textStyle="base">Tel: (519) 451-2500</Text>
          </Box>
          <Box>
            <Text textStyle="base">London, Ontario, Canada, N6A 4T1</Text>
          </Box>
          <Box>
            <Text textStyle="base">Financial As of Date: 12/31/2021</Text>
            <Text textStyle="base">Latest Update: 07/06/2022</Text>
          </Box>
        </Flex>
      </DashboardCard>
      <Tabs
        tabs={{ mt: "40px" }}
        items={[
          {
            title: "Overview",
            component: <Overview />,
          },
          {
            title: "Contacts",
            component: <Contacts />,
          },
          {
            title: "Assets",
            component: <Assets />,
          },
          {
            title: "Associates",
            component: <Associates />,
          },
        ]}
      />
    </Box>
  );
};

export default Company;
