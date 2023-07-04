import { Flex, Image, Text } from "@chakra-ui/react";
import {
  posterFirstTextStyle,
  posterSecondTextStyle,
  posterStyle,
} from "../../pages/Publications/styles";
import AuthModal from "../AuthModal";
import { useState } from "react";

type PublicationProps = {
  image: any;
  title: string;
  subTitle: string;
  pdfFileName: string;
  connectedUser: boolean;
};

const Publication = ({
  image,
  title,
  subTitle,
  pdfFileName,
  connectedUser,
}: PublicationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Flex align="center" direction="column">
      {!connectedUser && (
        <AuthModal
          isOpen={isOpen}
          onClose={closeModal}
          view="login"
          switchView={() => {}}
          isPublication={!connectedUser}
        />
      )}
      {connectedUser ? (
        <a href={`../src/assets/files/${pdfFileName}.pdf`} target="_blank">
          <Image sx={posterStyle} src={image} />
        </a>
      ) : (
        <Image
          sx={posterStyle}
          src={image}
          onClick={() => {
            openModal();
          }}
        />
      )}
      <Text sx={posterFirstTextStyle} align="center" pt={4}>
        {title}
      </Text>
      <Text sx={posterSecondTextStyle} align="center" pt={1}>
        {subTitle}
      </Text>
    </Flex>
  );
};
export default Publication;
