import React, { createContext, useState, useContext } from "react";

const userCountPizzaContext = createContext();

function CountPizzaProvider({ children }) {
  const [isCount, setIsCount] = useState(0);
  return (
    <userCountPizzaContext.Provider value={{ isCount, setIsCount }}>
      {children}
    </userCountPizzaContext.Provider>
  );
}

const useCountPizza = () => useContext(userCountPizzaContext);

export { CountPizzaProvider, useCountPizza };
