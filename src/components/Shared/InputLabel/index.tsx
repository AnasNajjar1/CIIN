import React from "react";
import { Text } from "@chakra-ui/react";
import { styles } from "./styles";

const InputLabel = ({
  sx,
  children,
  required,
  ...rest
}: React.ComponentProps<typeof Text> & { required: boolean }) => {
  return (
    <Text sx={{ styles, ...sx }} {...rest}>
      {children}
      {required && (
        <Text fontSize="14px" fontWeight="700" as="sup">
          *
        </Text>
      )}
    </Text>
  );
};

export default InputLabel;
