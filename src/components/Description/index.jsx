import { Container,Add,Subtract } from "./styles";
import { Section } from "../Section"
import { Ingredients } from "../Ingredients"
import { Button } from "../Button"

import { Link, useParams } from "react-router-dom";

import { useEffect, useState, useRef} from "react";
import { useAdmin } from "../../hooks/admin";
import {useAuth} from "../../hooks/auth";
import {api} from "../../services/api";

import {FiPlus, FiMinus} from "react-icons/fi";
import {BsReceipt} from "react-icons/bs";

export function Description (){
  const [data,setData] = useState(null);
  const {user} = useAuth();
  const admin = useAdmin(user);

  const carousel = useRef();
  const [width, setWidth] = useState(0);
  const params = useParams();


  useEffect(() => {
    setWidth(carousel.current?.offsetWidth + 101)
  }, []);
 
 
  useEffect(() => {
    async function fetchDish(){
      const response = await api.get(`/dishes/${params.id}`) 
      setData(response.data)

    };

    fetchDish()
  },[])
 
  
  return (
    <Container ref={carousel}>
      {
        data &&
        <img 
          src= {`${api.defaults.baseURL}/files/${data.avatar}`}
          alt="Imagem do prato" 
        />
      }
      {
      data &&
      <main>
        <h1>{data.title}</h1>
        <p>
          {data.description}.
        </p>

        {
          data.ingredients &&
          <Section>
            {
              data.ingredients.map(ingredient => (

                <Ingredients 
                  key={String(ingredient.id)}
                  title= {ingredient.name}
                />
              ))
            }
          </Section>
        }

        { admin ?
          <Link to = {`/dishupdate/${data.id}`}>
            <Button title = "Editar prato"/>
          </Link>
              :
          <Link>
            <Subtract> <FiMinus size={30} /></Subtract>
              <strong>01</strong>
            <Add> <FiPlus size={30} /></Add>
            {width > 700 ? <Button title = {`Incluir R$${data.price}`}/> : <Button icon= {BsReceipt} title = {`Pedir - R$${data.price}`}/> }
          </Link>
        } 
      </main>

      }
    </Container>
  )
};