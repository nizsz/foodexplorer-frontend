import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext({});

import { api } from "../services/api";

function AuthProvider({ children }) {
  const [data,setData] = useState({});

  async function signIn ({email, password}) {

    try {
      const response = await api.post("/sessions", {email,password});
      const { user, token } = response.data;

      localStorage.setItem("@food-explorer:user", JSON.stringify(user));
      localStorage.setItem("@food-explorer:token", token);


      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({user, token});


    } catch (error) {
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert ("Não foi possível fazer o login");
      }
    }
  };
  
  function signOut () {
    localStorage.removeItem("@foodexplorer:user");
    localStorage.removeItem("@foodexplorer:token");

    setData({});
  };

  async function updateProfile({ dish, avatarFile }){
    try {

      if(avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("/dishes/avatar/:id", fileUploadForm);
        dish.avatar = response.data.avatar;
        
      }

      await api.put("/dishes/:id", dish)

      setData({dish, token: data.token})
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível atualizar o prato.")
      }
    };
  };

  useEffect(() => {
    const user = localStorage.getItem("@food-explorer:user");
    const token = localStorage.getItem("@food-explorer:token");

    if(user && token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      setData({
        user: JSON.parse(user),
        token
      })
    };
  },[])

  return (
    <AuthContext.Provider value=
    {{
      signIn,
      signOut, 
      updateProfile,
      user: data.user
    }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export {AuthProvider, useAuth}