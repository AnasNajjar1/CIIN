import { useForm, FormProvider } from "react-hook-form";
import InputField from "../../../components/Forms/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { completedBySchema } from "../../../schemas/completedBy";
import { Flex, Icon, IconButton, Stack } from "@chakra-ui/react";
import { Plus } from "iconoir-react";
import Button from "../../../components/Shared/Button";
const CompletedByForm = () => {
  const methods = useForm({
    resolver: yupResolver(completedBySchema),
  });
  const { handleSubmit } = methods;
  return (
    <FormProvider {...methods}>
      <Stack spacing="24px">
        <InputField
          name="firstName"
          label="First Name"
          placeholder="First Name"
          w="100%"
        />
        <InputField
          name="lastName1"
          label="Last Name"
          placeholder="Last Name"
          w="100%"
        />
        <InputField
          name="lastName2"
          label="Last Name"
          placeholder="Last Name"
          w="100%"
        />
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
            h="24px"
            display="inline-block"
          >
            <Icon as={Plus} />
          </IconButton>
        </Flex>
        <Flex gap="24px" width="100%">
          <InputField
            name="phone"
            label="Phone"
            placeholder="(651)-323-8082"
            width="56%"
            flex="1"
          />
          <InputField
            name="ext"
            label="Ext"
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
        onClick={handleSubmit((data) => console.log(data))}
      >
        Save changes
      </Button>
    </FormProvider>
  );
};

export default CompletedByForm;
