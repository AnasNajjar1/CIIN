import React from "react";
import { stylesWrapperDatePicker } from "./styles";
import { Input, Box, Text } from "@chakra-ui/react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { PropsField } from "./Field";
import { useFormContext, Controller } from "react-hook-form";
import InputLabel from "../Shared/InputLabel";
const CustomInput = React.forwardRef((props: any, ref) => {
  return <Input ref={ref} {...props} />;
});
type Props = React.ComponentProps<typeof ReactDatePicker> &
  PropsField & { inputProps?: React.ComponentProps<typeof CustomInput> };
const DatePicker = ({
  label,
  inputProps,
  name,
  helperText,
  ...rest
}: Props) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Box sx={stylesWrapperDatePicker}>
      {label && <InputLabel>AsOfDate</InputLabel>}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <ReactDatePicker
            onChange={(date) => field.onChange(date)}
            selected={field.value}
            dateFormat="dd/MM/yyyy"
            shouldCloseOnSelect={false}
            customInput={<CustomInput {...inputProps} />}
          />
        )}
        {...rest}
      />
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
    </Box>
  );
};

export default DatePicker;
