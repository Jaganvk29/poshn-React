import React, { useState } from "react";

const Accordion = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const faqquestionhandler = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="faq-questions-container" onClick={faqquestionhandler}>
      <div
        className={
          isExpanded ? "faq-questions faq-questions-active" : "faq-questions"
        }
      >
        <h2>How can i ask for a refund?</h2>
        <button>expand</button>
      </div>

      <div className={isExpanded ? "faq-content-show" : "faq-content"}>
        <p>
          We are dreamers, scientists, engineers, writers, artists. Each of us
          has a personal reason to try to create a more emotionally resilient
          world. We are dreamers, scientists, engineers, writers, artists. Each
          of us has a personal reason.
        </p>
      </div>
    </div>
  );
};

export default Accordion;
