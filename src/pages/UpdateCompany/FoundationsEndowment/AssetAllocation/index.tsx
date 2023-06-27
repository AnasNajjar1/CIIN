import {
  Stack,
  Table,
  Tbody,
  Td,
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
    EAFEEquity: "EAFE Equity",
    emergingMarketsEquity: "Emerging Markets Equity",
    globalEquity: "Global Equity",
    internationalEquity: "International (Non-N.A.) Equity",
  },
  bonds: {
    canadianBonds: "Canadian Bonds",
    usBonds: "US Bonds",
    globalBounds: "Global Bonds",
    internationalBonds: "International (Non-N.A.) Bonds",
    realReturnBonds: "Real Return Bonds (All Countries)",
    highYieldBonds: "High Yield Bonds (All Countries)",
  },
  cashShortTerm: {
    cashShortTerm: "Cash/Short-Term",
    GIC: "GIC",
    moneyMarket: "Money Market",
  },
  alternatives: {
    commodities: "Commodities",
    hedgeFunds: "Hedge Funds",
    privateEquity: "Private Equity",
    realEstate: "Real Estate Equity",
    infrastructure: "Infrastructure",
    REITs: "REITs",
    emergingMarketsDebt: "Emerging Markets Debt",
    privateDebt: "Private Debt",
    mortgages: "Mortgages",
    managedFutures: "Managed Futures",
    businessTrusts: "Business Trusts",
    nonMarketableGovtDebt: "Non Marketable Govt Debt",
  },
  others: {
    balanced: "Balanced",
    targetDateAssetAllocation: "Target Date Asset Allocation",
    targetDateRiskAsset: "Target Date Risk Asset",
    targetDateRiskCombo: "Target Date/Risk (combo)",

    ETFs: "ETF's",
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
          <Th w="40%"></Th>
          <Th textAlign="center" w="60%">
            (percentage) %
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

            <Td>
              <InputField name={`${item}.${key}.percent`} width="100%" />
            </Td>
          </Tr>
        ))}
        <Tr>
          <Td>{titleTotal}</Td>

          <Td>
            <InputField
              disabled
              defaultValue={getTotals(data[item], "percent")}
              name={`${item}.percent.total`}
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
