import React from "react";
import { Text } from "@chakra-ui/react";
import { styles } from "./styles";

const InputLabel = ({
  sx,
  children,
  ...rest
}: React.ComponentProps<typeof Text>) => {
  return (
    <Text sx={{ styles, ...sx }} {...rest}>
      {children}
    </Text>
  );
};

export default InputLabel;
