import { FormProvider, useForm } from "react-hook-form";
import { Option } from "../../../../utils/constantsTypes";
import { Stack, Text } from "@chakra-ui/react";
import Select from "../../../../components/Forms/Select";
interface Question {
  question: string;
  title: string;
  options: Option[];
  selectedOption: string;
}
const list = [
  {
    question: "test",
    title: "What is your current pension fund?",
    options: [
      { label: "DB", value: "DB" },
      { label: "DC/RRSP", value: "DC/RRSP" },
      { label: "Other", value: "Other" },
    ],
    selectedOption: "DC/RRSP",
  },
  {
    title: "What is your current pension fund?",
    question: "pension",
    options: [
      { label: "DB", value: "DB" },
      { label: "DC/RRSP", value: "DC/RRSP" },
      { label: "Other", value: "Other" },
    ],
    selectedOption: "DB",
  },
];
const Question = ({ question, title, options, selectedOption }: Question) => {
  return (
    <Select
      name={question}
      label={title}
      placeholder={`- Select ${title} -`}
      w="100%"
      defaultValue={selectedOption}
      options={options}
    />
  );
};
const Details = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <Text
        variant="h4"
        textAlign="center"
        fontWeight="bold"
        mb="24px"
        lineHeight='40px'
        bg="gray.300"
        rounded={"md"}
        h="40px"
      >
        DB Plans
      </Text>
      <Stack spacing="24px">
        {list.map((item) => (
          <Question key={item.question} {...item} />
        ))}
      </Stack>
    </FormProvider>
  );
};

export default Details;
