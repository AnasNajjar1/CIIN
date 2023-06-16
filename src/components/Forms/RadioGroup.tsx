import React from "react";
import {
  Radio,
  RadioGroup as RadioGroupChakra,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Option } from "../../utils/constantsTypes";
import { PropsField } from "./Field";
import { useFormContext } from "react-hook-form";
import InputLabel from "../Shared/InputLabel";
type CustomRadioGroupProps = React.ComponentProps<typeof RadioGroupChakra> & {
  radios: Option[];
};
type Props = CustomRadioGroupProps & PropsField;
const RadioGroup = ({ radios, label, name, ...rest }: Props) => {
  const { register } = useFormContext();
  return (
    <RadioGroupChakra defaultValue={radios[0].value} {...rest}>
      {label && <InputLabel>{label}</InputLabel>}
      <Stack direction="row">
        {radios.map((radio) => (
          <Radio key={radio.value} value={radio.value} {...register(name)}>
            <Text textStyle="sm" fontWeight="400">
              {radio.label}
            </Text>
          </Radio>
        ))}
      </Stack>
    </RadioGroupChakra>
  );
};

export default RadioGroup;
