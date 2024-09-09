import React, { createContext, useState, useContext } from "react";

const userHomeModalContext = createContext();

function HomeModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <userHomeModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </userHomeModalContext.Provider>
  );
}

const useHomeModal = () => useContext(userHomeModalContext);

export { HomeModalProvider, useHomeModal };
