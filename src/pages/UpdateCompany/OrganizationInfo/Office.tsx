import { FormProvider, useForm } from "react-hook-form";
import { Icon, Stack } from "@chakra-ui/react";
import InputField from "../../../components/Forms/InputField";
import Select from "../../../components/Forms/Select";
import { SaveFloppyDisk } from "iconoir-react";
import Button from "../../../components/Shared/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { officeSchema } from "../../../schemas/office";
const Office = () => {
  const methods = useForm({
    resolver: yupResolver(officeSchema),
  });
  const { handleSubmit } = methods;
  return (
    <FormProvider {...methods}>
      <Stack spacing="24px">
        <InputField name="suite" label="Suite" placeholder="Suite" w="100%" />
        <InputField
          name="address1"
          label="Address Line 1"
          placeholder="Address Line 1"
          w="100%"
        />
        <InputField
          name="address2"
          label="Address Line 2"
          placeholder="Address Line 2"
          w="100%"
        />
        <Select
          name="country"
          label="Country"
          placeholder="Country"
          w="100%"
          options={[
            { value: "0", label: "0" },
            { value: "1", label: "1" },
          ]}
        />
        <Select
          name="province"
          label="Province/State"
          placeholder="Province/State"
          w="100%"
          options={[
            { value: "0", label: "0" },
            { value: "1", label: "1" },
          ]}
        />
        <InputField name="city" label="City" placeholder="City" w="100%" />
        <InputField
          name="postalCode"
          label="Postal Code"
          placeholder="Postal Code"
          w="100%"
        />
        <InputField
          name="phone1"
          label="Phone 1"
          placeholder="Phone 1"
          w="100%"
        />
        <InputField
          name="phone2"
          label="Phone 2"
          placeholder="Phone 2"
          w="100%"
        />
        <InputField name="fax" label="Fax" placeholder="Fax" w="100%" />
      </Stack>
      <Button
        size="sm"
        leftIcon={<Icon as={SaveFloppyDisk} />}
        mt="32px"
        mx="auto"
        variant="outline"
        onClick={handleSubmit((data) => console.log(data))}
      >
        Save changes
      </Button>
    </FormProvider>
  );
};

export default Office;
