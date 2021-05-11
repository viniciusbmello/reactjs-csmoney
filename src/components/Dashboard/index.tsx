import { Summary } from '../Summary';
import { TransactionTable } from '../TransactionTable';
import { Container } from './styles';

export function Dashboard(): React.ReactElement {
  return (
    <Container>
      <Summary />
      <TransactionTable />
    </Container>
  );
}
