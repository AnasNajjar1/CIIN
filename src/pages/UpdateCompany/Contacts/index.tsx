import Table, { Column } from "../../../components/Shared/Table";
import { Flex, Icon, IconButton, VStack } from "@chakra-ui/react";
import Accordion from "../../../components/Shared/Accodion";
import CardIcon from "../../../components/Shared/CardIcon";
import { AddCircle, EditPencil, Trash, User } from "iconoir-react";
import Button from "../../../components/Shared/Button";
import GlobalModal from "../../../components/Shared/GlobalModal";
import { useMemo, useState } from "react";
import ContactForm from "./contactForm";
export interface Contact {
  firstName: string;
  lastName: string;
  type: string;
  title: string;
  jobFunction: string[];
  email: string;
  phone: string;
  ext: string;
  publish: boolean;
}
const initialValueContact = {
  firstName: "",
  lastName: "",
  type: "",
  title: "",
  jobFunction: [],
  email: "",
  phone: "",
  publish: false,
  ext: "",
};

const firstTableData = {
  data: [
    {
      firstName: "Jeff Finley",
      lastName: "Finley2",
      type: "Consultant",
      title:
        "HR Leader, Canada & Latin America, Total Compensation Resource Centre",
      jobFunction: [
        "Management - DB",
        "Management - Benefits",
        "Consultant - DC/RRSP",
      ],
      email: "JFinley@mmm.com",
      phone: "(519) 451-2500",
      publish: true,
      ext: "123",
    },
    {
      firstName: "Jeff Finley2",
      lastName: "Finley3",
      type: "Consultant",
      title:
        "HR Leader, Canada & Latin America, Total Compensation Resource Centre",
      jobFunction: [
        "Management - DB",
        "Management - Benefits",
        "Consultant - DC/RRSP",
      ],
      email: "JFinley@mmm.com",
      phone: "(519) 451-2500",
      publish: false,
      ext: "123",
    },
  ],
} as { data: Contact[] };
interface HeaderModalProps {
  type: "update" | "add";
}
const HeaderModal = ({ type }: HeaderModalProps) => {
  return <p>{type === "update" ? "Update Contact" : "Add Contact"}</p>;
};
const Contacts = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState<"update" | "add">("add");
  const [selectedContact, setSelectedContact] =
    useState<Contact>(initialValueContact);
  const columns = useMemo(
    () => [
      {
        label: "Name",
        key: "name",
        width: "22%",
        Cell: ({ row }: { row: Contact }) => {
          return (
            <Flex align="center" gap="12px">
              <CardIcon icon={User} />
              <span>
                {row.firstName} {row.lastName}
              </span>
            </Flex>
          );
        },
      },
      {
        label: "Title",
        key: "title",
        width: "22%",
      },
      {
        label: "Job Function",
        key: "jobFunction",
        Cell: ({ row }: { row: Contact }) => {
          return <p>{row.jobFunction.join(", ")}</p>;
        },
        width: "15%",
      },
      {
        label: "Email",
        key: "email",
        width: "17%",
      },
      {
        label: "Phone",
        key: "phone",
        width: "13%",
      },
      {
        label: " ",
        key: "action",
        width: "11%",
        Cell: ({ row }: { row: Contact }) => {
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
                  setSelectedContact(row);
                  setOpenModal(true);
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
    [setModalType, setOpenModal, setSelectedContact],
  );
  return (
    <>
      <GlobalModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        modalHeader={<HeaderModal type={modalType} />}
      >
        <ContactForm close={() => setOpenModal(false)} data={selectedContact} />
      </GlobalModal>
      <VStack spacing="26px" w="100%">
        <Button
          variant={"outline"}
          size="sm"
          rightIcon={<Icon mt="3px" as={AddCircle} />}
          onClick={() => {
            setModalType("add");
            setSelectedContact(initialValueContact);
            setOpenModal(true);
          }}
        >
          Add a Contact
        </Button>

        <Accordion title="Primary">
          <Table columns={columns} data={firstTableData.data} />
        </Accordion>
        <Accordion title="Secondary">
          <Table columns={columns} data={firstTableData.data} />
        </Accordion>
        <Accordion title="Board member">
          <Table columns={columns} data={firstTableData.data} />
        </Accordion>
        <Accordion title="Consultant">
          <Table columns={columns} data={firstTableData.data} />
        </Accordion>
      </VStack>
    </>
  );
};

export default Contacts;
