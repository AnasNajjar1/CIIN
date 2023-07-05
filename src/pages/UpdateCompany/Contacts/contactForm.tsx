import { useContext } from "react";
import { Checkbox, Flex, Stack } from "@chakra-ui/react";
import InputField from "../../../components/Forms/InputField";
import Select from "../../../components/Forms/Select";
import { useForm, FormProvider } from "react-hook-form";
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
import AlertContext from "../../../store/context/alertContext";
import RowForm from "../RowForm";
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
  const alertContext = useContext(AlertContext);
  const { mutate: updateContact } = useUpdateContact({
    onSuccess: async () => {
      await queryClient.invalidateQueries(
        ServerStateCompanyContactsEnum.CompanyContacts,
      );
      alertContext.show({
        status: "success",
      });
    },

    onSettled: (_, error, variables) => {
      if (error) {
        alertContext.show({
          status: "error",
          message: error.message,
          handleRetry: () => updateContact(variables),
        });
      }
      close();
    },
  });
  const { mutate: addContact } = useAddContact({
    onSuccess: async () => {
      await queryClient.invalidateQueries(
        ServerStateCompanyContactsEnum.CompanyContacts,
      );
      alertContext.show({
        status: "success",
      });
    },

    onSettled: (_, error, variables) => {
      if (error) {
        alertContext.show({
          status: "error",
          message: error.message,
          handleRetry: () => addContact(variables),
        });
      }
      close();
    },
  });
  const methods = useForm({
    values: data,
    resolver: yupResolver(contactSchema),
  });
  const { handleSubmit, register } = methods;
  return (
    <FormProvider {...methods}>
      <Stack spacing="24px">
        <RowForm label="Contact Type">
          <Select
            name="type"
            placeholder="- Contact Type -"
            w="75%"
            options={contactTypes}
          />
        </RowForm>
        <RowForm label="First Name">
          <InputField
            required
            name="first_name"
            placeholder="First Name"
            width="75%"
          />
        </RowForm>
        <RowForm label="Last Name">
          <InputField
            required
            name="last_name"
            placeholder="Last Name"
            width="75%"
          />
        </RowForm>
        <RowForm label="Title">
          <InputField name="title" placeholder="Title" width="75%" />
        </RowForm>
        <RowForm label="Email">
          <Flex width="40%" ml="-5%">
            <InputField
              name="email"
              type="email"
              placeholder="Email"
              width="95%"
            />
            <Checkbox {...register("publish")}>Publish</Checkbox>
          </Flex>
        </RowForm>
        <RowForm label="Phone">
          <Flex width="40%" ml="-5%">
            <InputField name="phone_number" placeholder="Phone" width="90%" />
            <Flex align="center" gap="12px">
              <InputLabel>Ext</InputLabel>
              <InputField name="ext" placeholder="Ext" width="100%" />
            </Flex>
          </Flex>
        </RowForm>
        <RowForm label="Job Functions">
          <Flex gap={"12px"} w="75%" ml="-5%">
            <Stack w="75%" spacing="12px">
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
            <Stack w="75%" spacing="12px">
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
        </RowForm>
      </Stack>
    </FormProvider>
  );
};

export default ContactForm;
//  <Checkbox
//    {...register("main_contact")}
//    disabled={type === "update" && data?.main_contact === true}
//    mt="21px"
//  >
//    Main Contact
//  </Checkbox>;
// <Button
//   size="sm"
//   onClick={handleSubmit(async (data) => {
//     const {
//       previous_main_contact,
//       previous_main_contact_date_left,
//       ...rest
//     } = data;
//     type === "add" ? await addContact(rest) : await updateContact(rest);
//   })}
// >
//   Submit
// </Button>;
