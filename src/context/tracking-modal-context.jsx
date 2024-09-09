import React, { createContext, useState, useContext } from "react";

const userTrackingModalContext = createContext();

function TrackingModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <userTrackingModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </userTrackingModalContext.Provider>
  );
}

const useTrackingModal = () => useContext(userTrackingModalContext);

export { TrackingModalProvider, useTrackingModal };
