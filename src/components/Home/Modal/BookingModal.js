import React from "react";

import Booking from "./Booking";

const BookingModal = ({ open }) => {
  if (!open) return null;
  return (
    <>
      <div>
        <div className="Modal"></div>
        <div className="Overlay booking-overlay">
          <Booking />
        </div>
      </div>
    </>
  );
};

export default BookingModal;
