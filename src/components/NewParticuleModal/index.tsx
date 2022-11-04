import { useContext } from "react";
import Modal from "react-modal";
import { ParticulesContext } from "../../Interfaces/Types";
import { useNewParticuleModalActions } from "../../services/hooks/useNewParticuleModalActions";
import { Container } from "./styles";


export function NewPartículeModal () {

  const {
    isParticuleModalOpen, 
    handleCloseNewParticuleModal, 
    isEdit, 
    nameParticuleToEdit,
    positionXToEdit,
    positionYToEdit,
    degreesToEdit,
    forceToEdit,
    massToEdit,
    setNameParticuleToEdit,
    setPositionXToEdit,
    setPositionYToEdit,
    setDegreesToEdit,
    setForceToEdit,
    setMassToEdit,
    handleEditOldParticule    
  } = useContext(ParticulesContext);
  
  const {
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
  } = useNewParticuleModalActions();


  return (
    isEdit ? (
      <Modal 
        isOpen = {isParticuleModalOpen}
        onRequestClose = {handleCancelEdit}
        overlayClassName = 'react-modal-overlay'
        className = 'react-modal-content'
      
      >
      <Container onSubmit={handleEditOldParticule}>
        <h2><i>Editar partícula</i></h2>
      
        <input 
          type = 'text' 
          placeholder = 'Nome da partícula'
          value={nameParticuleToEdit}
          onChange = {event => setNameParticuleToEdit(event.target.value)}
        />
        <input 
          type = 'number'
          step=".00001" 
          placeholder = 'Posição em x (m)'
          value={positionXToEdit}
          onChange = {event => setPositionXToEdit(event.target.value)}
        />
        <input 
          type = 'number'
          step=".00001" 
          placeholder = 'Posição em y (m)'
          value={positionYToEdit}
          onChange = {event => setPositionYToEdit(event.target.value)}
        />
        <input 
          type = 'number'
          step=".00001" 
          placeholder = 'Força externa atuante (N)'
          value={forceToEdit}
          onChange = {event => setForceToEdit(event.target.value)}
        />
        <input 
          placeholder = 'Grau de inclinação da força aplicada em relação a x'
          value={degreesToEdit}
          onChange = {event => setDegreesToEdit(event.target.value)}
        />
        <input 
          type = 'number'
          step=".00001" 
          placeholder = 'Massa da partícula (Kg)'
          value={massToEdit}
          onChange = {event => setMassToEdit(event.target.value)}
        />

        <div className="buttonBox">
          <button type="submit"><h5>Atualizar dados</h5></button>
          <button type="button" onClick={handleCancelEdit}><h5>Cancelar</h5></button>
        </div>

      </Container>
    </Modal>
    ):(
      <Modal 
        isOpen = {isParticuleModalOpen}
        onRequestClose = {handleCloseNewParticuleModal}
        overlayClassName = 'react-modal-overlay'
        className = 'react-modal-content'
      >

      <Container onSubmit={handleCreateNewParticule}>
        <h2><i>Adicionar partícula</i></h2>
      
        <input 
          type = 'text' 
          placeholder = 'Nome da partícula'
          value={nameParticule}
          onChange = {event => setNameParticule(event.target.value)}
        />
        <input 
          type = 'number'
          step=".00001" 
          placeholder = 'Posição em x (m)'
          value={positionX}
          onChange = {event => setPositionX(event.target.value)}
        />
        <input 
          type = 'number'
          step=".00001" 
          placeholder = 'Posição em y (m)'
          value={positionY}
          onChange = {event => setPositionY(event.target.value)}
        />
        <input 
          type = 'number'
          step=".00001" 
          placeholder = 'Força externa atuante (N)'
          value={force}
          onChange = {event => setForce(event.target.value)}
        />
        <input 
          type = 'number'
          step=".00001" 
          placeholder = 'Grau de inclinação da força aplicada em relação a x'
          value={degrees}
          onChange = {event => setDegrees(event.target.value)}
        />
        <input 
          type = 'number'
          step=".00001" 
          placeholder = 'Massa da partícula (Kg)'
          value={mass}
          onChange = {event => setMass(event.target.value)}
        />

        <div className="buttonBox">

          <button type="submit"><h5>Cadastrar dados</h5></button>
          <button type="button" onClick={handleCloseNewParticuleModal}><h5>Cancelar</h5></button>
        </div>
      </Container>
      </Modal>
    )
    
  )
}