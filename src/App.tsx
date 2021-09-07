import { useState } from "react";
import Modal from "react-modal"
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import { TransactionsContext } from "./TransactionsContext";

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
    <TransactionsContext.Provider value={[]}>
      <Header onOpenNewTransaction={handleOpenNewTransactionModal}/> 
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsContext.Provider>
  );
}

export default App;
