import React, { useContext, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useQueryClient } from "react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import AlertContext from "../../../../store/context/alertContext";
import InputField from "../../../../components/Forms/InputField";
import Button from "../../../../components/Shared/Button";
import { Badge, Box, Flex, Icon, Input, Stack, Text } from "@chakra-ui/react";
import InputLabel from "../../../../components/Shared/InputLabel";
import { NavArrowDown } from "iconoir-react";
const fields = [
  {
    name: "pension_assets",
    label: "Pension Assets",
    children: [
      {
        name: "df",
        label: "Defined Benefits",
      },
      {
        name: "cap",
        label: "CAP (DC, RRSP, EPSP, DPSP)",
      },
      {
        name: "other_pension_funds",
        label: "Other Pension Assets",
      },
      {
        name: "third_assets",
        label: "Third-Party Assets (Sub-Advised)",
      },
    ],
  },
  {
    name: "foundations_endowments",
    label: "Foundations & Endowments",
  },
  {
    name: "insurance_company",
    label: "Insurance Company General Funds",
  },
  {
    name: "corporate_assets",
    label: "Corporate Assets",
  },
  {
    name: "private_client",
    label: "Private Client",
  },
  {
    name: "separately_managed_accounts",
    label: "Separately Managed Accounts/Wraps",
  },
  {
    name: "retail_funds",
    label: "Retail Mutual Funds",
    children: [
      {
        label: "Proprietary Mutual Funds",
        name: "proprietary_mutual_funds",
      },
      {
        label: "Third-Party Mutual Funds",
        name: "third_party_mutual_funds",
      },
    ],
  },
  {
    name: "insurance_company_segregated_funds",
    label: "Insurance Company Segregated Funds",
    children: [
      {
        label: "Proprietary Segregated Funds",
        name: "proprietary_segregated_funds",
      },
      {
        label: "Third-Party Segregated Funds",
        name: "third_party_segregated_funds",
      },
    ],
  },
  {
    name: "exchange_traded_funds",
    label: "Exchange-traded Funds",
    children: [
      {
        label: "Proprietary ETFs",
        name: "proprietary_etfs",
      },
      {
        label: "Third-Party ETFs",
        name: "third_party_etfs",
      },
    ],
  },
  {
    name: "closed_end_funds",
    label: "Closed-End Funds",
  },
  {
    name: "trust_funds",
    label: "Trust Funds",
  },
  {
    name: "other_structured_products",
    label: "Other Structured Products",
  },
];
const Form = () => {
  const queryClient = useQueryClient();
  const alertContext = useContext(AlertContext);
  const methods = useForm({
    // defaultValues: data,
    // resolver: yupResolver(contactSchema),
  });
  const { handleSubmit, register } = methods;
  const [open, setOpen] = useState(
    fields
      .filter((field) => field.children)
      .map((field) => ({ [field.name]: false })),
  );
  const handleToogle = (name: string) =>
    setOpen((open) => ({ ...open, [name]: !open[name] }));

  return (
    <FormProvider {...methods}>
      <Text
        variant="h4"
        textAlign="center"
        fontWeight="bold"
        mb="24px"
        lineHeight="40px"
        bg="gray.300"
      >
        Clients <br />
        Please provide assets under management (AUM), in millions of dollars
        (C$), as of Dec. 31, 2022. For these two fields only, include assets
        that you outsource to other firms.
      </Text>
      <Box px="24px" w="80%">
        <Flex align="center">
          <Text w="100%">Worldwide Assets Under Management (C$mil)</Text>
          <InputField
            required
            name="ww_under_management"
            placeholder="Worldwide Assets Under Management (C$mil)"
            w="100%"
          />
        </Flex>
        <Flex align="center" my="24px">
          <Text w="100%">Canadian Assets Under Management (C$mil)</Text>
          <InputField
            required
            name="ca_under_management"
            placeholder="Canadian Assets Under Management (C$mil)"
            w="100%"
          />
        </Flex>
      </Box>
      <Text
        variant="h4"
        textAlign="center"
        fontWeight="bold"
        mb="24px"
        lineHeight="40px"
        bg="gray.300"
      >
        For the following sections, only include AUM (expressed in $mil) related
        to Canadian-domiciled clients. Exclude assets that you outsource to
        other firms.
      </Text>
      <Text variant="h4" fontWeight="bold" mb="24px" lineHeight="40px">
        Product/Client Dec. 31, 2022
      </Text>
      <Stack spacing="24px" px="24px">
        {fields.map((field, index) => (
          <>
            {field.children ? (
              <>
                <Flex
                  align="center"
                  cursor="pointer"
                  position="relative"
                  onClick={() => handleToogle(field.name)}
                >
                  <Text w="40%" display="flex" alignItems="center">
                    <Badge bg="blue.500" color="white" mr="8px">
                      {index + 1}
                    </Badge>
                    <span> {field.label}</span>
                  </Text>
                  <InputField
                    required
                    name={field.name}
                    placeholder={field.label}
                    w="40%"
                    disabled
                  />
                  <Icon
                    as={NavArrowDown}
                    boxSize={6}
                    position="absolute"
                    right="0"
                  />
                </Flex>
                {open[field.name] && (
                  <>
                    {field.children.map((child, childIndex) => (
                      <Flex align="center">
                        <Text w="40%" textIndent="6px">
                          <Badge bg="blue.500" color="white" mr="8px">
                            {`${index + 1}.${childIndex + 1}`}
                          </Badge>
                          {child.label}
                        </Text>
                        <InputField
                          required
                          name={child.name}
                          placeholder={child.label}
                          w="40%"
                        />
                      </Flex>
                    ))}
                  </>
                )}
              </>
            ) : (
              <Flex align="center">
                <Text w="40%" display="flex" alignItems="center">
                  <Badge bg="blue.500" color="white" mr="8px">
                    {index + 1}
                  </Badge>
                  <span> {field.label}</span>
                </Text>
                <InputField
                  required
                  name={field.name}
                  placeholder={field.label}
                  w="40%"
                />
              </Flex>
            )}
          </>
        ))}
        <Flex align="center">
          <Input name="other1" w="27%" />

          <Input
            name="other1_value"
            placeholder="Other Structured Product"
            w="28.5%"
            ml="1.6%"
          />
        </Flex>
        <Flex align="center">
          <Input name="other1" w="27%" />

          <Input
            name="other1_value"
            placeholder="Other Structured Product"
            w="28.5%"
            ml="1.6%"
          />
        </Flex>
        <Flex align="center">
          <Input name="other1" w="27%" />

          <Input
            name="other1_value"
            placeholder="Other Structured Product"
            w="28.5%"
            ml="1.6%"
          />
        </Flex>
        <Flex align="center">
          <Text w="40%" display="flex" alignItems="center">
            Internally managed Canadian assets
          </Text>
          <InputField
            disabled
            name="internally_managed_assets_canadian"
            w="40%"
          />
        </Flex>
        <Flex align="center">
          <Text w="40%" display="flex" alignItems="center">
            Externally managed Canadian assets
          </Text>
          <InputField
            name="externally_managed_assets_canadian"
            w="40%"
            placeholder="Externally managed Canadian assets"
          />
        </Flex>
      </Stack>
    </FormProvider>
  );
};
export default Form;
