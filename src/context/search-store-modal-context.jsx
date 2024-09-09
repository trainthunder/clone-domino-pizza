import React, { createContext, useState, useContext } from "react";

const userSearchStoreContext = createContext();

function SearchStoreModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <userSearchStoreContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </userSearchStoreContext.Provider>
  );
}

const useSearchStoreModal = () => useContext(userSearchStoreContext);

export { SearchStoreModalProvider, useSearchStoreModal };
