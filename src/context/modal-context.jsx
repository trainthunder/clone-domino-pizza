import React, { createContext, useState, useContext } from "react";

const userModalContext = createContext();

function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <userModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </userModalContext.Provider>
  );
}

const useModal = () => useContext(userModalContext);

export { ModalProvider, useModal };
