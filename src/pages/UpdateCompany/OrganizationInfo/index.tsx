import { Card, CardBody, Flex, Text } from "@chakra-ui/react";
import CompanyInfo from "./CompanyInfo";
import Office from "./Office";

const OrganizationInfo = () => {
  return (
    <Flex direction={{ base: "column", md: "row" }} gap="35px" mb="46px">
      <Flex direction="column" width={{ md: "50%" }}>
        <Text mb="32px" textStyle="h4">
          Company Information
        </Text>
        <Card
          pr={{ base: "10px", md: "100px" }}
          pl={{ base: "10px", md: "36px" }}
          flex="1"
        >
          <CardBody px="0">
            <CompanyInfo />
          </CardBody>
        </Card>
      </Flex>
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
            <Office />
          </CardBody>
        </Card>
      </Flex>
    </Flex>
  );
};

export default OrganizationInfo;
