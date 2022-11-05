import { useContext } from "react";
import { ParticulesContext } from "../../Interfaces/Types";
import { useCMparameters } from "./Verlet/useCMparameters";

export function useFirstChartData() {
  const { particules } = useContext(ParticulesContext);
  const { CM } = useCMparameters();

  const { x, y } = CM.data[0];
  const firstChartDataSets = particules.map((particule, i) => ({
    label: particule.nameParticule,
    data: [
      {
        x: Number(particule.positionX),
        y: Number(particule.positionY),
        r: 12,
      },
    ],
    backgroundColor: particule.background,
  }));
  const cmDataSets = {
    label: "CM",
    data: [
      {
        x: x,
        y: y,
        r: 10,
      },
    ],
    backgroundColor: "red",
  };

  firstChartDataSets.push(cmDataSets);

  const firstChartData = {
    datasets: firstChartDataSets,
  };

  return { firstChartData };
}
