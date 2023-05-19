import React from "react";
import { Button as ButtonItem, Flex, Icon, Text } from "@chakra-ui/react";

type ButtonProps = {
  variant: string;
  size: string;
  text: string;
  click: any;
  direction: string;
  icon: any;
};

const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  text,
  click,
  direction,
  icon,
}) => {
  return (
    <ButtonItem variant={variant} size={size} onClick={click}>
      <Flex align="center">
        {direction === "right" && (
          <>
            <Text pr={2} fontFamily="body">
              {text}
            </Text>
            <Icon as={icon} />
          </>
        )}
        {direction === "left" && (
          <>
            <Icon as={icon} />
            <Text pl={2} fontFamily="body">
              {text}
            </Text>
          </>
        )}
      </Flex>
    </ButtonItem>
  );
};
export default Button;
