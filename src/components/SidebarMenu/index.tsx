import {
  Box,
  Image,
  Flex,
  Heading,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import { sidebarMenuList } from "../../utils/constants.ts";
import { sidebarMenuListType } from "../../utils/constantsTypes.ts";
import LogOutIcon from "../../assets/menuIcons/log-out.svg";
import SwapIcon from "../../assets/menuIcons/swap.svg";
import SearchIcon from "../../assets/menuIcons/search.svg";
import CiinBlueIcon from "../../assets/ciin-blue-logo.svg";
import { stylesSidebarMenu } from "./styles.ts";
interface SidebarMenuProps {
  handleClickSwap: () => void;
  isOpen: boolean;
}

export const SidebarMenu = ({ handleClickSwap, isOpen }: SidebarMenuProps) => {
  const [isLargerThanMD] = useMediaQuery("(min-width: 768px)");
  return (
    <Box
      bg="white"
      h="100%"
      w={{ base: "320px", md: isOpen ? "320px" : "80px" }}
      sx={{
        ...stylesSidebarMenu,
        transform: [
          isOpen ? "translateX(0)" : "translateX(-100%)",
          "translateX(0)",
        ],
        boxShadow: {
          base: isOpen ? "0px -2px 19px 0px #888888" : "none",
          md: "none",
        },
      }}
      position={{ base: "fixed", md: "static" }}
      zIndex={10}
      top={0}
      className={isOpen && !isLargerThanMD ? "sidebar-menu-open-mobile" : ""}
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
      <VStack
        mx="auto"
        spacing={25}
        alignItems="baseline"
        mt={{ base: "auto", md: "250px" }}
        mb={{ base: "auto", md: "0" }}
      >
        {sidebarMenuList.map((el: sidebarMenuListType, index: number) => (
          <Flex
            key={index}
            cursor="pointer"
            align="center"
            width={{ md: isOpen ? "170px" : "auto" }}
          >
            <Image
              src={el.icon}
              alt={`${el.icon}-icon`}
              pr={{ base: "11px", md: isOpen ? "11px" : "0px" }}
            />
            <Heading
              as="h4"
              fontSize={16}
              fontWeight={600}
              pt="2px"
              color="blue.600"
              display={{ md: isOpen ? "block" : "none" }}
            >
              {el.title}
            </Heading>
          </Flex>
        ))}
      </VStack>
      <Flex
        cursor="pointer"
        pb="20px"
        mx="auto"
        mt={{ base: "0", md: "200px" }}
        width={{ md: isOpen ? "170px" : "auto" }}
      >
        <Image
          src={LogOutIcon}
          alt="LogOutIcon-icon"
          pr={{ base: "11px", md: isOpen ? "11px" : "0px" }}
        />
        <Heading
          as="h4"
          fontSize={16}
          fontWeight={600}
          pt="2px"
          color="blue.600"
          display={{ md: isOpen ? "block" : "none" }}
        >
          Log out
        </Heading>
      </Flex>
    </Box>
  );
};

export default SidebarMenu;
