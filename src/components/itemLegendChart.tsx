import { Box, Flex, Text } from "@chakra-ui/react";
import { pieColors } from "../utils/constants";

interface ItemLegendChartProps {
  label: string;
  index: number;
  value: React.ReactNode;
}
const ItemLegendChart = ({ label, index, value }: ItemLegendChartProps) => {
  return (
    <Flex justify="space-between" align="center" width="100%">
      <Flex gap="4px" align="center">
        <Box
          width="16px"
          height="16px"
          borderRadius="50%"
          bg={pieColors[index]}
        />
        <Text textStyle="base" fontWeight="500">
          {label}
        </Text>
      </Flex>
      <Text textStyle="base" fontWeight="500">
        {value}
      </Text>
    </Flex>
  );
};

export default ItemLegendChart;
