import React, { createContext, useState, useContext } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <UserContext.Provider value={{ nome, setNome, email, setEmail, senha, setSenha }}>
      {children}
    </UserContext.Provider>
  );
}


