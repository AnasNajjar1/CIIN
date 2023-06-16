import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useFormContext } from "react-hook-form";
import InputLabel from "../Shared/InputLabel";
interface Props {
  label?: string;
  name: string;
  Input: React.ReactElement;
  helperText?: React.ReactNode;
}
const Field = ({ label, name, helperText, Input, ...rest }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <Flex direction="column" w="100%">
      {label && <InputLabel>{label}</InputLabel>}
      <Input {...register(name)} {...rest} />
      {helperText && !errors[name] && (
        <Text
          color="gray.500"
          fontFamily="heading"
          fontSize="12px"
          fontWeight={400}
          pt={1}
          lineHeight="16px"
        >
          {helperText}
        </Text>
      )}
      {errors[name] && (
        <Text
          color="red.500"
          fontFamily="heading"
          fontSize="12px"
          fontWeight={400}
          pt={1}
          lineHeight="16px"
        >
          {errors[name]?.message as any}
        </Text>
      )}
    </Flex>
  );
};
export type PropsField = {
  name: string;
  label?: string;
  helperText?: React.ReactNode;
};
export default Field;
