import React from "react";

import ContactUs from "./ContactUs";

const ModalContact = ({ open, children }) => {
  if (!open) return null;
  return (
    <div>
      <div className="Modal"></div>
      <div className="Overlay booking-overlay">
        <ContactUs />
      </div>
    </div>
  );
};

export default ModalContact;
