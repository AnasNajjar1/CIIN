import { Flex, Icon, Image, Text } from "@chakra-ui/react";
import Button from "../Shared/Button";
import CiinLogo from "../../assets/ciin-logo.png";
import React, { useState } from "react";
import { ArrowRight } from "iconoir-react";
import { textContainerStyle, textStyle } from "./styles";
import AuthModal from "../AuthModal";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState("login");

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <AuthModal
        isOpen={isOpen}
        onClose={closeModal}
        view={view}
        switchView={(viewType) => setView(viewType)}
      />
      <Flex justify="center" p="22px 10px" bg="white" height="90px">
        <Flex width="70%" justify="space-between">
          <Flex width="60%" justify="space-between">
            <Image
              pb={2}
              height="53.68px"
              src={CiinLogo}
              alt="ciin-logo"
              cursor="pointer"
            />
            <Flex sx={textContainerStyle}>
              <Text sx={textStyle}>Publications</Text>
              <Text sx={textStyle}>Faq</Text>
              <Text sx={textStyle}>Contact Us</Text>
            </Flex>
          </Flex>
          <Flex direction="column" align="flex-end" flexGrow={1}>
            <Button
              variant="outline"
              size="sm"
              rightIcon={<Icon as={ArrowRight} />}
              onClick={() => {
                setView("login");
                openModal();
              }}
            >
              Login
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default Header;
