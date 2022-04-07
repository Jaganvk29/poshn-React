import React, { useContext } from "react";
import ContactUs from "./ContactUs";

import PoshContext from "../../../PoshContext";
import Booking from "./Booking";
import { ReactDOM } from "react";

const BookingModal = ({ open, children }) => {
  // const { isOpen } = useContext(PoshContext);
  if (!open) return null;
  return (
    <>
      <div>
        <div className="Modal"></div>
        <div className="Overlay booking-overlay">
          <Booking />
          {/* <ContactUs></ContactUs> */}
        </div>
      </div>
    </>
  );
};

export default BookingModal;
