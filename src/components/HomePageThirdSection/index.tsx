import { Flex, Text, Icon, Box, Image } from "@chakra-ui/react";
import { ArrowLeft, ArrowRight } from "iconoir-react";
import React from "react";
import AsiIcon from "../../assets/asi_icon.svg";
import CenturionIcon from "../../assets/centurion_icon.svg";
import PhnIcon from "../../assets/phn_icon.svg";
import FcIcon from "../../assets/fc_icon.svg";
import BrIcon from "../../assets/br_icon.svg";
import { iconStyle, textStyle } from "./styles";

const HomePageThirdSection: React.FC = () => {
  return (
    <>
      <Flex h="267.87px" bg="gray.50" justify="center" p="50px">
        <Flex
          justify="space-between"
          direction="column"
          align="flex-start"
          width="80%"
        >
          <Text sx={textStyle} pr={4}>
            Our clients
          </Text>
          <Flex
            justify="space-between"
            align="center"
            width="100%"
            pr={10}
            pl={2}
          >
            <Icon sx={iconStyle} as={ArrowLeft} />
            <Box>
              <Image src={AsiIcon} alt="ASI icon" width="150px" />
            </Box>
            <Box>
              <Image src={CenturionIcon} alt="Centurion icon" width="150px" />
            </Box>
            <Box>
              <Image src={PhnIcon} alt="Philips icon" width="150px" />
            </Box>
            <Box>
              <Image src={FcIcon} alt="Fiera icon" width="100px" pb={5} />
            </Box>
            <Box>
              <Image src={BrIcon} alt="Black Rock icon" width="150px" />
            </Box>
            <Icon sx={iconStyle} as={ArrowRight} />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default HomePageThirdSection;
