import React from "react";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

type GlobalModalProps = {
  isOpen: boolean;
  onClose: any;
  children: React.ReactNode;
  modalHeader: any;
};

const GlobalModal = ({
  isOpen,
  onClose,
  modalHeader,
  children,
}: GlobalModalProps) => {
  return (
    <>
      <Modal size="2xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent alignItems="center">
          <ModalHeader pt="50px">{modalHeader}</ModalHeader>
          <ModalCloseButton color="blue.800" width="16.33px" height="16.33px" />
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default GlobalModal;
