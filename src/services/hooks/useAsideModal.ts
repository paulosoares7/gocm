import { FormEvent, useContext, useState } from "react";
import { ParticulesContext } from "../../Interfaces/Types";
import { useCMparameters } from "./Verlet/useCMparameters";

export function useAsideModal() {
  const { setInsertTimeSimulation } = useContext(ParticulesContext);
  const { CM } = useCMparameters();

  const [timeSimulation, setTimeSimulation] = useState("");

  const { x, y, mr, fr, aCmR } = CM.data[0];

  function handleTimeSimulation(event: FormEvent) {
    event.preventDefault();

    setTimeSimulation("");
    const loadTimeSimulation = Number(timeSimulation);
    setInsertTimeSimulation(loadTimeSimulation);
    localStorage.setItem("timeSimulation", JSON.stringify(loadTimeSimulation));
  }

  const valueX = Number(x.toFixed(3));
  const valueY = Number(y.toFixed(3));
  const valueM = Number(mr.toFixed(3));
  const valueF = Number(fr.toFixed(3));
  const valueA = Number(aCmR.toFixed(3));

  return {
    handleTimeSimulation,
    timeSimulation,
    setTimeSimulation,
    valueX,
    valueY,
    valueM,
    valueF,
    valueA,
  };
}
