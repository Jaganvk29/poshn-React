import React, { useContext, useState } from "react";
import PoshContext from "../../../PoshContext";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import Input from "./Inputs/Input";
import InputTextArea from "./Inputs/InputTextArea";

import axios from "axios";

const ContactForm = (props) => {
  // CONTEXT FOR BOOKING (CONSULTATION PAGE) US MODAL
  const { modalHandler } = useContext(PoshContext);

  // CONTEXT FOR CONTACT US MODAL
  const { contactModalHandler } = useContext(PoshContext);

  const [isVerified, setIsVerified] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isPosted, setisPosted] = useState(false);
  const [activeloader, setactiveloader] = useState(false);

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

  //   MODAL CLOSE BTN
  const modalBtnHandler = () => {
    modalHandler(false);
    contactModalHandler(false);
  };

  //   CHECK RECAPTCA AND FORMS ARE VALID
  const formValid = isValid && isVerified;

  // const onSubmit = (data) => console.log(data);

  // PUT REQUEST TO EDIT BLOG
  const onSubmit = async (data) => {
    const formData = new FormData();

    console.log(formData);
    console.log(data);

    if (props.checkboxes) {
      formData.append("full_name", data.username);
      formData.append("email", data.useremail);
      formData.append("phone", data.userphone);
      formData.append("message", data.usermessage);
      formData.append("consultation_type", data.consultationtype);
    } else {
      formData.append("full_name", data.username);
      formData.append("email", data.useremail);
      formData.append("phone", data.userphone);
      formData.append("message", data.usermessage);
    }

    await axios
      .post(
        ` ${process.env.REACT_APP_API_URL}/${
          props.checkboxes ? "consultation/" : "contact/"
        }`,
        formData
      )
      .then((response) => {
        console.log(response);
        setisPosted(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="scroll ">
        <div className="content">
          <div className="btn-container">
            <button onClick={modalBtnHandler} className="btn-close"></button>
          </div>
          <div className="booking">
            <div className="btn-container">
              <button onClick={modalBtnHandler} className="btn-close"></button>
            </div>
            <div className="title">
              <h2>{props.formtitle}</h2>
              <h5>{props.formsubtitle}</h5>
            </div>

            {isPosted.status === 201 ? (
              <div className="title flex flex-jc-c flex-fd-c flex-gap-10">
                <h2 className="text-center">
                  Response Received <br /> We Will Get Back To You ASAP
                </h2>
                <div className="flex flex-jc-c">
                  {" "}
                  <button
                    className="btn btn-dark "
                    type="button"
                    onClick={modalBtnHandler}
                  >
                    {" "}
                    Close
                  </button>
                </div>
              </div>
            ) : (
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
                  <div className="flex-2">
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
                  <div className="field mt-40px">
                    <label>Consultation type</label>
                    <div className="btn-selection">
                      <label>
                        <input
                          type="radio"
                          name="consultationType"
                          value="Diet"
                          // onChange={checkboxhandler}
                          {...register("consultationtype", {
                            required: "You Need To Select Atleast One",
                          })}
                        />
                        <span className="input-btn">Diet</span>
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="consultationType"
                          value="Nutrition"
                          // onChange={checkboxhandler}
                          {...register("consultationtype", {
                            required: "You Need To Select Atleast One",
                          })}
                        />
                        <span className="input-btn">Nutrition</span>
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="consultationType"
                          value="Fitness"
                          // onChange={checkboxhandler}
                          {...register("consultationtype", {
                            required: "You Need To Select Atleast One",
                          })}
                        />
                        <span className="input-btn">Fitness</span>
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="consultationType"
                          value="Fatloss"
                          // onChange={checkboxhandler}
                          {...register("consultationtype", {
                            required: "You Need To Select Atleast One",
                          })}
                        />
                        <span className="input-btn">Fatloss</span>
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
                <div className="text-center">
                  <button
                    onClick={() => {
                      setactiveloader(true);
                      // onSubmit();
                    }}
                    type="submit"
                    disabled={!formValid}
                    className="btn submit-btn btn-dark"
                  >
                    Book free consultation
                  </button>

                  {activeloader && (
                    <div className="flex flex-jc-c">
                      <div className="loader flex flex-jc-c flex-ai-c"></div>
                    </div>
                  )}
                </div>
              </form>
            )}

            <div className="form-footer">
              <div className="hr-1"></div>
              <div className="flex flex-col">
                <div className="col-1">
                  <div className="flex">
                    <div className="icon icon-blue icon-map-pin mr-10px"></div>
                    <p>102 Street 2410 Las, Las veges</p>
                  </div>
                  <div className="flex">
                    <div className="icon icon-blue icon-phone mr-10px"></div>
                    <p>+1 26354517</p>
                  </div>
                  <div className="flex">
                    <div className="icon icon-blue icon-mail mr-10px"></div>
                    <p>Hello@PoshN.com</p>
                  </div>
                </div>
                <div className="hr-2"></div>
                <div className="col-2">
                  <div className="flex">
                    <div className="icon icon-blue icon-instagram-outline mr-10px"></div>
                    <p>Instagram</p>
                  </div>
                  <div className="flex">
                    <div className="icon icon-blue icon-facebook-outline mr-10px"></div>
                    <p>Facebook</p>
                  </div>
                  <div className="flex">
                    <div className="icon icon-blue icon-twitter-outline mr-10px"></div>
                    <p>Twitter</p>
                  </div>
                  <div className="flex">
                    <div className="icon icon-blue icon-linkedin-outline mr-10px"></div>
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
