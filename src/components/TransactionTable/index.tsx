import { ReactElement } from 'react';
import { useTransactions } from '../../hooks/useTransactions';
import { Container } from './styles';
import { TransactionRow } from '../TransactionRow';

export function TransactionTable(): ReactElement {
  const { transactions } = useTransactions();

  return (
    <Container>
      <div className="tbody-header-mobile">
        <h2>Listagem</h2>
        <p>{transactions.length} Items</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <TransactionRow
              key={transaction.id}
              title={transaction.title}
              category={transaction.category}
              createdAt={transaction.createdAt}
              type={transaction.type}
              amount={transaction.amount}
            />
          ))}
        </tbody>
      </table>
    </Container>
  );
}
