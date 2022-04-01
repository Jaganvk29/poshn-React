import React, { useContext } from "react";
import ContactUs from "./ContactUs";
import PoshContext from "../../../PoshContext";

const ModalContact = ({ open, children }) => {
  // const { isOpen } = useContext(PoshContext);
  if (!open) return null;
  return (
    <div>
      <div className="Modal"></div>
      <div className="Overlay booking-overlay">
        <ContactUs />
        {/* <button onClick={onClose}>close</button> */}
      </div>
    </div>
  );
};

export default ModalContact;
