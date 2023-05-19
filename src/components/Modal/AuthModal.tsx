import {
  Box,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import Person from "../../assets/menuIcons/person.svg";
import Button from "../Button";
import { ArrowRight } from "iconoir-react";
import React, { FormEvent, useState } from "react";
import SignUp from "../SignUp";
import Login from "../Login";
import {
  imageContainerStyle,
  textFooterStyle,
  textHeadingStyle,
  textSubHeadingStyle,
} from "./styles";

type AuthModalProps = {
  isOpen: boolean;
  onClose: any;
  view: string;
  setView: any;
};

const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  view,
  setView,
}) => {
  const [error, setError] = useState("");

  const [loginForm, setLoginForm] = useState({
    login: "",
    password: "",
  });

  const onChangeLoginForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const [signUpForm, setSignUpForm] = useState({
    name: "",
    title: "",
    company: "",
    phone: "",
    email: "",
  });

  const onChangeSignUpForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    if (view === "signup") {
      if (signUpForm.name === "") {
        setError("name cannot be empty");
        return;
      }
      if (signUpForm.email === "") {
        setError("email cannot be empty");
        return;
      }

      // Handle sign up logic
    } else if (view === "login") {
      if (loginForm.password.length < 8) {
        setError("password cannot be less than 8 characters");
        return;
      }
      // Handle login logic
    }
  };

  return (
    <>
      <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent alignItems="center">
          <ModalHeader pt="50px">
            <Flex align="center">
              <Flex sx={imageContainerStyle}>
                <Image
                  color="blue.500"
                  width="14px"
                  height="18px"
                  src={Person}
                />
              </Flex>
              <Text sx={textHeadingStyle}>
                {view === "signup" && "Sign up"}
                {view === "login" && "Login"}
              </Text>
            </Flex>
          </ModalHeader>
          <ModalCloseButton color="blue.800" width="16.33px" height="16.33px" />
          <ModalBody>
            <Box pb={6}>
              <Text sx={textSubHeadingStyle}>
                {view === "signup" && "Sign Up for a demonstration"}
                {view === "login" &&
                  "Please login to have access to all features"}
              </Text>
            </Box>
            <Flex direction="column" align="center" mt="25px">
              {view === "signup" && <SignUp onChange={onChangeSignUpForm} />}
              {view === "login" && <Login onChange={onChangeLoginForm} />}
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Box pb={view === "signup" ? "85px" : "0px"}>
              <Button
                variant="solid"
                size="md"
                text={view === "login" ? "Login" : "Sign up"}
                direction="right"
                icon={ArrowRight}
                click={handleSubmit}
              />
            </Box>
          </ModalFooter>
          {view === "login" && (
            <Flex p="30px 0px 50px 0px">
              <Text sx={textFooterStyle} color="gray.500" pr={1}>
                Have no account?
              </Text>
              <Text
                sx={textFooterStyle}
                color="#2676C5"
                textDecoration="underline"
                onClick={() => setView("signup")}
              >
                Sign up
              </Text>
            </Flex>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
export default AuthModal;
