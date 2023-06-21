import {Container,Logout} from "./styles";
import {Button} from "../Button"
import {Input} from "../Input"

import {RiSearchLine} from "react-icons/ri";
import {FiLogOut} from "react-icons/fi";
import { Link } from "react-router-dom";

import {useAuth} from "../../hooks/auth";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Header({search}){
  const {signOut} = useAuth();


  return (
    <Container>
      <img src="../src/assets/logoAdmin.svg" alt="Logo de administrador" />
        <Input 
          placeholder = "Busque por pratos ou ingredientes" 
          icon={RiSearchLine}
          onChange = {event => {search(event.target.value)}}
        />
      
      <Link to = "/newdish">
        <Button title= "Novo prato" />
      </Link>

      <Logout onClick={signOut}>
        <FiLogOut size={30}/>
      </Logout>
    </Container>
  )
};