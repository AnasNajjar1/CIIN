import { Stack } from "@chakra-ui/react";
import { previousTrackingSchema } from "../../../schemas/previousTracking";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";
import InputField from "../../../components/Forms/InputField";
import Button from "../../../components/Shared/Button";
import Textarea from "../../../components/Forms/Textarea";
const PreviousTrackingForm = () => {
  const methods = useForm({
    resolver: yupResolver(previousTrackingSchema),
  });
  const { handleSubmit } = methods;
  return (
    <FormProvider {...methods}>
      <Stack spacing="24px">
        <InputField
          name="contactName"
          label="Previous contact name"
          placeholder="Previous contact name"
          w="100%"
        />
        <InputField
          name="date"
          label="Date previous contact left"
          placeholder="Date previous contact left"
          w="100%"
        />
        <Textarea name="notes" label="Notes" placeholder="Notes" w="100%" />
      </Stack>
      <Button
        size="sm"
        mt="32px"
        variant="outline"
        onClick={handleSubmit((data) => console.log(data))}
      >
        Save changes
      </Button>
    </FormProvider>
  );
};

export default PreviousTrackingForm;
