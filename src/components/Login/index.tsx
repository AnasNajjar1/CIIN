import { Flex, Icon, Input, Text } from "@chakra-ui/react";
import { EyeClose, Lock, User } from "iconoir-react";
import React from "react";
import { iconStyle, inputStyle, textHeaderStyle } from "./styles";

type LoginProps = {
  onChange: any;
};

const Login: React.FC<LoginProps> = ({ onChange }) => {
  return (
    <>
      <Flex direction="column" position="relative" mb={6}>
        <Text sx={textHeaderStyle}>Login</Text>
        <Icon sx={iconStyle} as={User} left="212px" />
        <Input
          sx={inputStyle}
          name="login"
          placeholder="John Doe"
          type="text"
          onChange={onChange}
        />
      </Flex>
      <Flex direction="column" position="relative" mb={6}>
        <Text sx={textHeaderStyle}>Password</Text>
        <Icon sx={iconStyle} as={Lock} left="10px" />
        <Icon sx={iconStyle} as={EyeClose} left="212px" />
        <Input
          sx={inputStyle}
          name="password"
          placeholder="Enter your password"
          type="password"
          onChange={onChange}
          pl={10}
        />
        <Text
          color="gray.500"
          fontFamily="heading"
          fontSize="12px"
          fontWeight={400}
          pt={1}
          lineHeight="16px"
        >
          More than 8 characters
        </Text>
      </Flex>
    </>
  );
};
export default Login;
