import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { ArrowRight, EyeClose, Lock, User } from "iconoir-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../Forms/InputField.tsx";
import { loginSchema } from "../../schemas/login/login.ts";
import { login } from "../../services/api/loginApi.ts";
import { textFooterStyle } from "../AuthModal/styles.tsx";
import Button from "../Button";
import { ROUTES } from "../../utils/constants.ts";
import useUser from "../../hooks/useUser.tsx";

type LoginProps = {
  switchSignUp: () => void;
  closeModal: () => void;
};

const Login = ({ switchSignUp, closeModal }: LoginProps) => {
  const { storeCurrentUser } = useUser();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const { mutate: authLogin } = useMutation(login, {
    onSuccess: (response) => {
      storeCurrentUser({ isConnected: true, token: response.token });
      closeModal();
      navigate(`/${ROUTES.USER}/${ROUTES.DASHBOARD}`);
    },
  });
  const onSubmit = (data: any) => {
    authLogin(data);
  };

  return (
    <>
      <Box mb={6}>
        <InputField
          leftIcon={User}
          fieldName="username"
          label="Username"
          placeholder="Username"
          register={register}
          errors={errors}
        />
      </Box>
      <Box mb={6}>
        <InputField
          rightIcon={EyeClose}
          leftIcon={Lock}
          fieldName="password"
          label="Password"
          placeholder="Enter your password"
          type="password"
          register={register}
          errors={errors}
        />
      </Box>

      <Box pt="20px" pb="20px">
        <Button
          variant="solid"
          size="md"
          rightIcon={<Icon as={ArrowRight} />}
          onClick={handleSubmit(onSubmit)}
        >
          Login
        </Button>
      </Box>
      <Flex p="0px 0px 40px 0px">
        <Text sx={textFooterStyle} color="gray.500" pr={1}>
          Have no account?
        </Text>
        <Text
          sx={textFooterStyle}
          color="#2676C5"
          textDecoration="underline"
          onClick={switchSignUp}
        >
          Sign up
        </Text>
      </Flex>
    </>
  );
};
export default Login;
