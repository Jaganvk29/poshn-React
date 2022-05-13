import React, { useState, useEffect } from "react";
// import { faqData } from "../../Faq/faqdata";
import { Navigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const AdminFaqEdit = () => {
  const params = useParams();

  // GETS FAQ SLUG
  const faqId = params.faqId;

  const [apiStatus, setApiStatus] = useState();
  const [textState, setTextState] = useState([]);
  const [isDeleted, setisDeleted] = useState([]);
  const [deletebtn, setDeletebtn] = useState(false);
  const [activeloader, setactiveloader] = useState(false);

  // GET REQUEST
  const getFaqData = () => {
    axios.get(`http://18.209.153.146/faq/${faqId}`).then((data) => {
      const ResponseData = data.data;
      setApiStatus(data.status);
      console.log(ResponseData);

      setTextState(ResponseData);
    });
  };

  // EDITING PATCH REQUEST
  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append("question", data.question);
    formData.append("answer", data.answer);

    console.log(formData);
    axios
      .patch(
        `http://18.209.153.146/admin/faq/${faqId}/`,
        formData,

        {
          headers: {
            Authorization: `Token ${"b9c5149c48133e6ec998a3d0f052f3cd3122b82d"}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        // setisPosted(response);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(data);
  };

  // DELETE REQUEST

  const deleteHandler = () => {
    axios
      .delete(
        `http://18.209.153.146/admin/faq/${faqId}/`,

        {
          headers: {
            Authorization: `Token ${"b9c5149c48133e6ec998a3d0f052f3cd3122b82d"}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        setisDeleted(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // GET REQUEST EXECUTING
  useEffect(() => {
    getFaqData();
  }, []);

  // REACT HOOK FORMS
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  return (
    <div>
      <div className="managecontainer">
        <div className="wrapper">
          <div className="adminfaq">
            <h1>EDIT FAQ</h1>

            <div className="adminfaq-edit">
              {apiStatus === 200 ? (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <h2>QUESTION</h2>

                  <input
                    className="faqedittext"
                    contenteditable="true"
                    value={textState.question}
                    type="text"
                    {...register("question", {
                      required: true,
                      minLength: 10,
                    })}
                    onChange={(e) => setTextState({ question: e.target.value })}
                  ></input>
                  {errors.question && (
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
                    // contenteditable="true"
                    value={textState.answer}
                    {...register("answer", {
                      required: true,
                      minLength: 20,
                    })}
                    onChange={(e) => setTextState({ answer: e.target.value })}
                  ></textarea>
                  {errors.answer && (
                    <p className="form-err-text">
                      {" "}
                      Minimum 20 Character Required{" "}
                    </p>
                  )}

                  <div className="adminsavebtn flex flex-jc-sb">
                    {!deletebtn && (
                      <button
                        type="button"
                        className="btn btn-warning"
                        onClick={() => setDeletebtn(true)}
                        // onClick={deleteHandler}
                      >
                        DELETE
                      </button>
                    )}

                    {deletebtn && (
                      <div className="deletebutton-ctn flex flex-ai-c">
                        <h3>Are You Sure to </h3>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => {
                            deleteHandler();
                            setactiveloader(true);
                          }}
                        >
                          DELETE
                        </button>
                        {isDeleted.status === 204 ? (
                          <Navigate to="/admin/main/faq" />
                        ) : (
                          activeloader && (
                            <div className="loadercenter">
                              <div className="loader flex flex-jc-c flex-ai-c"></div>
                            </div>
                          )
                        )}
                        <button
                          type="button"
                          className="btn btn-dark"
                          onClick={() => setDeletebtn(false)}
                        >
                          CANCEL
                        </button>
                      </div>
                    )}

                    <button type="submit" className="btn btn-dark">
                      SAVE
                    </button>
                  </div>
                </form>
              ) : (
                <div className="loaderContainer">
                  <div className="loadercenter ">
                    <div className="loader flex flex-jc-c flex-ai-c"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminFaqEdit;
