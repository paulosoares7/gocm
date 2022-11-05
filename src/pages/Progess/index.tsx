import { Bar, Line } from "react-chartjs-2";

import {
  acelerationChartOptions,
  EMChartOptions,
  positionChartOptions,
  velocityChartOptions,
} from "../../settings/ChartsConfig";

import { Container, Content } from "./styles";
import { useProgressChartsData } from "../../services/hooks/useProgressChartsData";

import { ChartContainer, ChartContent } from "../../styles/global";

export function Progress() {
  const {
    EMChartData,
    positionChartData,
    velocityChartData,
    acelerationChartData,
  } = useProgressChartsData();

  return (
    <ChartContainer>
      <h1>Progresso</h1>
      <ChartContent>
        <Container>
          <Content>
            <h3>
              <i>Energia x tempo</i>
            </h3>

            <Bar data={EMChartData} options={EMChartOptions} />
          </Content>
          <Content>
            <h3>
              <i>Posição x tempo</i>
            </h3>
            <Line data={positionChartData} options={positionChartOptions} />
          </Content>
          <Content>
            <h3>
              <i>Velocidade x tempo</i>
            </h3>
            <Line data={velocityChartData} options={velocityChartOptions} />
          </Content>
          <Content>
            <h3>
              <i>Aceleração x tempo</i>
            </h3>
            <Line
              data={acelerationChartData}
              options={acelerationChartOptions}
            />
          </Content>
        </Container>
      </ChartContent>
    </ChartContainer>
  );
}
