import { Description } from "../../components/Description";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { Link } from "react-router-dom";


import { Container, Content } from "./styles";

export function Details (){
  return (
    <Container>
      <Header />

      <main>
        <Content>

        <Link to = "/">
          <ButtonText title = "Voltar" />
        </Link>
         <Description />
        
        </Content>
      </main>

      <Footer />
    </Container>
  );
};