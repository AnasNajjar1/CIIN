import React from "react";
import Field, { PropsField } from "./Field";
import { inputIconStyle, inputStyle } from "./styles";
import {
  Icon,
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";

type CustomInputProps = React.ComponentProps<typeof ChakraInput> & {
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
};
type Props = CustomInputProps & PropsField;

const CustomInput = React.forwardRef(
  ({ leftIcon, rightIcon, ...rest }: CustomInputProps, ref) => {
    const { sx, ...inputProps } = rest || {};
    return (
      <InputGroup ref={ref}>
        {leftIcon && (
          <InputLeftElement pointerEvents="none">
            <Icon sx={inputIconStyle} as={leftIcon} />
          </InputLeftElement>
        )}
        <ChakraInput
          sx={{ ...inputStyle, ...sx }}
          width="270px"
          height="40px"
          {...inputProps}
        />
        {rightIcon && (
          <InputRightElement pointerEvents="none">
            <Icon sx={inputIconStyle} as={rightIcon} />
          </InputRightElement>
        )}
      </InputGroup>
    );
  },
);

const InputField = (props: Props) => {
  return <Field {...props} Input={CustomInput} />;
};
export default InputField;
