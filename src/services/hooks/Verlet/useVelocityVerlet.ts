import { useContext } from "react";
import { ParticulesContext } from "../../../Interfaces/Types";
import { useCMparameters } from "./useCMparameters";

export function useVelocityVerlet(){
  const {range, insertTimeSimulation} = useContext(ParticulesContext);
  const {CM} = useCMparameters()


  function VelocityVerlet (){
    const dt = range
    const tm = insertTimeSimulation

    //_______________________Verlet_______________________//

    const parametersCM = CM.data[0];

    
    const x = [parametersCM.x]  // posição em x
    const y: number[] = [parametersCM.y]  // posição em y
    

    const vx: number[] = [0]  // velocidade em x
    const vy: number[] = [0]  // velocidade em y
    const kineticEnergy: number[] = [0]  

    
    const accelerationX = parametersCM.aCmX  // aceleração em x
    const accelerationY = parametersCM.aCmY  // aceleração em y
    
    const t = [0] // initial time
    const r = [parametersCM.aCmR]// modulo do vetor posição - r 
    const velocityV = [0] // modulo do vetor velocidade - v
    const accelerationA = [parametersCM.aCmR]  // modulo do vetor aceleração - a
    
    for (var i = 0; t[t.length - 1] < tm; i++) {
      
      t.push(Number((i * dt).toFixed(5)))
             
      const  positionNextX =  x[i] + vx[i]*dt + accelerationX * Math.pow(dt, 2)
      const  positionNextY =  y[i] + vy[i]*dt + accelerationY * Math.pow(dt, 2)
      const  positionNextR =  r[i] + velocityV[i]*dt + accelerationA[i]* Math.pow(dt, 2)
        
      const velocityNextX = vx[i] +  accelerationX* dt
      const velocityNextY = vy[i] +  accelerationY* dt
      const velocityNextV = velocityV[i] + accelerationA[i]* dt
      

      x.push(Number(positionNextX.toFixed(4)));
      y.push(Number(positionNextY.toFixed(4)));
      r.push(Number(positionNextR.toFixed(4)));

      vx.push(Number(velocityNextX.toFixed(4)));
      vy.push(Number(velocityNextY.toFixed(4)));
      velocityV.push(Number(velocityNextV.toFixed(4)));
      console.log(positionNextX, positionNextY)

      accelerationA.push(accelerationA[i]);

      const kineticEnergyNext = parametersCM.mr*Math.pow(vx[i], 2) / 2;
      kineticEnergy.push((Number(kineticEnergyNext.toFixed(5))));
    }

    t.shift()
    r.shift()
    accelerationA.shift()   
    
    velocityV.pop()
    vx.pop()
    vy.pop()
  
    const newData = x.map((x, i) => ({
      x,
      y: y[i],
    }));
    const tableData = t.map((t, i) => ({
      i,
      t,
      r: r[i],
      v: velocityV[i],
      a: accelerationA[i],
      kineticEnergy: kineticEnergy[i],
    }));
    
  return { tableData,t, r, velocityV,accelerationA, newData,kineticEnergy}
    //____________________ End Verlet____________________//

  }
  const {
    t,
    r,
    velocityV,
    accelerationA,
    newData,
    tableData,
    kineticEnergy,
  } = VelocityVerlet();

  return {
    t,
    r,
    velocityV,
    accelerationA,
    newData,
    tableData,
    kineticEnergy,
  }
}