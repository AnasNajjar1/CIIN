import {
  Flex,
  Text,
  Card,
  CardBody,
  Stack,
  Box,
  Image,
} from "@chakra-ui/react";
import { ArrowRight } from "iconoir-react";
import Button from "../Button";
import React from "react";
import Bourse from "../../assets/bourse.svg";
import Analysis from "../../assets/analysis.svg";
import Report from "../../assets/report.svg";
import BenefitsIcon from "../../assets/benefits_icon.svg";
import AdvantagesIcon from "../../assets/advantages_icon.svg";
import CirIcon from "../../assets/cir_icon.svg";
import {
  bottomFirstTextStyle,
  bottomSecondTextStyle,
  cardFirstTextStyle,
  cardSecondTextStyle,
  cardThirdTextStyle,
  imageStyle,
} from "./styles";

const HomePageSecondSection: React.FC = () => {
  return (
    <>
      <Flex justify="center" padding="80px 0">
        <Flex direction="column">
          {/* Upper Side */}
          <Flex>
            <Box mr={4} position="relative">
              <Image sx={imageStyle} src={Bourse} alt="bourse" />
              <Card>
                <CardBody>
                  <Stack padding="10px" spacing={3} alignItems="center">
                    <Box pt={8}>
                      <Text sx={cardFirstTextStyle}>Sales</Text>
                    </Box>
                    <Box pt={10}>
                      <Text sx={cardSecondTextStyle}>
                        Prospect potential clients
                      </Text>
                    </Box>
                    <Box pb={4}>
                      <Text sx={cardThirdTextStyle}>
                        We have over 1000 pension plans and
                        <br /> 800 foundations & endowments listed in
                        <br /> the database.
                      </Text>
                    </Box>
                  </Stack>
                </CardBody>
              </Card>
            </Box>
            <Box mr={4} position="relative">
              <Image sx={imageStyle} src={Analysis} alt="analysis" />
              <Card>
                <CardBody>
                  <Stack padding="10px" spacing={3} alignItems="center">
                    <Box pt={8}>
                      <Text sx={cardFirstTextStyle}>
                        Competitive
                        <br /> Intelligence
                      </Text>
                    </Box>
                    <Box pt={1}>
                      <Text sx={cardSecondTextStyle}>
                        Analyze your competition
                      </Text>
                    </Box>
                    <Box pb={10}>
                      <Text sx={cardThirdTextStyle}>
                        Understand the mandates your
                        <br /> competitors are currently working on
                      </Text>
                    </Box>
                  </Stack>
                </CardBody>
              </Card>
            </Box>
            <Box position="relative">
              <Image sx={imageStyle} src={Report} alt="report" />
              <Card>
                <CardBody>
                  <Stack padding="10px" spacing={3} alignItems="center">
                    <Box pt={8}>
                      <Text sx={cardFirstTextStyle}>
                        Market
                        <br /> Analysis
                      </Text>
                    </Box>
                    <Box pt={1}>
                      <Text sx={cardSecondTextStyle}>
                        Understand the canadian market
                      </Text>
                    </Box>
                    <Box pb={4}>
                      <Text sx={cardThirdTextStyle}>
                        Dig deep into the pension and foundation
                        <br /> & endowment markets with granular
                        <br /> analytics
                      </Text>
                    </Box>
                  </Stack>
                </CardBody>
              </Card>
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
                  text="Sign up"
                  direction="right"
                  icon={ArrowRight}
                  click={() => {}}
                />
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
