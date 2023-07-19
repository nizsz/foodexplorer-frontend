import {Container,Logout} from "./styles";
import {Button} from "../Button"
import { Menu } from "../Menu";
import {Input} from "../Input"

import {RiSearchLine} from "react-icons/ri";
import {BsReceipt} from "react-icons/bs"; 
import {FiLogOut, FiMenu} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import {useAuth} from "../../hooks/auth";
import { useState } from "react";
import FoodExplorerImg from "../../assets/foodexplorer.png";


export function Header({search}){
  const {user, signOut} = useAuth();
  const admin = user.email.match(/admin/) == "admin" ?? "Admin"

  const [sidebar, setSidebar] = useState(false)

  const showMe = () => setSidebar(!sidebar)
  
  const navigate = useNavigate();
  
  function handleSignOut() {
    signOut();
    navigate("/")
  };

  return (
    <Container>
      
      <FiMenu size={30} className="menu" onClick={showMe}/>
      {sidebar && <Menu active = {setSidebar} onChange = {event => {search(event.target.value)}} />}     
        <header>
          <img src={FoodExplorerImg} alt="foodexplorer" />
          {!admin ? <h2>Food explorer</h2> : <h2>Food explorer <span>admin</span></h2>}
        </header>
      <BsReceipt size={30} className={admin ? "hide" : "receipt"}/>
        <Input 
          className = "search"
          placeholder = "Busque por pratos ou ingredientes" 
          icon={RiSearchLine}
          onChange = {event => {search(event.target.value)}}
        />
      
      { admin ?
        <Link to = "/newdish">
          <Button title= "Novo prato" />
        </Link>
              :
        <Link>
          <Button icon = {BsReceipt} title = "pedidos(0)" />
        </Link>
    }
      <Logout onClick={handleSignOut}>
        <FiLogOut size={30}/>
      </Logout>
    </Container>
  )
};