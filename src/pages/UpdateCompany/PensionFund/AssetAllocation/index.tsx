import {
  Checkbox,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import Accordion from "../../../../components/Shared/Accodion";
import InputField from "../../../../components/Forms/InputField";
import { data } from "./data";

const getTotals = (object: any, item: string) => {
  return Object.keys(object).reduce((acc, key) => {
    return acc + (Number(object[key][item]) || 0);
  }, 0);
};
const titles = {
  equity: {
    canadianEquity: "Canadian Equity",
    usEquity: "US Equity",
    internationalEquity: "International (Non-N.A.) Equity",
    emergingMarketsEquity: "Emerging Markets Equity",
    globalEquity: "Global Equity",
    equityUndefined: "Equity Equity Undefined",
  },
  bonds: {
    canadianBonds: "Canadian Bonds",
    usBonds: "US Bonds",
    internationalBonds: "International (Non-N.A.) Bonds",
    realReturnBonds: "Real Return Bonds (All Countries)",
    highYieldBonds: "High Yield Bonds (All Countries)",
    emergingMarketsDebt: "Emerging Markets Debt",
    BondsUndefined: "Bonds Undefined",
  },
  cashShortTerm: {
    cash: "Cash",
    GIC: "GIC",
    shortTermInstruments: "Short-Term Instruments",
  },
  alternatives: {
    commodities: "Commodities",
    hedgeFunds: "Hedge Funds",
    privateEquity: "Private Equity",
    realEstate: "Real Estate (Direct Investment)",
    infrastructure: "Infrastructure (Direct Investment)",
    derivatives: "Derivatives",
    privateDebt: "Private Debt",
    mortgages: "Mortgages",
    managedFutures: "Managed Futures",
    businessTrusts: "Business Trusts",
    nonMarketableGovtDebt: "Non Marketable Govt Debt",
    alternativesUndefined: "Alternatives Undefined",
  },
  others: {
    balancedAssetAllocationFunds: "Balanced/Asset Allocation Funds",
    targetDateFunds: "Target Date Funds",
    targetRiskFunds: "Target Risk Funds",
    exchangeTradedFunds: "Exchange-Traded Funds",
    realEstateEquity: "Real Estate Equity",
    infrastructureEquity: "Infrastructure Equity",
    REITs: "REITs",
  },
};
interface PropsTableAssetAllocation {
  item: string;
  children?: React.ReactNode;
  titleTotal: string;
}
const TableAssetAllocation = ({
  item,
  children,
  titleTotal,
}: PropsTableAssetAllocation) => {
  const { register } = useFormContext();
  return (
    <Table variant="striped">
      <Thead>
        <Tr>
          <Th w="28%"></Th>
          <Th textAlign="center" w="12%">
            <Text fontWeight="bold">Hiring </Text>
            <span>(Check here if hiring in the next 12 months for DB)</span>
          </Th>
          <Th textAlign="center" w="12%">
            <Text fontWeight="bold">Defined Benefit</Text>
            <span>(percentage) %</span>
          </Th>
          <Th textAlign="center" w="12%">
            <Text fontWeight="bold">Defined Contribution</Text>
            <span>(percentage) %</span>
          </Th>
          <Th textAlign="center" w="12%">
            <Text fontWeight="bold">Hybrid</Text>
            <span>(percentage) %</span>
          </Th>
          <Th textAlign="center" w="12%">
            <Text fontWeight="bold">Group RRSP</Text>
            <span>(percentage) %</span>
          </Th>
          <Th textAlign="center" w="12%">
            <Text fontWeight="bold">Other</Text>
            <span>(percentage) %</span>
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {Object.keys(data[item]).map((key) => (
          <Tr key={key}>
            <Td>
              {titles[item][key] ?? (
                <InputField name={`${item}.${key}.title`} width="100%" />
              )}
            </Td>
            <Td textAlign="center">
              <Checkbox {...register(`${item}.${key}.hiring`)} />
            </Td>
            <Td>
              <InputField name={`${item}.${key}.definedBenefit`} width="100%" />
            </Td>
            <Td>
              <InputField
                name={`${item}.${key}.definedContribution`}
                width="100%"
              />
            </Td>
            <Td>
              <InputField name={`${item}.${key}.hybrid`} width="100%" />
            </Td>
            <Td>
              <InputField name={`${item}.${key}.groupRRSP`} width="100%" />
            </Td>
            <Td>
              <InputField name={`${item}.${key}.other`} width="100%" />
            </Td>
          </Tr>
        ))}
        <Tr>
          <Td colSpan="2">{titleTotal}</Td>

          <Td>
            <InputField
              disabled
              defaultValue={getTotals(data[item], "definedBenefit")}
              name={`${item}.definedBenefit.total`}
              width="100%"
            />
          </Td>
          <Td>
            <InputField
              disabled
              defaultValue={getTotals(data[item], "definedContribution")}
              name={`${item}.definedContribution.total`}
              width="100%"
            />
          </Td>
          <Td>
            <InputField
              disabled
              defaultValue={getTotals(data[item], "hybrid")}
              name={`${item}.hybrid.total`}
              width="100%"
            />
          </Td>
          <Td>
            <InputField
              disabled
              defaultValue={getTotals(data[item], "groupRRSP")}
              name={`${item}.groupRRSP.total`}
              width="100%"
            />
          </Td>
          <Td>
            <InputField
              disabled
              defaultValue={getTotals(data[item], "other")}
              name={`${item}.other.total`}
              width="100%"
            />
          </Td>
        </Tr>
        {children}
      </Tbody>
    </Table>
  );
};
const AssetAllocation = () => {
  const methods = useForm({ defaultValues: data });
  return (
    <>
      <FormProvider {...methods}>
        <Stack spacing="24px">
          <Accordion title="Equity">
            <TableAssetAllocation titleTotal="Total Equities" item="equity" />
          </Accordion>
          <Accordion title="Bonds">
            <TableAssetAllocation titleTotal="Total Bonds" item="bonds" />
          </Accordion>
          <Accordion title="Cash">
            <TableAssetAllocation
              titleTotal="Total Cash"
              item="cashShortTerm"
            />
          </Accordion>
          <Accordion title="Alternatives">
            <TableAssetAllocation
              titleTotal="Total Alternatives"
              item="alternatives"
            />
          </Accordion>
          <Accordion title="Others">
            <TableAssetAllocation titleTotal="Total Others" item="others" />
          </Accordion>
        </Stack>
      </FormProvider>
    </>
  );
};

export default AssetAllocation;
