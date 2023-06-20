import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import InputField from "../../../components/Forms/InputField";
import { yupResolver } from "@hookform/resolvers/yup";
import { completedBySchema } from "../../../schemas/completedBy";
import { Flex, Icon, IconButton, Stack } from "@chakra-ui/react";
import { Minus, Plus } from "iconoir-react";
import Button from "../../../components/Shared/Button";
const CompletedByForm = () => {
  const [showAnotherEmail, setShowAnotherEmail] = useState(false);
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
          name="lastName"
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
            h="24px"
            display={showAnotherEmail ? "none" : "inline-block"}
            onClick={() => setShowAnotherEmail(true)}
          >
            <Icon as={Plus} />
          </IconButton>
        </Flex>
        {showAnotherEmail && (
          <Flex width="100%" justify={"space-between"} position="relative">
            <InputField
              name="anotherEmail"
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
              h="24px"
              display="inline-block"
              onClick={() => setShowAnotherEmail(false)}
            >
              <Icon as={Minus} />
            </IconButton>
          </Flex>
        )}
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
