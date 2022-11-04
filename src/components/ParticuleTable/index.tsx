import { Container, List} from "./styles";
import { BiEditAlt, BiTrashAlt } from "react-icons/bi";
import { useParticuleTable } from "../../services/hooks/useParticuleTable";
import { useContext } from "react";
import { ParticulesContext } from "../../Interfaces/Types";

export function ParticuleTable (){
  const {particules} = useContext(ParticulesContext);
  const {editParticule, removeParticule} = useParticuleTable();
  return (
    <Container>
      {particules.map(particule =>(
        <List key = {particule.id}  isBackground= {particule.background}>
          <table >
            <thead>
              <tr>
                <th>
                  <h3 className="particuleColor" ><i>{particule.nameParticule}</i></h3>
                </th>
                <th>
                  <div className="buttonContainer">
                    <button type="button"
                      onClick={() => {editParticule(particule.id)}}>
                      <BiEditAlt/>
                    </button>
                    <button type="button"
                      onClick={() => {removeParticule(particule.id)}}>
                      <BiTrashAlt/>
                    </button>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><i>x: {particule.positionX} m</i></td>
                <td><i>y: {particule.positionY} m</i></td>
              </tr>
              <tr>
                <td><i>m: {particule.mass} kg</i></td>
                <td><i>F: {particule.force} N</i></td>
              </tr>
            </tbody>
          </table>
        </List>
      ))}
    </Container>
  )
}