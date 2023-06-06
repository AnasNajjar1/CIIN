import { VStack } from "@chakra-ui/react";
import CardContact from "../../components/cardContact";
import LatestUpdate from "./latestUpdate.tsx";
const Contacts = () => {
  return (
    <>
      <LatestUpdate />
      <VStack spacing="32px" width="100%">
        <CardContact
          userName="Robert Martins"
          phone="416-477-8160"
          email="robert.martins@contexgroup.ca"
          job="Director, Business Development & Client Relations"
        />
        <CardContact
          userName="Kharrissa Oosthuyzen"
          phone="416-477-8160"
          email="kharrissa.oosthuyzen@contexgroup.ca"
          job="Data analyst"
        />
        <CardContact
          userName="Corinne Keov"
          phone="416-477-8160"
          email="corine.keov@contexgroup.ca"
          job="Data analyst"
        />
      </VStack>
    </>
  );
};

export default Contacts;
