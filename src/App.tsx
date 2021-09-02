import { useState } from "react";
import Modal from "react-modal"
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() { // alocado no onOpenNewTransaction passando props pro header
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() { 
    setIsNewTransactionModalOpen(false);
  }
  
  return (
    <>
      <Header onOpenNewTransaction={handleOpenNewTransactionModal}/>
      <Dashboard />
      <Modal 
          isOpen={isNewTransactionModalOpen} 
          onRequestClose={handleCloseNewTransactionModal}
        >
            <h2>Cadastrar transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}

export default App;
