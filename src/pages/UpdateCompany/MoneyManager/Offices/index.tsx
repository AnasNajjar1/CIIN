import Table from "../../../../components/Shared/Table";
import { Flex, Icon, IconButton, VStack } from "@chakra-ui/react";
import Accordion from "../../../../components/Shared/Accodion";
import { AddCircle, EditPencil, Trash } from "iconoir-react";
import Button from "../../../../components/Shared/Button";
import { useMemo } from "react";
import OfficeForm from "./OfficeForm";
export interface Office {
  id: string;
  branch: "P" | "S";
  name: string;
  suite: string;
  address_line_1: string;
  address_line_2: string;
  country: string;
  state: string;
  city: string;
  postal_code: string;
  phone_number_1: string;
  phone_number_2: string;
  fax_1: string;
  fax_2: string;
  company: string;
}
const initialOffice = {
  id: "d3f58dda-3a6e-400e-88d0-e53072eaee65",
  branch: "P",
  name: "abrdn plc",
  suite: "BNY Mellon Bank Center, 1735 Market St., 32nd Fl.",
  address_line_1: "1735 Market St.",
  address_line_2: "32nd Fl.",
  country: "US",
  state: "NY",
  city: "New York",
  postal_code: "10001",
  phone_number_1: "",
  phone_number_2: "",
  fax_1: "",
  fax_2: "",
  company:
    "http://localhost:8000/companies/d3f58dda-3a6e-400e-88d0-e53072eaee65/",
} as Office;
const offices = [
  initialOffice,
  { ...initialOffice, id: "d3f58dda-3a6e-400e-88d0-e53072eaee66" },
  { ...initialOffice, id: "d3f58dda-3a6e-400e-88d0-e53072eaee68" },
  { ...initialOffice, id: "d3f58dda-3a6e-400e-88d0-e53072eaee67", branch: "S" },
];
const Offices = () => {
  const columns = useMemo(
    () => [
      {
        label: "Name",
        key: "name",
        width: "22%",
      },
      {
        label: "City",
        key: "city",
        width: "22%",
      },
      {
        label: "Province/State",
        key: "state",
        width: "15%",
      },
      {
        label: "Postal",
        key: "postal_code",
        width: "17%",
      },
      {
        label: "Country",
        key: "country",
        width: "13%",
      },
      {
        label: " ",
        key: "action",
        width: "11%",
        Cell: ({ row, setOpen }: { row: Office }) => {
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
              >
                <Icon strokeWidth="3" as={Trash} />
              </IconButton>
            </Flex>
          );
        },
      },
    ],
    [],
  );
  return (
    <VStack spacing="26px" w="100%">
      <Button
        variant={"outline"}
        size="sm"
        rightIcon={<Icon mt="3px" as={AddCircle} />}
      >
        Add an Office
      </Button>

      <Accordion title="Primary">
        <Table
          columns={columns}
          data={offices.filter((office) => office.branch === "P") || []}
          enableExpanding
          renderDetailPanel={({
            row,
            close,
          }: {
            row: Office;
            close: () => void;
          }) => <OfficeForm data={row} close={close} type="update" />}
        />
      </Accordion>
      <Accordion title="Secondary">
        <Table
          columns={columns}
          data={offices.filter((office) => office.branch === "S") || []}
          enableExpanding
          renderDetailPanel={({
            row,
            close,
          }: {
            row: Office;
            close: () => void;
          }) => <OfficeForm data={row} close={close} type="update" />}
        />
      </Accordion>
    </VStack>
  );
};

export default Offices;
