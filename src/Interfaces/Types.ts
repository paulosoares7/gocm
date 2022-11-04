import { createContext, FormEvent, ReactNode } from "react";

export interface ParticulesProviderProps {
  children: ReactNode;
}

export const ParticulesContext =  createContext<ParticulesContextData>(
  {} as ParticulesContextData
);

export interface Particule {
  id: number;
  nameParticule: string;
  positionX: number;
  positionY: number;
  degrees: number;
  mass: number;
  force: number;
  background: string;
};
interface LoadDataToEdit{
  id: number;
  oldName: string;
  oldPositionX: number;
  oldPositionY: number;
  oldForce: number;
  oldDegrees: number;
  oldMass: number;
  background: string;
}
export type ParticuleInputProps = Omit <Particule, 'id'|'background'>

export interface ParticulesContextData{
  setParticules: React.Dispatch<React.SetStateAction<Particule[]>>;
  setNameParticuleToEdit:React.Dispatch<React.SetStateAction<string>>,
  setPositionXToEdit:React.Dispatch<React.SetStateAction<string>>,
  setPositionYToEdit:React.Dispatch<React.SetStateAction<string>>,
  setDegreesToEdit:React.Dispatch<React.SetStateAction<string>>,
  setForceToEdit:React.Dispatch<React.SetStateAction<string>>,
  setMassToEdit:React.Dispatch<React.SetStateAction<string>>,
  setIsEdit:React.Dispatch<React.SetStateAction<boolean>>;
  setInsertTimeSimulation: React.Dispatch<React.SetStateAction<number>>;
  setRange:React.Dispatch<React.SetStateAction<number>>;
  setCurrentParticule:React.Dispatch<React.SetStateAction<LoadDataToEdit>>

  CreateNewParticule: (particule: ParticuleInputProps) => Promise<void>; 
  handleOpenNewParticuleModal: ()=> void;
  handleCloseNewParticuleModal: ()=> void;
  handleShowDisplay: ()=> void;

  isParticuleModalOpen: boolean;
  showDisplay: boolean;

  particules:Particule[];
  nameParticuleToEdit: string,
  positionXToEdit: string,
  positionYToEdit: string,
  degreesToEdit: string,
  forceToEdit: string,
  massToEdit: string,
  currentParticule: LoadDataToEdit;

  
  isEdit: boolean;

  insertTimeSimulation: number;
  range: number;  
  handleEditOldParticule(event: FormEvent): void
} 
