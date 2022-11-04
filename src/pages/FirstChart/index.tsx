import {BarElement, Chart} from 'chart.js';
import { Bubble } from "react-chartjs-2";

import {  firstChartOptions  } from "../../settings/ChartsConfig";
import { useFirstChartData } from "../../services/hooks/useFirstChartData";

import { ChartContainer, ChartContent, ResponsiveContent } from "../../styles/global";

Chart.register(BarElement)

export function FirstChart(){
  const {firstChartData} = useFirstChartData();

  return (
    <ChartContainer>
      <h1><i>Posição do CM</i></h1>         
      <ChartContent> 
        <ResponsiveContent>
          <Bubble
            data={firstChartData}
            options={firstChartOptions}
          />
        </ResponsiveContent>
      </ChartContent>
    </ChartContainer>
  )
}