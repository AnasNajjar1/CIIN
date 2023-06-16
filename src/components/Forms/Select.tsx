import React from "react";
import { Select as SelectChakra } from "@chakra-ui/react";
import Field, { PropsField } from "./Field";
import { Option } from "../../utils/constantsTypes";
type CustomSelectProps = React.ComponentProps<typeof SelectChakra> & {
  options: Option[];
};
const CustomSelect = React.forwardRef(
  ({ options, ...rest }: CustomSelectProps, ref) => {
    return (
      <SelectChakra {...rest} ref={ref}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectChakra>
    );
  },
);
type Props = CustomSelectProps & PropsField;
const Select = (props: Props) => {
  return <Field {...props} Input={CustomSelect} />;
};

export default Select;
