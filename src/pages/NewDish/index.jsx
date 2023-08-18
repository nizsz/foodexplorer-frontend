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
import { Link, } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { useState, useCallback } from "react";
import { api } from "../../services/api";

export function NewDish () {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const [avatar, setAvatar] = useState(null);
  const [avatarFile, setAvatarFile] = useState(null);

  const navigate = useNavigate();

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


  async function handleAddNewDish(){
    if(!title) {
      return alert("Por favor insira um nome para o prato")
    };

    if(!category) {
      return alert("Por favor selecione uma categoria para o prato")
    };

    if(!price) {
      return alert("Por favor insira uma descrição para o prato")
    };

    if(!description) {
      return alert("Por favor insira uma descrição para o prato")
    };

    if(newIngredient) {
      return alert("Há um ingrediente que não foi adicionado, para adicionar clique no botão de '+' caso contrário clique no botão 'X' para remover o ingrediente ")
    };

   
    const formData = new FormData();
    formData.append("title", title)
    formData.append("description", description)
    formData.append("price", price)
    formData.append("category", category)
    formData.append("avatar", avatarFile)

    const ingredientsArray = Array.isArray(ingredients) ? ingredients : [ingredients];
    formData.append("ingredients", JSON.stringify(ingredientsArray))
    
    /*
      ingredientsArray.map(ingredient => (
        
        formData.append("ingredients", JSON.stringify(ingredient))

        
      ))

    */

    
    await api.post(`/dishes`, formData);
    alert("Prato criado com sucesso");
    navigate(-1);
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

  return (
    <Container>
      <Header />
        <main>
          <Form>
            <header>
              <Link to = "/">
                <ButtonText title= "Voltar"/>
              </Link>
              <h1>Novo prato</h1>
            </header>

            <div className="elements">
              <Section title="Imagem do prato">
                <label htmlFor="avatar"><RiUpload2Line size={30}/> Selecione Imagem do prato</label>
                <input 
                  type="file" 
                  id="avatar"
                  onChange = {event => setAvatarFile(event.target.files[0])}
            
                />
              </Section>

              <Section title = "Nome">
                <Input 
                  type = "text"
                  placeholder = "Ex.: Salada Ceasar"
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
                  placeholder = "Fale brevemente sobre o prato, seus ingredientes e composição"
                  onChange = {event => setDescription(event.target.value)}
                />
              </Section>
            </div>

            <Button 
              title = "Salvar prato" 
              onClick = {handleAddNewDish}
              //onClick = {updateDish}
            />
          </Form>
        </main>
      <Footer />
    </Container>
  )
}