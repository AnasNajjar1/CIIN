import { Flex, Icon, IconButton, Text, VStack } from "@chakra-ui/react";
import { AddCircle, EditPencil, Trash } from "iconoir-react";
import { useState, useContext } from "react";
import AssociateForm from "./associateForm";
import Button from "../../../../components/Shared/Button";
import Accordion from "../../../../components/Shared/Accodion";
import Table from "../../../../components/Shared/Table";
import { Associate } from "../../../../services/apiTypes/types";
import {
  ServerStateCompanyAssociatesEnum,
  useDeleteAssociate,
  useGetAssociates,
} from "../../../../hooks/api/company/associates";
import { useQueryClient } from "react-query";
import AlertContext from "../../../../store/context/alertContext";

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

const updateAssociateForm = (row: Associate, close: () => void) => (
  <AssociateForm data={row} close={close} type="update" />
);
const initialValue = {
  company:
    "http://localhost:8000/companies/d3f58dda-3a6e-400e-88d0-e53072eaee65/",
  name: "",
  plan_type: "",
  associate_specialty: "Other",
};
const initialValueMoneyManager = {
  ...initialValue,
  associate_specialty: "",
  value: "",
  type: "m",
};
const standardCompanies = ["m", "c", "p", "r", "i", "a"];
const titles = {
  m: "Money Manager",
  i: "Investment Consultants",
  c: "Custodian/Trustees",
  a: "Actuaries",
  p: "Performance Measurers",
  r: "Record Keepers/Administrators",
};
const Associates = () => {
  const { data: associates } = useGetAssociates();
  const alertContext = useContext(AlertContext);
  const queryClient = useQueryClient();
  const [showAddAssociate, setShowAddAssociate] = useState({
    m: false,
    c: false,
    p: false,
    r: false,
    i: false,
    a: false,
  });
  const { mutate: deleteAssociate } = useDeleteAssociate({
    onSuccess: async () => {
      await queryClient.invalidateQueries(
        ServerStateCompanyAssociatesEnum.CompanyAssociates,
      );
      alertContext.show({
        status: "success",
      });
    },
    onSettled: (_, error, variables) => {
      if (error) {
        alertContext.show({
          status: "error",
          message: error.message,
          handleRetry: () => deleteAssociate(variables),
        });
      }
    },
  });

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

    {
      label: " ",
      key: "action",
      width: "11%",
      Cell: ({ row, setOpen }: { row: Associate }) => {
        return (
          <Flex align="center" justify="center" gap="16px">
            <IconButton
              bg="white"
              color="gray.200"
              _hover={{ bg: "white" }}
              minWidth="20px"
              height="20px"
              fontSize="20px"
              onClick={() => {
                setOpen((open) => ({ ...open, [row.id]: !open[row.id] }));
              }}
            >
              <Icon as={EditPencil} strokeWidth="3" />
            </IconButton>
            <IconButton
              bg="white"
              color="gray.200"
              _hover={{ bg: "white" }}
              minWidth="20px"
              height="20px"
              fontSize="20px"
              onClick={() => {
                deleteAssociate(row.id);
              }}
            >
              <Icon strokeWidth="3" as={Trash} />
            </IconButton>
          </Flex>
        );
      },
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
    {
      label: " ",
      key: "action",
      width: "11%",
      Cell: ({ row, setOpen }: { row: Associate }) => {
        return (
          <Flex align="center" justify="center" gap="16px">
            <IconButton
              bg="white"
              color="gray.200"
              _hover={{ bg: "white" }}
              minWidth="20px"
              height="20px"
              fontSize="20px"
              onClick={() => {
                setOpen((open) => ({ ...open, [row.id]: !open[row.id] }));
              }}
            >
              <Icon as={EditPencil} strokeWidth="3" />
            </IconButton>
            <IconButton
              bg="white"
              color="gray.200"
              _hover={{ bg: "white" }}
              minWidth="20px"
              height="20px"
              fontSize="20px"
              onClick={() => {
                deleteAssociate(row.id);
              }}
            >
              <Icon strokeWidth="3" as={Trash} />
            </IconButton>
          </Flex>
        );
      },
    },
  ];
  return (
    <>
      <VStack spacing="26px" w="100%">
        {standardCompanies.map((company) => (
          <Accordion key={company} title={titles[company]}>
            <Table
              columns={
                company === "m" ? columnsMoneyManager : columnsStandardCompany
              }
              data={
                associates?.filter((associate) => associate.type === company) ||
                []
              }
              enableExpanding
              renderDetailPanel={updateAssociateForm}
            />
            {showAddAssociate[company] ? (
              <>
                <Text variant="h4" textAlign="center" my="24px">
                  Add New Associate
                </Text>
                <AssociateForm
                  data={
                    company === "m"
                      ? initialValueMoneyManager
                      : { ...initialValue, type: company }
                  }
                  type="add"
                  close={() =>
                    setShowAddAssociate((showAddAssociate) => ({
                      ...showAddAssociate,
                      [company]: false,
                    }))
                  }
                />
              </>
            ) : (
              <Button
                variant={"outline"}
                rightIcon={<Icon mt="3px" as={AddCircle} />}
                size="sm"
                my="16px"
                float="right"
                onClick={() => {
                  setShowAddAssociate((showAddAssociate) => ({
                    ...showAddAssociate,
                    [company]: true,
                  }));
                }}
              >
                Add New
              </Button>
            )}
          </Accordion>
        ))}
      </VStack>
    </>
  );
};

export default Associates;
