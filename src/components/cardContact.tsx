import { Card, CardBody, CardHeader, Text } from "@chakra-ui/react";
import CardIcon from "./CardIcon";
import Link from "./Link";
import { User } from "iconoir-react";
interface Contact {
  userName: string;
  phone: string;
  email: string;
  job: string;
}
const CardContact = ({ userName, phone, email, job }: Contact) => {
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
        <Text textStyle="lg">{userName}</Text>
      </CardHeader>
      <CardBody
        pt="0"
        display="flex"
        flexDirection="column"
        justifyContent={"flex-start"}
      >
        <Text textStyle="base" fontWeight="500" mb="16px">
          {job}
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
