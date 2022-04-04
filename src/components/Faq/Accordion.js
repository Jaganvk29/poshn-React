import React, { useState } from "react";
import plus from "../../Assets/Plus.png";
import minus from "../../Assets/Minus.png";

const Accordion = (props) => {
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
        <h2>{props.faqtitle}</h2>
        <button>
          <img src={isExpanded ? minus : plus} />
        </button>
      </div>

      <div className={isExpanded ? "faq-content-show" : "faq-content"}>
        <p>{props.faqanswer}</p>
      </div>
    </div>
  );
};

export default Accordion;
