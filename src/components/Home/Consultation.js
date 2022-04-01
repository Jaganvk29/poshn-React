import React, { useState, useContext } from "react";
import ModalContact from "./Modal/ModalContact";
import PoshContext from "../../PoshContext";
const Consultation = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const { isOpen, modalHandler } = useContext(PoshContext);

  const buttonClick = () => {
    console.log("CLICKED");
    modalHandler(true);
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
      <ModalContact
        // onClose={() => setIsOpen(false)}
        open={isOpen}
      ></ModalContact>
    </section>
  );
};

export default Consultation;
