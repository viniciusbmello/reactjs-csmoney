import { ReactElement } from 'react';
import { Summary } from '../Summary';
import { TransactionTable } from '../TransactionTable';
import { Container } from './styles';

export function Dashboard(): ReactElement {
  return (
    <Container>
      <Summary />
      <TransactionTable />
    </Container>
  );
}
