import { Flex, Text } from "@chakra-ui/react";
import {
  firstPartHeadingTextStyle,
  secondPartHeadingTextStyle,
} from "./styles";

export const DashboardHeader = () => {
  return (
    <Flex align="center">
      <Text sx={firstPartHeadingTextStyle}>Home /</Text>
      <Text sx={secondPartHeadingTextStyle} pl={1}>
        User profile
      </Text>
    </Flex>
  );
};

export default DashboardHeader;
