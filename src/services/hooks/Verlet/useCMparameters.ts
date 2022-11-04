import { useContext } from "react";
import { Particule, ParticulesContext } from "../../../Interfaces/Types";

export function useCMparameters(){
  const {particules} = useContext(ParticulesContext)

  const paramentCM = particules.map((particule: Particule) => (
    {
      positionX: Number(particule.positionX),
      positionY: Number(particule.positionY),
      mass: Number(particule.mass),
      fx: Math.cos(Number(particule.degrees) *Math.PI/180) * Number(particule.force),
      fy: Math.sin(Number(particule.degrees) *Math.PI/180) * Number(particule.force),
      fr: Number(particule.force),
    }
  ))
  
  // Massa resultante
  const mCm = paramentCM.reduce(
    (preVal: number, particule) => Number((preVal + particule.mass).toFixed(4)), 0
  );
  // somatório: x[i].m[i]
  const xCm = paramentCM.reduce(
    (preVal: number, particule) =>
    Number((preVal + particule.positionX * particule.mass / mCm).toFixed(4)), 0 
  );

  // somatório: y[i].m[i]
  const yCm = paramentCM.reduce(
    (preVal: number, particule) =>
    Number((preVal + particule.positionY * particule.mass / mCm).toFixed(4)), 0 
  );

  // componente ax: F*cos(degrees)
  const aCmX = paramentCM.reduce(
    (preVal: number, particule) =>
    Number((preVal + particule.fx / mCm).toFixed(4)), 0
  );

  // componente ay: F*cos(degrees)
  const aCmY = paramentCM.reduce(
    (preVal: number, particule) =>
   Number((preVal + particule.fy / mCm).toFixed(4)), 0
  );

  const fx = paramentCM.reduce(
    (preVal: number, particule) =>
    Number((preVal + particule.fx).toFixed(4)), 0
  );

  const fy = paramentCM.reduce(
    (preVal: number, particule) =>
    Number((preVal + particule.fy).toFixed(4)), 0
  );

  const fr = paramentCM.reduce(
    (preVal: number, particule) =>
    (preVal +  Math.sqrt( Math.pow(particule.fx,2) + Math.pow(particule.fy,2))), 0 
  );

  
  // componente ar: rais^2(acmx² + acmy²)
  const rCmR = Number((Math.hypot(xCm, yCm)).toFixed(4));
  const aCmR = Number((Math.hypot(aCmX, aCmY)).toFixed(4));
      
      // DADOS DO CENTRO DE MASSA
  const CM = {
    label: 'Centro de Massa',
    data: [{
      x: xCm,
      y: yCm,
      r: 7,
      mr: mCm,
      fr,
      fx,
      fy,
      aCmX,
      aCmY,
      rCmR,
      aCmR,
    }],
    backgroundColor: 'red',
  }
  
  return {CM}
}