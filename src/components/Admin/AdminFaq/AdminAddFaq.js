import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Navigate } from "react-router-dom";

const AdminAddFaq = () => {
  const [isPosted, setisPosted] = useState(false);
  const [activeloader, setactiveloader] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  // POST REQUEST TO CREATE NEW FAQ
  const onSubmit = (data) => {
    axios
      .post(
        "http://18.209.153.146/admin/faq/",
        {
          question: data.faqquestion,
          answer: data.faqanswer,
        },
        {
          headers: {
            Authorization: `Token ${"b9c5149c48133e6ec998a3d0f052f3cd3122b82d"}`,
          },
        }
      )
      .then((response) => {
        setisPosted(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
                  <button
                    disabled={!isValid}
                    type="submit"
                    onClick={() => setactiveloader(true)}
                    className="btn btn-dark"
                  >
                    ADD
                  </button>

                  {isPosted.status === 201 ? (
                    <Navigate to="/admin/main/faq" />
                  ) : activeloader && isValid ? (
                    <div className="loadercenter">
                      <div className="loader flex flex-jc-c flex-ai-c"></div>
                    </div>
                  ) : null}
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
