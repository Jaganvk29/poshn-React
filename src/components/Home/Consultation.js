import React, { useState } from "react";
import ModalContact from "./Modal/ModalContact";

const Consultation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const buttonClick = () => {
    console.log("CLICKED");
    setIsOpen(true);

    document.querySelector("body").classList.add("overflow-hidden");
    document.querySelector(".booking-overlay").classList.remove("none");
  };

  return (
    <section class="has-snap has-ani consultation flex flex-ai-c flex-jc-c">
      <div class="wrapper">
        <div class="text">
          <h1>I will help you to achieve your health goals</h1>

          <button onClick={buttonClick} class="btn btn-dark contact-us-btn">
            Book free consultation
          </button>
        </div>
      </div>
      <ModalContact onClose={() => setIsOpen(false)} open={isOpen}>
        {" "}
        Fancy Modal
      </ModalContact>
    </section>
  );
};

export default Consultation;
