import { Box } from "@chakra-ui/react";
import { DataTransferBoth } from "iconoir-react";

export const SidebarMenu = () => {
  return (
    <Box bg="white" h="100%" w="100%">
        <Box p="28px 28px 28px 28px">
            <DataTransferBoth/>
        </Box>
    </Box>
  );
};

export default SidebarMenu;