import { useEffect, useState } from "react";
import { Particule, ParticuleInputProps } from "../Interfaces/Types";

export function useActions() {
  const [particules, setParticules] = useState<Particule[]>([]);
  const [insertTimeSimulation, setInsertTimeSimulation] = useState<number>(0);

  useEffect(() => {
    let localStorageParticules = localStorage.getItem("particules") as string;
    const localStorageParticule =
      JSON.parse(localStorageParticules) !== null
        ? JSON.parse(localStorageParticules)
        : [];
    setParticules(localStorageParticule);

    let localStorageInputTime = localStorage.getItem(
      "timeSimulation"
    ) as string;
    const localStorageTime =
      JSON.parse(localStorageInputTime) !== null
        ? JSON.parse(localStorageInputTime)
        : [0];
    setInsertTimeSimulation(localStorageTime);
  }, []);

  async function CreateNewParticule(particulesInput: ParticuleInputProps) {
    const randomColor = () => {
      const gerationColor =
        "#" +
        Math.floor(Math.random() * 0x1000000)
          .toString(16)
          .padStart(6, "0");
      return gerationColor;
    };
    const idGenerate = Math.random();

    const particule = {
      ...particulesInput,
      background: randomColor(),
      id: idGenerate,
    };

    const uptadeParticules = [...particules, particule];

    setParticules(uptadeParticules);

    localStorage.setItem("particules", JSON.stringify(uptadeParticules));
  }

  return {
    CreateNewParticule,
    insertTimeSimulation,
    setInsertTimeSimulation,
    setParticules,
    particules,
  };
}
