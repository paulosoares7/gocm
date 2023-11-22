
import { Container, ContentArticle } from "./styles";
import MainRoutes from "../../routes/routes";

export function Dashboard() {
  return (
    <Container>

      <ContentArticle>
        <MainRoutes />
      </ContentArticle>
    </Container>
  );
}
