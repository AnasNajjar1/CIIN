import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Flex } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";
import SidebarIconsMenu from "../SidebarIconsMenu";
import SidebarMenu from "../SidebarMenu";
import Footer from "../Footer";
import { appBackgroundColor } from "../../utils/constants.ts";
import Header from "../Header/index.tsx";

export const Layout = () => {
  const location = useLocation();
  const [isOpenSideMenu, setIsOpenSideMenu] = useState<boolean>(false);
  const isHomeView: boolean = location.pathname.includes("/user");
  const onClickSwap = () => {
    setIsOpenSideMenu(!isOpenSideMenu);
  };
  const variants = {
    open: { width: 320 },
    closed: { width: 80 },
  };
  return (
    <Flex h="100%" flexWrap={"wrap"}>
      {!isHomeView && (
        <Box position="fixed" top={0} w="100%" zIndex={3}>
          <Header />
        </Box>
      )}
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
          {isOpenSideMenu ? (
            <SidebarMenu handleClickSwap={onClickSwap} />
          ) : (
            <SidebarIconsMenu handleClickSwap={onClickSwap} />
          )}
        </motion.aside>
      )}

      <Box flex="1" bg={appBackgroundColor}>
        <Outlet />
      </Box>

      <Footer />
    </Flex>
  );
};

export default Layout;
