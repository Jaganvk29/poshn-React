import React from "react";
import ContactForm from "./ContactForm";

const Booking = () => {
  return (
    <div>
      <ContactForm
        formtitle="Book your free consultation now"
        formsubtitle="Fill out this form to get your free consultation"
        checkboxes={true}
      />
    </div>
  );
};

export default Booking;
