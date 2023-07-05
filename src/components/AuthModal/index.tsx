import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Person from "../../assets/menuIcons/person.svg";
import SignUp from "../SignUp";
import Login from "../Login";
import {
  imageContainerStyle,
  textHeadingStyle,
  textSubHeadingStyle,
} from "./styles";
import GlobalModal from "../Shared/GlobalModal";

type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
  view: string;
  switchView: (viewType: string) => void;
};

const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  view,
  switchView,
}) => {
  return (
    <>
      <GlobalModal
        isOpen={isOpen}
        onClose={onClose}
        modalHeader={
          <Flex align="center">
            <Flex sx={imageContainerStyle}>
              <Image color="blue.500" width="14px" height="18px" src={Person} />
            </Flex>
            <Text sx={textHeadingStyle}>
              {view === "signup" && "Sign up"}
              {view === "login" && "Login"}
            </Text>
          </Flex>
        }
      >
        <Box pb={6}>
          <Text sx={textSubHeadingStyle} textAlign={"center"}>
            {view === "signup" && "Sign Up for a demonstration"}
            {view === "login" && "Please login to have access to all features"}
          </Text>
        </Box>
        <Flex direction="column" align="center" mt="25px">
          {view === "signup" && (
            <SignUp switchLogin={() => switchView("login")} />
          )}
          {view === "login" && (
            <Login
              switchSignUp={() => switchView("signup")}
              closeModal={onClose}
            />
          )}
        </Flex>
      </GlobalModal>
    </>
  );
};
export default AuthModal;
