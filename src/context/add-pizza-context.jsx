import React, { createContext, useState, useContext } from "react";

const userCountPizzaContext = createContext();

function CountPizzaProvider({ children }) {
  const [isCount, setIsCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  return (
    <userCountPizzaContext.Provider
      value={{ isCount, setIsCount, totalPrice, setTotalPrice }}
    >
      {children}
    </userCountPizzaContext.Provider>
  );
}

const useCountPizza = () => useContext(userCountPizzaContext);

export { CountPizzaProvider, useCountPizza };
