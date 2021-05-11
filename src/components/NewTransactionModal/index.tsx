import React, { useState } from 'react';
import Modal from 'react-modal';
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
  const [type, setType] = useState('deposit');

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
      <Container>
        <fieldset>
          <h2>Cadastrar Transação</h2>
          <input type="text" placeholder="Titulo" />
          <input type="number" placeholder="Valor" />
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
              <span>Saída</span>
            </RadioBox>
          </TransactionTypeContainer>
          <input type="text" placeholder="Categoria" />
          <button type="submit">Cadastrar</button>
        </fieldset>
      </Container>
    </Modal>
  );
}
