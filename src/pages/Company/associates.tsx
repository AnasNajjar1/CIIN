import LatestUpdate from "./latestUpdate";
import { Flex, Text } from "@chakra-ui/layout";
import Button from "../../components/Shared/Button";
import { Icon } from "@chakra-ui/icon";
import { EyeEmpty } from "iconoir-react";
import { VStack } from "@chakra-ui/react";
import Table from "../../components/Shared/Table";
import Accordion from "../../components/Shared/Accodion";
import { Associate } from "../../services/apiTypes/types";
import { useGetAssociates } from "../../hooks/api/company/associates";

export const planTypeList = [
  { label: "Defined Benefit", value: "DB" },
  { label: "Defined Contribution", value: "DC" },
  { label: "Hybrid", value: "HY" },
  { label: "Group RRSP", value: "RRSP" },
  { label: "Deferred Profit Sharing Plan", value: "DPSP" },
  { label: "Other", value: "Other" },
];
export const specialityList = [
  { label: "- Select  -", value: "" },
  { label: "Other", value: "Other" },
  { label: "Specialties", value: "Specialties" },
  { label: "Balanced Funds", value: "Balanced Funds" },
  { label: "Canadian Bonds", value: "Canadian Bonds" },
  { label: "Canadian Equity", value: "Canadian Equity" },
  { label: "Cash", value: "Cash" },
  { label: "Commodities", value: "Commodities" },
  {
    label: "EAFE - Europe, Australia & Far East Equity",
    value: "EAFE - Europe, Australia & Far East Equity",
  },
  { label: "Emerging Market Debt", value: "Emerging Market Debt" },
  { label: "Emerging Market Equity", value: "Emerging Market Equity" },
  { label: "ETF", value: "ETF" },
  { label: "Global Bonds", value: "Global Bonds" },
  { label: "Global Equity", value: "Global Equity" },
  {
    label: "Guaranteed Investment Certificates",
    value: "Guaranteed Investment Certificates",
  },
  { label: "Hedge Funds", value: "Hedge Funds" },
  { label: "High Yield Bonds", value: "High Yield Bonds" },
  { label: "Infrastructure", value: "Infrastructure" },
  { label: "International Bonds", value: "International Bonds" },
  { label: "International Equity", value: "International Equity" },
  { label: "Money Market", value: "Money Market" },
  { label: "Mortgages", value: "Mortgages" },
  { label: "Private Debt", value: "Private Debt" },
  { label: "Private Equity", value: "Private Equity" },
  { label: "Real Estate Equity", value: "Real Estate Equity" },
  { label: "Real Return Bonds", value: "Real Return Bonds" },
  { label: "REITS", value: "REITS" },
  { label: "Target Date Fund", value: "Target Date Fund" },
  { label: "Target Date Risk", value: "Target Date Risk" },
  { label: "Target Date/Risk (combo)", value: "Target Date/Risk (combo)" },
  { label: "U.S. Bonds", value: "U.S. Bonds" },
  { label: "U.S. Equity", value: "U.S. Equity" },
];
const columnsMoneyManager = [
  {
    label: "Company",
    key: "name",
    width: "22%",
  },
  {
    label: "Plan Type",
    key: "plan_type",
    width: "22%",
    Cell: ({ row }: { row: Associate }) => {
      return (
        <p>
          {planTypeList.find((x) => x.value === row.plan_type)?.label || ""}
        </p>
      );
    },
  },
  {
    label: "Specialty/Mandate",
    key: "associate_specialty",
    Cell: ({ row }: { row: Associate }) => {
      return (
        <p>
          {specialityList.find((x) => x.value === row.associate_specialty)
            ?.label || ""}
        </p>
      );
    },
    width: "15%",
  },
  {
    label: "Value ($mil)",
    key: "value",
    width: "17%",
  },
];
const columnsStandardCompany = [
  {
    label: "Company",
    key: "name",
    width: "22%",
  },
  {
    label: "Plan Type",
    key: "plan_type",
    width: "22%",
    Cell: ({ row }: { row: Associate }) => {
      return (
        <p>
          {planTypeList.find((x) => x.value === row.plan_type)?.label || ""}
        </p>
      );
    },
  },
];
const Associates = () => {
  const { data: associates } = useGetAssociates();
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
      {/* <VStack spacing="23px" w="100%">
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
      </VStack> */}
      <VStack spacing="26px" w="100%">
        <Accordion title="Money Manager">
          <Table
            columns={columnsMoneyManager}
            data={
              associates?.filter((associate) => associate.type === "m") || []
            }
          />
        </Accordion>
        <Accordion title="Investment Consultants">
          <Table
            columns={columnsStandardCompany}
            data={
              associates?.filter((associate) => associate.type === "i") || []
            }
          />
        </Accordion>
        <Accordion title="Custodian/Trustees">
          <Table
            columns={columnsStandardCompany}
            data={
              associates?.filter((associate) => associate.type === "c") || []
            }
          />
        </Accordion>
        <Accordion title="Actuaries">
          <Table
            columns={columnsStandardCompany}
            data={
              associates?.filter((associate) => associate.type === "a") || []
            }
          />
        </Accordion>
        <Accordion title="Performance Measurers">
          <Table
            columns={columnsStandardCompany}
            data={
              associates?.filter((associate) => associate.type === "p") || []
            }
          />
        </Accordion>
        <Accordion title="Record Keepers/Administrators">
          <Table
            columns={columnsStandardCompany}
            data={
              associates?.filter((associate) => associate.type === "r") || []
            }
          />
        </Accordion>
      </VStack>
    </>
  );
};

export default Associates;
