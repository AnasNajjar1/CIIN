import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import React from "react";
import { NavArrowDown } from "iconoir-react";
import ContexLogo from "../../assets/contex-logo.svg";
import {
  leftBottomTextStyle,
  leftContainerStyle,
  leftUpperTextStyle,
  rightTextStyle,
} from "./styles";

const Footer: React.FC = () => {
  return (
    <Flex justify="center" p="22px 10px" bg="blue.700" height="150px">
      <Flex width="70%">
        {/* LEFT SIDE */}
        <Flex sx={leftContainerStyle} direction="column">
          <Flex justify="space-between">
            <Box sx={leftUpperTextStyle}>
              <Text>Home</Text>
            </Box>
            <Box sx={leftUpperTextStyle}>
              <Text>Publications</Text>
            </Box>
            <Flex align="center" sx={leftUpperTextStyle}>
              <Text pr={1}>Rankings</Text>
              <Icon as={NavArrowDown} />
            </Flex>
            <Flex align="center" sx={leftUpperTextStyle}>
              <Text pr={1}>Analysis</Text>
              <Icon as={NavArrowDown} />
            </Flex>
            <Flex align="center" sx={leftUpperTextStyle}>
              <Text pr={1}>Management</Text>
              <Icon as={NavArrowDown} />
            </Flex>
            <Flex align="center" sx={leftUpperTextStyle}>
              <Text pr={1}>Data export</Text>
              <Icon as={NavArrowDown} />
            </Flex>
            <Box sx={leftUpperTextStyle}>
              <Text>Contact us</Text>
            </Box>
          </Flex>
          <Flex justify="space-between" position="relative" left="-50px">
            <Text sx={leftBottomTextStyle}>
              Copyright © 2022 Contex Group Inc.
            </Text>
            <Text sx={leftBottomTextStyle} cursor="pointer">
              Terms & conditions
            </Text>
            <Text sx={leftBottomTextStyle} cursor="pointer">
              Privacy
            </Text>
            <Text sx={leftBottomTextStyle} cursor="pointer">
              FAQ
            </Text>
          </Flex>
        </Flex>
        {/* RIGHT SIDE */}
        <Flex flexGrow={1} direction="column" align="flex-end">
          <Image
            pb={4}
            width="150px"
            height="45px"
            src={ContexLogo}
            alt="contex logo"
          />
          <Text sx={rightTextStyle}>
            Contex Group Inc.
            <br /> 1100 René-Lévesque Blivd W.
            <br /> Montréal, QC H3B 4X9
            <br /> (514) 392-2009
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Footer;
