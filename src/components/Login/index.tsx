import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { ArrowRight, EyeClose, Lock, User } from "iconoir-react";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../Forms/InputField.tsx";
import { loginSchema } from "../../schemas/login/login.ts";
import { login } from "../../services/api/loginApi.ts";
import { textFooterStyle } from "../AuthModal/styles.tsx";
import Button from "../Shared/Button/index.tsx";
import { ROUTES } from "../../utils/constants.ts";
import useUser from "../../hooks/useUser.tsx";

type LoginProps = {
  switchSignUp: () => void;
  closeModal: () => void;
};

const Login = ({ switchSignUp, closeModal }: LoginProps) => {
  const { storeCurrentUser } = useUser();
  const navigate = useNavigate();
  const methods = useForm({
    resolver: yupResolver(loginSchema),
  });
  const { handleSubmit } = methods;
  const { mutate: authLogin } = useMutation(login, {
    onSuccess: (response) => {
      storeCurrentUser({ isConnected: true, token: response.token, userDetails: response.user });
      closeModal();
      navigate(`/${ROUTES.USER}/${ROUTES.DASHBOARD}`);
    },
  });
  const onSubmit = (data: any) => {
    authLogin(data);
  };

  return (
    <FormProvider {...methods}>
      <Box mb={6}>
        <InputField
          leftIcon={User}
          name="username"
          label="Email"
          placeholder="Email"
        />
      </Box>
      <Box mb={6}>
        <InputField
          rightIcon={EyeClose}
          leftIcon={Lock}
          name="password"
          label="Password"
          placeholder="Enter your password"
          type="password"
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
    </FormProvider>
  );
};
export default Login;
