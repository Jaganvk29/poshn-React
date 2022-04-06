import React, { useState } from "react";
import { faqData } from "../Faq/faqdata";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const AdminFaqEdit = () => {
  const params = useParams();
  const faqId = params.faqId;
  const [textState, setTextState] = useState({
    question: faqData[faqId].faqQuestion,
    answer: faqData[faqId].faqAnswer,
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });
  const onSubmit = (data) => console.log(data);

  console.log(faqId);
  return (
    <div>
      <div className="managecontainer">
        <div className="wrapper">
          <div className="adminfaq">
            <h1>EDIT FAQ</h1>

            <div className="adminfaq-edit">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h2>QUESTION</h2>

                <input
                  className="faqedittext"
                  contenteditable="true"
                  value={textState.question}
                  type="text"
                  {...register("faqquestion", { required: true })}
                  onChange={(e) => setTextState({ question: e.target.value })}
                ></input>

                <h2>Answer</h2>

                <textarea
                  className="faqedittext"
                  cols="50"
                  rows="5"
                  // contenteditable="true"
                  value={textState.answer}
                  {...register("faqanswer", { required: true })}
                  onChange={(e) => setTextState({ answer: e.target.value })}
                ></textarea>

                <div className="adminsavebtn">
                  <button type="submit" className="btn btn-dark">
                    SAVE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminFaqEdit;
