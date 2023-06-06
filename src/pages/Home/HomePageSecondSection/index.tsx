import { Flex, Text, Box, Image, Icon } from "@chakra-ui/react";
import { ArrowRight } from "iconoir-react";
import Button from "../../../components/Button";
import React from "react";
import Bourse from "../../../assets/bourse.svg";
import Analysis from "../../../assets/analysis.svg";
import Report from "../../../assets/report.svg";
import BenefitsIcon from "../../../assets/benefits_icon.svg";
import AdvantagesIcon from "../../../assets/advantages_icon.svg";
import CirIcon from "../../../assets/cir_icon.svg";
import {
  bottomFirstTextStyle,
  bottomSecondTextStyle,
  imageStyle,
} from "./styles";
import HomePageCard from "../../../components/Card/HomePageCard";

const HomePageSecondSection: React.FC = () => {
  return (
    <>
      <Flex justify="center" padding="90px 0px 70px  0px">
        <Flex direction="column">
          {/* Upper Side */}
          <Flex>
            <Box mr={4} position="relative">
              <Image sx={imageStyle} src={Bourse} alt="bourse" />
              <HomePageCard
                firstBoxPaddingTop={8}
                secondBoxPaddingTop={10}
                thirdBoxPaddingBottom={4}
                firstText="Sales"
                secondText="Prospect potential clients"
                thirdText={[
                  "We have over 1000 pension plans and ",
                  <br />,
                  "800 foundations & endowments listed in ",
                  <br />,
                  "the database.",
                ]}
              />
            </Box>
            <Box mr={4} position="relative">
              <Image sx={imageStyle} src={Analysis} alt="analysis" />
              <HomePageCard
                firstBoxPaddingTop={8}
                secondBoxPaddingTop={1}
                thirdBoxPaddingBottom={10}
                firstText={["Competitive ", <br />, "Intelligence"]}
                secondText="Analyze your competition"
                thirdText={[
                  "Understand the mandates your ",
                  <br />,
                  "competitors are currently working on",
                ]}
              />
            </Box>
            <Box position="relative">
              <Image sx={imageStyle} src={Report} alt="report" />
              <HomePageCard
                firstBoxPaddingTop={8}
                secondBoxPaddingTop={1}
                thirdBoxPaddingBottom={4}
                firstText={["Market ", <br />, "Analysis"]}
                secondText="Understand the canadian market"
                thirdText={[
                  "Dig deep into the pension and foundation ",
                  <br />,
                  "& endowment markets with granular ",
                  <br />,
                  "analytics",
                ]}
              />
            </Box>
          </Flex>
          {/* Bottom Side */}
          <Flex mt={12} justify="space-between">
            <Flex direction="column">
              <Text sx={bottomFirstTextStyle}>Who We are</Text>
              <Text sx={bottomSecondTextStyle} pt={4}>
                We are part of the largest B2B publishing group in Canada
                comprised of Benefits
                <br />
                Canada, Avantages and the Canadian Investment Review. Proudly
                serving the
                <br />
                Canadian plan sponsor community for over 40 years!
                <br />
                <br />
                We are the premier source of intelligence in the pension and
                endowment
                <br />
                foundation community in Canada. Our focus is not only be to a
                database provider
                <br />
                but an internal resource providing customized reports and market
                intelligence
                <br />
                helping you focus on what matters the most.
              </Text>
              <Box pt={8}>
                <Button
                  variant="solid"
                  size="md"
                  rightIcon={<Icon as={ArrowRight} />}
                >
                  Sign up
                </Button>
              </Box>
            </Flex>
            <Flex
              direction="column"
              justify="space-around"
              align="flex-end"
              pr={10}
              pb={10}
            >
              <Image width="200px" src={BenefitsIcon} alt="benefits icon" />
              <Image width="200px" src={AdvantagesIcon} alt="advantages icon" />
              <Image width="200px" src={CirIcon} alt="cir icon" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default HomePageSecondSection;
