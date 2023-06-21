import {Container} from "./styles";

import {BsPencil} from "react-icons/bs"

import { Link } from "react-router-dom";

export function Card ({data, ...rest}) {
  return (
    <Container {...rest}>
      <main>
        
        <Link to = "/dishupdate">
          <BsPencil size={24}/>
        </Link>

        <img 
          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=781&q=80" 
          alt="Imagem do prato" 
        />
        <strong>{data.title}</strong>
        <span>{data.description}</span>
        <h3>{data.price}</h3>
      </main>

    </Container>
  ) 
}