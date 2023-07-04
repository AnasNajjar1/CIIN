import {
  Flex,
  Box,
  Text,
  Icon,
  Card,
  CardBody,
  Stack,
  Input,
} from "@chakra-ui/react";
import {
  arrowStyle,
  editTitleStyle,
  inputStyle,
  inputTitleStyle,
  pageNumberStyle,
  pagesNumberContainerStyle,
  subInputTextStyle,
  titleTextStyle,
} from "./styles";
import Button from "../../components/Shared/Button";
import { ArrowLeft, ArrowRight, Plus } from "iconoir-react";
import FundsReport2022 from "../../assets/funds_report_2022.svg";
import MoneyManagersReport2021 from "../../assets/money_managers_report_2021.svg";
import MoneyManagersReport2022 from "../../assets/money_managers_report_2022.svg";
import CiinOverview2021 from "../../assets/ciin_overview_2021.svg";
import PlansReport2021 from "../../assets/plans_report_2021.svg";
import CapSuppliersReport2021 from "../../assets/cap_suppliers_report_2021.svg";
import EditPublicationCard from "../../components/Card/EditPublicationCard";
import { useState } from "react";

const EditPublications = () => {
  const [addCardOpen, setAddCardOpen] = useState(false);

  return (
    <>
      <Flex direction="column" p="20px 60px">
        <Flex direction="column">
          <Box>
            <Text sx={titleTextStyle}>Publication Editing</Text>
          </Box>
          <Box pt={8}>
            <Button
              variant="outlineSolid"
              size="md"
              color="blue.500"
              leftIcon={<Icon as={Plus} fontSize="16px" />}
              onClick={() => setAddCardOpen(true)}
            >
              Add publications
            </Button>
          </Box>
          <Box pt={8} display={addCardOpen ? "block" : "none"}>
            <Card>
              <CardBody>
                <Stack>
                  <Flex direction="column" align="center" width="100%">
                    <Flex
                      direction="column"
                      align="center"
                      width={{ lg: "80%", xl: "60%" }}
                      pt={4}
                    >
                      <Text sx={editTitleStyle}>Add publication</Text>
                      <Box pt={4}>
                        <Flex align="center" justify="space-between">
                          <Box width="20%">
                            <Text sx={inputTitleStyle} pr={4}>
                              Title
                            </Text>
                          </Box>
                          <Box width={{ base: "75%", md: "85%" }}>
                            <Input
                              sx={inputStyle}
                              type="text"
                              placeholder="Poster Title"
                              _placeholder={{ color: "gray.500" }}
                            />
                          </Box>
                        </Flex>
                        <Flex align="center" justify="space-between" pt={3}>
                          <Box width="20%">
                            <Text sx={inputTitleStyle} pr={4}>
                              Source
                            </Text>
                          </Box>
                          <Box width={{ base: "75%", md: "85%" }}>
                            <Input
                              sx={inputStyle}
                              type="text"
                              placeholder="Source"
                              _placeholder={{ color: "gray.500" }}
                            />
                          </Box>
                        </Flex>
                        <Flex align="center" justify="space-between" pt={3}>
                          <Box width="20%">
                            <Text
                              sx={inputTitleStyle}
                              pb={{ base: 12, lg: 10 }}
                            >
                              Image file
                            </Text>
                          </Box>
                          <Flex
                            direction="column"
                            width={{ base: "75%", md: "85%" }}
                          >
                            <Input
                              sx={inputStyle}
                              type="text"
                              placeholder="Image File"
                              _placeholder={{ color: "gray.500" }}
                            />
                            <Text sx={subInputTextStyle} pt={2}>
                              Max file size: 2Mb, allowed file format: jpg, png,
                              gif
                              <br /> Recommended cover image size: 250x380 (or
                              the other in proportion to 25:38){" "}
                            </Text>
                          </Flex>
                        </Flex>
                        <Flex align="center" justify="space-between" pt={3}>
                          <Box width="20%">
                            <Text sx={inputTitleStyle} pb={{ base: 5, md: 7 }}>
                              Pdf file
                            </Text>
                          </Box>
                          <Flex
                            direction="column"
                            width={{ base: "75%", md: "85%" }}
                          >
                            <Input
                              sx={inputStyle}
                              type="text"
                              placeholder="Pdf File"
                              _placeholder={{ color: "gray.500" }}
                            />
                            <Text sx={subInputTextStyle} pt={2}>
                              Max file size: 10Mb, allowed file format: pdf
                            </Text>
                          </Flex>
                        </Flex>
                      </Box>
                      <Flex
                        align="center"
                        justify="space-between"
                        width={{ base: "40%", md: "30%", lg: "25%" }}
                        pt={6}
                        pb={2}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => setAddCardOpen(false)}
                        >
                          Cancel
                        </Button>
                        <Button variant="solid" size="sm">
                          Submit
                        </Button>
                      </Flex>
                    </Flex>
                  </Flex>
                </Stack>
              </CardBody>
            </Card>
          </Box>
          <Flex sx={pagesNumberContainerStyle} pt={8}>
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
          <Box pt={10}>
            <Box>
              <EditPublicationCard
                posterImage={FundsReport2022}
                posterTitle="2022 Spring Top-40 Money Managers Report"
                posterSubTitle="Benefits Canada"
                pdfFileName="2022-06_Top-100-PensionFunds_Report.pdf"
                imageFileName="2022-06_Top-100-PensionFunds_Image.jpg"
              />
            </Box>
            <Box pt={4}>
              <EditPublicationCard
                posterImage={MoneyManagersReport2022}
                posterTitle="2022 Spring Top-40 Money Managers Report"
                posterSubTitle="Benefits Canada"
                pdfFileName="2022-05_Top-40-MoneyManagers1_Report.pdf"
                imageFileName="2022-05_Top-40-MoneyManagers1_Report.jpg"
              />
            </Box>
            <Box pt={4}>
              <EditPublicationCard
                posterImage={CiinOverview2021}
                posterTitle="2021 CIIN Overview"
                posterSubTitle="CIIN"
                pdfFileName="2022-06_Top-100-PensionFunds_Report.pdf"
                imageFileName="2022-06_Top-100-PensionFunds_Image.jpg"
              />
            </Box>
            <Box pt={4}>
              <EditPublicationCard
                posterImage={CapSuppliersReport2021}
                posterTitle="2021 CAP Suppliers Report"
                posterSubTitle="Benefits Canada"
                pdfFileName="2022-06_Top-100-PensionFunds_Report.pdf"
                imageFileName="2022-06_Top-100-PensionFunds_Image.jpg"
              />
            </Box>
            <Box pt={4}>
              <EditPublicationCard
                posterImage={MoneyManagersReport2021}
                posterTitle="2021 Fall Top-40 Money Managers Report"
                posterSubTitle="CIIN"
                pdfFileName="2022-06_Top-100-PensionFunds_Report.pdf"
                imageFileName="2022-06_Top-100-PensionFunds_Image.jpg"
              />
            </Box>
            <Box pt={4}>
              <EditPublicationCard
                posterImage={PlansReport2021}
                posterTitle="2021 Top-50 DC Plans Report"
                posterSubTitle="Benefits Canada"
                pdfFileName="2022-06_Top-100-PensionFunds_Report.pdf"
                imageFileName="2022-06_Top-100-PensionFunds_Image.jpg"
              />
            </Box>
          </Box>
          <Flex align="center" justifyContent="center" pt={6} pb="50px">
            <Button variant="outlineSolid" size="sm">
              Load More
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default EditPublications;
