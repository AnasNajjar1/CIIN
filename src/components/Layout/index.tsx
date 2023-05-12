import { Box } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import SidebarMenu from "../SidebarMenu";
import Footer from "../Footer";

export const Layout = () => {
  return (
    <Flex h="100%">
      <Box h="calc(100% - 150px)" w="80px">
        <SidebarMenu />
      </Box>
      <Box h="calc(100% - 150px)" w="calc(100% - 80px)" bg="#F5F5F5">
        <Outlet />
      </Box>
      <Box position="fixed" bottom={0} w="100%">
        <Footer />
      </Box>
    </Flex>
  );
};

export default Layout;
