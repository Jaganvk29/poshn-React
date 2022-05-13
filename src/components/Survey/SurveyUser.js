import React, { useState, useContext } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PoshContext from "../../PoshContext";
import SurveyContext from "../../SurveyContext";
const SurveyUser = (props) => {
  const [isPosted, setisPosted] = useState([]);
  const { userid, surveyUserHandler } = useContext(SurveyContext);
  // const { surveyUserHandler, surveyuser } = useContext(PoshContext);
  let history = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  function handlerecaptcha(value) {
    console.log("Captcha value:", value);
    // setIsVerified(true);
  }

  //   const onSubmit = (data) => console.log(data);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("full_name", data.userdetails.name);
    formData.append("email", data.userdetails.email);
    formData.append("phone", data.userdetails.number);

    console.log(data.userdetails);
    axios
      .post(`${process.env.REACT_APP_API_URL}/dietsurvey/`, formData)
      .then((response) => {
        // CONTEXT TO GET FROM SURVEY COMPONENT
        surveyUserHandler(response.data.id);
        setisPosted(response);
        if (response.status === 201) {
          setTimeout(() => {
            history("/survey");
          }, 3000);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="survey-container bg-color-2">
      <div className="newwrapper">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <section>
              <div className="survey-ques">
                <h1>Enter your details to attend Diet survey questions</h1>
              </div>
              <div className="survey-ans">
                <div className="userText">
                  <label>
                    <div>
                      <input
                        name="name"
                        className="input-field"
                        type="text"
                        placeholder="Enter Your Name"
                        {...register("userdetails.name", {
                          required: true,
                          minLength: 3,
                        })}
                        phone
                      />
                    </div>
                    {errors.userdetails?.name && (
                      <p className="form-err-text">
                        Minimum 3 Character Required
                      </p>
                    )}
                  </label>
                </div>

                <div className="userText">
                  <label>
                    <input
                      name="phone"
                      className="input-field"
                      type="text"
                      placeholder="Enter Your Mobile Number"
                      {...register("userdetails.number", {
                        required: "YOU NEED A PHONE NUMBER",
                        minLength: {
                          value: 10,
                          message: "Number is Too Short",
                        },
                        pattern: {
                          value:
                            /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                          message: "Please enter a valid phone number",
                        },
                      })}
                    />
                    {errors.userdetails?.number && (
                      <p className="form-err-text">Invalid Mobile Number</p>
                    )}{" "}
                    {props.phonevalid}
                  </label>
                  <div className="userText">
                    <label>
                      <input
                        name="name"
                        className="input-field"
                        type="email"
                        placeholder="Enter Your Email Address"
                        {...register("userdetails.email", {
                          required: true,
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address",
                          },
                        })}
                      />

                      {errors.userdetails?.email && (
                        <p className="form-err-text">
                          {errors.userdetails?.email.message}
                        </p>
                      )}
                    </label>
                  </div>
                </div>
              </div>
              <div className="recaptcha-con">
                <ReCAPTCHA
                  sitekey="6LfnJFwfAAAAAPTvk8M5nHeJ217TKlfWUyyedRtT"
                  onChange={handlerecaptcha}
                />
              </div>
            </section>
            <div className="formnavbtn">
              <button
                //   disabled={!isValid}
                type="submit"
                //   onClick={completeFormStep}
                className="btn btn-dark"
              >
                ANSWER
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SurveyUser;
