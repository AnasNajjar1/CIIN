import { useMemo, useState } from "react";
import { useContext } from "react";
import Table from "../../../components/Shared/Table";
import { Box, Flex, Icon, IconButton, VStack } from "@chakra-ui/react";
import Accordion from "../../../components/Shared/Accodion";
import CardIcon from "../../../components/Shared/CardIcon";
import { AddCircle, EditPencil, MinusCircle, Trash, User } from "iconoir-react";
import Button from "../../../components/Shared/Button";
import ContactForm from "./contactForm";
import {
  ServerStateCompanyContactsEnum,
  useDeleteContact,
  useGetContacts,
} from "../../../hooks/api/company/contacts";
import { Contact } from "../../../services/apiTypes/types";
import { useQueryClient } from "react-query";
import AlertContext from "../../../store/context/alertContext";

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
const UpdateContactForm = (row: Contact, close: () => void) => (
  <ContactForm data={row} close={close} type="update" />
);

const Contacts = () => {
  const { data: contacts } = useGetContacts();
  const [showAddContact, setShowAddContact] = useState(false);
  const queryClient = useQueryClient();
  const alertContext = useContext(AlertContext);
  const { mutate: deleteContact } = useDeleteContact({
    onSuccess: async () => {
      await queryClient.invalidateQueries(
        ServerStateCompanyContactsEnum.CompanyContacts,
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
          handleRetry: () => deleteContact(variables),
        });
      }
    },
  });

  const columns = useMemo(() => [
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
      Cell: ({ row, setOpen }: { row: Contact }) => {
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
                deleteContact(row.id);
              }}
            >
              <Icon strokeWidth="3" as={Trash} />
            </IconButton>
          </Flex>
        );
      },
    },
  ]);
  return (
    <>
      <VStack spacing="26px" w="100%">
        <Button
          variant={"outline"}
          size="sm"
          rightIcon={
            <Icon mt="3px" as={showAddContact ? MinusCircle : AddCircle} />
          }
          onClick={() => {
            setShowAddContact((showAddContact) => !showAddContact);
          }}
        >
          Add a Contact
        </Button>
        {showAddContact && (
          <Box w="100%" mx="auto">
            <ContactForm
              data={initialContact}
              close={() => setShowAddContact(false)}
              type={"add"}
            />
          </Box>
        )}
        <Accordion title="Primary">
          <Table
            columns={columns}
            data={contacts?.filter((item) => item.type === "P") || []}
            enableExpanding
            renderDetailPanel={UpdateContactForm}
          />
        </Accordion>
        <Accordion title="Secondary">
          <Table
            columns={columns}
            data={contacts?.filter((item) => item.type === "S") || []}
            enableExpanding
            renderDetailPanel={UpdateContactForm}
          />
        </Accordion>
        <Accordion title="Board member">
          <Table
            columns={columns}
            data={contacts?.filter((item) => item.type === "B") || []}
            enableExpanding
            renderDetailPanel={UpdateContactForm}
          />
        </Accordion>
        <Accordion title="Consultant">
          <Table
            columns={columns}
            data={contacts?.filter((item) => item.type === "C") || []}
            enableExpanding
            renderDetailPanel={UpdateContactForm}
          />
        </Accordion>
      </VStack>
    </>
  );
};

export default Contacts;
