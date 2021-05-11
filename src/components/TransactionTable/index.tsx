import { ReactElement } from 'react';
import { useTransactions } from '../../hooks/useTransactions';
import { Container } from './styles';

export function TransactionTable(): ReactElement {
  const { transactions } = useTransactions();

  return (
    <Container>
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
            <tr className={transaction.type} key={transaction.id}>
              <td>{transaction.title}</td>
              <td className="value">
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'brl',
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat('pt-BR').format(
                  new Date(transaction.createdAt),
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
