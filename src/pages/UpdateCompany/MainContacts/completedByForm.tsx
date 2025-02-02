import { useState, useContext } from "react";
import { useForm, FormProvider } from "react-hook-form";
import InputField from "../../../components/Forms/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { Flex, Icon, IconButton, Stack } from "@chakra-ui/react";
import { Minus, Plus } from "iconoir-react";
import Button from "../../../components/Shared/Button";
import { Contact } from "../../../services/apiTypes/types";
import { contactSchema } from "../../../schemas/contact";
import {
  ServerStateCompanyContactsEnum,
  useAddContact,
  useUpdateContact,
} from "../../../hooks/api/company/contacts";
import { useQueryClient } from "react-query";
import AlertContext from "../../../store/context/alertContext";
interface Props {
  contact: Contact | undefined;
}
const CompletedByForm = ({ contact }: Props) => {
  const [showAnotherEmail, setShowAnotherEmail] = useState(false);
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
    },
  });
  const methods = useForm({
    values: contact,
    resolver: yupResolver(contactSchema),
  });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <Stack spacing="24px">
        <InputField
          name="first_name"
          required
          label="First Name"
          placeholder="First Name"
          w="100%"
        />
        <InputField
          name="last_name"
          required
          label="Last Name"
          placeholder="Last Name"
          w="100%"
        />
        <InputField name="title" label="Title" placeholder="Title" w="100%" />
        <Flex width="100%" justify={"space-between"} position="relative">
          <InputField
            name="email"
            label="Email"
            placeholder="Email"
            width={{ base: "calc(100% - 35px)", md: "100%" }}
            flex={{ md: "1" }}
          />
          <IconButton
            variant="outline"
            px="0"
            borderRadius="50%"
            position="absolute"
            right={{ base: "0", md: "-41px" }}
            top="29px"
            minW="24px"
            height="24px"
            display={
              showAnotherEmail || contact?.second_email
                ? "none"
                : "inline-block"
            }
            onClick={() => setShowAnotherEmail(true)}
          >
            <Icon as={Plus} />
          </IconButton>
        </Flex>
        {(showAnotherEmail || contact?.second_email) && (
          <Flex width="100%" justify={"space-between"} position="relative">
            <InputField
              name="second_email"
              label="Another Email"
              placeholder="Another Email"
              width={{ base: "calc(100% - 35px)", md: "100%" }}
              flex={{ md: "1" }}
            />
            <IconButton
              variant="outline"
              px="0"
              borderRadius="50%"
              position="absolute"
              right={{ base: "0", md: "-41px" }}
              top="29px"
              minW="24px"
              height="24px"
              display={
                showAnotherEmail && contact?.second_email
                  ? "none"
                  : "inline-block"
              }
              onClick={() => setShowAnotherEmail(false)}
            >
              <Icon as={Minus} />
            </IconButton>
          </Flex>
        )}
        <Flex gap="24px" width="100%">
          <InputField
            name="phone_number"
            label="Phone"
            placeholder="(651)-323-8082"
            width="56%"
            flex="1"
          />
          <InputField
            name="ext"
            label="Ext"
            type="number"
            placeholder="123"
            width="44%"
            flex="1"
          />
        </Flex>
        <InputField
          name="fax"
          label="Fax"
          placeholder="Fax"
          width="56%"
          flex="1"
        />
      </Stack>
      <Button
        size="sm"
        mt="32px"
        variant={"outline"}
        onClick={handleSubmit(async (data) => {
          contact
            ? await updateContact(data)
            : await addContact({
                ...data,
                company:
                  "http://localhost:8000/companies/d3f58dda-3a6e-400e-88d0-e53072eaee65/",
                main_contact: true,
              });
        })}
      >
        Save changes
      </Button>
    </FormProvider>
  );
};

export default CompletedByForm;
