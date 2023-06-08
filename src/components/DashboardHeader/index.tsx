import { Box, Flex, Image } from "@chakra-ui/react";
import Person from "../../assets/menuIcons/person.svg";
import { bigIconContainerStyle, bigIconStyle } from "./styles";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import Breadcrumb from "../Breadcrumb";

export const DashboardHeader = () => {
  const navigate = useNavigate();

  return (
    <Box p="85px 190px 10px 60px">
      <Flex align="center" justify="space-between" width="100%">
        <Breadcrumb />
        <Flex
          sx={bigIconContainerStyle}
          onClick={() => {
            navigate(`/${ROUTES.USER}/${ROUTES.USERPROFILE}`);
          }}
        >
          <Image sx={bigIconStyle} src={Person} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default DashboardHeader;