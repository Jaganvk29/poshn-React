import { createContext, useState } from "react";

const PoshContext = createContext();

export function PoshProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [contactIsOpen, setContactIsOpen] = useState(false);

  const [isLogged, setIsLogged] = useState(false);

  const modalHandler = function (expand) {
    setIsOpen(expand);
  };

  const contactModalHandler = function (expand) {
    setContactIsOpen(expand);
  };

  const authHandler = function (loggedIn) {
    setIsLogged(loggedIn);
  };

  return (
    <PoshContext.Provider
      value={{
        isOpen,
        modalHandler,
        isLogged,
        authHandler,
        contactIsOpen,
        contactModalHandler,
      }}
    >
      {children}
    </PoshContext.Provider>
  );
}

export default PoshContext;
