import { FormEvent, useContext, useState } from "react";
import { ParticulesContext } from "../../Interfaces/Types";


export function useNewParticuleModalActions(){
  
  const {
    handleCloseNewParticuleModal,
    currentParticule,
    CreateNewParticule,
    setParticules,
    particules,
    setIsEdit,
  }=useContext(ParticulesContext);

  const [nameParticule, setNameParticule] = useState('');
  const [positionX, setPositionX] = useState('');
  const [positionY, setPositionY] = useState('');
  const [degrees, setDegrees] = useState('');
  const [force, setForce] = useState('');
  const [mass, setMass] = useState('');


  async function handleCreateNewParticule (event: FormEvent){

    event.preventDefault()

    if (nameParticule && positionX && positionY && degrees && force && mass !== '') {

      await CreateNewParticule({
        nameParticule,
        positionX: Number(positionX),
        positionY: Number(positionY),
        degrees: Number(degrees),
        force: Number(force),
        mass: Number(mass)
      })
    } else {
      return
    }
    handleCloseNewParticuleModal()
    setNameParticule('')
    setPositionX('')
    setPositionY('')
    setDegrees('')
    setForce('')
    setMass('')
  };

  function handleCancelEdit(){
    const updateParticule ={
      id: currentParticule.id,
      nameParticule: currentParticule.oldName  ,
      positionX: currentParticule.oldPositionX,
      positionY: currentParticule.oldPositionY,
      force: currentParticule.oldForce,
      degrees: currentParticule.oldDegrees,
      mass: currentParticule.oldMass,
      background: currentParticule.background,
    }

    setParticules([
      ...particules, updateParticule
    ])
   
    handleCloseNewParticuleModal()
    setIsEdit(false)
  }

  return{
    handleCancelEdit,
    handleCreateNewParticule,
    nameParticule,
    setNameParticule,
    positionX,
    setPositionX,
    positionY,
    setPositionY,
    degrees,
    setDegrees,
    force,
    setForce,
    mass,
    setMass,
  }
}