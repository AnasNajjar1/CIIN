import LatestUpdate from "./LatestUpdate";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
export const data = {
  datasets: [
    {
      data: [1562, 51.86, 13.0, 3.36],
      backgroundColor: ["#042B51", "#82A8C1", "#9ACBFC", "#3B87D2"],
    },
  ],
};
export const data1 = {
  datasets: [
    {
      data: [940, 1207, 368],
      backgroundColor: ["#042B51", "#82A8C1", "#9ACBFC", "#3B87D2"],
    },
  ],
};
export const data2 = {
  datasets: [
    {
      data: [100, 0, 0],
      backgroundColor: ["#042B51", "#82A8C1", "#9ACBFC", "#3B87D2"],
    },
  ],
};
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};
const itemsLegend = [
  {
    label: "Defined Benefit",
    color: "#042B51",
    value: "95.81% ($1562)",
  },
  {
    label: "Defined Contribution",
    color: "#82A8C1",
    value: "3.36% ($51.86)",
  },
  {
    label: "Group RRSP",
    color: "#9ACBFC",
    value: "13.0% ($13)",
  },
  {
    label: "Other (OAC)",
    color: "#3B87D2",
    value: "3.36% ($3.36)",
  },
];
const itemsLegend1 = [
  {
    label: "Active",
    color: "#042B51",
    value: "38.38% (940)",
  },
  {
    label: "Retired",
    color: "#82A8C1",
    value: "61.62% (1207)",
  },
  {
    label: "Deferred",
    color: "#9ACBFC",
    value: "38.38% (368)",
  },
];
const itemsLegend2 = [
  {
    label: "Active",
    color: "#042B51",
    value: "100% (100)",
  },
  {
    label: "Retired",
    color: "#82A8C1",
    value: "0% (0)",
  },
  {
    label: "Deferred",
    color: "#9ACBFC",
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
interface ItemLegendProps {
  label: string;
  color: string;
  value: React.ReactNode;
}
const ItemLegend = ({ label, color, value }: ItemLegendProps) => {
  return (
    <Flex justify="space-between" align="center" width="100%">
      <Flex gap="4px" align="center">
        <Box width="16px" height="16px" borderRadius="50%" bg={color} />
        <Text textStyle="base" fontWeight="500">
          {label}
        </Text>
      </Flex>
      <Text textStyle="base" fontWeight="500">
        {value}
      </Text>
    </Flex>
  );
};
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
          <CardBody mb="30px">
            <Pie data={data} width="141" height="141" options={options} />
          </CardBody>
          <CardFooter>
            <VStack spacing="16px" width="60%" mx={"auto"}>
              {itemsLegend.map((item) => (
                <ItemLegend key={item.label} {...item} />
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
            <Box width="177px" height="177px">
              <Pie data={data1} width="177" height="177" options={options} />
            </Box>
            <VStack width="300px">
              {itemsLegend1.map((item) => (
                <ItemLegend key={item.label} {...item} />
              ))}
            </VStack>
          </CardBody>
        </Card>
        <Card width="50%">
          <CardHeader textStyle="base">Defined Contribution</CardHeader>
          <CardBody mb="30px" display="flex" alignItems="center" gap="24px">
            <Box width="177px" height="177px">
              <Pie data={data2} width="177" height="177" options={options} />
            </Box>

            <VStack spacing="16px" width="300px">
              {itemsLegend2.map((item) => (
                <ItemLegend key={item.label} {...item} />
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
