import React from "react";
import {
  Alert as AlertChakra,
  Box,
  Flex,
  Icon,
  IconButton,
  Text,
} from "@chakra-ui/react";
import {
  Cancel,
  CheckCircle,
  Refresh,
  WarningCircle,
  WarningTriangle,
} from "iconoir-react";
interface Props
  extends Omit<React.ComponentProps<typeof AlertChakra>, "status"> {
  status: "success" | "warning";
}
interface PropsError
  extends Omit<React.ComponentProps<typeof AlertChakra>, "status"> {
  status: "error";
  message: React.ReactNode;
  handleRetry: () => void;
}
const BodyWarning = ({ close }: { close: () => void }) => {
  return (
    <Flex align="center" justify="space-between" w="100%">
      <Flex gap="20px" align="center">
        <WarningTriangle />
        <Text>This is a warning message</Text>
      </Flex>
      <IconButton
        variant="outline"
        px="0"
        borderRadius="50%"
        color="#B26B1A"
        border={"none"}
        minW="24px"
        height="24px"
        backgroundColor="inherit"
        _hover={"none"}
        onClick={close}
      >
        <Icon as={Cancel} color="#B26B1A" w="100%" h="100%" />
      </IconButton>
    </Flex>
  );
};
const BodySuccess = ({ close }: { close: () => void }) => {
  return (
    <Flex gap="20px" align="center" w="100%">
      <CheckCircle />
      <Text>Your changes were successfully saved.</Text>
      <IconButton
        variant="outline"
        px="0"
        borderRadius="50%"
        ml="auto"
        border="none"
        minW="24px"
        height="24px"
        backgroundColor="inherit"
        _hover={"none"}
        onClick={close}
      >
        <Icon as={Cancel} w="100%" h="100%" color="#0E3E25" />
      </IconButton>
    </Flex>
  );
};
interface BodyErrorProps {
  message: React.ReactNode;
  handleRetry: () => void;
  close: () => void;
}
const BodyError = ({ message, handleRetry, close }: BodyErrorProps) => {
  return (
    <Box w="100%">
      <Flex
        align="center"
        justify="space-between"
        w="100%"
        pb="18px"
        borderBottom={"1px solid #f7dedf"}
      >
        <Flex gap="20px" align="center">
          <WarningCircle />
          <Text>This is an error message</Text>
        </Flex>
        <Flex
          gap="8px"
          align="center"
          color="#BF2C31"
          as="button"
          onClick={handleRetry}
        >
          <Text>Try again</Text>
          <Refresh />
        </Flex>
      </Flex>
      <Flex align="center" mt="18px">
        <Text>{message}</Text>
        <IconButton
          variant="outline"
          px="0"
          borderRadius="50%"
          ml="auto"
          border="none"
          minW="24px"
          height="24px"
          backgroundColor="inherit"
          _hover={"none"}
          onClick={close}
        >
          <Icon as={Cancel} w="100%" h="100%" color="#BF2C31" />
        </IconButton>
      </Flex>
    </Box>
  );
};
const content = {
  success: (close: () => void) => <BodySuccess close={close} />,
  warning: (close: () => void) => <BodyWarning close={close} />,
  error: (
    message: React.ReactNode,
    handleRetry: () => void,
    close: () => void,
  ) => <BodyError message={message} handleRetry={handleRetry} close={close} />,
};
const Alert = ({
  message,
  handleRetry,
  status,
  close,
  ...rest
}: (Props | PropsError) & { close: () => void }) => {
  return (
    <AlertChakra
      status={status}
      borderRadius="8px"
      py="17px"
      px="13px"
      w="100%"
      {...rest}
    >
      {status === "error"
        ? content[status](message, handleRetry, close)
        : content[status](close)}
    </AlertChakra>
  );
};

export default Alert;
