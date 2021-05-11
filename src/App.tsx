import React, { useState } from 'react';
import Modal from 'react-modal';
import { ThemeProvider } from 'styled-components';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';
import { GlobalStyle } from './styles/global';
import theme from './styles/theme';

Modal.setAppElement('#root');

export function App(): React.ReactElement {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal(): void {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(): void {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <ThemeProvider theme={theme}>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        <Dashboard />
        <NewTransactionModal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />
        <GlobalStyle />
      </ThemeProvider>
    </TransactionsProvider>
  );
}
