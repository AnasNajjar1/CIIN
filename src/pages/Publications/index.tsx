import {
  Flex,
  Box,
  Button,
  Image,
  Text,
  Card,
  CardBody,
  Stack,
  Icon,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import {
  arrowStyle,
  cardText,
  iconStyle,
  iconsContainerStyle,
  pageNumberStyle,
  pagesNumberContainerStyle,
  titleTextStyle,
} from "./styles";
import EditIcon from "../../assets/edit-blue.svg";
import BenefitsIcon from "../../assets/benefits_icon.svg";
import AdvantagesIcon from "../../assets/advantages_icon.svg";
import CirIcon from "../../assets/cir_icon.svg";
import FundsReport2020 from "../../assets/funds_report_2020.svg";
import FundsReport2022 from "../../assets/funds_report_2022.svg";
import MoneyManagersReport2019 from "../../assets/money_managers_report_2019.svg";
import MoneyManagersReport2020 from "../../assets/money_managers_report_2020.svg";
import MoneyManagersReport2021 from "../../assets/money_managers_report_2021.svg";
import MoneyManagersReport2022 from "../../assets/money_managers_report_2022.svg";
import CiinOverview2020 from "../../assets/ciin_overview_2020.svg";
import CiinOverview2021 from "../../assets/ciin_overview_2021.svg";
import CapSuppliersReport2019 from "../../assets/cap_suppliers_report_2019.svg";
import CapSuppliersReport2020 from "../../assets/cap_suppliers_report_2020.svg";
import CapSuppliersReport2021 from "../../assets/cap_suppliers_report_2021.svg";
import PlansReport2020 from "../../assets/plans_report_2020.svg";
import { ArrowLeft, ArrowRight } from "iconoir-react";
import Publication from "../../components/Publication";

const Publications = () => {
  return (
    <>
      <Flex direction="column" p="20px 60px">
        <Flex direction="column">
          <Box>
            <Text sx={titleTextStyle}>Publications</Text>
          </Box>
          <Box pt={8}>
            <Button
              variant="outlineSolid"
              size="md"
              color="blue.500"
              leftIcon={
                <Image src={EditIcon} color="black" alt="edit publication" />
              }
            >
              Edit publications
            </Button>
          </Box>
          <Box pt={6}>
            <Card>
              <CardBody>
                <Stack>
                  <Box>
                    <Text sx={cardText}>
                      As part of the Pension and Benefits Group which includes
                      Benefits Canada, Avantage and Canadian Investment Review.
                      We produce all of the following charts and rankings for
                      these popular issues. In addition, we help clients with
                      their research initiatives whether its print or online.
                    </Text>
                  </Box>
                  <Flex
                    sx={iconsContainerStyle}
                    direction={{ base: "column", md: "row" }}
                    pt={6}
                  >
                    <Box>
                      <Image
                        sx={iconStyle}
                        src={BenefitsIcon}
                        alt="benefits icon"
                      />
                    </Box>
                    <Box pt={{ base: "20px", md: "0px" }}>
                      <Image
                        sx={iconStyle}
                        src={AdvantagesIcon}
                        alt="advantages icon"
                      />
                    </Box>
                    <Box pt={{ base: "20px", md: "0px" }}>
                      <Image sx={iconStyle} src={CirIcon} alt="cir icon" />
                    </Box>
                  </Flex>
                </Stack>
              </CardBody>
            </Card>
          </Box>
          <Flex sx={pagesNumberContainerStyle} pl={4} pt={8}>
            <Icon as={ArrowLeft} color="gray.300" sx={arrowStyle} />
            <Text color="#3B87D2" sx={pageNumberStyle}>
              1
            </Text>
            <Text color="blue.800" sx={pageNumberStyle}>
              2
            </Text>
            <Text color="blue.800" sx={pageNumberStyle}>
              3
            </Text>
            <Text color="blue.800" sx={pageNumberStyle}>
              ...
            </Text>
            <Icon as={ArrowRight} color="blue.800" sx={arrowStyle} />
          </Flex>
          <Box pt={12} pb="100px">
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              }}
              rowGap={{ base: "20px", md: "25px", lg: "50px" }}
            >
              <GridItem>
                <Publication
                  image={FundsReport2022}
                  imageAlternative="funds report 2022"
                  title="2022 Top-100 Pension Funds Report"
                  subTitle="Benefits Canada"
                />
              </GridItem>
              <GridItem>
                <Publication
                  image={MoneyManagersReport2022}
                  imageAlternative="money managers report 2022"
                  title="2022 Spring Top-40 Money Managers Report"
                  subTitle="Benefits Canada"
                />
              </GridItem>
              <GridItem>
                <Publication
                  image={CiinOverview2021}
                  imageAlternative="ciin overview 2021"
                  title="2021 CIIN Overview"
                  subTitle="CIIN"
                />
              </GridItem>
              <GridItem>
                <Publication
                  image={CapSuppliersReport2021}
                  imageAlternative="cap suppliers report 2021"
                  title="2021 CAP Suppliers Report"
                  subTitle="Benefits Canada"
                />
              </GridItem>
              <GridItem>
                <Publication
                  image={CiinOverview2020}
                  imageAlternative="ciin overview 2020"
                  title="2020 CIIN Overview"
                  subTitle="CIIN"
                />
              </GridItem>
              <GridItem>
                <Publication
                  image={CapSuppliersReport2020}
                  imageAlternative="cap suppliers report 2020"
                  title="2020 CAP Suppliers Report"
                  subTitle="Benefits Canada"
                />
              </GridItem>
              <GridItem>
                <Publication
                  image={MoneyManagersReport2021}
                  imageAlternative="money managers report 2021"
                  title="2021 Fall Top-40 Money Managers Report"
                  subTitle="CIIN"
                />
              </GridItem>
              <GridItem>
                <Publication
                  image={PlansReport2020}
                  imageAlternative="plans report 2020"
                  title="2020 Top-50 DC Plans Report"
                  subTitle="Benefits Canada"
                />
              </GridItem>
              <GridItem>
                <Publication
                  image={FundsReport2020}
                  imageAlternative="funds report 2020"
                  title="2020 Top-100 PensionFunds Report"
                  subTitle="CIIN"
                />
              </GridItem>
              <GridItem>
                <Publication
                  image={MoneyManagersReport2020}
                  imageAlternative="money managers report 2020"
                  title="2020 Spring Top-40 Money Managers Report"
                  subTitle="Benefits Canada"
                />
              </GridItem>
              <GridItem>
                <Publication
                  image={CapSuppliersReport2019}
                  imageAlternative="cap suppliers report report 2019"
                  title="2019 CAP Suppliers Report"
                  subTitle="CIIN"
                />
              </GridItem>
              <GridItem>
                <Publication
                  image={MoneyManagersReport2019}
                  imageAlternative="money managers report 2019"
                  title="2019 Fall Top-40 Money Managers Report"
                  subTitle="Benefits Canada"
                />
              </GridItem>
            </Grid>
          </Box>
          <Flex align="center" justifyContent="center" pb="50px">
            <Button variant="outlineSolid" size="sm">
              Load More
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Publications;
