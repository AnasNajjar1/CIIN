import { Box, Image } from "@chakra-ui/react";
import { sidebarIconContainer, sidebarContainer } from "./styles.tsx";
import { sidebarMenuList } from "../../utils/constants.ts";
import { sidebarMenuListType } from "../../utils/constantsTypes.ts";
import LogOutIcon from "../../assets/menuIcons/log-out.svg";
import SwapIcon from "../../assets/menuIcons/swap.svg";

interface SidebarIconsMenuProps {
  handleClickSwap: () => void;
}

export const SidebarIconsMenu = ({ handleClickSwap }: SidebarIconsMenuProps) => {
  return (
    <Box bg="white" h="100%" w="100%" sx={sidebarContainer}>
      <Box pb={20}>
        <Box sx={sidebarIconContainer}>
          <Image src={SwapIcon} alt="swap-icon" cursor="pointer" onClick={handleClickSwap} />
        </Box>
      </Box>
      {sidebarMenuList.map((el: sidebarMenuListType, index: number) => (
        <Box sx={sidebarIconContainer} key={index}>
          <Image src={el.icon} cursor="pointer" alt={`${el.icon}-icon`} />
        </Box>
      ))}
      <Box pt={20}>
        <Box sx={sidebarIconContainer}>
          <Image src={LogOutIcon} cursor="pointer" alt="LogOutIcon-icon" />
        </Box>
      </Box>
    </Box>
  );
};

export default SidebarIconsMenu;