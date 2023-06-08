import { Box, Card, CardBody, Flex, Text, VStack } from "@chakra-ui/react";
import LatestUpdate from "./latestUpdate";
import PieChart from "../../components/Shared/PieChart";
import ItemLegendChart from "../../components/Shared/ItemLegendChart";
const chartAll = {
  data: [1172, 66.89, 93.72, 56.23, 52.86, 42, 25, 10, 5, 2, 0.72, 0.65, 0.38],
  itemsLegend: [
    {
      label: "Canadian Bonds",
      value: "71.91% ($1172.24)",
    },
    {
      label: "Global Equity",
      value: "10.24% ($66.89)",
    },
    {
      label: "Hedge Funds",
      value: "5.75% ($93.72)",
    },
    {
      label: "Private Debt",
      value: "3.45% ($56.23)",
    },
    {
      label: "Alternatives Undefined",
      value: "3.24% ($52.86)",
    },
    {
      label: "Cash",
      value: "2.59% ($42.17)",
    },
    {
      label: "Other",
      value: "1.54% ($25.13)",
    },
    {
      label: "Private Equity",
      value: "0.72% ($10.24)",
    },
    {
      label: "Canadian Equity",
      value: "0.33% ($5.53)",
    },
    {
      label: "US Equity",
      value: "0.18% ($2.88)",
    },
    {
      label: "Short-Term Instruments",
      value: "0.04% ($0.72)",
    },
    {
      label: "US Bonds",
      value: "0.04% ($0.65)",
    },
    {
      label: "GIC",
      value: "0.02% ($ 0.38)",
    },
  ],
};
const chartDefinedBenefit = {
  data: [1169, 164, 93, 56, 42, 24, 10],
  itemsLegend: [
    {
      label: "Canadian Bonds",
      value: "74.9% ($1169.94)",
    },
    {
      label: "Global Equity",
      value: "10.24% ($164)",
    },
    {
      label: "Hedge Funds",
      value: "6% ($93.72)",
    },
    {
      label: "Private Debt",
      value: "3.45% ($56.23)",
    },

    {
      label: "Cash",
      value: "2.7% ($42.17)",
    },
    {
      label: "Other",
      value: "1.6% ($24.99)",
    },
    {
      label: "Private Equity",
      value: "0.7% ($10.93)",
    },
  ],
};
const chartDefinedContribution = {
  data: [43, 3, 1, 1, 1, 0.5, 0.3, 0.2],
  itemsLegend: [
    {
      label: "Alternatives Undefines",
      value: "83% ($43.05)",
    },
    {
      label: "Canadian Equity",
      value: "6.71% ($3.48)",
    },
    {
      label: "US Equity",
      value: "3.05% ($1.58)",
    },
    {
      label: "Global Equity",
      value: "3.04% ($1.58)",
    },
    {
      label: "Canadian Bonds",
      value: "1.93% ($1)",
    },
    {
      label: "Short-Term Instruments",
      value: "1.26% ($0.65)",
    },
    {
      label: "GIC",
      value: "0.5% ($0.3)",
    },
    {
      label: "Other",
      value: "0.3% ($0.2)",
    },
  ],
};
const chartRRSP = {
  data: [6.5, 2, 1.3, 1.3, 1.3, 0.6, 0.07],
  itemsLegend: [
    {
      label: "Alternatives Undefines",
      value: "49.5% ($6.45)",
    },
    {
      label: "Canadian Equity",
      value: "15% ($2)",
    },
    {
      label: "Canadian Bonds",
      value: "10% ($1.3)",
    },
    {
      label: "Global Equity",
      value: "10% ($1.3)",
    },
    {
      label: "US Equity",
      value: "10% ($1.3)",
    },
    {
      label: "US Bonds",
      value: "5% ($0.65)",
    },
    {
      label: "Short-Term Instruments",
      value: "0.5% ($0.07)",
    },
  ],
};
const chartOAC = {
  data: [3.36],
  itemsLegend: [
    {
      label: "Alternatives Undefines",
      value: "100% ($3.36)",
    },
  ],
};
const Assets = () => {
  return (
    <>
      <LatestUpdate />
      <Text textStyle="h4" mb="24px">
        All
      </Text>
      <Card mb="48px">
        <CardBody
          display="flex"
          gap="64px"
          alignItems="center"
          justifyContent="center"
        >
          <PieChart data={chartAll.data} width={400} height={400} />
          <VStack spacing="16px" flex="1" maxWidth="500px">
            <Flex justify="space-between" align="center" width="100%">
              <Text textStyle="base" fontWeight="500">
                Total
              </Text>
              <Text textStyle="base" fontWeight="500">
                $1172.24
              </Text>
            </Flex>
            {chartAll.itemsLegend.map((item, index) => (
              <ItemLegendChart key={item.label} {...item} index={index} />
            ))}
          </VStack>
        </CardBody>
      </Card>
      <Flex gap="36px" width="100%" mb="42px">
        <Box width="50%" display="flex" flexDirection="column">
          <Text textStyle="h4" mb="24px">
            Defined Benefit
          </Text>
          <Card flex="1">
            <CardBody display="flex" gap="20px" justifyContent="center">
              <PieChart
                data={chartDefinedBenefit.data}
                width={151}
                height={151}
              />
              <VStack spacing="16px" flex="1" maxWidth="500px">
                <Flex justify="space-between" align="center" width="100%">
                  <Text textStyle="base" fontWeight="500">
                    Total
                  </Text>
                  <Text textStyle="base" fontWeight="500">
                    $1562
                  </Text>
                </Flex>
                {chartDefinedBenefit.itemsLegend.map((item, index) => (
                  <ItemLegendChart key={item.label} {...item} index={index} />
                ))}
              </VStack>
            </CardBody>
          </Card>
        </Box>
        <Box width="50%" display="flex" flexDirection="column">
          <Text textStyle="h4" mb="24px">
            Defined Contribution
          </Text>
          <Card flex="1">
            <CardBody
              display="flex"
              gap="20px"
              mb="48px"
              justifyContent="center"
            >
              <PieChart
                data={chartDefinedContribution.data}
                width={151}
                height={151}
              />
              <VStack spacing="16px" flex="1" maxWidth="500px">
                <Flex justify="space-between" align="center" width="100%">
                  <Text textStyle="base" fontWeight="500">
                    Total
                  </Text>
                  <Text textStyle="base" fontWeight="500">
                    $51.86
                  </Text>
                </Flex>
                {chartDefinedContribution.itemsLegend.map((item, index) => (
                  <ItemLegendChart key={item.label} {...item} index={index} />
                ))}
              </VStack>
            </CardBody>
          </Card>
        </Box>
      </Flex>
      <Flex gap="36px" width="100%">
        <Box width="50%" display="flex" flexDirection="column">
          <Text textStyle="h4" mb="24px">
            RRSP
          </Text>
          <Card flex="1">
            <CardBody
              display="flex"
              gap="20px"
              mb="48px"
              justifyContent="center"
            >
              <PieChart data={chartRRSP.data} width={151} height={151} />
              <VStack spacing="16px" flex="1" maxWidth="500px">
                <Flex justify="space-between" align="center" width="100%">
                  <Text textStyle="base" fontWeight="500">
                    Total
                  </Text>
                  <Text textStyle="base" fontWeight="500">
                    $13.03
                  </Text>
                </Flex>
                {chartRRSP.itemsLegend.map((item, index) => (
                  <ItemLegendChart key={item.label} {...item} index={index} />
                ))}
              </VStack>
            </CardBody>
          </Card>
        </Box>
        <Box width="50%" display="flex" flexDirection="column">
          <Text textStyle="h4" mb="24px">
            Other (OAC)
          </Text>
          <Card flex="1">
            <CardBody
              display="flex"
              gap="20px"
              mb="48px"
              justifyContent="center"
            >
              <PieChart data={chartOAC.data} width={151} height={151} />
              <VStack spacing="16px" flex="1" maxWidth="500px">
                <Flex justify="space-between" align="center" width="100%">
                  <Text textStyle="base" fontWeight="500">
                    Total
                  </Text>
                  <Text textStyle="base" fontWeight="500">
                    $3.36
                  </Text>
                </Flex>
                {chartOAC.itemsLegend.map((item, index) => (
                  <ItemLegendChart key={item.label} {...item} index={index} />
                ))}
              </VStack>
            </CardBody>
          </Card>
        </Box>
      </Flex>
    </>
  );
};

export default Assets;
