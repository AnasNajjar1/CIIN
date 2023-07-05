import { Flex, Stack } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import Select from "../../../../components/Forms/Select";
import InputField from "../../../../components/Forms/InputField";
import Button from "../../../../components/Shared/Button";
import { Associate, specialityList } from ".";

interface Props {
  data: Associate;
  close: () => void;
}

const AssociateForm = ({ data, close }: Props) => {
  const methods = useForm({
    defaultValues: data,
  });
  const { handleSubmit } = methods;
  return (
    <FormProvider {...methods}>
      <Stack>
        <InputField name="company" placeholder="Company" width="100%" />

        {data.type === "m" && (
          <>
            <Select
              name="speciality"
              placeholder="- Speciality/Mandate -"
              w="100%"
              options={specialityList}
            />
            <InputField name="value" placeholder="Value ($mil)" width="100%" />
          </>
        )}

        <Flex gap="12px" w="100%" pt="12px">
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

export default AssociateForm;
