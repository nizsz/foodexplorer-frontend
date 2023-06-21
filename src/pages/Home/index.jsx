import {Category} from "../../components/Category";
import {Header} from "../../components/Header";
import {Footer} from "../../components/Footer";
import {Card} from "../../components/Card";


import { Container, Content } from "./styles";
import {useEffect, useState} from "react";
import {api} from "../../services/api";

export function Home () {
  const [search, setSearch] = useState("");
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?title=${search}`);
      setDishes(response.data);
    }

    fetchDishes()
  },[search]);

  return (
    <Container>
      <Header search={setSearch}/>

      <main>
        <Content>

        <img src="./src/assets/ui.png" alt="" />

        <Category title = "Refeições">
          { 
            dishes.map(dish => (

              <Card  
                key={String(dish.id)}
                data={dish}
              />
              
              ))

          }

          
        </Category>

        <Category title = "Sobremesas">
          { 
            dishes.map(dish => (

              <Card  
                key={String(dish.id)}
                data={dish}
              />
              
              ))

          }

        </Category>

        <Category title = "Bebidas">
         { 
            dishes.map(dish => (

              <Card  
                key={String(dish.id)}
                data={dish}
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