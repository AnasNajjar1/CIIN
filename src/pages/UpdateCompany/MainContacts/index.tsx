import { Box, Card, CardBody, Flex, Text } from "@chakra-ui/react";
import CompletedByForm from "./completedByForm";
import PreviousTrackingForm from "./previousTrackingForm";

const MainContacts = () => {
  return (
    <Flex direction={{ base: "column", md: "row" }} gap="35px" mb="46px">
      <Box width={{ md: "50%" }}>
        <Text mb="32px" textStyle="h4">
          Completed by
        </Text>
        <Card
          pr={{ base: "10px", md: "100px" }}
          pl={{ base: "10px", md: "36px" }}
        >
          <CardBody px="0">
            <CompletedByForm />
          </CardBody>
        </Card>
      </Box>
      <Flex direction="column" width={{ md: "50%" }}>
        <Text mb="32px" textStyle="h4">
          Previous tracking
        </Text>
        <Card
          pr={{ base: "10px", md: "100px" }}
          pl={{ base: "10px", md: "36px" }}
          flex="1"
        >
          <CardBody px="0">
            <PreviousTrackingForm />
          </CardBody>
        </Card>
      </Flex>
    </Flex>
  );
};

export default MainContacts;
