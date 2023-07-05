import React, { useContext } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useQueryClient } from "react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import AlertContext from "../../../../store/context/alertContext";
import Button from "../../../../components/Shared/Button";
import InputField from "../../../../components/Forms/InputField";
import { Office } from ".";
import { Box, Flex, Stack } from "@chakra-ui/react";
import InputLabel from "../../../../components/Shared/InputLabel";
import Select from "../../../../components/Forms/Select";
import RowForm from "../../RowForm";

type FormType = "update" | "add";
interface Props {
  data: Office;
  close: () => void;
  type: FormType;
}
const branchOptions = [
  { value: "P", label: "Primary" },
  { value: "S", label: "Secondary" },
];
const countryOptions = [
  { value: "usa", label: "USA" },
  { value: "canada", label: "Canada" },
];

const OfficeForm = ({ data, close, type }: Props) => {
  const queryClient = useQueryClient();
  const alertContext = useContext(AlertContext);
  const methods = useForm({
    values: data,
    // resolver: yupResolver(contactSchema),
  });
  const { handleSubmit, register } = methods;
  return (
    <FormProvider {...methods}>
      <Stack spacing="24px">
        <RowForm label="Branch Office">
          <Select
            options={branchOptions}
            name="branch"
            placeholder="Branch Office"
            width="50%"
          />
        </RowForm>
        <RowForm label="Office Name">
          <InputField name="name" placeholder="Office Name" width="50%" />
        </RowForm>
        <RowForm label="Suite">
          <InputField name="suite" placeholder="Suite" width="50%" />
        </RowForm>
        <RowForm label="Address Line">
          <Stack direction={"row"} width="100%" align={"center"} spacing="24px">
            <Box width="calc(25% - 12px)">
              <InputField name="address_line_1" placeholder="Address Line 1" />
            </Box>
            <Box width="calc(25% - 12px)">
              <InputField name="address_line_2" placeholder="Address Line 2" />
            </Box>
          </Stack>
        </RowForm>
        <RowForm label="Country">
          <Select
            options={countryOptions}
            name="country"
            placeholder="Country"
            width="50%"
          />
        </RowForm>
        <RowForm label="Province/State">
          <Select
            options={countryOptions}
            name="state"
            placeholder="Province/State"
            width="50%"
          />
        </RowForm>
        <RowForm label="City">
          <InputField name="city" placeholder="City" />
        </RowForm>
        <RowForm label="Postal Code">
          <InputField name="postal_code" placeholder="Postal Code" />
        </RowForm>
        <RowForm label="Phone">
          <Stack direction={"row"} width="100%" align={"center"} spacing="24px">
            <Box width="calc(25% - 12px)">
              <InputField name="phone_number_1" placeholder="Phone 1" />
            </Box>
            <Box width="calc(25% - 12px)">
              <InputField name="phone_number_2" placeholder="Phone 2" />
            </Box>
          </Stack>
        </RowForm>
        <RowForm label="Fax">
          <Stack direction={"row"} width="100%" align={"center"} spacing="24px">
            <Box width="calc(25% - 12px)">
              <InputField name="fax_1" placeholder="Fax 1" />
            </Box>
            <Box width="calc(25% - 12px)">
              <InputField name="fax_2" placeholder="Fax 2" />
            </Box>
          </Stack>
        </RowForm>
        <Button
          size="sm"
          variant="outline"
          alignSelf="end"
          onClick={() => {
            console.log("clicked");
            close();
          }}
        >
          Save
        </Button>
      </Stack>
    </FormProvider>
  );
};
export default OfficeForm;
