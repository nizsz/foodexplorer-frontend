import { Container,Form } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import {Section} from "../../components/Section";

import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { useState } from "react";


export function SignIn() {
  const {signIn} = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")


  function handleSignIn() {

    signIn({email, password})
  };

  return (
    <Container>
      <div>
        <img src="./src/assets/foodexplorer.png" alt="Logo" />
        <h1>Food Explorer</h1>

      </div>
      <Form>
        <h2>Faça seu login</h2>

        <Section title= "Email">
          <Input 
            type = "text" 
            placeholder = "Exemplo: exemplo@exemplo.com.br"
            onChange = {event => setEmail(event.target.value)}
          />
        </Section>

        <Section title= "Senha">
          <Input 
            type = "password" 
            placeholder = "No mínimo 6 caracteres"
            onChange = {event => setPassword(event.target.value)}
          />
        </Section>

        <Button 
          title = "Entrar"
          className = "enter"
          onClick = {handleSignIn}
        />

        <Link to = "/register">
          Criar conta
        </Link>
      </Form>
    </Container>
  )

}