import { Container,Form } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import {Section} from "../../components/Section";

import { useState } from "react";
import { api } from "../../services/api";
import { Link, useNavigate } from "react-router-dom";

import FoodExplorerImg from "../../assets/foodexplorer.png";

export function SignUp() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSignUp() {
    if(!name || !email || !password) {
      return alert("Preencha todos os campos")
    };

    if(password.length <= 5) {
      return alert("A senha deve conter no mínimo seis caracteres")
    };

    await api.post("/users", {name, email, password})
    .then(() => {
      alert ("Usuário cadastrado com sucesso!");
      navigate("/");
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message);

      } else {
        alert("Não foi possível cadastrar usuário")
      }
    })
  };


  return (
    <Container>
      <div>
        <img src={FoodExplorerImg} alt="Logo" />
        <h1>Food Explorer</h1>

      </div>
      <Form>
        <h2>Criar conta</h2>

        <Section title= "Seu nome">
          <Input 
            type = "text" 
            placeholder = "Exemplo: Maria da Silva"
            onChange = {event => setName(event.target.value)}
          />
        </Section>

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
          title = "Criar conta"
          className = "create-account"
          onClick = {handleSignUp}
        />

        <Link to = "/">
          Já tenho uma conta
        </Link>
      </Form>
    </Container>
  )

}