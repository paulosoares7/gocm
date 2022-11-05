import { useContext } from "react";
import Modal from "react-modal";
import { AiOutlineClose, AiOutlineFieldTime } from "react-icons/ai";

import { ParticuleTable } from "../ParticuleTable";
import { useAsideModal } from "../../services/hooks/useAsideModal";
import { ParticulesContext } from "../../Interfaces/Types";

import { Content, InputsContainer } from "./styles";

export function AsideModal() {
  const { setRange, range, showDisplay, handleShowDisplay } =
    useContext(ParticulesContext);

  const {
    handleTimeSimulation,
    timeSimulation,
    setTimeSimulation,
    valueX,
    valueY,
    valueM,
    valueF,
    valueA,
  } = useAsideModal();

  return (
    <Modal
      isOpen={showDisplay}
      onRequestClose={handleShowDisplay}
      overlayClassName="react-modal-overlay-aside"
      className="react-modal-content-aside"
    >
      <Content>
        <button onClick={handleShowDisplay}>
          <AiOutlineClose />
        </button>
        <div className="Parameters-CM">
          <h3>Parametros do CM</h3>
          <InputsContainer onSubmit={handleTimeSimulation}>
            <input type="submit" id="chkbox" />
            <div className="inputContainer">
              <label htmlFor="chkbox">
                <AiOutlineFieldTime />
              </label>

              <input
                step="0.001"
                type="number"
                value={timeSimulation}
                onChange={(e) => setTimeSimulation(e.target.value)}
                placeholder="Tempo médio"
              />
            </div>
          </InputsContainer>

          <div className="range">
            <h4>
              <i>Precisão:</i>
            </h4>
            <input
              type="range"
              min="0.01"
              max="1"
              step="0.01"
              onChange={(e) => setRange(Number(e.target.value))}
            />

            <h5>
              <i className="valueRange">{range}</i>
            </h5>
          </div>
          <h3>
            <i>Informações:</i>
          </h3>
          <div className="informationCM">
            <h5>
              <i>CM:</i>
            </h5>
            <h5>
              <i>x: {valueX} m</i>
            </h5>
            <h5>
              <i>y: {valueY} m</i>
            </h5>
            <h5>
              <i>m: {valueM} kg</i>
            </h5>
            <h5>
              <i>F: {valueF} N</i>
            </h5>
            <h5>
              <i>a: {valueA} m/s²</i>
            </h5>
          </div>
        </div>
        <ParticuleTable />
      </Content>
    </Modal>
  );
}
