import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Button from "../Button";
import { ArrowRight } from "iconoir-react";
import { textFooterStyle } from "../AuthModal/styles.tsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../../schemas/signUp/signUp.ts";
import InputField from "../Forms/InputField.tsx";

type SignUpProps = {
  switchLogin: () => void;
};

const SignUp: React.FC<SignUpProps> = ({ switchLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <>
      <Box mb={6}>
        <InputField
          fieldName="name"
          label="Name"
          placeholder="Name"
          register={register}
          errors={errors}
        />
      </Box>
      <Box mb={6}>
        <InputField
          fieldName="title"
          label="Title"
          placeholder="Title"
          register={register}
          errors={errors}
        />
      </Box>
      <Box mb={6}>
        <InputField
          fieldName="company"
          label="Company"
          placeholder="Company"
          register={register}
          errors={errors}
        />
      </Box>
      <Box mb={6}>
        <InputField
          fieldName="phone"
          label="Phone"
          type="tel"
          placeholder="phone"
          register={register}
          errors={errors}
        />
      </Box>
      <Box mb={6}>
        <InputField
          fieldName="email"
          label="Email"
          type="email"
          placeholder="Email"
          register={register}
          errors={errors}
        />
      </Box>
      <Box pb="20px">
        <Button
          variant="solid"
          size="md"
          text={"Sign up"}
          direction="right"
          icon={ArrowRight}
          click={handleSubmit(onSubmit)}
        />
      </Box>
      <Flex p="0px 0px 40px 0px">
        <Text sx={textFooterStyle} color="gray.500" pr={1}>
          Already have an account?
        </Text>
        <Text
          sx={textFooterStyle}
          color="#2676C5"
          textDecoration="underline"
          onClick={switchLogin}
        >
          Login
        </Text>
      </Flex>
    </>
  );
};
export default SignUp;
