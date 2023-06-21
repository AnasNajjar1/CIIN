import { Flex, Stack } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import Select from "../../../../components/Forms/Select";
import InputField from "../../../../components/Forms/InputField";
import Button from "../../../../components/Shared/Button";
import { MoneyManager, planTypeList, specialityList } from ".";

interface Props {
  data: MoneyManager;
  close: () => void;
}

const MoneyManagerForm = ({ data, close }: Props) => {
  const methods = useForm({
    defaultValues: data,
  });
  const { handleSubmit } = methods;
  return (
    <FormProvider {...methods}>
      <Stack>
        <InputField name="company" placeholder="Company" width="100%" />
        <Select
          name="type"
          placeholder="- Plan Type -"
          w="100%"
          options={planTypeList}
        />
        <Select
          name="speciality"
          placeholder="- Speciality/Mandate -"
          w="100%"
          options={specialityList}
        />
        <InputField name="value" placeholder="Value ($mil)" width="100%" />

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

export default MoneyManagerForm;
