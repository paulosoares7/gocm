import { useVelocityVerlet } from "./Verlet/useVelocityVerlet";

export function useSecondChartData() {
  const { newData } = useVelocityVerlet();

  const secondChartData = {
    datasets: [
      {
        label: "Movimento do Centro de Massa",
        data: newData,
        backgroundColor: "#04D361",
      },
    ],
  };

  return { secondChartData };
}
