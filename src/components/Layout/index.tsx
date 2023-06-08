import { useState } from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import SidebarMenu from "../SidebarMenu";
import Footer from "../Footer";
import { appBackgroundColor } from "../../utils/constants.ts";
import Header from "../Header/index.tsx";
import DashboardHeader from "../DashboardHeader";
const variants = {
  open: { width: 320 },
  closed: { width: 80 },
};
export const Layout = () => {
  const location = useLocation();
  const [isOpenSideMenu, setIsOpenSideMenu] = useState<boolean>(false);
  const isHomeView: boolean = location.pathname.includes("/user");
  const onClickSwap = () => {
    setIsOpenSideMenu(!isOpenSideMenu);
  };

  return (
    <Grid
      templateAreas={`"header header"
                  "nav main"
                  "footer footer"`}
      gridTemplateRows={"minmax(min-content, 90px) auto 150px"}
      gridTemplateColumns={"auto 1fr"}
      h="100%"
    >
      <GridItem area={"header"}>
        {!isHomeView && (
          <Box position="fixed" top={0} w="100%" zIndex={10}>
            <Header />
          </Box>
        )}
      </GridItem>

      <GridItem area={"nav"}>
        {isHomeView && (
          <motion.aside
            initial={{ width: 80, height: "100%" }}
            animate={isOpenSideMenu ? "open" : "closed"}
            exit={{
              width: 80,
              transition: { delay: 0.7, duration: 0.3 },
            }}
            variants={variants}
          >
            <SidebarMenu
              isOpen={isOpenSideMenu}
              handleClickSwap={onClickSwap}
            />
          </motion.aside>
        )}
      </GridItem>
      <GridItem area={"main"} bg={appBackgroundColor}>
        {isHomeView && <DashboardHeader />}
        <Outlet />
      </GridItem>
      <GridItem area={"footer"}>
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default Layout;
