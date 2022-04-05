import React, { useState, Fragment } from "react";
import Footer from "../Footer/Footer";
import SurveyOption from "./SurveyOption";
import { useForm } from "react-hook-form";
import prevbtn from "../../Assets/prevbtn.png";

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
                <section>
                  <div className="survey-ques">
                    <h1>Tell us about YOUR current relationship with foods?</h1>
                  </div>
                  <div className="survey-ans">
                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="Not so positive: I am ready to throw in the towel"
                        {...register("Question1", { required: true })}
                      />

                      <span>
                        {" "}
                        Not so positive: I am ready to throw in the towel
                      </span>
                    </label>

                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="Yo-Yo and So-So"
                        {...register("Question1", {
                          required: {
                            value: true,
                            message: "THIS FIELD IS REQUIRED",
                          },
                        })}
                      />
                      <span>Yo-Yo and So-So</span>
                    </label>
                    <label>
                      <input
                        onChange={checkboxhandler}
                        value="Positive but I can do better"
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        {...register("Question1", { required: true })}
                      />
                      <span>Positive but I can do better </span>
                    </label>

                    <label>
                      <input
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="I have healthy sustainable relationship"
                        onChange={checkboxhandler}
                        {...register("Question1", { required: true })}
                      />
                      <span>I have healthy sustainable relationship </span>
                    </label>
                    {/* {othersel && (
                      <div className="otherText">
                        <input
                          ref={register()}
                          name="name"
                          class="input-field"
                          type="text"
                          placeholder="OTHER THINGS WANTS TO MENTION"
                        />
                        <button>SUBMIT</button>
                      </div>
                    )} */}
                  </div>
                </section>
              )}

              {/* STEP 2 */}
              {formstep === 2 && (
                <section>
                  <div className="survey-ques">
                    <h1>
                      At PoshN, You are in the safe hands of a Board Certified
                      Registered Dietitian Nutritionist, an expert in food and
                      nutrition. Tell us about your goals? (Select all that
                      apply)
                    </h1>
                  </div>
                  <div className="survey-ans">
                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="Feel More Energetic"
                        {...register("Question2", { required: true })}
                      />
                      <span>Feel More Energetic</span>
                    </label>

                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="Lose Weight"
                        {...register("Question2", { required: true })}
                      />
                      <span>Lose Weight</span>
                    </label>
                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="Gain Weight"
                        {...register("Question2", { required: true })}
                      />
                      <span>Gain Weight</span>
                    </label>

                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="Manage Stress"
                        {...register("Question2", { required: true })}
                      />
                      <span>Manage Stress </span>
                    </label>

                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="Improving Mindfulness"
                        {...register("Question2", { required: true })}
                      />
                      <span>Improving Mindfulness</span>
                    </label>

                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="Better digestion"
                        {...register("Question2", { required: true })}
                      />
                      <span>Better digestion</span>
                    </label>

                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="Better sleep pattern"
                        {...register("Question2", { required: true })}
                      />
                      <span>Better sleep pattern</span>
                    </label>

                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="Improving skin integrity"
                        {...register("Question2", { required: true })}
                      />
                      <span>Improving skin integrity</span>
                    </label>

                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="Other Goals"
                        {...register("Question2", { required: true })}
                      />
                      <span onClick={handletxtrender}>Other Goals</span>
                    </label>

                    {othersel && (
                      <div className="otherText">
                        <label>
                          <input
                            name="name"
                            class="input-field"
                            type="text"
                            placeholder="OTHER THINGS WANTS TO MENTION"
                            {...register("Question2.other", {
                              required: true,
                            })}
                          />
                        </label>
                      </div>
                    )}
                  </div>
                </section>
              )}

              {/* STEP 3 */}
              {formstep === 3 && (
                <section>
                  <div className="survey-ques">
                    <h1>
                      We would like to know about your diet history. What diets
                      have you tried before? (Select all that apply)
                    </h1>
                  </div>
                  <div className="survey-ans">
                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="Carb Controlled"
                        {...register("Question3", { required: true })}
                      />
                      <span>Carb Controlled</span>
                    </label>
                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="Intermittent Fasting"
                        {...register("Question3", { required: true })}
                      />
                      <span>Intermittent Fasting</span>
                    </label>
                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="Paleo"
                        {...register("Question3", { required: true })}
                      />
                      <span>Paleo</span>
                    </label>
                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="Keto"
                        {...register("Question3", { required: true })}
                      />
                      <span>Keto </span>
                    </label>
                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="Weight Warchers"
                        {...register("Question3", { required: true })}
                      />
                      <span>Weight Warchers</span>
                    </label>
                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="Noom"
                        {...register("Question3", { required: true })}
                      />
                      <span>Atkins</span>
                    </label>
                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="Never Tried a Specifi Diet"
                        {...register("Question3", { required: true })}
                      />
                      <span>Never Tried a Specifi Diet</span>
                    </label>

                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="Here is what I have tried "
                        {...register("Question3", { required: true })}
                      />
                      <span onClick={handletxtrender}>
                        Here is what I have tried
                      </span>
                    </label>

                    {othersel && (
                      <div className="otherText">
                        <label>
                          <input
                            name="name"
                            class="input-field"
                            type="text"
                            placeholder="Here What i Have Tried"
                            {...register("Question3.other")}
                          />
                        </label>
                      </div>
                    )}
                  </div>
                </section>
              )}

              {/* STEP 4  */}
              {formstep === 4 && (
                <section>
                  <div className="survey-ques">
                    <h1>Any known food allergies</h1>
                  </div>
                  <div className="survey-ans">
                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="Peanuts"
                        {...register("Question4", { required: true })}
                      />
                      <span>Peanuts</span>
                    </label>

                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="Treenuts"
                        {...register("Question4", { required: true })}
                      />
                      <span>Treenuts</span>
                    </label>
                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="Shellfish"
                        {...register("Question4", { required: true })}
                      />
                      <span>Shellfish</span>
                    </label>

                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="Eggs"
                        {...register("Question4", { required: true })}
                      />
                      <span>Eggs</span>
                    </label>

                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="Dairy"
                        {...register("Question4", { required: true })}
                      />
                      <span>Dairy</span>
                    </label>

                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="Gluten"
                        {...register("Question4", { required: true })}
                      />
                      <span>Gluten</span>
                    </label>

                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="Soy"
                        {...register("Question4", { required: true })}
                      />
                      <span>Soy</span>
                    </label>

                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="No Known Food Allergies"
                        {...register("Question4", { required: true })}
                      />
                      <span>No Known Food Allergies</span>
                    </label>
                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="Not Sure"
                        {...register("Question4", { required: true })}
                      />
                      <span>Not Sure</span>
                    </label>

                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="Other Allergies "
                        {...register("Question4", { required: true })}
                      />
                      <span onClick={handletxtrender}>Other(s)</span>
                    </label>

                    {othersel && (
                      <div className="otherText">
                        <label>
                          <input
                            name="name"
                            class="input-field"
                            type="text"
                            placeholder="Other Food Allergies"
                            {...register("Question4.other")}
                          />
                        </label>
                      </div>
                    )}
                  </div>
                </section>
              )}
              {/* STEP 5 */}
              {formstep === 5 && (
                <section>
                  <div className="survey-ques">
                    <h1>
                      Personalized meals will actually help you eat healthier
                      and you can enjoy your favorite foods. What are your
                      dietary preferences?
                    </h1>
                  </div>
                  <div className="survey-ans">
                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="No Meat"
                        {...register("Question5", { required: true })}
                      />
                      <span>No Meat</span>
                    </label>

                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="No Fish"
                        {...register("Question5", { required: true })}
                      />
                      <span>No Fish</span>
                    </label>
                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="No Eggs"
                        {...register("Question5", { required: true })}
                      />
                      <span>No Eggs</span>
                    </label>

                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="No Dairy"
                        {...register("Question5", { required: true })}
                      />
                      <span>No Dairy</span>
                    </label>

                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="No Wheat"
                        {...register("Question5", { required: true })}
                      />
                      <span>No Wheat</span>
                    </label>
                  </div>
                </section>
              )}

              {/* STEP 6 */}

              {formstep === 6 && (
                <section>
                  <div className="survey-ques">
                    <h1>List your food likes and dislikes:</h1>
                  </div>
                  <div className="survey-ans">
                    <div className="otherText">
                      <label>
                        <input
                          name="name"
                          class="input-field"
                          type="text"
                          placeholder="Likes"
                          {...register("Question6.Likes", { required: true })}
                        />
                      </label>
                    </div>

                    <div className="otherText">
                      <label>
                        <input
                          name="name"
                          class="input-field"
                          type="text"
                          placeholder="Dislikes"
                          {...register("Question6.Dislikes", {
                            required: true,
                          })}
                        />
                      </label>
                    </div>
                  </div>
                </section>
              )}
              {/* STEP 7 */}

              {formstep === 7 && (
                <section>
                  <div className="survey-ques">
                    <h1>
                      In order to have sustainable relationship, we would like
                      to know your communication style
                    </h1>
                  </div>
                  <div className="survey-ans">
                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="Inner Circle: Someone who can provide safe space and I can open up to"
                        {...register("Question7", { required: true })}
                      />
                      <span>
                        Inner Circle: Someone who can provide safe space and I
                        can open up to
                      </span>
                    </label>

                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="Hands on: I need push and pep to go"
                        {...register("Question7", { required: true })}
                      />
                      <span>Hands on: I need push and pep to go</span>
                    </label>
                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="Challenger: I do best when someone challenges me"
                        {...register("Question7", { required: true })}
                      />
                      <span>
                        Challenger: I do best when someone challenges me
                      </span>
                    </label>
                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="Leave me alone: Let’s discuss what needs to be done and I will take it from there"
                        {...register("Question7", { required: true })}
                      />
                      <span>
                        Leave me alone: Let’s discuss what needs to be done and
                        I will take it from there
                      </span>
                    </label>
                  </div>
                </section>
              )}
              {/* STEP 8 */}
              {formstep === 8 && (
                <section>
                  <div className="survey-ques">
                    <h1>
                      Anything else we might need to know related to your
                      nutritional goals
                    </h1>
                  </div>
                  <div className="survey-ans">
                    <div className="otherText">
                      <label>
                        <input
                          name="name"
                          class="input-field"
                          type="text"
                          placeholder="Other Nutrition Goals"
                          {...register("Question8", { required: true })}
                        />
                      </label>
                    </div>
                  </div>
                </section>
              )}
              {/* STEP 9 */}
              {formstep === 9 && (
                <section>
                  <div className="survey-ques">
                    <h1>Your favorite restaurants?</h1>
                  </div>
                  <div className="survey-ans">
                    <div className="otherText">
                      <label>
                        <input
                          name="name"
                          class="input-field"
                          type="text"
                          placeholder="City/State"
                          {...register("Question9", { required: true })}
                        />
                      </label>
                    </div>
                  </div>
                </section>
              )}

              {/* STEP 10 */}
              {formstep === 10 && (
                <section>
                  <div className="survey-ques">
                    <h1>
                      You are almost there we would love to know how did you
                      hear about us?
                    </h1>
                  </div>
                  <div className="survey-ans">
                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer10"
                        id="ans1"
                        value="INSTAGRAM"
                        {...register("Question10", { required: true })}
                      />
                      <span>INSTAGRAM</span>
                    </label>

                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer10"
                        id="ans1"
                        value="FACEBOOK"
                        {...register("Question10", { required: true })}
                      />
                      <span>FACEBOOK</span>
                    </label>
                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="GOOGLE / SEARCH ENGINE"
                        {...register("Question10", { required: true })}
                      />
                      <span>GOOGLE / SEARCH ENGINE</span>
                    </label>

                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="LinkedIn"
                        {...register("Question10", { required: true })}
                      />
                      <span>LinkedIn</span>
                    </label>

                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="Twitter"
                        {...register("Question10", { required: true })}
                      />
                      <span>Twitter</span>
                    </label>

                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="Blog"
                        {...register("Question10", { required: true })}
                      />
                      <span>Blog</span>
                    </label>

                    <label>
                      <input
                        onChange={checkboxhandler}
                        type="checkbox"
                        name="Surveyanswer1"
                        id="ans1"
                        value="Friends / Family "
                        {...register("Question10", { required: true })}
                      />
                      <span onClick={handletxtrender}>Friends / Family</span>
                    </label>

                    {othersel && (
                      <div className="otherText">
                        <label>
                          <input
                            name="name"
                            class="input-field"
                            type="text"
                            placeholder="Friends / Family (Name)"
                            {...register("Question10.Friends_Family")}
                          />
                        </label>
                      </div>
                    )}
                  </div>
                </section>
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
