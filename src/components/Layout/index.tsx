import { Box } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import SidebarMenu from "../SidebarMenu";

export const Layout = () => {
  return (
    <Flex h="100%">
      <Box h="100%" w="80px">
        <SidebarMenu />
      </Box>
      <Box h="100%" w="calc(100% - 80px)" bg="#F5F5F5">
        <Outlet />
      </Box>
    </Flex>
  );
};

export default Layout;