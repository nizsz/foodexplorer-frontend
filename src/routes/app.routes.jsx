import {Route, Routes} from "react-router-dom";

import {DishUpdate} from "../pages/DishUpdate";
import {NewDish} from "../pages/NewDish";
import {Details} from "../pages/Details";
import {Home} from "../pages/Home";

export function AppRoutes() {
  return (
    <Routes>
      <Route path = "/" element={<Home />} />
      <Route path = "/newdish" element={<NewDish />} />
      <Route path = "/dishupdate" element={<DishUpdate />} />
      <Route path = "/details/:id" element={<Details />} />
    </Routes>
  )
};