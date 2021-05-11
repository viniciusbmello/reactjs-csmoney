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
    case 'Entradas':
      return incomeSvg;
    case 'Total':
      return totalSvg;
    default:
      return outcomeSvg;
  }
}

export function Card(props: ICard): React.ReactElement<ICard> {
  const { title, value } = props;
  return (
    <Container className={value < 0 ? 'red' : 'green'}>
      <header>
        <h4>{title}:</h4>
        <img src={renderSwitch(title)} alt="Entradas" />
      </header>
      <p>R$ {value}</p>
    </Container>
  );
}
