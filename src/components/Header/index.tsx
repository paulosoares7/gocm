import { NavLink } from "react-router-dom";
import {
  AiOutlineDotChart,
  AiOutlineLineChart,
  AiOutlineBarChart,
  AiFillPlusCircle,
  AiFillFilePdf,
} from "react-icons/ai";

import { Container, Content } from "./styles";
import { useGeneratePDF } from "../../services/hooks/useGeneratePDF";
import { useContext } from "react";
import { ParticulesContext } from "../../Interfaces/Types";

import logoImage from "../../assets/GO.svg";

export function Header() {
  const { handleOpenNewParticuleModal } = useContext(ParticulesContext);
  const { PDFGenerate } = useGeneratePDF();

  return (
    <Container>
      <Content>
        <img src={logoImage} alt="GO-CM" />
        <nav>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
          >
            <AiOutlineDotChart />
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/secondChart"
          >
            <AiOutlineLineChart />
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/progress"
          >
            <AiOutlineBarChart />
          </NavLink>
        </nav>
        <div className="svgBox">
          <AiFillPlusCircle onClick={handleOpenNewParticuleModal} />
          <AiFillFilePdf onClick={PDFGenerate} />
        </div>
      </Content>
    </Container>
  );
}
