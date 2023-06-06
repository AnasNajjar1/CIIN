import { Divider, Flex, Text } from "@chakra-ui/react";

const LatestUpdate = () => {
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
    </>
  );
};

export default LatestUpdate;
