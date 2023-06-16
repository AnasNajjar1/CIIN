import { useForm, FormProvider } from "react-hook-form";
import { companyInfoSchema } from "../../../schemas/companyInfo";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Icon, Stack, Text } from "@chakra-ui/react";
import Button from "../../../components/Shared/Button";
import InputField from "../../../components/Forms/InputField";
import Textarea from "../../../components/Forms/Textarea";
import Select from "../../../components/Forms/Select";
import RadioGroup from "../../../components/Forms/RadioGroup";
import { SaveFloppyDisk } from "iconoir-react";
import DatePicker from "../../../components/Forms/DatePicker";

const CompanyInfo = () => {
  const methods = useForm({
    resolver: yupResolver(companyInfoSchema),
  });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <Stack spacing="24px">
        <InputField
          name="name"
          label="Company Name"
          placeholder="Company Name"
          w="100%"
        />
        <Textarea name="notes" label="Notes" placeholder="Notes" w="100%" />
        <DatePicker name="date" label="AsOfDate" placeholder="AsOfDate" />
        <InputField
          name="lastName"
          label="Last Name"
          placeholder="Last Name"
          w="100%"
        />
        <InputField
          name="website"
          label="Website"
          placeholder="Website"
          w="100%"
        />
        <Select
          name="range"
          label="Range of Employees"
          placeholder="Range of Employees"
          w="100%"
          options={[
            { value: "0", label: "0" },
            { value: "1", label: "1" },
          ]}
        />
        <Box>
          <RadioGroup
            name="sector"
            label="Sector"
            placeholder="Sector"
            w="100%"
            radios={[
              { value: "public", label: "Public sector" },
              { value: "private", label: "Private sector" },
            ]}
          />
          <Text textStyle="sm" color="gray.500" fontWeight="400" mt="10px">
            Indicate the business sector in which the plan members operate as
            defined by the North American Industry Classification System
            (NAICS). If the pension plan is administered by a labour
            organization or other trade or employee association, please indicate
            the sector in which the association operates. For plans with members
            working in several industries, choose the industry where the
            majority of workers are employed.
          </Text>
        </Box>
        <Select
          name="industry"
          label="Industry"
          placeholder="Industry"
          w="100%"
          options={[
            { value: "0", label: "0" },
            { value: "1", label: "1" },
          ]}
        />
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

export default CompanyInfo;
