import { Link, } from "react-router-dom";
import { Container } from "./styles";


export function Unauthorized () {
  return (
    <Container>
      <h1>Acesso não autorizado!</h1>
      <p>Você não tem permissão para acessar esta rota</p>
      <Link to= "/">
        Voltar para Home.
      </Link>
    </Container>
  );
}