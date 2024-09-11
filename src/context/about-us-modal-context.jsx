import React, { createContext, useState, useContext } from "react";

const userAboutUsContext = createContext();

function AboutUsModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <userAboutUsContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </userAboutUsContext.Provider>
  );
}
const useAboutUsModal = () => useContext(userAboutUsContext);

export { AboutUsModalProvider, useAboutUsModal };
