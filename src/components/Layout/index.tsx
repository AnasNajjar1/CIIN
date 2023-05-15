import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import SidebarIconsMenu from "../SidebarIconsMenu";
import SidebarMenu from "../SidebarMenu";
import Footer from "../Footer";
import { appBackgroundColor } from "../../utils/constants.ts";

export const Layout = () => {
  const [isOpenSideMenu, setIsOpenSideMenu] = useState<boolean>(false);

  const onClickSwap = () => {
    setIsOpenSideMenu(!isOpenSideMenu);
  };

  return (
    <Flex h="100%">
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
      <Box h="calc(100% - 150px)" w="calc(100% - 80px)" bg={appBackgroundColor}>
        <Outlet />
      </Box>
      <Box position="fixed" bottom={0} w="100%">
        <Footer />
      </Box>
    </Flex>
  );
};

export default Layout;