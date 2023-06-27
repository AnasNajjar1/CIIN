import { Checkbox, CheckboxGroup, Flex, Stack } from "@chakra-ui/react";
import InputField from "../../../components/Forms/InputField";
import Select from "../../../components/Forms/Select";
import { useForm, FormProvider } from "react-hook-form";
import Button from "../../../components/Shared/Button";
import InputLabel from "../../../components/Shared/InputLabel";
import { Contact } from "../../../services/apiTypes/types";
import {
  ServerStateCompanyContactsEnum,
  useAddContact,
  useUpdateContact,
} from "../../../hooks/api/company/contacts";
import { useQueryClient } from "react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../../../schemas/contact";
const contactTypes = [
  { value: "P", label: "Primary" },
  { value: "S", label: "Secondary" },
  { value: "B", label: "Board Member" },
  { value: "C", label: "Consultant" },
];
const firstListJobFunctions = [
  { value: "management_db", label: "Management - DB" },
  { value: "non_management_db", label: "Non Management - DB" },
  { value: "management_dc_rrsp", label: "Management - DC/RRSP" },
  { value: "consultant_db", label: "Consultant - DB" },
  { value: "other_job", label: "Other" },
];
const secondListJobFunctions = [
  { value: "management_benefits", label: "Management - Benefits" },
  { value: "non_management_benefits", label: "Non Management - Benefits" },
  { value: "non_management_dc_rrsp", label: "Non Management - DC/RRSP" },
  { value: "consultant_dc_rrsp", label: "Consultant - DC/RRSP" },
];
type FormType = "update" | "add";
interface Props {
  data: Contact;
  close: () => void;
  type: FormType;
}
const ContactForm = ({ data, close, type }: Props) => {
  const queryClient = useQueryClient();
  const { mutate: updateContact } = useUpdateContact();
  const { mutate: addContact } = useAddContact();
  const methods = useForm({
    defaultValues: data,
    resolver: yupResolver(contactSchema),
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
          name="first_name"
          label="First Name"
          placeholder="First Name"
          width="100%"
        />
        <InputField
          name="last_name"
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
        <Flex width="100%" align="center" gap="24px" justify="space-between">
          <InputField
            name="email"
            label="Email"
            type="email"
            placeholder="Email"
            width="100%"
          />
          <Checkbox {...register("publish")} mt="21px">
            Publish
          </Checkbox>
        </Flex>

        <InputField
          name="phone_number"
          label="Phone"
          placeholder="Phone"
          width="100%"
        />
        <InputField name="ext" label="Ext" placeholder="Ext" width="100%" />
        <Checkbox
          {...register("main_contact")}
          disabled={type === "update" && data.main_contact === true}
          mt="21px"
        >
          Main Contact
        </Checkbox>
        <InputLabel>Job Functions</InputLabel>
        <Flex gap={"12px"}>
          <Stack w="50%" spacing="12px">
            {firstListJobFunctions.map((item) => {
              return (
                <Checkbox
                  key={item.value}
                  name={item.value}
                  {...register(item.value)}
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
                  name={item.value}
                  {...register(item.value)}
                >
                  {item.label}
                </Checkbox>
              );
            })}
          </Stack>
        </Flex>

        <Flex gap="12px" w="100%" borderTop={"1px solid #E5E5E5"} pt="12px">
          <Button size="sm" variant="outline" ml="auto" onClick={close}>
            Cancel
          </Button>
          <Button
            size="sm"
            onClick={handleSubmit(async (data) => {
              const {
                previous_main_contact,
                previous_main_contact_date_left,
                ...rest
              } = data;
              type === "add"
                ? await addContact(rest, {
                    onSuccess: async () => {
                      await queryClient.invalidateQueries(
                        ServerStateCompanyContactsEnum.CompanyContacts,
                      );
                    },
                    onSettled: () => {
                      close();
                    },
                  })
                : await updateContact(rest, {
                    onSuccess: async () => {
                      await queryClient.invalidateQueries(
                        ServerStateCompanyContactsEnum.CompanyContacts,
                      );
                    },
                    onSettled: () => {
                      close();
                    },
                  });
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
