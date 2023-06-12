import { Star, Download, Mail, EditPencil } from "iconoir-react";
import Button from "../../components/Shared/Button";
import { Box, Card, CardBody, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import Link from "../../components/Shared/Link";
import DashboardCard from "../../components/DashboardCard";
import EmailIcon from "../../icons/emailIcon";
import Tabs from "../../components/Shared/Tabs";
import Contacts from "./contacts";
import Overview from "./overview";
import Assets from "./assets";
import Associates from "./associates";

const Company = () => {
  return (
    <Box p={{ base: "85px 0 0 0", md: "176px 190px 50px 50px" }}>
      <Stack direction={{ base: "column", md: "row" }} spacing="24px" mb="27px">
        <Button
          variant="outline"
          size="sm"
          leftIcon={<Icon as={Star} />}
          onClick={() => {
            console.log("clicked");
          }}
        >
          Add to favourites
        </Button>
        <Button
          variant="outline"
          size="sm"
          leftIcon={<Icon as={Download} />}
          onClick={() => {
            console.log("clicked");
          }}
        >
          Download a pdf
        </Button>
        <Button
          variant="outline"
          size="sm"
          leftIcon={<Icon as={Mail} />}
          onClick={() => {
            console.log("clicked");
          }}
        >
          Email this page
        </Button>
      </Stack>
      <Card mb="33px">
        <CardBody
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Text textStyle={{ base: "base", md: "h3" }} mb="16px">
              3M Canada Company
            </Text>
            <Link to="www.3m.com">www.3m.com</Link>
          </Box>
          <Button size="sm" leftIcon={<Icon as={EditPencil} />}>
            Edit company
          </Button>
        </CardBody>
      </Card>
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
