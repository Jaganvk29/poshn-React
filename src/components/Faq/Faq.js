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
            <Accordion title="How can i ask for a refund?" />
            <Accordion title="Who are the doctors here?" />
            <Accordion title="I want to lose fat, how much time will it take?" />
            <Accordion title="I’m Skinny, I want to gain weight." />
            <Accordion title="Will you provide coaching in India too?" />
            <Accordion title="Can I pay in Indian Rupee?" />
            <Accordion title="I love the product, How can I join your team?" />

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
