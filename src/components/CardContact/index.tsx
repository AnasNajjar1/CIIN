import { Card, CardBody, CardHeader, Text } from "@chakra-ui/react";
import CardIcon from "../Shared/CardIcon";
import Link from "../Shared/Link";
import { User } from "iconoir-react";
interface Contact {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  title: string;
}
const CardContact = ({ firstName, lastName, phone, email, title }: Contact) => {
  return (
    <Card width="100%">
      <CardHeader
        display="flex"
        alignItems="center"
        gap="12px"
        mb="26px"
        pb="0"
      >
        <CardIcon icon={User} />
        <Text textStyle="lg">{`${firstName} ${lastName}`}</Text>
      </CardHeader>
      <CardBody
        pt="0"
        display="flex"
        flexDirection="column"
        justifyContent={"flex-start"}
      >
        <Text textStyle="base" fontWeight="500" mb="16px">
          {title}
        </Text>
        <Text textStyle="base" fontWeight="500" mb="16px">
          Tel: {phone}
        </Text>
        <Link to={`mailto:${email}`}>{email}</Link>
      </CardBody>
    </Card>
  );
};

export default CardContact;
