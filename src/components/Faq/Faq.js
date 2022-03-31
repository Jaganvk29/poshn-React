import React from "react";

const Faq = () => {
  return (
    <div>
      <div className="faq-container">
        <div className="wrapper">
          <div className="faq">
            <div className="faq-title">
              <h1>Frequently asked questions</h1>
            </div>
            <div className="faq-questions-container">
              <div className="faq-questions">
                <h2>How can i ask for a refund?</h2>
                <button>expand</button>
              </div>

              <div>
                <p>
                  We are dreamers, scientists, engineers, writers, artists. Each
                  of us has a personal reason to try to create a more
                  emotionally resilient world. We are dreamers, scientists,
                  engineers, writers, artists. Each of us has a personal reason.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
