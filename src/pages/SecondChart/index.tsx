import { Scatter } from "react-chartjs-2";
import { secondChartOptions } from "../../settings/ChartsConfig";

import { useSecondChartData } from "../../services/hooks/useSecondChartData";
import { ChartContainer, ChartContent, ResponsiveContent } from "../chartStyles";

export function SecondChart() {
  const { secondChartData } = useSecondChartData();
  return (
    <ChartContainer>
      <h1>
        <i>Movimento do CM</i>
      </h1>
      <ChartContent>
        <ResponsiveContent>
          <Scatter data={secondChartData} options={secondChartOptions} />
        </ResponsiveContent>
      </ChartContent>

    </ChartContainer>
  );
}
