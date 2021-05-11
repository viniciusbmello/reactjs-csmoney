import { ReactElement } from 'react';
import incomeSvg from '../../assets/income.svg';
import outcomeSvg from '../../assets/outcome.svg';
import totalSvg from '../../assets/total.svg';
import { Container } from './styles';

interface ICard {
  title: string;
  value: number;
}

function renderSwitch(param: string): string {
  switch (param) {
    case 'income':
      return incomeSvg;
    case 'total':
      return totalSvg;
    default:
      return outcomeSvg;
  }
}

export function Card(props: ICard): ReactElement<ICard> {
  const { title, value } = props;
  return (
    <Container className={value < 0 ? 'red' : 'green'}>
      <header>
        <h4>{title}:</h4>
        <img src={renderSwitch(title)} alt="Entradas" />
      </header>
      <p className={title}>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'brl',
        }).format(value)}
      </p>
    </Container>
  );
}
