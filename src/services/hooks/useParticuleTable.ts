import { useContext } from "react";
import { ParticulesContext } from "../../Interfaces/Types";

export function useParticuleTable() {
  const {
    particules,
    setParticules,
    setNameParticuleToEdit,
    setPositionXToEdit,
    setPositionYToEdit,
    setForceToEdit,
    setDegreesToEdit,
    setMassToEdit,
    setIsEdit,
    handleShowDisplay,
    handleOpenNewParticuleModal,
    setCurrentParticule,
  } = useContext(ParticulesContext);

  function removeParticule(id: number) {
    const removeParticule = particules.filter(
      (particule) => particule.id !== id
    );

    setParticules(removeParticule);
    localStorage.setItem("particules", JSON.stringify(removeParticule));
  }
  function editParticule(id: number) {
    const particuleToEdit = particules.find((particule) => particule.id === id);

    const loadDataToEdit = {
      id: Number(particuleToEdit?.id),
      oldName: particuleToEdit?.nameParticule as string,
      oldPositionX: Number(particuleToEdit?.positionX),
      oldPositionY: Number(particuleToEdit?.positionY),
      oldForce: Number(particuleToEdit?.force),
      oldDegrees: Number(particuleToEdit?.degrees),
      oldMass: Number(particuleToEdit?.mass),
      background: String(particuleToEdit?.background),
    };

    setNameParticuleToEdit(loadDataToEdit.oldName);
    setPositionXToEdit(`${loadDataToEdit.oldPositionX}`);
    setPositionYToEdit(`${loadDataToEdit.oldPositionY}`);
    setForceToEdit(`${loadDataToEdit.oldForce}`);
    setDegreesToEdit(`${loadDataToEdit.oldDegrees}`);
    setMassToEdit(`${loadDataToEdit.oldMass}`);

    removeParticule(id);
    setIsEdit(true);
    handleShowDisplay();
    handleOpenNewParticuleModal();

    setCurrentParticule(loadDataToEdit);

    return loadDataToEdit;
  }

  return {
    editParticule,
    removeParticule,
  };
}
