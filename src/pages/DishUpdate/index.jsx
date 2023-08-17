import { Container,Form  } from "./styles";

import { RiUpload2Line } from "react-icons/ri";

import {ButtonText} from "../../components/ButtonText"
import {Textarea} from "../../components/Textarea"
import {NoteItem} from "../../components/NoteItem"
import {Section} from "../../components/Section"
import {Header} from "../../components/Header"
import {Button} from "../../components/Button"
import {Footer} from "../../components/Footer"
import {Input} from "../../components/Input"

import { Link, useNavigate, useParams } from "react-router-dom";

import { useState, useEffect, useCallback } from "react";

import { api } from "../../services/api";

export function DishUpdate () {
  const [data, setData] = useState(null);
  
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [oldIngredients, setOldIngredients] = useState([]);

  const [avatar, setAvatar] = useState(null);
  const [avatarFile, setAvatarFile] = useState(null);

  const navigate = useNavigate();
  const params = useParams();

  

  function handleAddIngredient(){
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient("");
  };

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
  };

  function handleChangeAvatar(event){
    const file = event.target.files[0]
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  };


  async function removeOldIngredient (deleted) {
    setOldIngredients(oldIngredients.filter(
      oldIngredient => oldIngredient.name !== deleted ? api.delete(`/ingredients`) : ""
    ))
      
  };


  async function handleRemoveDish () {
    const confirm = window.confirm("Você realmente deseja excluir o prato!");

    if(confirm) {
      await api.delete(`/dishes/${params.id}`);
      navigate("/");
    }
  };


  async function updateDish() {
    if(newIngredient) {
      return alert("Há um ingrediente que não foi adicionado, para adicionar clique no botão de '+' caso contrário clique no botão 'X' para remover o ingrediente ")
    };

    const dish = {
      title,
      category,
      ingredients,
      price,
      description
    };

    try {
      
      if(avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch(`/dishes/avatar/${params.id}`, fileUploadForm);
        dish.avatar = response.data.avatar;
        
      }

      await api.put(`/dishes/${params.id}`, dish);
      
      setData({dish, token: data.token});

      alert("Prato Atualizado com sucesso");
      navigate("/");

    } catch (error) {
      if (error.response) {
        return alert(error.response.data.message)
      } else {
        return alert("Não foi possível atualizar o prato.")
      }
    };

  
  };

  function onlyNumbers(event) {

    const charCode = (event.which) ? event.which : event.keyCode
    
    if (charCode > 31 && (charCode < 48 || charCode > 57))
    
      event.preventDefault();
    
  };
    
  const coinMasks = useCallback((event) => {
    let value = event.target.value;

    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, "$1,$2");
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");


    event.target.value = value;
    setPrice(event.target.value)
    return event;

  }, []);

  useEffect(() => {
    async function fetchDish(){
      const response = await api.get(`/dishes/${params.id}`)
      setData(response.data)
      setOldIngredients(response.data.ingredients)
    };

    fetchDish()
  },[])
  

  
  return (
    <Container>
      <Header />
      {
        data &&
        <main>
          <Form>
            <header>
              <Link to = "/">
                <ButtonText title= "Voltar"/>
              </Link>
              <h1>Editar prato</h1>
            </header>

            <div className="elements">
              <Section title="Imagem do prato">
                <label htmlFor="avatar" name="avatar"><RiUpload2Line size={30}/> Selecione Imagem do prato</label>
                <input 
                  type="file" 
                  id="avatar"
                  name="avatar"
                  onChange={handleChangeAvatar}
                />
              </Section>

              <Section title = "Nome">
                <Input 
                  type = "text"
                  placeholder = {`${data.title}`}
                  onChange = {event => setTitle(event.target.value)}
                  className = "name"
                />
              </Section>

              <Section title = "Categoria"> 
                <select 
                  name="category" 
                  id="category"
                  onChange = {event => setCategory(event.target.value)}
                >
                  <option selected disabled>Escolha a categoria</option>
                  <option value="refeição">Refeição</option>
                  <option value="sobremesa">Sobremesa</option>
                  <option value="bebida">Bebidas</option>
                </select>
              </Section>

              <Section title = "Ingredientes">
                <div className="ingredients">
                  {
                    ingredients.map((ingredient, index) => (
                      <NoteItem 
                        key={String(index)}
                        value= {ingredient}
                        onClick={() => handleRemoveIngredient(ingredient)}
                      />
                    ))

                  }

                  { 
                    oldIngredients.map((ingredient , index) => (
                    <NoteItem 
                      key={String(index)}
                      value= {ingredient.name}
                      onClick={() => removeOldIngredient(ingredient.name || ingredient.id)}
                    />

                    ))
                  }

     
                  <NoteItem 
                    isNew 
                    placeholder = "Adicionar" 
                    onChange ={event => setNewIngredient(event.target.value)}
                    value = {newIngredient}
                    onClick= {handleAddIngredient}
                  />
                </div>
              </Section>

              <Section title = "Preço">
                <Input 
                  type = "text"
                  placeholder = "R$00,00"
                  //onChange = {event => setPrice(event.target.value)}
                  onKeyUp = {coinMasks}
                  onKeyPress = {onlyNumbers}
                  className = "price"
          
                />
              </Section>
              
              <Section title = "Descrição">
                <Textarea 
                  placeholder = {data.description}
                  onChange = {event => setDescription(event.target.value)}
                  
                />
              </Section>
            </div>

            <div className="buttons">
              <Button 
                title = "Excluir prato" 
                onClick = {handleRemoveDish}
              />
              <Button 
                title = "Salvar alterações"
                //onClick = {() => handleUpdate(data.id)}
                onClick = {updateDish}
              />
            </div>
          </Form>
        </main>
        
      }
      <Footer />
    </Container>
  )
}