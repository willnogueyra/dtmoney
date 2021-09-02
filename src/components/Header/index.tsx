import logoImg from "../../assets/logo.svg"
import { Container, Content } from "./styles"

interface HeaderProps {
  onOpenNewTransaction: () => void;
}

export function Header({onOpenNewTransaction}: HeaderProps) { // pegando props do App
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />

        <button type="button" onClick={onOpenNewTransaction}>
          Nova Transação
        </button>

        
      </Content>
    </Container>
  )
}