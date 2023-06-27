import { VStack } from "@chakra-ui/react";
import CardContact from "../../components/CardContact";
import LatestUpdate from "./latestUpdate.tsx";
import { useGetContacts } from "../../hooks/api/company/contacts.ts";
const Contacts = () => {
  const { data: contacts } = useGetContacts();
  return (
    <>
      <LatestUpdate />
      <VStack spacing="32px" width="100%">
        {contacts?.map(({ id, first_name, last_name, email, title,phone_number }) => (
          <CardContact
            key={id}
            firstName={first_name}
            lastName={last_name}
            email={email}
            title={title}
            phone={phone_number}
          />
        ))}
      </VStack>
    </>
  );
};

export default Contacts;
