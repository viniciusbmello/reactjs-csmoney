import { Container, Content } from './styles';
import logoSvg from '../../assets/logo.svg';
import { ReactElement } from 'react';

interface IHeader {
  onOpenNewTransactionModal: () => void;
}

export function Header({
  onOpenNewTransactionModal,
}: IHeader): ReactElement<IHeader> {
  return (
    <Container>
      <Content>
        <div className="logo">
          <img src={logoSvg} alt="SC Money" />
          <h1>CS Money</h1>
        </div>
        <button type="button" onClick={onOpenNewTransactionModal}>
          New Transaction
        </button>
      </Content>
    </Container>
  );
}
