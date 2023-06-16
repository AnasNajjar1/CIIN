import { Box, Card, CardBody, Icon, Stack, Text } from "@chakra-ui/react";
import Button from "../../components/Shared/Button";
import { Download, EditPencil, Mail, Star } from "iconoir-react";
import Link from "../../components/Shared/Link";

const FirstSectionCompany = () => {
  return (
    <>
      <Stack direction={{ base: "column", md: "row" }} spacing="24px" mb="27px">
        <Button
          variant="outline"
          size="sm"
          leftIcon={<Icon as={Star} />}
          onClick={() => {
            console.log("clicked");
          }}
        >
          Add to favourites
        </Button>
        <Button
          variant="outline"
          size="sm"
          leftIcon={<Icon as={Download} />}
          onClick={() => {
            console.log("clicked");
          }}
        >
          Download a pdf
        </Button>
        <Button
          variant="outline"
          size="sm"
          leftIcon={<Icon as={Mail} />}
          onClick={() => {
            console.log("clicked");
          }}
        >
          Email this page
        </Button>
      </Stack>
      <Card mb="33px">
        <CardBody
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Text textStyle={{ base: "base", md: "h3" }} mb="16px">
              3M Canada Company
            </Text>
            <Link to="www.3m.com">www.3m.com</Link>
          </Box>
          <Button size="sm" leftIcon={<Icon as={EditPencil} />}>
            Edit company
          </Button>
        </CardBody>
      </Card>
    </>
  );
};

export default FirstSectionCompany;
