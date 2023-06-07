import { Box } from "@chakra-ui/react";
import { Chart as ChartJS, ArcElement } from "chart.js";
import { Pie } from "react-chartjs-2";
import { pieColors } from "../utils/constants";
ChartJS.register(ArcElement);
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
};
interface Props {
  data: number[];
  width: number;
  height: number;
}
const PieChart = ({ data, ...dimensions }: Props) => {
  return (
    <Box {...dimensions}>
      <Pie
        data={{
          datasets: [
            {
              data,
              backgroundColor: pieColors.slice(0, data.length),
            },
          ],
        }}
        {...dimensions}
        options={options}
      />
    </Box>
  );
};

export default PieChart;
