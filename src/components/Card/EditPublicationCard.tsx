import {
  Flex,
  Box,
  Text,
  Image,
  Input,
  Card,
  CardBody,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  editOrDeleteIconStyle,
  editTitleStyle,
  fileImageStyle,
  fileNameStyle,
  inputStyle,
  inputTitleStyle,
  posterStyle,
  posterSubTitleStyle,
  posterTitleStyle,
  smallIconStyle,
  subInputTextStyle,
} from "../../pages/EditPublications/styles";
import FilledPage from "../../assets/page.svg";
import EmptyPage from "../../assets/empty-page.svg";
import EditIcon from "../../assets/edit.svg";
import DeleteIcon from "../../assets/delete.svg";
import EyeIcon from "../../assets/eye.svg";
import Button from "../../components/Shared/Button";

type EditPublicationProps = {
  posterImage: any;
  posterTitle: string;
  posterSubTitle: string;
  pdfFileName: string;
  imageFileName: string;
};

const EditPublicationCard = ({
  posterImage,
  posterTitle,
  posterSubTitle,
  pdfFileName,
  imageFileName,
}: EditPublicationProps) => {
  const [cardOpen, setCardOpen] = useState(false);

  return (
    <>
      <Card>
        <CardBody>
          <Stack>
            <Flex direction="column" align="center" width="100%">
              {/* Upper Side */}
              <Flex justify="space-between" width="100%">
                <Flex width="70%">
                  <Image sx={posterStyle} src={posterImage} />
                  <Flex direction="column" alignSelf="flex-start" pl={3}>
                    <Box>
                      <Text sx={posterTitleStyle}>{posterTitle}</Text>
                    </Box>
                    <Box pt={3}>
                      <Text sx={posterSubTitleStyle}>{posterSubTitle}</Text>
                    </Box>
                  </Flex>
                </Flex>
                <Flex pr={4}>
                  <Flex direction="column" alignSelf="flex-start">
                    <Flex align="center">
                      <Image
                        sx={fileImageStyle}
                        src={FilledPage}
                        alt="filled page icon"
                      />
                      <Text sx={fileNameStyle} pl={2}>
                        {pdfFileName}
                      </Text>
                    </Flex>
                    <Flex align="center" pt={3}>
                      <Image
                        sx={fileImageStyle}
                        src={EmptyPage}
                        alt="empty page icon"
                      />
                      <Text sx={fileNameStyle} pl={2}>
                        {imageFileName}
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex alignSelf="center" pl={8} pb={{ lg: 8 }}>
                    <Box cursor="pointer">
                      <Image sx={smallIconStyle} src={EyeIcon} />
                    </Box>
                    <Box pl={2} cursor="pointer">
                      <Image
                        sx={editOrDeleteIconStyle}
                        src={EditIcon}
                        onClick={() => setCardOpen(true)}
                      />
                    </Box>
                    <Box pl={2} cursor="pointer">
                      <Image sx={editOrDeleteIconStyle} src={DeleteIcon} />
                    </Box>
                  </Flex>
                </Flex>
              </Flex>
              {/* Bottom Side */}
              <Flex
                direction="column"
                align="center"
                width={{ lg: "80%", xl: "60%" }}
                pt={4}
                display={cardOpen ? "flex" : "none"}
              >
                <Text sx={editTitleStyle}>Edit publication</Text>
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
                        placeholder={posterTitle}
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
                        placeholder={posterSubTitle}
                        _placeholder={{ color: "gray.500" }}
                      />
                    </Box>
                  </Flex>
                  <Flex align="center" justify="space-between" pt={3}>
                    <Box width="20%">
                      <Text sx={inputTitleStyle} pb={{ base: 12, lg: 10 }}>
                        Image file
                      </Text>
                    </Box>
                    <Flex direction="column" width={{ base: "75%", md: "85%" }}>
                      <Input
                        sx={inputStyle}
                        type="text"
                        placeholder={imageFileName}
                        _placeholder={{ color: "#2676C5" }}
                      />
                      <Text sx={subInputTextStyle} pt={2}>
                        Max file size: 2Mb, allowed file format: jpg, png, gif
                        <br /> Recommended cover image size: 250x380 (or the
                        other in proportion to 25:38){" "}
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex align="center" justify="space-between" pt={3}>
                    <Box width="20%">
                      <Text sx={inputTitleStyle} pb={{ base: 5, md: 7 }}>
                        Pdf file
                      </Text>
                    </Box>
                    <Flex direction="column" width={{ base: "75%", md: "85%" }}>
                      <Input
                        sx={inputStyle}
                        type="text"
                        placeholder={pdfFileName}
                        _placeholder={{ color: "#2676C5" }}
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
                    onClick={() => setCardOpen(false)}
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
    </>
  );
};
export default EditPublicationCard;
