import React, { createContext, useState, useContext } from "react";

const userFilterDataContext = createContext();

function FilterProvider({ children }) {
  const [isSection, setIsSection] = useState("promotion");
  const [isTypePizza, setIsTypePizza] = useState("all");
  return (
    <userFilterDataContext.Provider
      value={{ isSection, setIsSection, isTypePizza, setIsTypePizza }}
    >
      {children}
    </userFilterDataContext.Provider>
  );
}

const useFilter = () => useContext(userFilterDataContext);

export { FilterProvider, useFilter };
