import { Container } from './styles';
import { Card } from '../Card';
import { useTransactions } from '../../hooks/useTransactions';

export function Summary(): React.ReactElement {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    },
  );

  return (
    <Container>
      <Card title="income" value={summary.deposits} />
      <Card title="outcome" value={summary.withdraws} />
      <Card title="total" value={summary.total} />
    </Container>
  );
}
