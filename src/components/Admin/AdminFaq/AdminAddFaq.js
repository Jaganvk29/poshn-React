import React from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const AdminAddFaq = () => {
  //   const [textState, setTextState] = useState({
  //     question: faqData[faqId].faqQuestion,
  //     answer: faqData[faqId].faqAnswer,
  //   });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div className="managecontainer">
        <div className="wrapper">
          <div className="adminfaq">
            <h1>ADD FAQ</h1>

            <div className="adminfaq-edit">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h2>QUESTION</h2>

                <input
                  className="faqedittext"
                  contenteditable="true"
                  placeholder="ADD BLOG TITLE"
                  type="text"
                  {...register("faqquestion", {
                    required: true,
                    minLength: 10,
                  })}
                ></input>
                {errors.faqquestion && (
                  <p className="form-err-text">
                    {" "}
                    Minimum 10 Character Required{" "}
                  </p>
                )}

                <h2>Answer</h2>

                <textarea
                  className="faqedittext"
                  cols="50"
                  rows="5"
                  placeholder="ADD BLOG CONTENT"
                  // contenteditable="true"

                  {...register("faqanswer", { required: true, minLength: 20 })}
                ></textarea>
                {errors.faqanswer && (
                  <p className="form-err-text">
                    {" "}
                    Minimum 20 Character Required{" "}
                  </p>
                )}

                <div className="adminsavebtn">
                  <button type="submit" className="btn btn-dark">
                    ADD
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

export default AdminAddFaq;
