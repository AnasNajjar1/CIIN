import { Box, Image, Flex, Heading } from "@chakra-ui/react";
import { sidebarIconContainer, sidebarContainer } from "./styles.tsx";
import { sidebarMenuList } from "../../utils/constants.ts";
import { sidebarMenuListType } from "../../utils/constantsTypes.ts";
import LogOutIcon from "../../assets/menuIcons/log-out.svg";
import SwapIcon from "../../assets/menuIcons/swap.svg";
import SearchIcon from "../../assets/menuIcons/search.svg";
import CiinBlueIcon from "../../assets/ciin-blue-logo.svg";

interface SidebarMenuProps {
  handleClickSwap: () => void;
}

export const SidebarMenu = ({ handleClickSwap }: SidebarMenuProps) => {
  return (
    <Box bg="white" h="100%" w="100%" sx={sidebarContainer}>
      <Flex>
        <Box p="20px 40px 20px 20px">
          <Image src={CiinBlueIcon} alt="ciin-blue-icon" />
        </Box>
        <Box>
          <Box p="10px 0px">
            <Image
              src={SwapIcon}
              alt="swap-icon"
              cursor="pointer"
              onClick={handleClickSwap}
            />
          </Box>
          <Box p="15px 0px">
            <Image src={SearchIcon} cursor="pointer" alt="search-icon" />
          </Box>
        </Box>
      </Flex>
      <Box>
        {sidebarMenuList.map((el: sidebarMenuListType, index: number) => (
          <Box sx={sidebarIconContainer} key={index}>
            <Flex cursor="pointer">
              <Image src={el.icon} alt={`${el.icon}-icon`} pr="11px" />
              <Heading
                as="h4"
                fontSize={16}
                fontWeight={600}
                pt="2px"
                color="blue.600"
              >
                {el.title}
              </Heading>
            </Flex>
          </Box>
        ))}
      </Box>

      <Box pb="20px">
        <Box sx={sidebarIconContainer}>
          <Flex cursor="pointer">
            <Image src={LogOutIcon} alt="LogOutIcon-icon" pr="11px" />
            <Heading
              as="h4"
              fontSize={16}
              fontWeight={600}
              pt="2px"
              color="blue.600"
            >
              Log out
            </Heading>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default SidebarMenu;