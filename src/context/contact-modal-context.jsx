import React, { createContext, useState, useContext } from "react";

const userContactContext = createContext();

function ContactModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <userContactContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </userContactContext.Provider>
  );
}

const useContactModal = () => useContext(userContactContext);

export { ContactModalProvider, useContactModal };
