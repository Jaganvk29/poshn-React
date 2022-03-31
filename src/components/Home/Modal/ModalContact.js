// import React, { useState } from "react";
// import ContactUs from "./Modal/ContactUs";
// import ReactDOM from "react-dom";

// const ModalContact = (open, onClose) => {
//   const [contactpage, setContactpage] = useState(false);
//   const contactbtnHandler = () => {
//     setContactpage(true);
//     console.log(contactpage);
//   };
//   if (!open) return null;
//   return ReactDOM.createPortal(
//     <div>
//       <div className="Overlay"></div>

//       <div className="Modal"></div>
//       {contactpage && <ContactUs />}
//     </div>,
//     document.getElementById("contactPortal")
//   );
// };

// export default ModalContact;

import React from "react";
import ContactUs from "./ContactUs";

const ModalContact = ({ open, children, onClose }) => {
  if (!open) return null;
  return (
    <div>
      <div className="Overlay"></div>
      <div className="Modal">
        <ContactUs />
      </div>
    </div>
  );
};

export default ModalContact;
