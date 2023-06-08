import LatestUpdate from "./latestUpdate";
import { Flex, Text } from "@chakra-ui/layout";
import Button from "../../components/Shared/Button";
import { Icon } from "@chakra-ui/icon";
import { EyeEmpty } from "iconoir-react";
import { VStack } from "@chakra-ui/react";
import Table, { Column } from "../../components/Shared/Table";
import Accordion from "../../components/Shared/Accodion";
interface Associate {
  company: string;
  planType: string;
  year: string;
  value: string;
}
const firstTableData = {
  columns: [
    {
      label: "Company",
      key: "company",
      width: "47%",
    },
    {
      label: "Plan type",
      key: "planType",
      width: "22%",
    },
    {
      label: "Year",
      key: "year",
      width: "20%",
    },
    {
      label: "Value ($mil)",
      key: "value",
      width: "18%",
    },
  ],
  data: [
    {
      company: "BlackRock Asset Management Canada Limited",
      planType: "Defined Benefit",
      year: "N/A",
      value: "$77",
    },
    {
      company: "Baillie Gifford Overseas Limited",
      planType: "Defined Benefit",
      year: "2017",
      value: "$86.90",
    },
  ],
} as { columns: Column<Associate>[]; data: Associate[] };
const Associates = () => {
  return (
    <>
      <LatestUpdate />
      <Flex justify="space-between" align="center" mb="18px">
        <Text textStyle="h4"> Investment Managers</Text>
        <Button
          size="sm"
          w="107px"
          variant="outline"
          leftIcon={<Icon as={EyeEmpty} />}
        >
          View all
        </Button>
      </Flex>
      <VStack spacing="23px" w="100%">
        <Accordion title="Global Equity">
          <Table columns={firstTableData.columns} data={firstTableData.data} />
        </Accordion>
        <Accordion title="Canadian Bonds">
          <Table columns={firstTableData.columns} data={firstTableData.data} />
        </Accordion>
        <Accordion title="Private Equity">
          <Table columns={firstTableData.columns} data={firstTableData.data} />
        </Accordion>
        <Accordion title="Fixed Income">
          <Table columns={firstTableData.columns} data={firstTableData.data} />
        </Accordion>
        <Accordion title="Hedge Funds">
          <Table columns={firstTableData.columns} data={firstTableData.data} />
        </Accordion>
        <Accordion title="Alternative">
          <Table columns={firstTableData.columns} data={firstTableData.data} />
        </Accordion>
        <Accordion title="Private Debt">
          <Table columns={firstTableData.columns} data={firstTableData.data} />
        </Accordion>
        <Accordion title="Short-term Bond & Mortgage">
          <Table columns={firstTableData.columns} data={firstTableData.data} />
        </Accordion>
      </VStack>
    </>
  );
};

export default Associates;
