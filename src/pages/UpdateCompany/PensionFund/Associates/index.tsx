import { Flex, Icon, IconButton, VStack } from "@chakra-ui/react";
import { AddCircle, EditPencil, Trash } from "iconoir-react";
import { useMemo, useState } from "react";
import GlobalModal from "../../../../components/Shared/GlobalModal";
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

interface HeaderModalProps {
  formType: "update" | "add";
  suffixLabel: string;
}
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
const HeaderModal = ({ formType, suffixLabel }: HeaderModalProps) => {
  return (
    <p>
      {formType === "update" ? `Update ${suffixLabel}` : `Add ${suffixLabel}`}
    </p>
  );
};
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
const Associates = () => {
  const { data: associates } = useGetAssociates();
  const { mutate: deleteAssociate } = useDeleteAssociate();
  const queryClient = useQueryClient();
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState<"update" | "add">("add");
  const [suffixLabel, setSuffixLabel] = useState("");
  const [selectedCompany, setSelectedCompany] = useState<Associate>(
    {} as Associate,
  );
  const columnsMoneyManager = useMemo(
    () => [
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
        Cell: ({ row }: { row: Associate }) => {
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
                  setSuffixLabel(` ${row?.name || ""}`);
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
                  deleteAssociate(row.id, {
                    onSuccess: async () => {
                      queryClient.invalidateQueries(
                        ServerStateCompanyAssociatesEnum.CompanyAssociates,
                      );
                    },
                  });
                }}
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
        Cell: ({ row }: { row: Associate }) => {
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
                  setSuffixLabel(` ${row.name}`);
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
                  deleteAssociate(row.id, {
                    onSuccess: async () => {
                      queryClient.invalidateQueries(
                        ServerStateCompanyAssociatesEnum.CompanyAssociates,
                      );
                    },
                  });
                }}
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
        modalHeader={
          <HeaderModal formType={modalType} suffixLabel={suffixLabel} />
        }
      >
        <AssociateForm
          close={() => setOpenModal(false)}
          data={selectedCompany}
          type={modalType}
        />
      </GlobalModal>
      <VStack spacing="26px" w="100%">
        <Accordion title="Money Manager">
          <Table
            columns={columnsMoneyManager}
            data={
              associates?.filter((associate) => associate.type === "m") || []
            }
          />
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
          <Table
            columns={columnsStandardCompany}
            data={
              associates?.filter((associate) => associate.type === "i") || []
            }
          />
          <Button
            variant={"outline"}
            rightIcon={<Icon mt="3px" as={AddCircle} />}
            size="sm"
            my="16px"
            float="right"
            onClick={() => {
              setModalType("add");
              setSelectedCompany({ ...initialValue, type: "i" });
              setSuffixLabel(" Company Investment Consultants");
              setOpenModal(true);
            }}
          >
            Add New
          </Button>
        </Accordion>
        <Accordion title="Custodian/Trustees">
          <Table
            columns={columnsStandardCompany}
            data={
              associates?.filter((associate) => associate.type === "c") || []
            }
          />
          <Button
            variant={"outline"}
            rightIcon={<Icon mt="3px" as={AddCircle} />}
            size="sm"
            my="16px"
            float="right"
            onClick={() => {
              setModalType("add");
              setSelectedCompany({ ...initialValue, type: "c" });
              setSuffixLabel(" Company Custodian/Trustees");
              setOpenModal(true);
            }}
          >
            Add New
          </Button>
        </Accordion>
        <Accordion title="Actuaries">
          <Table
            columns={columnsStandardCompany}
            data={
              associates?.filter((associate) => associate.type === "a") || []
            }
          />
          <Button
            variant={"outline"}
            rightIcon={<Icon mt="3px" as={AddCircle} />}
            size="sm"
            my="16px"
            float="right"
            onClick={() => {
              setModalType("add");
              setSelectedCompany({ ...initialValue, type: "a" });
              setSuffixLabel(" Company Actuaries");
              setOpenModal(true);
            }}
          >
            Add New
          </Button>
        </Accordion>
        <Accordion title="Performance Measurers">
          <Table
            columns={columnsStandardCompany}
            data={
              associates?.filter((associate) => associate.type === "p") || []
            }
          />
          <Button
            variant={"outline"}
            rightIcon={<Icon mt="3px" as={AddCircle} />}
            size="sm"
            my="16px"
            float="right"
            onClick={() => {
              setModalType("add");
              setSelectedCompany({ ...initialValue, type: "p" });
              setSuffixLabel(" Company Performance Measurers");
              setOpenModal(true);
            }}
          >
            Add New
          </Button>
        </Accordion>
        <Accordion title="Record Keepers/Administrators">
          <Table
            columns={columnsStandardCompany}
            data={
              associates?.filter((associate) => associate.type === "r") || []
            }
          />
          <Button
            variant={"outline"}
            rightIcon={<Icon mt="3px" as={AddCircle} />}
            size="sm"
            my="16px"
            float="right"
            onClick={() => {
              setModalType("add");
              setSelectedCompany({ ...initialValue, type: "r" });
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
