import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { titleTextStyle } from "./styles";
import Button from "../../components/Shared/Button";
import PersonAdd from "../../assets/person-add.svg";
import ContactsCard from "../../components/Card/ContactsCard";

const Contacts = () => {
  return (
    <>
      <Flex direction="column" p="20px 60px">
        <Flex direction="column">
          <Box>
            <Text sx={titleTextStyle}>Contact us</Text>
          </Box>
          <Box pt={8}>
            <Button
              variant="outlineSolid"
              size="md"
              leftIcon={<Image src={PersonAdd} alt="person add" />}
            >
              Add new contact
            </Button>
          </Box>
          <Flex direction="column" pt={8} pb="80px">
            <Box>
              <ContactsCard
                cardName="Robert Martins"
                cardJob="Director, Business Development & Client Relations"
                cardTel="416 847 5142"
                cardEmail="robert.martins@contexgroup.ca"
              />
            </Box>
            <Box pt={6}>
              <ContactsCard
                cardName="Kharissa Oosthuyzen"
                cardJob="Data analyst"
                cardTel="416-477-8160"
                cardEmail="kharissa.oosthuyzen@contexgroup.ca"
              />
            </Box>
            <Box pt={6}>
              <ContactsCard
                cardName="Corinne Keov"
                cardJob="Data analyst"
                cardTel="416 847 8164"
                cardEmail="corine.keov@contexgroup.ca"
              />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default Contacts;
