import logoSvg from '../../assets/logo.svg'
import { Container, Content } from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        <div className="logo">
          <img src={logoSvg} alt="SC Money" />
          <h1>CS Money</h1>
        </div>
        <button type="button">Nova Transação</button>
      </Content>
    </Container>
  );
}