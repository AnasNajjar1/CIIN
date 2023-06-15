import { Box, Flex, Image } from "@chakra-ui/react";
import Person from "../../assets/menuIcons/person.svg";
import { bigIconContainerStyle, bigIconStyle } from "./styles";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/constants";
import Breadcrumb from "../Breadcrumb";

type DashboardHeaderProps = {
  headerTitle: string;
};

export const DashboardHeader = ({ headerTitle }: DashboardHeaderProps) => {
  const navigate = useNavigate();

  return (
    <Box p={{ base: "85px 0 0 0", md: "85px 60px 10px 60px" }}>
      <Flex
        align="center"
        justify={headerTitle === "" ? "flex-end" : "space-between"}
        width="100%"
      >
        <Breadcrumb title={headerTitle} />
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
