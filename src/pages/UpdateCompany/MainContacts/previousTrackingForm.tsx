import { Stack } from "@chakra-ui/react";
import { previousTrackingSchema } from "../../../schemas/previousTracking";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";
import InputField from "../../../components/Forms/InputField";
import Button from "../../../components/Shared/Button";
import Textarea from "../../../components/Forms/Textarea";
import { Contact } from "../../../services/apiTypes/types";
import {
  ServerStateCompanyContactsEnum,
  useUpdateContact,
} from "../../../hooks/api/company/contacts";
import { useQueryClient } from "react-query";
import AlertContext from "../../../store/context/alertContext";
import { useContext } from "react";
interface Props {
  contact: Contact | undefined;
}
const PreviousTrackingForm = ({ contact }: Props) => {
  const queryClient = useQueryClient();
  const { mutate: updateContact } = useUpdateContact();
  const methods = useForm({
    resolver: yupResolver(previousTrackingSchema),
    values: {
      contactName: `${contact?.first_name || ""} ${contact?.last_name || ""}`,
      date: contact?.previous_main_contact_date_left,
      notes: contact?.notes,
    },
  });
  const { handleSubmit } = methods;
  const alertContext = useContext(AlertContext);
  return (
    <FormProvider {...methods}>
      <Stack spacing="24px">
        <InputField
          name="contactName"
          label="Previous contact name"
          placeholder="Previous contact name"
          disabled
          w="100%"
        />
        <InputField
          name="date"
          label="Date previous contact left"
          placeholder="Date previous contact left"
          w="100%"
          disabled
        />
        <Textarea
          name="notes"
          label="Notes"
          placeholder="Notes"
          w="100%"
          disabled={!contact}
        />
      </Stack>
      {contact && (
        <Button
          size="sm"
          mt="32px"
          variant="outline"
          onClick={handleSubmit(async (data) => {
            await updateContact(
              { ...contact, notes: data.notes || "" },
              {
                onSuccess: async () => {
                  queryClient.invalidateQueries(
                    ServerStateCompanyContactsEnum.CompanyContacts,
                  );
                  alertContext.show({
                    status: "success",
                  });
                },
                onError: (error) => {
                  alertContext.show({
                    status: "error",
                    message: error.message,
                    // handleRetry:()=>,
                  });
                },
              },
            );
          })}
        >
          Save changes
        </Button>
      )}
    </FormProvider>
  );
};

export default PreviousTrackingForm;
