import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

export function TransactionTable(): React.ReactElement {
  useEffect(() => {
    api.get('transactions').then(response => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr className="deposit">
            <td>Desenvolvimento Website</td>
            <td className="value">R$ 1.200,00</td>
            <td>Desenvolvimento</td>
            <td>02/06/2021</td>
          </tr>
          <tr className="withdraw">
            <td>Aluguel</td>
            <td className="value">- R$ 1.000,00</td>
            <td>Casa</td>
            <td>10/06/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
