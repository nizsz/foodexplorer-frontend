import {Container,Subtract, Include} from "./styles";


import { api } from "../../services/api";


import { Link, useNavigate, useParams } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";

import {BsPencil,BsHeart} from "react-icons/bs"
import {FiPlus, FiMinus} from "react-icons/fi"

export function Card ({data, ...rest}) {
  const navigate = useNavigate();
  const {user} = useAuth();

  const admin = user.email.match(/admin/) == "admin" ?? "Admin"

  const price = Number(data.price);
  const priceInFormatBRL = price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

  function handleUpdate(id) {
    navigate(`/dishupdate/${id}`);
    
  };

  function handleDetails(id) {
    navigate(`/details/${id}`);
  };

  

  return (
    <Container {...rest} >
      <main>
        <button >
         { admin ?
            <Link to = {`/dishupdate/${data.id}`}>
              <BsPencil size={24}/> 
            </Link>
                :
            <Link to = "#">
              <BsHeart size={24}/>
            </Link>
          }
        </button>

        
        
            { admin ?
            <button onClick={() => handleDetails(data.id)}> 
              <img 
                src= {`${api.defaults.baseURL}/files/${data.avatar}`}
                alt="Imagem do prato" 
              />
              <strong>{data.title}</strong>
              <span>{data.description}</span>
              <h3>{priceInFormatBRL}</h3>
            </button>
                    :
            <button className="card-user"> 
              <a href="#" onClick={() => handleDetails(data.id)}>
                <img 
                  src= {`${api.defaults.baseURL}/files/${data.avatar}`}
                  alt="Imagem do prato" 
                />
                <strong>{data.title}</strong> 
                <span>{data.description}</span>  
                <h3>{priceInFormatBRL}</h3>
                
              </a>
              
              <div className="include">
                <Subtract><FiMinus size={30}/> 01 <FiPlus size={30} /></Subtract>
                <Include>Incluir</Include>
              </div>
            </button>
            }

            
                  
      </main>

    </Container>
  ) 
}