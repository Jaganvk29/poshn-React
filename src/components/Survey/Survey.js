import React, { useState, useContext } from "react";

import { useForm } from "react-hook-form";
import prevbtn from "../../Assets/prevbtn.png";
import { motion } from "framer-motion";
import SurveyStep from "./SurveyStep";
import BookingModal from "../Home/Modal/BookingModal";
import PoshContext from "../../PoshContext";
import SurveyUser from "./SurveyUser";
import SurveyContext from "../../SurveyContext";
import axios from "axios";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import Step5 from "./Steps/Step5";
import Step6 from "./Steps/Step6";
import Step7 from "./Steps/Step7";
import Step8 from "./Steps/Step8";
import Step9 from "./Steps/Step9";
import Step10 from "./Steps/Step10";
import { Link, Navigate } from "react-router-dom";
import Lib from "react-slick/lib";
const Survey = () => {
  // SURVEY SENT SUCESSFULLY STATE
  const [isPosted, setIsPosted] = useState(false);

  // const { surveyUserHandler, surveyuser } = useContext(PoshContext);
  const { formstepHandler, formstep } = useContext(SurveyContext);
  const { userid, surveyUserHandler } = useContext(SurveyContext);

  // const [formstep, setFormStep] = useState(0);

  const [selected, setSelected] = useState([]);
  const [othersel, setOthersel] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const { isOpen, modalHandler } = useContext(PoshContext);

  //  MODAL BUTTON HANDLER POPUP
  const ModalbtnHandler = () => {
    console.log("CLICKED");
    modalHandler(true);
  };

  // SURVEY USER ID
  // console.log(surveyuser.data.id);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  console.log(userid);
  const onSubmit = (data) => {
    // const formData = new FormData();

    // const userid = 3;

    const Step1 = {
      question: {
        question_text: "Tell us about Your current relationship with foods?",
      },

      choices: data.Question1,
      user: userid,
    };
    // const sendData = JSON.stringify(Step1);

    const Step2 = {
      question: {
        question_text:
          "At PoshN, You are in the safe hands of a Board Certified Registered Dietitian Nutritionist, an expert in food and nutrition. Tell us about your goals? (Select all that apply)",
      },
      custom_answer: data.Question2othergoals,

      choices: data.Question2,
      user: userid,
    };

    const Step3 = {
      question: {
        question_text:
          "We would like to know about your diet history. What diets have you tried before? (Select all that apply)",
      },
      custom_answer: data.Question3othergoals,
      choices: data.Question3,
      user: userid,
    };

    const Step4 = {
      question: {
        question_text: "Any known food allergies",
      },
      custom_answer: data.Question4otherallergies,
      choices: data.Question4,
      user: userid,
    };

    const Step5 = {
      question: {
        question_text:
          "Personalized meals will actually help you eat healthier and you can enjoy your favorite foods. What are your dietary preferences?",
      },

      choices: data.Question5,
      user: userid,
    };

    const Step6 = {
      question: {
        question_text: "List your food likes and dislikes",
      },

      custom_answer: `Likes - ${data.Question6Likes} , Dislikes - ${data.Question6Dislikes}`,
      user: userid,
    };

    const Step7 = {
      question: {
        question_text:
          "In order to have sustainable relationship, we would like to know your communication style",
      },

      choices: data.Question7,
      user: userid,
    };

    const Step8 = {
      question: {
        question_text:
          "Anything else we might need to know related to your nutritional goals",
      },

      custom_answer: data.Question8,
      user: userid,
    };

    const Step9 = {
      question: {
        question_text: "Your favorite restaurants?",
      },
      custom_answer: data.Question9,

      user: userid,
    };

    const Step10 = {
      question: {
        question_text:
          "You are almost there we would love to know how did you hear about us?",
      },
      custom_answer: data.Question10Family_Friends,

      choices: data.Question10,
      user: userid,
    };

    // console.log(Step1);
    // console.log(Step2);
    // console.log(Step3);
    // console.log(Step4);
    // console.log(Step5);
    // console.log(Step6);
    // console.log(Step7);
    // console.log(Step8);
    // console.log(Step9);
    // console.log(Step10);

    console.log(data);

    function formstepdata1() {
      return axios.post("https://girish.ml/dietsurvey/response", Step1);
    }

    function formstepdata2() {
      return axios.post("https://girish.ml/dietsurvey/response", Step2);
    }

    function formstepdata3() {
      return axios.post("https://girish.ml/dietsurvey/response", Step3);
    }

    function formstepdata4() {
      return axios.post("https://girish.ml/dietsurvey/response", Step4);
    }

    function formstepdata5() {
      return axios.post("https://girish.ml/dietsurvey/response", Step5);
    }

    function formstepdata6() {
      return axios.post("https://girish.ml/dietsurvey/response", Step6);
    }

    function formstepdata7() {
      return axios.post("https://girish.ml/dietsurvey/response", Step7);
    }

    function formstepdata8() {
      return axios.post("https://girish.ml/dietsurvey/response", Step8);
    }

    function formstepdata9() {
      return axios.post("https://girish.ml/dietsurvey/response", Step9);
    }

    function formstepdata10() {
      return axios.post("https://girish.ml/dietsurvey/response", Step10);
    }

    Promise.all([
      formstepdata1(),
      formstepdata2(),
      formstepdata3(),
      formstepdata4(),
      formstepdata5(),
      formstepdata6(),
      formstepdata7(),
      formstepdata8(),
      formstepdata9(),
      formstepdata10(),
    ])
      .then(function (results) {
        const res1 = results[0];
        const res2 = results[1];
        const res3 = results[2];
        const res4 = results[3];
        const res5 = results[4];
        const res6 = results[5];
        const res7 = results[6];
        const res8 = results[7];
        const res9 = results[8];
        const res10 = results[9];

        console.log(results);

        results.forEach((result) => {
          if (result.status === 201) {
            setIsPosted(true);
          }
        });

        // console.log(res1);
        // console.log(res2);
        // console.log(res3);
        // console.log(res4);
        // console.log(res5);
        // console.log(res6);
        // console.log(res7);
        // console.log(res8);
        // console.log(res9);
        // console.log(res10);
      })
      .catch((error) => {
        if (error.response) {
          //do something
          console.log(error.response);
        } else if (error.request) {
          console.log("ERROR REQUEST");
          console.log(error.request);
          //do something else
        } else if (error.message) {
          console.log("ERROR MESSAGE");
          console.log(error.message);

          //do something other than the other two
        }
        console.log("FREOM HERE");
      });
  };

  const checkboxhandler = (e) => {
    if (e.target.checked) {
      setSelected([...selected, e.target.value]);
      if (e.target.value === "other") {
        setOthersel(!othersel);
      }
    } else {
      setSelected(selected.filter((select) => select !== e.target.value));
    }
  };

  const completeFormStep = () => {
    // setFormStep((cur) => cur + 1);
    formstepHandler((cur) => cur + 1);

    // setOthersel(false);
    console.log(isPosted);
  };

  const prevFormStep = () => {
    // setFormStep((cur) => cur - 1);
    formstepHandler((cur) => cur - 1);
  };

  const prevbtnrender = () => {
    if (formstep >= 1 && formstep <= 9) {
      return (
        <div className="survey-prevbtn" onClick={prevFormStep}>
          <img src={prevbtn} /> <p>Previous</p>
        </div>
      );
    } else {
      return undefined;
    }
  };

  const rendersubmitButton = () => {
    if (formstep === 9) {
      return (
        <button
          // THIS PREVENTS LOGGING COLLETED DATA NEED CHANGES WHEN WE GOT BACKEND

          disabled={!isValid}
          type="submit"
          className="btn btn-dark"
          // onClick={completeFormStep}
        >
          Submit
        </button>
      );
    }
  };

  // CHECKS CAPTCHA AND FORM INPUTS ARE VALID
  // const valid = isValid && isVerified;

  const rendernxtButton = () => {
    if (formstep > 8) {
      return undefined;
    } else if (formstep === 0) {
      return (
        <button
          disabled={!isValid}
          type="button"
          onClick={completeFormStep}
          className="btn btn-dark"
        >
          Next
        </button>
      );
    } else {
      return (
        <button
          disabled={!isValid}
          type="button"
          onClick={completeFormStep}
          className="btn btn-dark"
        >
          NEXT
        </button>
      );
    }
  };

  // console.log(selected);
  // console.log(othersel);
  return (
    <motion.div
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <div className="survey-container bg-color-2">
        <div className="newwrapper">
          {prevbtnrender()}
          {userid != undefined ? (
            <div className="survey">
              <div className="survey-ques-container">
                <div className="survey-ques-no-tracker">
                  {formstep >= 0 && formstep <= 10 && (
                    <h3>Question {`${formstep + 1}`} / 10 </h3>
                  )}
                </div>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* USER DETAILS*/}

                {/* {formstep === 0 && (
              
              )} */}

                {/* STEP 1 */}
                {formstep === 0 && (
                  <Step1
                    register={{
                      ...register("Question1", { required: true }),
                    }}
                    validate={
                      errors.Question1 && (
                        <p className="form-err-text">
                          Select Any Option To Continue
                        </p>
                      )
                    }
                  />
                )}

                {/* STEP 2 */}
                {formstep === 1 && (
                  <Step2
                    register={{
                      ...register("Question2", { required: true }),
                    }}
                    validate={
                      errors.Question2 && (
                        <p className="form-err-text">
                          Select Any Option To Continue
                        </p>
                      )
                    }
                    customtext={{
                      ...register("Question2othergoals"),
                    }}
                  />
                )}

                {/* STEP 3 */}
                {formstep === 2 && (
                  <Step3
                    register={{
                      ...register("Question3", { required: true }),
                    }}
                    customtext={{
                      ...register("Question3othergoals"),
                    }}
                    validate={
                      errors.Question3 && (
                        <p className="form-err-text">
                          Select Any Option To Continue
                        </p>
                      )
                    }
                  />
                )}

                {/* STEP 4  */}
                {formstep === 3 && (
                  <Step4
                    register={{
                      ...register("Question4", { required: true }),
                    }}
                    customtext={{
                      ...register("Question4otherallergies"),
                    }}
                    validate={
                      errors.Question4 && (
                        <p className="form-err-text">
                          Select Any Option To Continue
                        </p>
                      )
                    }
                  />
                )}
                {/* STEP 5 */}

                {formstep === 4 && (
                  <Step5
                    register={{
                      ...register("Question5", { required: true }),
                    }}
                    validate={
                      errors.Question5 && (
                        <p className="form-err-text">
                          Select Any Option To Continue
                        </p>
                      )
                    }
                  />
                )}

                {/* STEP 6 */}

                {formstep === 5 && (
                  <Step6
                    register1={{
                      ...register("Question6Likes", { required: true }),
                    }}
                    register2={{
                      ...register("Question6Dislikes", { required: true }),
                    }}
                    validate={
                      errors.Question6 && (
                        <p className="form-err-text">All Fields Are Required</p>
                      )
                    }
                  />
                )}

                {/* STEP 7 */}

                {formstep === 6 && (
                  <Step7
                    register={{
                      ...register("Question7", { required: true }),
                    }}
                    validate={
                      errors.Question7 && (
                        <p className="form-err-text">
                          Select Any Option To Continue
                        </p>
                      )
                    }
                  />
                )}

                {/* STEP 8 */}
                {formstep === 7 && (
                  <Step8
                    register={{
                      ...register("Question8", { required: true }),
                    }}
                    validate={
                      errors.Question9 && (
                        <p className="form-err-text">All Fields Are Required</p>
                      )
                    }
                  />
                )}
                {/* STEP 9 */}

                {formstep === 8 && (
                  <Step9
                    register={{
                      ...register("Question9", { required: true }),
                    }}
                    validate={
                      errors.Question9 && (
                        <p className="form-err-text">All Fields Are Required</p>
                      )
                    }
                  />
                )}

                {/* STEP 10 */}
                {formstep === 9 && (
                  <Step10
                    register={{
                      ...register("Question10"),
                    }}
                    customtext={{
                      ...register("Question10Family_Friends"),
                    }}
                    validate={
                      errors.Question10 && (
                        <p className="form-err-text">
                          Select Any Option To Continue
                        </p>
                      )
                    }
                  />
                )}

                {/* SUBMIT ALERT */}

                {/* {errors.Answers && <p>This field is required</p>} */}

                <div className="formnavbtn">
                  {rendernxtButton()}
                  {rendersubmitButton()}
                </div>
                <pre>{JSON.stringify(watch(), null, 2)}</pre>
              </form>

              {isPosted && <Navigate to={"/surveycompleted"} />}
            </div>
          ) : (
            <div>
              <h1>We are Not Able To identify You</h1>
              <h2 className="flex flex-jc-c mt-10">
                Please Login To Start Survey
              </h2>

              <div className="flex flex-jc-c mt-10">
                <Link to={"/surveylogin"}>
                  <button type="button" className="btn btn-dark">
                    Click Here To Start Survey
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Survey;
