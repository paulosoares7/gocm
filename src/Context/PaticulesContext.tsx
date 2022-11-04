import {FormEvent, useState }  from 'react'
import { ParticulesContext, ParticulesProviderProps } from '../Interfaces/Types';
import { useActions } from './useActions';

export function ParticulesProvider({children}:ParticulesProviderProps){

  const {CreateNewParticule, insertTimeSimulation, particules, setParticules, setInsertTimeSimulation} = useActions();
  const [isParticuleModalOpen, setIsParticuleModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  
  const [currentParticule,setCurrentParticule] = useState({
    id: 0,
    oldName: '',
    oldPositionX: 0,
    oldPositionY: 0,
    oldForce: 0,
    oldDegrees: 0,
    oldMass: 0,
    background: '',
  });

  const [nameParticuleToEdit, setNameParticuleToEdit] = useState('');
  const [positionXToEdit, setPositionXToEdit] = useState('');
  const [positionYToEdit, setPositionYToEdit] = useState('');
  const [degreesToEdit, setDegreesToEdit] = useState('');
  const [forceToEdit, setForceToEdit] = useState('');
  const [massToEdit, setMassToEdit] = useState('');

  const[range, setRange] = useState<number>(0.1);
  const[showDisplay, setShowDisplay] = useState(false);

  function handleShowDisplay(){

    setShowDisplay(!showDisplay);
  }
  function handleOpenNewParticuleModal() {
 
     setIsParticuleModalOpen(true);
  };
   function handleCloseNewParticuleModal() {
    setIsParticuleModalOpen(false);
    setIsEdit(false)

   };
  function handleEditOldParticule (event: FormEvent){
    event.preventDefault();
    

    if (nameParticuleToEdit &&
        positionXToEdit &&
        positionYToEdit &&
        degreesToEdit &&
        forceToEdit &&
        massToEdit !== '') {

    const updateParticule ={

        id: currentParticule.id,
        nameParticule: nameParticuleToEdit  ,
        positionX: Number(positionXToEdit),
        positionY: Number(positionYToEdit),
        force: Number(forceToEdit),
        degrees: Number(degreesToEdit),
        mass: Number(massToEdit),
        background: currentParticule.background,

    }

     setParticules([
      ...particules, updateParticule
     ])

    } else {
      return

    }
    handleCloseNewParticuleModal()
    setIsEdit(false)
  };

  return(
    <ParticulesContext.Provider 
      value = {
        {
          setCurrentParticule,
          setParticules,
          setNameParticuleToEdit,
          setPositionXToEdit,
          setPositionYToEdit,
          setDegreesToEdit,
          setForceToEdit,
          setMassToEdit,
          setInsertTimeSimulation,
          setIsEdit,
          setRange,
          

          handleOpenNewParticuleModal,
          handleCloseNewParticuleModal,
          handleEditOldParticule,
          handleShowDisplay,

          isEdit,
          isParticuleModalOpen,          
          particules,
          nameParticuleToEdit,
          positionXToEdit,
          positionYToEdit,
          degreesToEdit,
          forceToEdit,
          massToEdit,
          insertTimeSimulation,
     
          CreateNewParticule, 
          showDisplay,
          range,
          currentParticule
        }
      }
      >
      {children}
    </ParticulesContext.Provider>
  )
}