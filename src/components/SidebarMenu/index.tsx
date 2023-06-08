import { Box, Image, Flex, Heading, VStack } from "@chakra-ui/react";
import { sidebarMenuList } from "../../utils/constants.ts";
import { sidebarMenuListType } from "../../utils/constantsTypes.ts";
import LogOutIcon from "../../assets/menuIcons/log-out.svg";
import SwapIcon from "../../assets/menuIcons/swap.svg";
import SearchIcon from "../../assets/menuIcons/search.svg";
import CiinBlueIcon from "../../assets/ciin-blue-logo.svg";

interface SidebarMenuProps {
  handleClickSwap: () => void;
  isOpen: boolean;
}

export const SidebarMenu = ({ handleClickSwap, isOpen }: SidebarMenuProps) => {
  return (
    <Box
      bg="white"
      h="100%"
      w="100%"
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "sticky",
        boxShadow:
          "0px 2px 6px rgba(0, 0, 0, 0.1), 0px 4px 48px rgba(163, 163, 163, 0.1)",
      }}
    >
      <Flex justifyContent={"center"}>
        <Box
          p="20px 40px 20px 20px"
          sx={{ display: isOpen ? "block" : "none" }}
        >
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
          <Box p="15px 0px" sx={{ display: isOpen ? "block" : "none" }}>
            <Image src={SearchIcon} cursor="pointer" alt="search-icon" />
          </Box>
        </Box>
      </Flex>
      <VStack mx="auto" spacing={25} alignItems="baseline" mt="250px" >
        {sidebarMenuList.map((el: sidebarMenuListType, index: number) => (
          <Flex key={index} cursor="pointer" align="center">
            <Image
              src={el.icon}
              alt={`${el.icon}-icon`}
              sx={{ pr: isOpen ? "11px" : "0px" }}
            />
            <Heading
              as="h4"
              fontSize={16}
              fontWeight={600}
              pt="2px"
              color="blue.600"
              display={isOpen ? "block" : "none"}
            >
              {el.title}
            </Heading>
          </Flex>
        ))}
      </VStack>

      <Flex cursor="pointer" pb="20px" mx="auto" mt="200px" >
        <Image
          src={LogOutIcon}
          alt="LogOutIcon-icon"
          sx={{ pr: isOpen ? "11px" : "0px" }}
        />
        <Heading
          as="h4"
          fontSize={16}
          fontWeight={600}
          pt="2px"
          color="blue.600"
          display={isOpen ? "block" : "none"}
        >
          Log out
        </Heading>
      </Flex>
    </Box>
  );
};

export default SidebarMenu;
