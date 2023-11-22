import { useVelocityVerlet } from "./Verlet/useVelocityVerlet";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,

  Title,
  Tooltip,
  Legend
);

export function useProgressChartsData() {
  const { t, r, velocityV, accelerationA, kineticEnergy } = useVelocityVerlet();

  const EMChartData = {
    labels: t,
    datasets: [
      {
        label: "Cinética",
        data: kineticEnergy,

        backgroundColor: ["rgba(153, 102, 255, 1)"],
      },
    ],
  };

  const positionChartData = {
    labels: t,

    datasets: [
      {
        label: "Posição x Tempo",
        data: r,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  const velocityChartData = {
    labels: t,

    datasets: [
      {
        label: "Velocidade x Tempo",
        data: velocityV,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  const acelerationChartData = {
    labels: t,

    datasets: [
      {
        label: "Aceleração x tempo",
        data: accelerationA,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.4,
      },
    ],
  };

  return {
    EMChartData,
    positionChartData,
    velocityChartData,
    acelerationChartData,
  };
}
