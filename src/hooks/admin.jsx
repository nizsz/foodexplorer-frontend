import { useEffect, useState } from "react";

export function useAdmin (user) {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect (() => {
    setIsAdmin(user && user.isAdmin === 1);
  },[user]);

  return isAdmin;
};