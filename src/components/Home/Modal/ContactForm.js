import React, { useContext, useState } from "react";
import PoshContext from "../../../PoshContext";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import Input from "./Inputs/Input";
import InputTextArea from "./Inputs/InputTextArea";

const ContactForm = (props) => {
  // CONTEXT FOR BOOKING (CONSULTATION PAGE) US MODAL
  const { modalHandler } = useContext(PoshContext);

  // CONTEXT FOR CONTACT US MODAL
  const { contactModalHandler } = useContext(PoshContext);

  const [isVerified, setIsVerified] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  //   GOOGLE RECAPTCHA HANDLER
  function handlerecaptcha(value) {
    console.log("Captcha value:", value);
    setIsVerified(true);
  }

  console.log(" IS FOCUED :" + isFocused);

  //   REACT HOOK FORMS
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });
  const onSubmit = (data) => console.log(data);

  //   MODAL CLOSE BTN
  const modalBtnHandler = () => {
    modalHandler(false);
    contactModalHandler(false);
  };

  //   CHECK RECAPTCA AND FORMS ARE VALID
  const formValid = isValid && isVerified;

  return (
    <div>
      <div class="scroll ">
        <div class="content">
          <div class="btn-container">
            <button onClick={modalBtnHandler} class="btn-close"></button>
          </div>
          <div className="booking">
            <div className="btn-container">
              <button onClick={modalBtnHandler} class="btn-close"></button>
            </div>
            <div className="title">
              <h2>Get in touch!</h2>
              <h5>Get advice related to the service</h5>
            </div>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <div className="container">
                <div className="flex-1 mr-32px">
                  <Input
                    label="Name"
                    placeholder="Enter Your Name"
                    icon="icon-user"
                    errors={
                      errors.username && (
                        <p className="form-err-text">
                          {errors.username.message}
                        </p>
                      )
                    }
                    registerinput={register("username", {
                      required: "You need a name",
                      minLength: {
                        value: 3,
                        message: "Please enter a longer name",
                      },
                      maxLength: {
                        value: 50,
                        message: "Please enter a shorter name",
                      },
                    })}
                  />

                  <Input
                    label="Email"
                    placeholder="Enter email"
                    icon="icon-mail"
                    errors={
                      errors.useremail && (
                        <p className="form-err-text">
                          {errors.useremail.message}
                        </p>
                      )
                    }
                    registerinput={register("useremail", {
                      required: "You need a Email",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address",
                      },
                    })}
                  />

                  <Input
                    label="Phone"
                    placeholder="Enter Phone Number"
                    icon="icon-phone"
                    errors={
                      errors.userphone && (
                        <p className="form-err-text">
                          {errors.userphone.message}
                        </p>
                      )
                    }
                    registerinput={register("userphone", {
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
                </div>
                <div class="flex-2">
                  <InputTextArea
                    label="Message"
                    placeholder="ENTER A MESSAGE"
                    registerinput={register("usermessage", {
                      required: "You Need Add a Message",
                      minLength: {
                        value: 20,
                        message: "Message is Too Short",
                      },
                    })}
                    errors={
                      errors.usermessage && (
                        <p className="form-err-text">
                          {errors.usermessage.message}
                        </p>
                      )
                    }
                  />
                </div>
              </div>
              {/* CHECK BOXES */}

              {props.checkboxes && (
                <div class="field mt-40px">
                  <label>Consultation type</label>
                  <div class="btn-selection">
                    <label>
                      <input
                        type="checkbox"
                        name="consultationType"
                        value="diet"
                        // onChange={checkboxhandler}
                        {...register("consultationtype", {
                          required: "You Need To Select Atleast One",
                        })}
                      />
                      <span class="input-btn">Diet</span>
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="consultationType"
                        value="nutrition"
                        // onChange={checkboxhandler}
                        {...register("consultationtype", {
                          required: "You Need To Select Atleast One",
                        })}
                      />
                      <span class="input-btn">Nutrition</span>
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="consultationType"
                        value="fitness"
                        // onChange={checkboxhandler}
                        {...register("consultationtype", {
                          required: "You Need To Select Atleast One",
                        })}
                      />
                      <span class="input-btn">Fitness</span>
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="consultationType"
                        value="fatloss"
                        // onChange={checkboxhandler}
                        {...register("consultationtype", {
                          required: "You Need To Select Atleast One",
                        })}
                      />
                      <span class="input-btn">Fatloss</span>
                    </label>
                  </div>
                  {errors.consultationtype && (
                    <p className="form-err-text">
                      {errors.consultationtype.message}
                    </p>
                  )}
                </div>
              )}

              {/* GOOGLE RECAPTCA */}
              <ReCAPTCHA
                sitekey="6LfnJFwfAAAAAPTvk8M5nHeJ217TKlfWUyyedRtT"
                onChange={handlerecaptcha}
              />
              {/* RECAPTCA ENDS */}
              <div class="text-center">
                <button
                  disabled={!formValid}
                  type="submit"
                  class="btn btn-dark submit-btn"
                >
                  Book free consultation
                </button>
              </div>
            </form>
            <div class="form-footer">
              <div class="hr-1"></div>
              <div class="flex flex-col">
                <div class="col-1">
                  <div class="flex">
                    <div class="icon icon-blue icon-map-pin mr-10px"></div>
                    <p>102 Street 2410 Las, Las veges</p>
                  </div>
                  <div class="flex">
                    <div class="icon icon-blue icon-phone mr-10px"></div>
                    <p>+1 26354517</p>
                  </div>
                  <div class="flex">
                    <div class="icon icon-blue icon-mail mr-10px"></div>
                    <p>Hello@PoshN.com</p>
                  </div>
                </div>
                <div class="hr-2"></div>
                <div class="col-2">
                  <div class="flex">
                    <div class="icon icon-blue icon-instagram-outline mr-10px"></div>
                    <p>Instagram</p>
                  </div>
                  <div class="flex">
                    <div class="icon icon-blue icon-facebook-outline mr-10px"></div>
                    <p>Facebook</p>
                  </div>
                  <div class="flex">
                    <div class="icon icon-blue icon-twitter-outline mr-10px"></div>
                    <p>Twitter</p>
                  </div>
                  <div class="flex">
                    <div class="icon icon-blue icon-linkedin-outline mr-10px"></div>
                    <p>LinkedIN</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
