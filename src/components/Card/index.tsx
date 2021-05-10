import incomeSvg from '../../assets/income.svg'
import outcomeSvg from '../../assets/outcome.svg'
import totalSvg from '../../assets/total.svg'
import { Container } from './styles'

interface ICard {
  title: string;
  value: number;
}

function renderSwitch(param: string) {
  switch(param) {
    case 'Entradas':
      return incomeSvg;
    case 'Total':
      return totalSvg;
    default:
      return outcomeSvg;
  }
}

export function Card(props: ICard) {
  return (
    <Container className={ props.value < 0 ? 'red' : 'green' }>
      <header>
        <h4>{props.title}:</h4>
        <img src={renderSwitch(props.title)} alt="Entradas"/>
      </header>
      <p>R$ {props.value}</p>
    </Container>
  );
}