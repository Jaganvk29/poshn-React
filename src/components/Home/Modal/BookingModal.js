import React from "react";
import ReactDOM from "react-dom";

import Booking from "./Booking";

const BookingModal = ({ open }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div>
        <div className="Modal"></div>
        <div className="Overlay booking-overlay">
          <Booking />
        </div>
      </div>
    </>,
    document.getElementById("contactPortal")
  );
};

export default BookingModal;
