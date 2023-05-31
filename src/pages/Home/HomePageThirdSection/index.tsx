import { Flex, Text, Icon, Box, Image } from "@chakra-ui/react";
import { ArrowLeft, ArrowRight } from "iconoir-react";
import React from "react";
import Slider from "react-slick";
import AsiIcon from "../../../assets/asi_icon.svg";
import CenturionIcon from "../../../assets/centurion_icon.svg";
import PhnIcon from "../../../assets/phn_icon.svg";
import FcIcon from "../../../assets/fc_icon.svg";
import BrIcon from "../../../assets/br_icon.svg";
import { iconStyle, textStyle } from "./styles";
import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePageThirdSection: React.FC = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    centerMode: true,
    centerPadding: "5px",
    slidesToShow: 4,
    prevArrow: (
      <Icon sx={iconStyle} as={ArrowLeft} _hover={{ color: "blue.500" }} />
    ),
    nextArrow: (
      <Icon
        sx={iconStyle}
        as={ArrowRight}
        _hover={{ color: "blue.500" }}
        ml="15px"
      />
    ),
  };

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
          <Slider {...settings} className="slider">
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
              <Image src={FcIcon} alt="Fiera icon" width="100px" />
            </Box>
            <Box>
              <Image src={BrIcon} alt="Black Rock icon" width="150px" />
            </Box>
          </Slider>
        </Flex>
      </Flex>
    </>
  );
};
export default HomePageThirdSection;
