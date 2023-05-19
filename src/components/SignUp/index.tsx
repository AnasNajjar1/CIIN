import { Flex, Input, Text } from "@chakra-ui/react";
import React from "react";
import { inputStyle, requiredStarTextStyle, textHeaderStyle } from "./styles";

type SignUpProps = {
  onChange: any;
};

const SignUp: React.FC<SignUpProps> = ({ onChange }) => {
  return (
    <>
      <Flex direction="column" mb={6}>
        <Flex>
          <Text sx={textHeaderStyle}>Name</Text>
          <Text sx={requiredStarTextStyle}>*</Text>
        </Flex>
        <Input
          sx={inputStyle}
          required
          name="name"
          placeholder="Type"
          type="text"
          onChange={onChange}
        />
      </Flex>
      <Flex direction="column" mb={6}>
        <Text sx={textHeaderStyle}>Title</Text>
        <Input
          sx={inputStyle}
          name="title"
          placeholder="Type"
          type="text"
          onChange={onChange}
        />
      </Flex>
      <Flex direction="column" mb={6}>
        <Text sx={textHeaderStyle}>Company</Text>
        <Input
          sx={inputStyle}
          name="company"
          placeholder="Type"
          type="text"
          onChange={onChange}
        />
      </Flex>
      <Flex direction="column" mb={6}>
        <Text sx={textHeaderStyle}>Phone</Text>
        <Input
          sx={inputStyle}
          name="phone"
          placeholder="Type"
          type="tel"
          onChange={onChange}
        />
      </Flex>
      <Flex direction="column" mb={6}>
        <Flex>
          <Text sx={textHeaderStyle}>Email</Text>
          <Text sx={requiredStarTextStyle}>*</Text>
        </Flex>
        <Input
          sx={inputStyle}
          required
          name="email"
          placeholder="Type"
          type="email"
          onChange={onChange}
        />
      </Flex>
    </>
  );
};
export default SignUp;
