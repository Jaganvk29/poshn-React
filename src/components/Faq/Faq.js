import React, { useState } from "react";
import Accordion from "./Accordion";

const Faq = () => {
  return (
    <div>
      <div className="faq-container">
        <div className="wrapper">
          <div className="faq">
            <div className="faq-title">
              <h1>Frequently asked questions</h1>
            </div>
            <Accordion />
            <Accordion />
            <Accordion />
            <Accordion />
            <Accordion />

            <div className="faq-footer">
              <h1>Still have a question?</h1>
              <p>
                If you cannot find answer to your question in our FAQ, You can
                always contact us. We’ll answer to you shortly!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
