import React, { useState, Fragment } from "react";
import Footer from "../Footer/Footer";
import SurveyOption from "./SurveyOption";
import { useForm } from "react-hook-form";
import prevbtn from "../../Assets/prevbtn.png";
import SurevyOptions from "./SurevyOptions";
import SurveyStep1 from "./SurveyStep1";

const Survey = () => {
  const [selected, setSelected] = useState([]);
  const [formstep, setFormStep] = useState(0);
  const [othersel, setOthersel] = useState(false);

  const handletxtrender = () => {
    setOthersel(!othersel);
  };

  console.log(othersel);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const onSubmit = (data) => console.log(data);

  const checkboxhandler = (e) => {
    if (e.target.checked) {
      setSelected([...selected, e.target.value]);
      if (e.target.value === "other") {
        setOthersel(!othersel);
      }
    } else {
      setSelected(selected.filter((select) => select !== e.target.value));
      // if (e.target.checked !== "other") {
      //   setOthersel(false);
      // }
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
    if (formstep >= 1) {
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
        <button disabled={!isValid} type="submit" className="btn btn-dark">
          Submit
        </button>
      );
    }
  };

  const rendernxtButton = () => {
    if (formstep > 9) {
      return undefined;
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
    <Fragment>
      <div className="survey-container bg-color-2">
        <div className="newwrapper">
          {prevbtnrender()}
          <div className="survey">
            <div className="survey-ques-container">
              <div className="survey-ques-no-tracker">
                {formstep > 0 && <h3>Question {formstep} / 10 </h3>}
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
                        <input
                          name="name"
                          class="input-field"
                          type="text"
                          placeholder="Enter Your Name"
                          {...register("Userdetails.name", { required: true })}
                        />
                      </label>
                    </div>

                    <div className="userText">
                      <label>
                        <input
                          name="name"
                          class="input-field"
                          type="text"
                          placeholder="Enter Your Mobile Number"
                          {...register("Userdetails.number", {
                            required: true,
                          })}
                        />
                      </label>
                      <div className="userText">
                        <label>
                          <input
                            name="name"
                            class="input-field"
                            type="email"
                            placeholder="Enter Your Email Address"
                            {...register("Userdetails.email", {
                              required: true,
                            })}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* STEP 1 */}
              {formstep === 1 && (
                <SurveyStep1
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
                />
              )}

              {/* STEP 2 */}
              {formstep === 2 && (
                <SurveyStep1
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
                />
              )}

              {/* STEP 3 */}
              {formstep === 3 && (
                <SurveyStep1
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
                />
              )}

              {/* STEP 4  */}
              {formstep === 4 && (
                <SurveyStep1
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
                />
              )}
              {/* STEP 5 */}
              {formstep === 5 && (
                <SurveyStep1
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
                />
              )}

              {/* STEP 6 */}

              {formstep === 6 && (
                <SurveyStep1
                  question="List your food likes and dislikes:"
                  text1="Likes"
                  text2="DisLikes"
                  text1register={{
                    ...register("Question6.Likes", { required: true }),
                  }}
                  text2register={{
                    ...register("Question6.Dislikes", { required: true }),
                  }}
                />
              )}
              {/* STEP 7 */}

              {formstep === 7 && (
                <SurveyStep1
                  question="In order to have sustainable relationship, we would like
                        to know your communication style"
                  option1="Inner Circle: Someone who can provide safe space and I can open up to"
                  option2="Hands on: I need push and pep to go"
                  option3="Challenger: I do best when someone challenges me"
                  option4="Leave me alone: Let’s discuss what needs to be done and I will take it from there"
                  register={{
                    ...register("Question7", { required: true }),
                  }}
                />
              )}
              {/* STEP 8 */}
              {formstep === 8 && (
                <SurveyStep1
                  question=" Anything else we might need to know related to your
                      nutritional goals"
                  text1="Other Nutrition Goals"
                  text1register={{
                    ...register("Question8", { required: true }),
                  }}
                />
              )}
              {/* STEP 9 */}
              {formstep === 9 && (
                <SurveyStep1
                  question="Your favorite restaurants?"
                  text1="City / State"
                  text1register={{
                    ...register("Question9", { required: true }),
                  }}
                />
              )}

              {/* STEP 10 */}
              {formstep === 10 && (
                <SurveyStep1
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
                />
              )}

              {/* SUBMIT ALERT */}

              {/* {formstep === 10 && (
                <div>
                  <h1> SURVEY SUBMITED</h1>
                </div>
              )} */}
              {errors.Answers && <p>This field is required</p>}

              <div className="formnavbtn">
                {rendernxtButton()}
                {rendersubmitButton()}
              </div>
              <pre>{JSON.stringify(watch(), null, 2)}</pre>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Survey;
