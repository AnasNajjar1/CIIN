import { Box, Checkbox, CheckboxGroup, Flex, Stack } from "@chakra-ui/react";
import React from "react";
import InputField from "../../../components/Forms/InputField";
import Select from "../../../components/Forms/Select";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../../components/Shared/Button";
import InputLabel from "../../../components/Shared/InputLabel";
import { Contact } from ".";
const contactTypes = [
  { value: "Primary", label: "Primary" },
  { value: "Secondary", label: "Secondary" },
  { value: "Board Member", label: "Board Member" },
  { value: "Consultant", label: "Consultant" },
];
const firstListJobFunctions = [
  { value: "Management - DB", label: "Management - DB" },
  { value: "Non Management - DB", label: "Non Management - DB" },
  { value: "Management - DC/RRSP", label: "Management - DC/RRSP" },
  { value: "Consultant - DB", label: "Consultant - DB" },
  { value: "Other", label: "Other" },
];
const secondListJobFunctions = [
  { value: "Management - Benefits", label: "Management - Benefits" },
  { value: "Non Management - Benefits", label: "Non Management - Benefits" },
  { value: "Non Management - DC/RRSP", label: "Non Management - DC/RRSP" },
  { value: "Consultant - DC/RRSP", label: "Consultant - DC/RRSP" },
];
interface Props {
  data: Contact;
  close: () => void;
}
const ContactForm = ({ data, close }: Props) => {
  const methods = useForm({
    defaultValues: data,
  });
  const { handleSubmit, register } = methods;
  return (
    <FormProvider {...methods}>
      <Stack>
        <Select
          name="type"
          label="Contact Type"
          placeholder="- Contact Type -"
          w="100%"
          options={contactTypes}
        />
        <InputField
          name="firstName"
          label="First Name"
          placeholder="First Name"
          width="100%"
        />
        <InputField
          name="lastName"
          label="Last Name"
          placeholder="Last Name"
          width="100%"
        />
        <InputField
          name="title"
          label="Title"
          placeholder="Title"
          width="100%"
        />
        <Flex width="100%" align="center" justify="space-between">
          <InputField
            name="email"
            label="Email"
            type="email"
            placeholder="Email"
            width="90%"
          />
          <Checkbox {...register("publish")} mt="21px">
            Publish
          </Checkbox>
        </Flex>

        <InputField
          name="phone"
          label="Phone"
          placeholder="Phone"
          width="100%"
        />

        <InputField name="ext" label="Ext" placeholder="Ext" width="100%" />
        <CheckboxGroup defaultValue={data.jobFunction}>
          <InputLabel>Job Functions</InputLabel>
          <Flex gap={"12px"}>
            <Stack w="50%" spacing="12px">
              {firstListJobFunctions.map((item) => {
                return (
                  <Checkbox
                    key={item.value}
                    value={item.value}
                    {...register("jobFunction")}
                  >
                    {item.label}
                  </Checkbox>
                );
              })}
            </Stack>
            <Stack w="50%" spacing="12px">
              {secondListJobFunctions.map((item) => {
                return (
                  <Checkbox
                    key={item.value}
                    value={item.value}
                    isChecked={data.jobFunction.includes(item.value)}
                    {...register("jobFunction")}
                  >
                    {item.label}
                  </Checkbox>
                );
              })}
            </Stack>
          </Flex>
        </CheckboxGroup>
        <Flex gap="12px" w="100%" borderTop={"1px solid #E5E5E5"} pt="12px">
          <Button size="sm" variant="outline" ml="auto" onClick={close}>
            Cancel
          </Button>
          <Button
            size="sm"
            onClick={handleSubmit((data) => {
              close();
            })}
          >
            Submit
          </Button>
        </Flex>
      </Stack>
    </FormProvider>
  );
};

export default ContactForm;
