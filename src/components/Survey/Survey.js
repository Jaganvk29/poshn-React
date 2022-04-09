import React, { useState, Fragment } from "react";
import Footer from "../Footer/Footer";
import ReCAPTCHA from "react-google-recaptcha";

import { useForm } from "react-hook-form";
import prevbtn from "../../Assets/prevbtn.png";

import SurveyStep from "./SurveyStep";

const Survey = () => {
  const [selected, setSelected] = useState([]);
  const [formstep, setFormStep] = useState(0);
  const [othersel, setOthersel] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  console.log(othersel);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  function handlerecaptcha(value) {
    console.log("Captcha value:", value);
    setIsVerified(true);
  }

  const onSubmit = (data) => console.log(data);

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
    setFormStep((cur) => cur + 1);
    setOthersel(false);
  };

  const prevFormStep = () => {
    setFormStep((cur) => cur - 1);
  };

  const prevbtnrender = () => {
    if (formstep >= 1 && formstep <= 10) {
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
    if (formstep === 10) {
      return (
        <button
          disabled={!isValid}
          type="submit"
          className="btn btn-dark"
          onClick={completeFormStep}
        >
          Submit
        </button>
      );
    }
  };
  const renderStartButton = () => {
    if (formstep >= 1) {
      return undefined;
    } else {
      return (
        <button
          disabled={!isVerified}
          type="button"
          onClick={completeFormStep}
          className="btn btn-dark"
        >
          START
        </button>
      );
    }
  };

  const valid = isValid && isVerified;

  const rendernxtButton = () => {
    if (formstep > 9) {
      return undefined;
    } else {
      return (
        <button
          disabled={!valid}
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
    <Fragment>
      <div className="survey-container bg-color-2">
        <div className="newwrapper">
          {prevbtnrender()}
          <div className="survey">
            <div className="survey-ques-container">
              <div className="survey-ques-no-tracker">
                {formstep > 0 && formstep <= 10 && (
                  <h3>Question {formstep} / 10 </h3>
                )}
              </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* USER DETAILS*/}

              {formstep === 0 && (
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
                            class="input-field"
                            type="text"
                            placeholder="Enter Your Name"
                            {...register("userdetails.name", {
                              required: true,
                              minLength: 3,
                            })}
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
                          name="name"
                          class="input-field"
                          type="text"
                          placeholder="Enter Your Mobile Number"
                          {...register("userdetails.number", {
                            required: true,
                            minLength: 10,
                          })}
                        />
                        {errors.userdetails?.number && (
                          <p className="form-err-text">Invalid Mobile Number</p>
                        )}
                      </label>
                      <div className="userText">
                        <label>
                          <input
                            name="name"
                            class="input-field"
                            type="email"
                            placeholder="Enter Your Email Address"
                            {...register("userdetails.email", {
                              required: true,
                              pattern: {
                                value:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
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

                    <ReCAPTCHA
                      sitekey="6LfnJFwfAAAAAPTvk8M5nHeJ217TKlfWUyyedRtT"
                      onChange={handlerecaptcha}
                    />
                  </div>
                </section>
              )}

              {/* STEP 1 */}
              {formstep === 1 && (
                <SurveyStep
                  question="Tell us about YOUR current relationship with foods?"
                  option1="Not so positive: I am ready to throw in the towel"
                  option2="Yo-Yo and So-So"
                  option3="Positive but I can do better"
                  option4="I have healthy sustainable relationship"
                  optional="OTHER THINGS"
                  register={{
                    ...register("Question1", { required: true }),
                  }}
                  optionalRegister={{
                    ...register("Question1.other", { required: true }),
                  }}
                  validationmsg={
                    errors.Question1 && (
                      <p className="form-err-text">
                        Select Any Option To Continue
                      </p>
                    )
                  }
                />
              )}

              {/* STEP 2 */}
              {formstep === 2 && (
                <SurveyStep
                  question="At PoshN, You are in the safe hands of a Board Certified
                        Registered Dietitian Nutritionist, an expert in food and
                        nutrition. Tell us about your goals? (Select all that
                        apply)"
                  option1="Feel More Energetic"
                  option2="Lose Weight"
                  option3="Gain Weight"
                  option4="Manage Stress"
                  option5="Improving Mindfulness"
                  option6="Better digestion"
                  option7="Better sleep pattern"
                  option8="Improving skin integrity"
                  optional="Other Goals"
                  register={{
                    ...register("Question2", { required: true }),
                  }}
                  optionalRegister={{
                    ...register("Question2.othergoals", { required: true }),
                  }}
                  validationmsg={
                    errors.Question2 && (
                      <p className="form-err-text">
                        Select Any Option To Continue
                      </p>
                    )
                  }
                />
              )}

              {/* STEP 3 */}
              {formstep === 3 && (
                <SurveyStep
                  question="We would like to know about your diet history. What
                        diets have you tried before? (Select all that apply)"
                  option1="Carb Controlled"
                  option2="Intermittent Fasting"
                  option3="Paleo"
                  option4="Keto"
                  option5="Weight Warchers"
                  option6="Noom"
                  option7="Never Tried a Specific Diet"
                  optional="Here is what I have tried"
                  register={{
                    ...register("Question3", { required: true }),
                  }}
                  optionalRegister={{
                    ...register("Question3.othergoals", { required: true }),
                  }}
                  validationmsg={
                    errors.Question3 && (
                      <p className="form-err-text">
                        Select Any Option To Continue
                      </p>
                    )
                  }
                />
              )}

              {/* STEP 4  */}
              {formstep === 4 && (
                <SurveyStep
                  question="Any known food allergies"
                  option1="Peanuts"
                  option2="Treenuts"
                  option3="Shellfish"
                  option4="Eggs"
                  option5="Dairy"
                  option6="Gluten"
                  option7="Soy"
                  option8="No Known Food Allergies"
                  option9="Not Sure"
                  optional="Other Allergies"
                  register={{
                    ...register("Question4", { required: true }),
                  }}
                  optionalRegister={{
                    ...register("Question4.otherallergies", {
                      required: true,
                    }),
                  }}
                  validationmsg={
                    errors.Question4 && (
                      <p className="form-err-text">
                        Select Any Option To Continue
                      </p>
                    )
                  }
                />
              )}
              {/* STEP 5 */}
              {formstep === 5 && (
                <SurveyStep
                  question="Personalized meals will actually help you eat healthier
                        and you can enjoy your favorite foods. What are your
                        dietary preferences?"
                  option1="No Meat"
                  option2="No Fish"
                  option3="No Eggs"
                  option4="No Dairy"
                  option5="No Wheat"
                  register={{
                    ...register("Question5", { required: true }),
                  }}
                  validationmsg={
                    errors.Question5 && (
                      <p className="form-err-text">
                        Select Any Option To Continue
                      </p>
                    )
                  }
                />
              )}

              {/* STEP 6 */}

              {formstep === 6 && (
                <SurveyStep
                  question="List your food likes and dislikes:"
                  text1="Likes"
                  text2="DisLikes"
                  text1register={{
                    ...register("Question6.Likes", { required: true }),
                  }}
                  text2register={{
                    ...register("Question6.Dislikes", { required: true }),
                  }}
                  validationmsg={
                    errors.Question6 && (
                      <p className="form-err-text">All Fields Are Required</p>
                    )
                  }
                />
              )}
              {/* STEP 7 */}

              {formstep === 7 && (
                <SurveyStep
                  question="In order to have sustainable relationship, we would like
                        to know your communication style"
                  option1="Inner Circle: Someone who can provide safe space and I can open up to"
                  option2="Hands on: I need push and pep to go"
                  option3="Challenger: I do best when someone challenges me"
                  option4="Leave me alone: Let’s discuss what needs to be done and I will take it from there"
                  register={{
                    ...register("Question7", { required: true }),
                  }}
                  validationmsg={
                    errors.Question7 && (
                      <p className="form-err-text">
                        Select Any Option To Continue
                      </p>
                    )
                  }
                />
              )}
              {/* STEP 8 */}
              {formstep === 8 && (
                <SurveyStep
                  question=" Anything else we might need to know related to your
                      nutritional goals"
                  text1="Other Nutrition Goals"
                  text1register={{
                    ...register("Question8", { required: true }),
                  }}
                  validationmsg={
                    errors.Question8 && (
                      <p className="form-err-text">All Fields Are Required</p>
                    )
                  }
                />
              )}
              {/* STEP 9 */}
              {formstep === 9 && (
                <SurveyStep
                  question="Your favorite restaurants?"
                  text1="City / State"
                  text1register={{
                    ...register("Question9", { required: true }),
                  }}
                  validationmsg={
                    errors.Question9 && (
                      <p className="form-err-text">All Fields Are Required</p>
                    )
                  }
                />
              )}

              {/* STEP 10 */}
              {formstep === 10 && (
                <SurveyStep
                  question="You are almost there we would love to know how did you
                        hear about us?"
                  option1="INSTAGRAM"
                  option2="FACEBOOK"
                  option3="GOOGLE / SEARCH ENGINE"
                  option4="LINKEDIN"
                  option5="TWITTER"
                  option6="BLOG"
                  optional="FRIENDS / FAMILY"
                  register={{
                    ...register("Question10", { required: true }),
                  }}
                  optionalRegister={{
                    ...register("Question10.Faily_Friends", {
                      required: true,
                    }),
                  }}
                  validationmsg={
                    errors.Question10 && (
                      <p className="form-err-text">
                        Select Any Option To Continue
                      </p>
                    )
                  }
                />
              )}

              {/* SUBMIT ALERT */}

              {formstep === 11 && (
                <div>
                  <h1> SURVEY SUBMITED</h1>
                </div>
              )}
              {/* {errors.Answers && <p>This field is required</p>} */}

              <div className="formnavbtn">
                {rendernxtButton()}
                {rendersubmitButton()}
                {/* {renderStartButton()} */}
              </div>
              {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Survey;
