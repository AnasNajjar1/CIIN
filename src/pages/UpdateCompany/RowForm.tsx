import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import InputLabel from "../../components/Shared/InputLabel";
interface Props {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}
const RowForm = ({ children, label, required = false }: Props) => {
  return (
    <Flex align="center">
      <Box width="25%">
        <InputLabel required={required}>{label}</InputLabel>
      </Box>
      {children}
    </Flex>
  );
};

export default RowForm;
