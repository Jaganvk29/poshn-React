import React from "react";
import ReactDOM from "react-dom";

import ContactUs from "./ContactUs";

const ModalContact = ({ open, children }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div>
        <div className="Modal"></div>
        <div className="Overlay booking-overlay">
          <ContactUs />
        </div>
      </div>
    </>,
    document.getElementById("bookingportal")
  );
};

export default ModalContact;
