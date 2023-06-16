import React from "react";
import { Alert as AlertChakra, Box, Flex, Text } from "@chakra-ui/react";
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
const BodyWarning = () => {
  return (
    <Flex align="center" justify="space-between" w="100%">
      <Flex gap="20px" align="center">
        <WarningTriangle />
        <Text>This is a warning message</Text>
      </Flex>
      <Cancel color="#B26B1A" />
    </Flex>
  );
};
const BodySuccess = () => {
  return (
    <Flex gap="20px" align="center" w="100%">
      <CheckCircle />
      <Text>Your changes were successfully saved.</Text>
    </Flex>
  );
};
interface BodyErrorProps {
  message: React.ReactNode;
  handleRetry: () => void;
}
const BodyError = ({ message, handleRetry }: BodyErrorProps) => {
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
      <Text mt="18px" pr="40px">
        {message}
      </Text>
    </Box>
  );
};
const content = {
  success: <BodySuccess />,
  warning: <BodyWarning />,
  error: (message: React.ReactNode, handleRetry: () => void) => (
    <BodyError message={message} handleRetry={handleRetry} />
  ),
};
const Alert = ({
  message,
  handleRetry,
  status,
  ...rest
}: Props | PropsError) => {
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
        ? content[status](message, handleRetry)
        : content[status]}
    </AlertChakra>
  );
};

export default Alert;
