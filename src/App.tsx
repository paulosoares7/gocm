import { BrowserRouter as Router } from "react-router-dom";
import Modal from "react-modal";

import { Dashboard } from "./components/Dasboard";
import { Header } from "./components/Header";
import { ParticulesProvider } from "./Context/PaticulesContext";

import { GlobalStyle } from "./styles/global";
import { NewPartículeModal } from "./components/NewParticuleModal";
import { AsideModal } from "./components/AsideModal";

Modal.setAppElement("#root");

function App() {
  return (
    <ParticulesProvider>
      <Router>
        <Header />
        <Dashboard />
        <NewPartículeModal />
        <AsideModal />
        <GlobalStyle />
      </Router>
    </ParticulesProvider>
  );
}

export default App;
