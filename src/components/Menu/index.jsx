import { Container } from "./styles";

import {FiX, FiSearch} from "react-icons/fi";
import { useAdmin } from "../../hooks/admin";
import {useAuth} from "../../hooks/auth";
import {Input} from "../Input";

import { Link, useNavigate } from "react-router-dom";

export function Menu ({search, active, ...rest}) {
  const {user, signOut} = useAuth();
  const admin = useAdmin(user);

  const navigate = useNavigate();

  function closeMenu() {
    active(false)
  };

  function handleSignOut() {
    signOut();
    navigate("/")
  };


  return (
    <Container 
      {...rest}
      
    >
      <header>
        <h1><FiX size={30} onClick={closeMenu}/> Menu</h1>
      </header>
      
      <main>
        <Input 
          type = "text"
          placeholder = "Busque por pratos ou ingredients"
          icon = {FiSearch}
      
          //onChange = {event => {search(event.target.value)}}
        />
        <Link to = "/newdish">
          <strong className = {!admin ? "hide" : ""}>Novo prato</strong>
        </Link>
        <strong onClick={handleSignOut}>Sair</strong>
      </main>
    </Container>
  );
}