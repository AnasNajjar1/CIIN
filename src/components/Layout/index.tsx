import { useState } from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import SidebarMenu from "../SidebarMenu";
import Footer from "../Footer";
import { appBackgroundColor } from "../../utils/constants.ts";
import Header from "../Header/index.tsx";
import DashboardHeader from "../DashboardHeader";

export const Layout = () => {
  const location = useLocation();
  const [isOpenSideMenu, setIsOpenSideMenu] = useState<boolean>(false);
  const onClickSwap = () => {
    setIsOpenSideMenu(!isOpenSideMenu);
  };
  const isHomeView: boolean = location.pathname.includes("/user");

  return (
    <>
      <Box
        as="button"
        position={"fixed"}
        top="20px"
        bg="transparent"
        w={"40px"}
        h="20px"
        color={"black"}
        onClick={onClickSwap}
        display={{ base: "flex", md: "none" }}
        flexDirection={"column"}
        justifyContent={"space-between"}
        left="10px"
        zIndex="10"
      >
        <Box h="4px" w="100%" bg="blue.800" borderRadius={"8px"}></Box>
        <Box h="4px" w="100%" bg="blue.800" borderRadius={"8px"}></Box>
        <Box h="4px" w="100%" bg="blue.800" borderRadius={"8px"}></Box>
      </Box>
      <Grid
        templateAreas={`"header header"
                  "nav main"
                  "footer footer"`}
        gridTemplateRows={"minmax(min-content, 90px) auto 150px"}
        gridTemplateColumns={"auto 1fr"}
        h="100%"
      >
        <GridItem area={"header"} bg={appBackgroundColor}>
          {!isHomeView && (
            <Box position="fixed" top={0} w="100%" zIndex={10}>
              <Header />
            </Box>
          )}
        </GridItem>

        <GridItem area={"nav"} w={{ md: "auto" }}>
          {isHomeView && (
            <SidebarMenu
              isOpen={isOpenSideMenu}
              handleClickSwap={onClickSwap}
            />
          )}
        </GridItem>
        <GridItem
          area={"main"}
          bg={appBackgroundColor}
          px={{ base: "10px", md: "0" }}
        >
          {isHomeView && <DashboardHeader />}
          <Outlet />
        </GridItem>
        <GridItem area={"footer"} px={{ base: "10px", md: "0" }}>
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
};

export default Layout;
