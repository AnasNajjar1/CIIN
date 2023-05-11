import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import React from "react";
import { NavArrowDown } from "iconoir-react";
import ContexLogo from "../../assets/context-logo.png";

const Footer: React.FC = () => {
  return (
    <Flex
      justify="space-between"
      p="16px 30px"
      border="1px solid red"
      bg="#063768"
     minWidth="900px"
      height="150px"
    >
      <Flex justify="center" border="1px solid green">
        {/* LHS */}
        <Flex direction="column" border="1px solid yellow">
          <Flex align="center" alignItems="center" mb="32px">
            <Box
              pr={4}
              color="#FFFFFF"
              fontWeight={700}
              fontSize="12px"
              lineHeight="22px"
              width="70px"
              cursor="pointer"
            >
              <Text>Home</Text>
            </Box>
            <Box
              pr={4}
              color="#FFFFFF"
              fontWeight={700}
              fontSize="12px"
              lineHeight="22px"
              cursor="pointer"
            >
              <Text>Publications</Text>
            </Box>
            <Flex
              alignItems="center"
              pr={2}
              p="10px"
              color="#FFFFFF"
              fontWeight={700}
              fontSize="12px"
              lineHeight="22px"
              cursor="pointer"
            >
              <Text pr={1}>Rankings</Text>
              <Icon as={NavArrowDown} />
            </Flex>
            <Flex
              alignItems="center"
              pr={2}
              p="10px"
              color="#FFFFFF"
              fontWeight={700}
              fontSize="12px"
              lineHeight="22px"
              cursor="pointer"
            >
              <Text pr={1}>Analysis</Text>
              <Icon as={NavArrowDown} />
            </Flex>
            <Flex
              alignItems="center"
              pr={2}
              p="10px"
              color="#FFFFFF"
              fontWeight={700}
              fontSize="12px"
              lineHeight="22px"
              cursor="pointer"
            >
              <Text mr={1}>Management</Text>
              <Icon as={NavArrowDown} />
            </Flex>
            <Flex
              alignItems="center"
              mr={1}
              p="10px"
              color="#FFFFFF"
              fontWeight={700}
              fontSize="12px"
              lineHeight="22px"
              cursor="pointer"
            >
              <Text>
                Data export
              </Text>
              <Icon as={NavArrowDown} />
            </Flex>
            <Box
              alignItems="center"
              mr={2}
              p="10px"
              color="#FFFFFF"
              fontWeight={700}
              fontSize="12px"
              lineHeight="22px"
              cursor="pointer"
              width="80px"
            >
              <Text>Contact us</Text>
            </Box>
          </Flex>
          <Flex position="relative" left="-35px">
            <Text
              mr={4}
              color="#FFFFFF"
              fontWeight={700}
              fontSize="10px"
              lineHeight="22px"
              width="220px"
              textTransform="uppercase"
            >
              Copyright © 2022 Contex Group Inc.
            </Text>
            <Text
              color="#FFFFFF"
              fontWeight={700}
              fontSize="10px"
              lineHeight="22px"
              width="110px"
              textTransform="uppercase"
              cursor="pointer"
            >
              Terms & conditions
            </Text>
            <Text
              color="#FFFFFF"
              fontWeight={700}
              fontSize="10px"
              lineHeight="22px"
              width="110px"
              textTransform="uppercase"
              cursor="pointer"
            >
              Privacy
            </Text>
            <Text
            ml={4}
              color="#FFFFFF"
              fontWeight={700}
              fontSize="10px"
              lineHeight="22px"
              textTransform="uppercase"
              cursor="pointer"
            >
              FAQ
            </Text>
          </Flex>
        </Flex>
        {/* FHS */}
        <Flex direction="column" align="flex-end" position="relative" left="50px" top="10px" border="1px solid yellow">
            <Image pb={4} width="164.76px" height="40px" src={ContexLogo} cursor="pointer" />
            <Text
            ml={4}
              color="#FFFFFF"
              fontWeight={700}
              fontSize="10px"
              lineHeight="14px"
              width="140px"
              textAlign="right"
              textTransform="uppercase"
            >
              Contex Group Inc. 1100 René-Lévesque Blivd W. Montréal, QC H3B 4X9 (514) 392-2009
            </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Footer;
