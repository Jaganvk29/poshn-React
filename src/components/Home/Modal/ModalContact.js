import React, { useContext } from "react";
import ContactUs from "./ContactUs";
import PoshContext from "../../../PoshContext";
import Booking from "./Booking";

const ModalContact = ({ open, children }) => {
  // const { isOpen } = useContext(PoshContext);
  if (!open) return null;
  return (
    <div>
      <div className="Modal"></div>
      <div className="Overlay booking-overlay">
        {/* <Booking /> */}
        <ContactUs />
        {/* <button onClick={onClose}>close</button> */}
      </div>
    </div>
  );
};

export default ModalContact;
