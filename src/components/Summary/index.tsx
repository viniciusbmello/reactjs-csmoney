import { Container } from './styles';
import { Card } from '../Card';

export function Summary(): React.ReactElement {
  return (
    <Container>
      <Card title="Entradas" value={1000} />
      <Card title="Saídas" value={1200} />
      <Card title="Total" value={-200} />
    </Container>
  );
}
