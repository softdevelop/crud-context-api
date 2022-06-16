import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const APIContext = createContext();
//const serverURL = 'https://jsonplaceholder.typicode.com/';
const serverURL = 'http://localhost:3333/';

export function APIContextProvider({ children }) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        serverURL+`users`
      );
      console.log(data);
      setUsers(data);
    }
    fetchData();
  }, []);
  return (
    <APIContext.Provider
      value={{
        users
      }}
    >
      {children}
    </APIContext.Provider>
  );
}

export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
