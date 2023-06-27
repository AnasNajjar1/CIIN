import { Flex, Icon, IconButton, VStack } from "@chakra-ui/react";
import { AddCircle, EditPencil, Trash } from "iconoir-react";
import { useMemo, useState } from "react";
import GlobalModal from "../../../../components/Shared/GlobalModal";
import MoneyManagerForm from "./moneyManagerForm";
import Button from "../../../../components/Shared/Button";
import Accordion from "../../../../components/Shared/Accodion";
import Table from "../../../../components/Shared/Table";
import StandardCompanyForm from "./standardCompanyForm";
export interface StandardCompany {
  id: string;
  company: string;
}
export interface MoneyManager extends StandardCompany {
  speciality: string;
  value: string;
}
const initialValueMoneyManager = {
  id: "",
  company: "",
  speciality: "",
  value: "",
};
const initialValueStandardCompany = {
  id: "",
  company: "",
};

const tableMoneyManager = [
  {
    id: "1",
    company: "Company1",
    speciality: "Specialties",
    value: "1000",
  },
  {
    id: "2",
    company: "Company2",
    speciality: "Canadian Bonds",
    value: "1000",
  },
];
const tableStandardCompany = [
  {
    id: "1",
    company: "Company1",
  },
  {
    id: "2",
    company: "Company2",
  },
];
interface HeaderModalProps {
  type: "update" | "add";
  suffixLabel?: string;
}

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
const HeaderModal = ({ type, suffixLabel }: HeaderModalProps) => {
  return (
    <p>{type === "update" ? `Update ${suffixLabel}` : `Add ${suffixLabel}`}</p>
  );
};
const Associates = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState<"update" | "add">("add");
  const [suffixLabel, setSuffixLabel] = useState("");
  const [selectedCompany, setSelectedCompany] = useState<StandardCompany>(
    initialValueMoneyManager,
  );
  const columnsMoneyManager = useMemo(
    () => [
      {
        label: "Company",
        key: "company",
        width: "22%",
      },
    
      {
        label: "Specialty/Mandate",
        key: "speciality",
        Cell: ({ row }: { row: MoneyManager }) => {
          return (
            <p>
              {specialityList.find((x) => x.value === row.speciality)?.label ||
                ""}
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
        Cell: ({ row }: { row: MoneyManager }) => {
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
                  setModalType("update");
                  setSelectedCompany(row);
                  setOpenModal(true);
                  setSuffixLabel("Company Money Manager");
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
              >
                <Icon strokeWidth="3" as={Trash} />
              </IconButton>
            </Flex>
          );
        },
      },
    ],
    [setModalType, setOpenModal, setSelectedCompany, setSuffixLabel],
  );

  const columnsStandardCompany = useMemo(
    () => [
      {
        label: "Company",
        key: "company",
        width: "22%",
      },
   
      {
        label: " ",
        key: "action",
        width: "11%",
        Cell: ({ row }: { row: StandardCompany }) => {
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
                  setModalType("update");
                  setSelectedCompany(row);
                  setOpenModal(true);
                  setSuffixLabel(` ${row.company}`);
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
              >
                <Icon strokeWidth="3" as={Trash} />
              </IconButton>
            </Flex>
          );
        },
      },
    ],
    [setModalType, setOpenModal, setSelectedCompany, setSuffixLabel],
  );
  return (
    <>
      <GlobalModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        modalHeader={<HeaderModal type={modalType} suffixLabel={suffixLabel} />}
      >
        {"speciality" in selectedCompany ? (
          <MoneyManagerForm
            close={() => setOpenModal(false)}
            data={selectedCompany}
          />
        ) : (
          <StandardCompanyForm
            close={() => setOpenModal(false)}
            data={selectedCompany}
          />
        )}
      </GlobalModal>
      <VStack spacing="26px" w="100%">
        <Accordion title="Money Manager">
          <Table columns={columnsMoneyManager} data={tableMoneyManager} />
          <Button
            variant={"outline"}
            rightIcon={<Icon mt="3px" as={AddCircle} />}
            size="sm"
            my="16px"
            float="right"
            onClick={() => {
              setModalType("add");
              setSelectedCompany(initialValueMoneyManager);
              setSuffixLabel(" Company Money Manager");
              setOpenModal(true);
            }}
          >
            Add New
          </Button>
        </Accordion>
        <Accordion title="Investment Consultants">
          <Table columns={columnsStandardCompany} data={tableStandardCompany} />
          <Button
            variant={"outline"}
            rightIcon={<Icon mt="3px" as={AddCircle} />}
            size="sm"
            my="16px"
            float="right"
            onClick={() => {
              setModalType("add");
              setSelectedCompany(initialValueStandardCompany);
              setSuffixLabel(" Company Investment Consultants");
              setOpenModal(true);
            }}
          >
            Add New
          </Button>
        </Accordion>
        <Accordion title="Custodian/Trustees">
          <Table columns={columnsStandardCompany} data={tableStandardCompany} />
          <Button
            variant={"outline"}
            rightIcon={<Icon mt="3px" as={AddCircle} />}
            size="sm"
            my="16px"
            float="right"
            onClick={() => {
              setModalType("add");
              setSelectedCompany(initialValueStandardCompany);
              setSuffixLabel(" Company Custodian/Trustees");
              setOpenModal(true);
            }}
          >
            Add New
          </Button>
        </Accordion>
        <Accordion title="Actuaries">
          <Table columns={columnsStandardCompany} data={tableStandardCompany} />
          <Button
            variant={"outline"}
            rightIcon={<Icon mt="3px" as={AddCircle} />}
            size="sm"
            my="16px"
            float="right"
            onClick={() => {
              setModalType("add");
              setSelectedCompany(initialValueStandardCompany);
              setSuffixLabel(" Company Actuaries");
              setOpenModal(true);
            }}
          >
            Add New
          </Button>
        </Accordion>
        <Accordion title="Performance Measurers">
          <Table columns={columnsStandardCompany} data={tableStandardCompany} />
          <Button
            variant={"outline"}
            rightIcon={<Icon mt="3px" as={AddCircle} />}
            size="sm"
            my="16px"
            float="right"
            onClick={() => {
              setModalType("add");
              setSelectedCompany(initialValueStandardCompany);
              setSuffixLabel(" Company Performance Measurers");
              setOpenModal(true);
            }}
          >
            Add New
          </Button>
        </Accordion>
        <Accordion title="Record Keepers/Administrators">
          <Table columns={columnsStandardCompany} data={tableStandardCompany} />
          <Button
            variant={"outline"}
            rightIcon={<Icon mt="3px" as={AddCircle} />}
            size="sm"
            my="16px"
            float="right"
            onClick={() => {
              setModalType("add");
              setSelectedCompany(initialValueStandardCompany);
              setSuffixLabel(" Company Record Keepers/Administrators");
              setOpenModal(true);
            }}
          >
            Add New
          </Button>
        </Accordion>
      </VStack>
    </>
  );
};

export default Associates;
