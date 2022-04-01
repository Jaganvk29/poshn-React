import React from "react";
import ContactUs from "./ContactUs";

const ModalContact = ({ open, children, onClose }) => {
  if (!open) return null;
  return (
    <div>
      <div className="Overlay">
        <div className="Modal">
          <ContactUs />
          <button onClick={onClose}>close</button>
        </div>
      </div>
    </div>
  );
};

export default ModalContact;
