import { VStack } from "@chakra-ui/layout";
import Accordion from "../../../components/Shared/Accodion";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table";
import { useForm, FormProvider } from "react-hook-form";
import InputField from "../../../components/Forms/InputField";
import Select from "../../../components/Forms/Select";
const pensionFundRangeList = [
  { label: "Less than $5.0 mil", value: "Less than $5.0 mil" },
  { label: "$5.0 to $14.9 mil", value: "$5.0 to $14.9 mil" },
  { label: "$15.0 to $24.9 mil", value: "$15.0 to $24.9 mil" },
  { label: "$25.0 to $49.9 mil", value: "$25.0 to $49.9 mil" },
  { label: "$50.0 to $99.9 mil", value: "$50.0 to $99.9 mil" },
  { label: "$100 to $249.9 mil", value: "$100 to $249.9 mil" },
  { label: "$250 to $499.9 mil", value: "$250 to $499.9 mil" },
  { label: "$500 to $999.9 mil", value: "$500 to $999.9 mil" },
  { label: "$1.0 to $9.9 bil", value: "$1.0 to $9.9 bil" },
  { label: "Greater than $10.0 bil", value: "Greater than $10.0 bil" },
];
const PlanSummary = () => {
  const methodsPlanSummary = useForm({});
  const methodsPlanDetails = useForm({});

  return (
    <>
      <VStack spacing="26px" w="100%">
        <Accordion title="Plan Summary">
          <FormProvider {...methodsPlanSummary}>
            <Table variant="striped">
              <Thead>
                <Tr>
                  <Th>PLAN TYPE</Th>
                  <Th>Plan Value ($mil)</Th>
                  <Th>% Externally Managed</Th>
                  <Th>% Pooled Funds</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Defined Benefit (DB)</Td>
                  <Td>
                    <InputField name="definedBenefitPlanValue" width="100%" />
                  </Td>
                  <Td>
                    <InputField
                      name="definedBenefitExternallyManaged"
                      width="100%"
                    />
                  </Td>
                  <Td>
                    <InputField name="definedBenefitPooledFunds" width="100%" />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Defined Contribution (DC)</Td>
                  <Td>
                    <InputField
                      name="definedContributionPlanValue"
                      width="100%"
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Hybrid (HYB)</Td>
                  <Td>
                    <InputField name="hybridPlanValue" width="100%" />
                  </Td>
                  <Td>
                    <InputField
                      label="%DB"
                      placeholder="%DB"
                      name="hybridExternallyManaged"
                      width="100%"
                    />
                  </Td>
                  <Td>
                    <InputField
                      label="%DC"
                      placeholder="%DC"
                      name="hybridPooledFunds"
                      width="100%"
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Group RRSP</Td>
                  <Td>
                    <InputField name="groupRRSPPlanValue" width="100%" />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Deferred Profit Sharing Plan (DPSP)</Td>
                  <Td>
                    <InputField name="DPSPPlanValue" width="100%" />
                  </Td>
                  <Td colSpan={2}></Td>
                </Tr>
                <Tr>
                  <Td>
                    <InputField name="OAC" width="100%" />
                  </Td>
                  <Td>
                    <InputField name="OACPlanValue" width="100%" />
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <InputField
                      name="other"
                      placeholder="Other 2 (please specify)"
                      width="100%"
                    />
                  </Td>

                  <Td>
                    <InputField name="otherPlanValue" width="100%" />
                  </Td>
                  <Td colSpan={2}></Td>
                </Tr>
                <Tr>
                  <Td>Total</Td>
                  <Td>
                    <InputField
                      name="total"
                      placeholder="Total"
                      disabled
                      width="100%"
                    />
                  </Td>
                  <Td colSpan={2}></Td>
                </Tr>
                <Tr>
                  <Td>Pension Fund Range</Td>
                  <Td colSpan={2}>
                    <Select
                      name="pensionFundRange"
                      w="100%"
                      options={pensionFundRangeList}
                    />
                  </Td>
                  <Td></Td>
                </Tr>
              </Tbody>
            </Table>
          </FormProvider>
        </Accordion>
        <Accordion title="Plan Details">
          <FormProvider {...methodsPlanDetails}>
            <Table variant="striped">
              <Thead>
                <Tr>
                  <Th>PLAN TYPE</Th>
                  <Th>Active Members Count</Th>
                  <Th>Retired Members Count</Th>
                  <Th>Deferred Members Count</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Defined Benefit (DB)</Td>
                  <Td>
                    <InputField name="definedBenefitPlanValue" width="100%" />
                  </Td>
                  <Td>
                    <InputField
                      name="definedBenefitExternallyManaged"
                      width="100%"
                    />
                  </Td>
                  <Td>
                    <InputField name="definedBenefitPooledFunds" width="100%" />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Defined Contribution (DC)</Td>
                  <Td>
                    <InputField name="definedContributionActive" width="100%" />
                  </Td>
                  <Td>
                    <InputField
                      name="definedContributionRetired"
                      width="100%"
                    />
                  </Td>
                  <Td>
                    <InputField
                      name="definedContributionMembers"
                      width="100%"
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Hybrid (HYB)</Td>
                  <Td>
                    <InputField name="hybridPlanValue" width="100%" />
                  </Td>
                  <Td>
                    <InputField name="hybridExternallyManaged" width="100%" />
                  </Td>
                  <Td>
                    <InputField name="hybridPooledFunds" width="100%" />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Group RRSP</Td>
                  <Td>
                    <InputField name="groupRRSPPlanValue" width="100%" />
                  </Td>
                  <Td>
                    <InputField name="groupRRSPRetired" width="100%" />
                  </Td>
                  <Td>
                    <InputField name="groupRRSPMembers" width="100%" />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Deferred Profit Sharing Plan (DPSP)</Td>
                  <Td>
                    <InputField name="DPSPPlanValue" width="100%" />
                  </Td>
                  <Td>
                    <InputField name="DPSPRetired" width="100%" />
                  </Td>
                  <Td>
                    <InputField name="DPSPMembers" width="100%" />
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <InputField name="OAC" defaultValue="OAC" width="100%" />
                  </Td>
                  <Td>
                    <InputField
                      name="OACActive"
                      placeholder="Active Members Count"
                      width="100%"
                    />
                  </Td>
                  <Td>
                    <InputField
                      name="OACActive"
                      defaultValue={0}
                      width="100%"
                    />
                  </Td>
                  <Td>
                    <InputField
                      name="OACActive"
                      defaultValue={0}
                      width="100%"
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <InputField
                      name="other"
                      placeholder="Other 2"
                      width="100%"
                    />
                  </Td>

                  <Td>
                    <InputField
                      name="OACActive"
                      placeholder="Active Members Count"
                      width="100%"
                    />
                  </Td>
                  <Td>
                    <InputField
                      name="OACActive"
                      placeholder="Active Members Count"
                      width="100%"
                    />
                  </Td>
                  <Td>
                    <InputField
                      name="OACActive"
                      placeholder="Active Members Count"
                      width="100%"
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td>Total</Td>
                  <Td>
                    <InputField
                      name="total"
                      placeholder="Total"
                      disabled
                      width="100%"
                    />
                  </Td>
                  <Td>
                    <InputField
                      name="totalActive"
                      placeholder="Total"
                      disabled
                      width="100%"
                    />
                  </Td>
                  <Td>
                    <InputField
                      name="totalRetired"
                      placeholder="Total"
                      disabled
                      width="100%"
                    />
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </FormProvider>
        </Accordion>
      </VStack>
    </>
  );
};

export default PlanSummary;
