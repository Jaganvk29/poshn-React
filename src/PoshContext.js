import { createContext, useState } from "react";

const PoshContext = createContext();

export function PoshProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [contactIsOpen, setContactIsOpen] = useState(false);

  const [isLogged, setIsLogged] = useState(false);
  // BOOKING MODAL
  const modalHandler = function (expand) {
    setIsOpen(expand);
  };
  // CONTACT MODAL HANDLER

  const contactModalHandler = function (expand) {
    setContactIsOpen(expand);
  };
  // ADMIN LOGIN HANDLER

  const authHandler = function (loggedIn) {
    setIsLogged(loggedIn);
  };

  return (
    <PoshContext.Provider
      value={{
        // BOOKING MODAL
        isOpen,
        modalHandler,
        // CONTACT MODAL HANDLER
        contactIsOpen,
        contactModalHandler,
        // ADMIN LOGIN HANDLER
        isLogged,
        authHandler,
      }}
    >
      {children}
    </PoshContext.Provider>
  );
}

export default PoshContext;
