import React, { useState } from 'react';
import Modal from 'react-modal';
import { useTransactions } from '../../hooks/useTransactions';
import closeSvg from '../../assets/close.svg';
import incomeSvg from '../../assets/income.svg';
import outcomeSvg from '../../assets/outcome.svg';
import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface INewTransactionModal {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: INewTransactionModal): React.ReactElement<INewTransactionModal> {
  const { createTransaction } = useTransactions();
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('deposit');
  const [category, setCategory] = useState('');

  async function handleCreateNewTransaction(
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    try {
      createTransaction({ title, amount, type, category });
    } finally {
      setTitle('');
      setAmount(0);
      setType('deposit');
      setCategory('');
      onRequestClose();
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeSvg} alt="Fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <fieldset>
          <h2>Register Transaction</h2>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={event => setAmount(Number(event.target.value))}
          />
          <TransactionTypeContainer>
            <RadioBox
              type="button"
              className="green"
              isActive={type === 'deposit'}
              onClick={() => {
                setType('deposit');
              }}
            >
              <img src={incomeSvg} alt="Entrada" />
              <span>Deposit</span>
            </RadioBox>
            <RadioBox
              type="button"
              className="red"
              isActive={type === 'withdraw'}
              onClick={() => {
                setType('withdraw');
              }}
            >
              <img src={outcomeSvg} alt="Saída" />
              <span>Withdraw</span>
            </RadioBox>
          </TransactionTypeContainer>
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={event => setCategory(event.target.value)}
          />
          <button type="submit">Register</button>
        </fieldset>
      </Container>
    </Modal>
  );
}
