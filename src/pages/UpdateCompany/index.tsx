import DashboardCard from "../../components/Card/DashboardCard";
import Tabs from "../../components/Shared/Tabs";
import BarChartIcon from "../../icons/barChartIcon";
import FirstSectionCompany from "../Company/firstSectionCompany";
import { Box, Flex, Text } from "@chakra-ui/react";
import MainContacts from "./MainContacts";
import Button from "../../components/Shared/Button";
import Alert from "../../components/Shared/Alert";
import OrganizationInfo from "./OrganizationInfo";
import Contacts from "./Contacts";
import { tabsPensionFund } from "./PensionFund";
import { tabsFoundationsEndowment } from "./FoundationsEndowment";
const companyTypes = {
  pensionFund: tabsPensionFund,
  foundationsEndowment: tabsFoundationsEndowment,
};

const UpdateCompany = () => {
  return (
    <Box p={{ base: "85px 0 0 0", md: "176px 190px 50px 50px" }}>
      <FirstSectionCompany />
      <DashboardCard icon={BarChartIcon} title="Last Update">
        <Flex align={"center"} gap="16px">
          <Text textStyle="lg" fontWeight={500}>
            Lastest Update
          </Text>
          <Text textStyle="base">07/06/2022</Text>
        </Flex>
      </DashboardCard>
      <Box position="relative">
        <Alert
          // handleRetry={() => {
          //   console.log("retry");
          // }}
          // message="This is an error message"
          status="success"
          position={"absolute"}
          top="70px"
        />
        <Tabs
          tabs={{ mt: "40px" }}
          items={[
            {
              title: "Main contacts",
              component: <MainContacts />,
            },
            {
              title: "Organization Info",
              component: <OrganizationInfo />,
            },
            {
              title: "Contacts",
              component: <Contacts />,
            },
            ...companyTypes.foundationsEndowment,
          ]}
          tabPanelsProps={{
            pt: "164px",
          }}
        />
      </Box>
      <Button mt="41px" mb="51px" w="156px">
        Save session
      </Button>
    </Box>
  );
};

export default UpdateCompany;
