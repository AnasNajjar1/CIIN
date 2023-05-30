import { Divider, Flex, Text, VStack } from "@chakra-ui/react";
import CardContact from "../../components/cardContact";
const Contacts = () => {
  return (
    <>
      <Flex justify="space-between" align="center" mb="6px">
        <Text textStyle="lg" fontWeight="500">
          Latest update
        </Text>
        <Text textStyle="lg" fontWeight="500">
          All dollars are in ($) millions
        </Text>
      </Flex>
      <Divider bg="gray.100" mb="10px" />
      <Text textStyle="base" mb="50px">
        07/06/2022
      </Text>
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
