import {Route, Routes} from "react-router-dom";

import { Unauthorized } from "../pages/Unauthorized";
import {DishUpdate} from "../pages/DishUpdate";
import {NewDish} from "../pages/NewDish";
import {Details} from "../pages/Details";
import {Home} from "../pages/Home";

import { useAdmin } from "../hooks/admin";
import { useAuth } from "../hooks/auth";


export function AppRoutes() {
  const {user} = useAuth();
  const isAdmin = useAdmin(user);

  return (
    <Routes>
      <Route path = "/" element={<Home />} />
      <Route path = "/newdish" element={isAdmin ? <NewDish /> : <Unauthorized />} />
      <Route path = "/dishupdate/:id" element={isAdmin ? <DishUpdate /> : <Unauthorized />} />
      <Route path = "/details/:id" element={ <Details /> } />
    </Routes>
  )
};