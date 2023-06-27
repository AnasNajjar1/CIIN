import Table, { Column } from "../../../components/Shared/Table";
import { Flex, Icon, IconButton, VStack } from "@chakra-ui/react";
import Accordion from "../../../components/Shared/Accodion";
import CardIcon from "../../../components/Shared/CardIcon";
import { AddCircle, EditPencil, Trash, User } from "iconoir-react";
import Button from "../../../components/Shared/Button";
import GlobalModal from "../../../components/Shared/GlobalModal";
import { useMemo, useState } from "react";
import ContactForm from "./contactForm";
import {
  ServerStateCompanyContactsEnum,
  useDeleteContact,
  useGetContacts,
} from "../../../hooks/api/company/contacts";
import { Contact } from "../../../services/apiTypes/types";
import { useQueryClient } from "react-query";

interface HeaderModalProps {
  type: "update" | "add";
}
const HeaderModal = ({ type }: HeaderModalProps) => {
  return <p>{type === "update" ? "Update Contact" : "Add Contact"}</p>;
};
const initialContact = {
  phone_number: "",
  ext: 0,
  fax: "",
  email: "",
  second_email: "",
  first_name: "",
  last_name: "",
  title: "",
  type: "",
  company:
    "http://localhost:8000/companies/d3f58dda-3a6e-400e-88d0-e53072eaee65/",
  main_contact: false,
  notes: "",
  previous_main_contact: false,
  previous_main_contact_date_left: null,
} as Contact;
const Contacts = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState<"update" | "add">("add");
  const { data: contacts } = useGetContacts();
  const { mutate: deleteContact } = useDeleteContact();
  const [selectedContact, setSelectedContact] =
    useState<Contact>(initialContact);
    const queryClient = useQueryClient();
  const columns = useMemo(
    () => [
      {
        label: "Name",
        key: "first_name",
        width: "22%",
        Cell: ({ row }: { row: Contact }) => {
          return (
            <Flex align="center" gap="12px">
              <CardIcon icon={User} />
              <span>
                {row.first_name} {row.last_name}
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
        key: "title",
        Cell: ({ row }: { row: Contact }) => {
          return <p>{row.title}</p>;
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
        key: "phone_number",
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
                onClick={() => {
                  deleteContact(row.id, {
                    onSuccess: () => {
                      queryClient.invalidateQueries(
                        ServerStateCompanyContactsEnum.CompanyContacts,
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
    [setModalType, setOpenModal, setSelectedContact, deleteContact],
  );
  return (
    <>
      <GlobalModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        modalHeader={<HeaderModal type={modalType} />}
      >
        <ContactForm
          type={modalType}
          close={() => setOpenModal(false)}
          data={selectedContact}
        />
      </GlobalModal>
      <VStack spacing="26px" w="100%">
        <Button
          variant={"outline"}
          size="sm"
          rightIcon={<Icon mt="3px" as={AddCircle} />}
          onClick={() => {
            setModalType("add");
            setSelectedContact(initialContact);
            setOpenModal(true);
          }}
        >
          Add a Contact
        </Button>

        <Accordion title="Primary">
          <Table
            columns={columns}
            data={contacts?.filter((item) => item.type === "P") || []}
          />
        </Accordion>
        <Accordion title="Secondary">
          <Table
            columns={columns}
            data={contacts?.filter((item) => item.type === "S") || []}
          />
        </Accordion>
        <Accordion title="Board member">
          <Table
            columns={columns}
            data={contacts?.filter((item) => item.type === "B") || []}
          />
        </Accordion>
        <Accordion title="Consultant">
          <Table
            columns={columns}
            data={contacts?.filter((item) => item.type === "C") || []}
          />
        </Accordion>
      </VStack>
    </>
  );
};

export default Contacts;
