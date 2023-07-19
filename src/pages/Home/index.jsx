import {Category} from "../../components/Category";
import {Header} from "../../components/Header";
import {Footer} from "../../components/Footer";
import {Card} from "../../components/Card";


import { useNavigate } from "react-router-dom";
import { Container, Content } from "./styles";
import {useEffect, useState} from "react";
import {api} from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function Home () {
  const [search, setSearch] = useState("");
  const [dishes, setDishes] = useState([]);
  const [dishesUser, setDishesUser] = useState([]);

  const {user} = useAuth();
  const admin = user.email.match(/admin/) == "admin" ?? "Admin"
  

  const navigate = useNavigate();

  //Acessando id do prato
  function handleDetails(id) {
    navigate(`/details/${id}`);
  };

  
  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?title=${search}`);
      setDishes(response.data);

      if(!admin) {
        const response = await api.get(`/dishesuser?title=${search}`);
  
        setDishesUser(response.data);
      }
    }

    fetchDishes()
  },[search]);

 

  
  return (
    <Container>
      <Header search={setSearch}/>

      <main>
        <Content>

        <img src="./src/assets/backgroundImage.png" alt="" />
       
          
        <Category title = "Refeições">
          { !admin ?
      
              dishesUser.map(dish => (
                <Card  
                  key={String(dish.id)}
                  data={dish}
                  className = {dish.category === "refeição" ? dish : "hide"}
                  //onClick= {() => handleDetails(dish.id)}
                />
                
                ))
              
                :

                dishes.map(dish => (
              
                  <Card  
                    key={String(dish.id)}
                    data={dish}
                    className = {dish.category === "refeição" ? dish : "hide"}
                    //onClick= {() => handleDetails(dish.id)}
                  />
                  
                  ))

          }

        </Category>
        
        <Category title = "Sobremesas">
          { admin ?
            dishes.map(dish => (

              <Card  
                key={String(dish.id)}
                data={dish}
                className = {dish.category === "sobremesa" ? dish : "hide"}
                //onClick= {() => handleDetails(dish.id)}
              />
              
              ))
                :
              dishesUser.map(dish => (
                
                <Card  
                  key={String(dish.id)}
                  data={dish}
                  className = {dish.category === "sobremesa" ? dish : "hide"}
                  //onClick= {() => handleDetails(dish.id)}
                />
                
                ))

          }

        </Category>

        <Category title = "Bebidas">
         { admin ?
            dishes.map(dish => (

              <Card  
                key={String(dish.id)}
                data={dish}
                className = {dish.category === "bebida" ? dish : "hide"}
                //onClick= {() => handleDetails(dish.id)}
              />
              
              ))

              :

              dishesUser.map(dish => (
                
                <Card  
                  key={String(dish.id)}
                  data={dish}
                  className = {dish.category === "bebida" ? dish : "hide"}
                  //onClick= {() => handleDetails(dish.id)}
                />
                
                ))

          }
        </Category>

        </Content>
      </main>
      <Footer />
    </Container>
  )
}