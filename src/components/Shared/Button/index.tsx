import React from "react";
import { Button as ButtonChakra, Text } from "@chakra-ui/react";

const Button: React.FC<React.ComponentProps<typeof ButtonChakra>> = ({
  children,
  ...rest
}) => {
  return (
    <ButtonChakra display="flex" alignItems="center" {...rest}>
      <Text fontFamily="body">{children}</Text>
    </ButtonChakra>
  );
};
export default Button;
