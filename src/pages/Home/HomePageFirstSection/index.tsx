import { Flex, Box, Text, Image, Icon } from "@chakra-ui/react";
import { ArrowRight } from "iconoir-react";
import React from "react";
import Button from "../../../components/Shared/Button";
import InstitutionalAnalysis from "../../../assets/institutionalAnalysis.svg";
import { firstTextStyle, secondTextStyle } from "./styles";

const HomePageFirstSection: React.FC = () => {
  return (
    <>
      <Flex bg="gray.50" justify="center" padding="70px 0" align="center">
        <Flex justify="space-between" width="65%">
          {/* Left Side */}
          <Flex direction="column">
            <Text sx={firstTextStyle}>
              The leading resource for institutional
              <br />
              investment intelligence
            </Text>
            <Text sx={secondTextStyle} pt={2}>
              Sign Up for a demonstration
            </Text>
            <Box pt={8}>
              <Button
                variant="outlineSolid"
                size="md"
                rightIcon={<Icon as={ArrowRight} />}
              >
                Sign up
              </Button>
            </Box>
          </Flex>
          {/* Right Side */}
          <Flex flexGrow={1} align="flex-end" direction="column">
            <Box width="100%">
              <Image src={InstitutionalAnalysis} alt="institutional analysis" />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default HomePageFirstSection;
