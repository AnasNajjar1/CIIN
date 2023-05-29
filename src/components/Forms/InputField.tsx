import { Flex, Icon, Input, Text } from "@chakra-ui/react";
import { inputIconStyle, inputStyle, inputLabelStyle } from "./styles";
import { UseFormRegister, FieldErrorsImpl } from "react-hook-form";

type InputFieldProps = {
  rightIcon?: any;
  leftIcon?: any;
  label?: string;
  type?: string;
  placeholder?: string;
  helperText?: string;
  register: UseFormRegister<any>;
  fieldName: string;
  errors: Partial<FieldErrorsImpl<any>>;
};

const InputField = ({
  rightIcon,
  leftIcon,
  label,
  placeholder,
  helperText,
  type = "text",
  register,
  fieldName,
  errors,
}: InputFieldProps) => {
  return (
    <>
      <Flex direction="column" position="relative">
        {label && <Text sx={inputLabelStyle}>{label}</Text>}
        {leftIcon && <Icon sx={inputIconStyle} as={leftIcon} left="10px" />}
        {rightIcon && <Icon sx={inputIconStyle} as={rightIcon} left="212px" />}
        <Input
          sx={inputStyle}
          placeholder={placeholder}
          type={type}
          pl={leftIcon ? "40px" : "12px"}
          pr={rightIcon ? "40px" : "12px"}
          {...register(fieldName)}
        />
        {helperText && !errors[fieldName] && (
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
        {errors[fieldName] && (
            <Text
                color="red.500"
                fontFamily="heading"
                fontSize="12px"
                fontWeight={400}
                pt={1}
                lineHeight="16px"
            >
              {errors[fieldName]?.message as any}
            </Text>
        )}
      </Flex>
    </>
  );
};
;
export default InputField;
