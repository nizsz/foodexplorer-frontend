import { Container } from "./styles";
import { Section } from "../Section"
import { Ingredients } from "../Ingredients"
import { Button } from "../Button"

import { Link } from "react-router-dom";

export function Description (){
  return (
    <Container>

      <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=781&q=80" alt="Imagem do prato" />
      <main>
        <h1>Salada Ravanello</h1>
        <p>
          Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
          O pão naan dá um toque especial.
        </p>

        <Section>
          <Ingredients title= "cebola"/>
          <Ingredients title= "cebola"/>
          <Ingredients title= "cebola"/>
          <Ingredients title= "cebola"/>
        </Section>

        <Link to = "/dishupdate">
          <Button title = "Editar prato" />
        </Link>
      </main>
    </Container>
  )
};