import { Flex, Stack } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import Select from "../../../../components/Forms/Select";
import InputField from "../../../../components/Forms/InputField";
import Button from "../../../../components/Shared/Button";
import { StandardCompany, planTypeList } from ".";

interface Props {
  data: StandardCompany;
  close: () => void;
}

const StandardCompanyForm = ({ data, close }: Props) => {
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

export default StandardCompanyForm;
