import { ReactElement } from 'react';
import { Container, Content } from './styles';
import logoSvg from '../../assets/logo.svg';

interface IHeader {
  onOpenNewTransactionModal: () => void;
}

export function Header({
  onOpenNewTransactionModal,
}: IHeader): ReactElement<IHeader> {
  return (
    <Container>
      <h6>CreatedBy viniciusbmello</h6>
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
