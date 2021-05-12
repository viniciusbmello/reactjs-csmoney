import { ReactElement } from 'react';
import { TransactionTableRow } from '../../hooks/useTransactions';
import { Container } from './styles';

export function TransactionRow({
  title,
  amount,
  type,
  category,
  createdAt,
}: TransactionTableRow): ReactElement {
  return (
    <Container className={type}>
      <td>{title}</td>
      <td className="value">
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'brl',
        }).format(amount)}
      </td>
      <td>{category}</td>
      <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(createdAt))}</td>
    </Container>
  );
}
