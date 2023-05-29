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

  return (
    <Flex h="100%">
      {!isHomeView && (
        <Box position="fixed" top={0} w="100%">
          <Header />
        </Box>
      )}
      {isHomeView && (
        <>
          {isOpenSideMenu ? (
            <motion.aside
              initial={{ width: 0, height: "calc(100% - 150px)" }}
              animate={{
                width: 320,
              }}
              exit={{
                width: 0,
                transition: { delay: 0.7, duration: 0.3 },
              }}
            >
              <SidebarMenu handleClickSwap={onClickSwap} />
            </motion.aside>
          ) : (
            <motion.aside
              initial={{ width: 0, height: "calc(100% - 150px)" }}
              animate={{
                width: 80,
              }}
              exit={{
                width: 0,
                transition: { delay: 0.7, duration: 0.3 },
              }}
            >
              <SidebarIconsMenu handleClickSwap={onClickSwap} />
            </motion.aside>
          )}
        </>
      )}

      <Box
        h="calc(100% - 150px)"
        w={isHomeView ? "calc(100% - 80px)" : "100%"}
        bg={appBackgroundColor}
      >
        <Outlet />
      </Box>
      <Box position="fixed" bottom={0} w="100%">
        <Footer />
      </Box>
    </Flex>
  );
};

export default Layout;
