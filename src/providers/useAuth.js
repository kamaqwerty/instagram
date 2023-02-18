import React from "react";
import { AuthContext } from "../contexts/AuthContext";


export const useAuth = () => {
  const context =React.useContext(AuthContext);

  return context;
};