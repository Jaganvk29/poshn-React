import { createContext, useState } from "react";

const PoshContext = createContext();

export function PoshProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const modalHandler = function (expand) {
    setIsOpen(expand);
  };

  return (
    <PoshContext.Provider value={{ isOpen, modalHandler }}>
      {children}
    </PoshContext.Provider>
  );
}

export default PoshContext;
