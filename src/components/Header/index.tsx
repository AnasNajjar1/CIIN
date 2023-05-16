import { Flex, Image, Text } from "@chakra-ui/react";
import Button from "../Button";
import CiinLogo from "../../assets/ciin-logo.png";
import React from "react";
import { ArrowRight } from "iconoir-react";
import { textContainerStyle, textStyle } from "./styles";

const Header: React.FC = () => {
  return (
    <Flex justify="center" p="22px 10px" bg="white" height="90px">
      <Flex width="70%" justify="space-between">
        <Flex width="60%" justify="space-between">
          <Image
            pb={2}
            height="53.68px"
            src={CiinLogo}
            alt="ciin-logo"
            cursor="pointer"
          />
          <Flex sx={textContainerStyle}>
            <Text sx={textStyle}>Publications</Text>
            <Text sx={textStyle}>Faq</Text>
            <Text sx={textStyle}>Contact Us</Text>
          </Flex>
        </Flex>
        <Flex direction="column" align="flex-end" flexGrow={1}>
          <Button
            variant="outline"
            size="sm"
            text="Login"
            direction="right"
            icon={ArrowRight}
            click={() => {}}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Header;
