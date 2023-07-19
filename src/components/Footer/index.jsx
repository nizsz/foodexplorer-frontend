import {Container} from "./styles";

import FooterExplorerImg from "../../assets/footer.svg";

export function Footer () {
  return(
    <Container>
      <img src={FooterExplorerImg} alt="Logo food explorer" />
      <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
    )
};