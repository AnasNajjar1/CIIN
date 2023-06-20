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
const rangeOfEmployees = [
  { value: "Not Specified", label: "Not Specified" },
  { value: "1-49", label: "1-49" },
  { value: "50-99", label: "50-99" },
  { value: "100-199", label: "100-199" },
  { value: "200-499", label: "200-499" },
  { value: "500-999", label: "500-999" },
  { value: "1000-1999", label: "1000-1999" },
  { value: "2000-2999", label: "2000-2999" },
  { value: "3000+", label: "3000+" },
];
const industries = [
  { value: "", label: "- Select Industry -" },
  {
    value: "Agriculture, forestry, fishing and hunting",
    label: "Agriculture, forestry, fishing and hunting",
  },
  {
    value: "Mining, quarrying, and oil and gas extraction",
    label: "Mining, quarrying, and oil and gas extraction",
  },
  { value: "Utilities", label: "Utilities" },
  { value: "Construction", label: "Construction" },
  { value: "Manufacturing", label: "Manufacturing" },
  { value: "Wholesale and retail trade", label: "Wholesale and retail trade" },
  {
    value: "Transportation and warehousing",
    label: "Transportation and warehousing",
  },
  {
    value: "Information and cultural industries",
    label: "Information and cultural industries",
  },
  {
    value: "Finance, insurance and real estate",
    label: "Finance, insurance and real estate",
  },
  {
    value: "Professional, scientific and technical services",
    label: "Professional, scientific and technical services",
  },
  {
    value: "Management of companies and enterprises",
    label: "Management of companies and enterprises",
  },
  {
    value:
      "Administrative and support, waste management and remediation services",
    label:
      "Administrative and support, waste management and remediation services",
  },
  { value: "Educational services", label: "Educational services" },
  {
    value: "Health care and social assistance",
    label: "Health care and social assistance",
  },
  {
    value: "Arts, entertainment and recreation",
    label: "Arts, entertainment and recreation",
  },
  {
    value: "Accommodation and food services",
    label: "Accommodation and food services",
  },
  {
    value: "Other services (except public administration)",
    label: "Other services (except public administration)",
  },
];
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
          placeholder="- Select Range of Employees -"
          w="100%"
          options={rangeOfEmployees}
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
          placeholder="- Select Industry -"
          w="100%"
          options={industries}
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
