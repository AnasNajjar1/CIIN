import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import React from "react";
import { NavArrowDown } from "iconoir-react";
import ContexLogo from "../../assets/context-logo.png";

const Footer: React.FC = () => {
  return (
    <Flex justify="center" p="22px 10px" bg="blue.700" height="150px">
      <Flex width="70%">
        {/* LEFT SIDE */}
        <Flex
          width="60%"
          flexWrap="wrap"
          direction="column"
          justify="space-between"
        >
          <Flex justify="space-between">
            <Box
              color="#FFFFFF"
              fontWeight={700}
              fontSize="12px"
              lineHeight="22px"
              cursor="pointer"
            >
              <Text>Home</Text>
            </Box>
            <Box
              color="#FFFFFF"
              fontWeight={700}
              fontSize="12px"
              lineHeight="22px"
              cursor="pointer"
            >
              <Text>Publications</Text>
            </Box>
            <Flex
              align="center"
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
              align="center"
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
              align="center"
              color="#FFFFFF"
              fontWeight={700}
              fontSize="12px"
              lineHeight="22px"
              cursor="pointer"
            >
              <Text pr={1}>Management</Text>
              <Icon as={NavArrowDown} />
            </Flex>
            <Flex
              align="center"
              color="#FFFFFF"
              fontWeight={700}
              fontSize="12px"
              lineHeight="22px"
              cursor="pointer"
            >
              <Text pr={1}>Data export</Text>
              <Icon as={NavArrowDown} />
            </Flex>
            <Box
              alignItems="center"
              color="#FFFFFF"
              fontWeight={700}
              fontSize="12px"
              lineHeight="22px"
              cursor="pointer"
            >
              <Text>Contact us</Text>
            </Box>
          </Flex>
          <Flex justify="space-between" position="relative" left="-50px">
            <Text
              color="#FFFFFF"
              fontWeight={700}
              fontSize="10px"
              lineHeight="22px"
              textTransform="uppercase"
            >
              Copyright © 2022 Contex Group Inc.
            </Text>
            <Text
              color="#FFFFFF"
              fontWeight={700}
              fontSize="10px"
              lineHeight="22px"
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
              textTransform="uppercase"
              cursor="pointer"
            >
              Privacy
            </Text>
            <Text
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
        {/* RIGHT SIDE */}
        <Flex flexGrow={1} direction="column" align="flex-end">
          <Image pb={4} width="164.76px" height="40px" src={ContexLogo} />
          <Text
            color="#FFFFFF"
            fontWeight={700}
            fontSize="10px"
            lineHeight="16px"
            textAlign="right"
            textTransform="uppercase"
          >
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
