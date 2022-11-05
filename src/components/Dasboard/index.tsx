import { GiHamburgerMenu } from "react-icons/gi";

import { Container, ContentArticle } from "./styles";
import MainRoutes from "../../routes/routes";
import { useContext } from "react";
import { ParticulesContext } from "../../Interfaces/Types";

export function Dashboard() {
  const { handleShowDisplay } = useContext(ParticulesContext);
  return (
    <Container>
      <button type="button" onClick={handleShowDisplay}>
        <GiHamburgerMenu />
      </button>
      <ContentArticle>
        <MainRoutes />
      </ContentArticle>
    </Container>
  );
}
