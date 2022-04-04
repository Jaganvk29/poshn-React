import React, { useState } from "react";
import Accordion from "./Accordion";
import { faqData } from "./faqdata";

const Faq = () => {
  return (
    <div>
      <div className="faq-container">
        <div className="wrapper">
          <div className="faq">
            <div className="faq-title">
              <h1>Frequently asked questions</h1>
            </div>
            {faqData.map((faq, i) => (
              <Accordion
                key={i}
                faqtitle={faq.faqQuestion}
                faqanswer={faq.faqAnswer}
              />
            ))}

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
