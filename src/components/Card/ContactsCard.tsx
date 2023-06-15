import {
  Card,
  CardBody,
  Stack,
  Box,
  Text,
  Flex,
  Image,
} from "@chakra-ui/react";
import {
  cardBottomTextStyle,
  cardMainTextStyle,
  cardNameStyle,
  smallIconContainerStyle,
  smallIconStyle,
} from "../../pages/Contacts/styles";
import Person from "../../assets/menuIcons/person.svg";

type ContactsCardProps = {
  cardName: string;
  cardJob: string;
  cardTel: string;
  cardEmail: string;
};

const ContactsCard = ({
  cardName,
  cardJob,
  cardTel,
  cardEmail,
}: ContactsCardProps) => {
  return (
    <>
      <Card>
        <CardBody>
          <Stack pl={2}>
            <Flex align="center">
              <Flex sx={smallIconContainerStyle}>
                <Image sx={smallIconStyle} src={Person} />
              </Flex>
              <Box pl={3}>
                <Text sx={cardNameStyle}>{cardName}</Text>
              </Box>
            </Flex>
            <Box pt={4}>
              <Text sx={cardMainTextStyle}>{cardJob}</Text>
            </Box>
            <Box pt={1}>
              <Text sx={cardMainTextStyle}>Tel: {cardTel}</Text>
            </Box>
            <Box pt={1}>
              <Text sx={cardBottomTextStyle} pt={1} pb={2}>
                {cardEmail}
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
};
export default ContactsCard;
