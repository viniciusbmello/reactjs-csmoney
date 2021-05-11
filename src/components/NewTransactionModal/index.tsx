import React, { useState } from 'react';
import Modal from 'react-modal';
import closeSvg from '../../assets/close.svg';
import incomeSvg from '../../assets/income.svg';
import outcomeSvg from '../../assets/outcome.svg';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import { api } from '../../services/api';

interface INewTransactionModal {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: INewTransactionModal): React.ReactElement<INewTransactionModal> {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  function handleCreateNewTransaction(
    event: React.FormEvent<HTMLFormElement>,
  ): void {
    event.preventDefault();
    api.post('/transactions', { title, value, type, category });
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
          <h2>Cadastrar Transação</h2>
          <input
            type="text"
            placeholder="Titulo"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
          <input
            type="number"
            placeholder="Valor"
            value={value}
            onChange={event => setValue(Number(event.target.value))}
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
              <span>Entrada</span>
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
              <span>Retirada</span>
            </RadioBox>
          </TransactionTypeContainer>
          <input
            type="text"
            placeholder="Categoria"
            value={category}
            onChange={event => setCategory(event.target.value)}
          />
          <button type="submit">Cadastrar</button>
        </fieldset>
      </Container>
    </Modal>
  );
}
