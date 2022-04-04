import React, { useState } from "react";
import { faqData } from "../Faq/faqdata";
import { useParams } from "react-router-dom";

const AdminFaqEdit = () => {
  const params = useParams();
  const faqId = params.faqId;
  const [textState, setTextState] = useState({
    question: faqData[faqId].faqQuestion,
    answer: faqData[faqId].faqAnswer,
  });

  console.log(faqId);
  return (
    <div>
      <div className="adminfaq-container">
        <div className="wrapper">
          <div className="adminfaq">
            <h1>EDIT FAQ</h1>

            <div className="adminfaq-edit">
              <form>
                <h2>QUESTION</h2>

                <input
                  className="faqedittext"
                  contenteditable="true"
                  value={textState.question}
                  onChange={(e) => setTextState({ question: e.target.value })}
                  type="text"
                ></input>

                <h2>Answer</h2>

                <textarea
                  className="faqedittext"
                  cols="50"
                  rows="5"
                  contenteditable="true"
                  value={textState.answer}
                  onChange={(e) => setTextState({ answer: e.target.value })}
                ></textarea>

                <div className="adminsavebtn">
                  <button type="button" className="btn btn-dark">
                    SAVE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <button>Add Faq</button>
      </div>
    </div>
  );
};

export default AdminFaqEdit;
