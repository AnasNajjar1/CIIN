import ItemLegendChart from "../../components/itemLegendChart";
import PieChart from "../../components/pieChart";
import LatestUpdate from "./LatestUpdate";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";

const itemsLegend = [
  {
    label: "Defined Benefit",
    value: "95.81% ($1562)",
  },
  {
    label: "Defined Contribution",
    value: "3.36% ($51.86)",
  },
  {
    label: "Group RRSP",
    value: "13.0% ($13)",
  },
  {
    label: "Other (OAC)",
    value: "3.36% ($3.36)",
  },
];
const itemsLegend1 = [
  {
    label: "Active",
    value: "38.38% (940)",
  },
  {
    label: "Retired",
    value: "61.62% (1207)",
  },
  {
    label: "Deferred",
    value: "38.38% (368)",
  },
];
const itemsLegend2 = [
  {
    label: "Active",
    value: "100% (100)",
  },
  {
    label: "Retired",
    value: "0% (0)",
  },
  {
    label: "Deferred",
    value: "0% (0)",
  },
];
const items = [
  {
    label: "Total Pension Assets ($Mil)",
    value: "$1630.25",
  },
  {
    label: "External Management",
    value: "100%",
  },
  {
    label: "Pooled Funds",
    value: "N/A",
  },
  {
    label: "Funding Status",
    value: "More than 120%",
  },
  {
    label: "DB Open to New Hires",
    value: "111% - 120%",
  },
  {
    label: "Liability Driven Investments",
    value: "No - Closed",
  },
  {
    label: "ETP",
    value: "Yes",
  },
  {
    label: "Funding Status",
    value: "More than 120%",
  },
  {
    label: "DB Open to New Hires",
    value: "111% - 120%",
  },
  {
    label: "Liability Driven Investments",
    value: "No - Closed",
  },
];

interface ItemProps {
  label: string;
  value: React.ReactNode;
}
const Item = ({ label, value }: ItemProps) => {
  return (
    <Flex
      justify="space-between"
      align="center"
      width="100%"
      pb="8px"
      borderBottom="1px solid #F1F1F1"
    >
      <Text textStyle="sm" fontWeight="40">
        {label}
      </Text>
      <Text textStyle="sm" fontWeight="40">
        {value}
      </Text>
    </Flex>
  );
};

const Overview = () => {
  return (
    <>
      <LatestUpdate />
      <Text textStyle="h4" mb="24px">
        Plan Highlights
      </Text>
      <Flex gap="24px" mb="46px">
        <Card width="50%">
          <CardBody mb="30px" display="flex" justifyContent="center">
            <PieChart
              data={[1562, 51.86, 13.0, 3.36]}
              width={141}
              height={141}
            />
          </CardBody>
          <CardFooter>
            <VStack spacing="16px" width="60%" mx={"auto"}>
              {itemsLegend.map((item, index) => (
                <ItemLegendChart key={item.label} {...item} index={index} />
              ))}
            </VStack>
          </CardFooter>
        </Card>
        <Card width="50%">
          <CardBody>
            <VStack
              spacing="4px"
              width="100%"
              pl="64px"
              pt="15px"
              sx={{
                "div:last-child": {
                  borderBottom: "none",
                },
              }}
            >
              {items.map((item) => (
                <Item key={item.label} {...item} />
              ))}
            </VStack>
          </CardBody>
        </Card>
      </Flex>
      <Text textStyle="h4" mb="24px">
        Memberships
      </Text>
      <Flex gap="24px" mb="60px">
        <Card width="50%">
          <CardHeader textStyle="base">Defined Benefit</CardHeader>
          <CardBody mb="30px" display="flex" alignItems="center" gap="24px">
            <PieChart data={[940, 1207, 368]} width={177} height={177} />
            <VStack width="300px">
              {itemsLegend1.map((item, index) => (
                <ItemLegendChart key={item.label} {...item} index={index} />
              ))}
            </VStack>
          </CardBody>
        </Card>
        <Card width="50%">
          <CardHeader textStyle="base">Defined Contribution</CardHeader>
          <CardBody mb="30px" display="flex" alignItems="center" gap="24px">
            <PieChart data={[100, 0, 0]} width={177} height={177} />
            <VStack spacing="16px" width="300px">
              {itemsLegend2.map((item, index) => (
                <ItemLegendChart key={item.label} {...item} index={index} />
              ))}
            </VStack>
          </CardBody>
        </Card>
      </Flex>
      <Text textStyle="h4" mb="20px">
        Comments
      </Text>
      <Card>
        <CardBody pr="85px" py="40px">
          <Text textStyle="base" color="#000">
            OAC plan has 41 members, included within the DB member count. DB
            plan is a master trust and includes salaried and hourly employees.
            Only DB data updated to reflect year-end 2021.
          </Text>
        </CardBody>
      </Card>
    </>
  );
};

export default Overview;
