import React, { useContext, useRef, useState } from "react";
import PoshContext from "../../../PoshContext";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const { contactModalHandler } = useContext(PoshContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });
  const onSubmit = (data) => console.log(data);

  const modalBtnHandler = () => {
    contactModalHandler(false);
  };

  return (
    <div>
      <div class="scroll ">
        <div class="content">
          <div class="btn-container">
            <button onClick={modalBtnHandler} class="btn-close"></button>
          </div>
          <div class="booking">
            <div class="btn-container">
              <button onClick={modalBtnHandler} class="btn-close"></button>
            </div>
            <div class="title">
              <h2>Get in touch!</h2>
              <h5>Get advice related to the service</h5>
            </div>
            <form class="form" onSubmit={handleSubmit(onSubmit)}>
              <div class="container">
                <div class="flex-1 mr-32px">
                  <div class="field mb-24px">
                    <label>Name</label>
                    <div class="input flex flex-ai-c">
                      <div class="icon icon-user icon-grey mr-10px"></div>
                      <input
                        name="name"
                        class="input-field"
                        type="text"
                        placeholder="Enter name"
                        // ref={userNameref}
                        {...register("username", {
                          required: true,
                          minLength: 3,
                        })}
                      />
                    </div>
                    {errors.username && (
                      <p className="form-err-text">
                        Minimum 3 Character Required
                      </p>
                    )}
                  </div>
                  <div class="field mb-24px">
                    <label>Email</label>
                    <div class="input flex flex-ai-c">
                      <div class="icon icon-mail icon-grey mr-10px"></div>
                      <input
                        name="email"
                        class="input-field"
                        type="text"
                        placeholder="Enter email"
                        // ref={userEmailref}
                        {...register("useremail", {
                          required: true,
                          minLength: 3,
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address",
                          },
                        })}
                      />
                    </div>
                    {errors.useremail && (
                      <p className="form-err-text">
                        {errors.useremail.message}
                      </p>
                    )}
                  </div>
                  <div class="field">
                    <label>Phone</label>
                    <div class="input flex flex-ai-c">
                      <div class="icon icon-phone icon-grey mr-10px"></div>
                      <input
                        name="phone"
                        class="input-field"
                        type="text"
                        placeholder="Enter phone"
                        // ref={userPhoneref}
                        {...register("userphone", {
                          required: true,
                          minLength: 10,
                        })}
                      />
                    </div>
                    {errors.userphone && (
                      <p className="form-err-text">Invalid Mobile Number</p>
                    )}
                  </div>
                </div>
                <div class="flex-2">
                  <div class="field flex flex-col h-full">
                    <label>Message</label>
                    <div class="input flex flex-ai-c h-full flex-grow">
                      <textarea
                        name="message"
                        class="input-field"
                        cols=""
                        rows="5"
                        // ref={userMesgref}
                        {...register("usermessage", {
                          required: true,
                          minLength: 20,
                        })}
                      ></textarea>
                    </div>
                    {errors.usermessage && (
                      <p className="form-err-text">
                        Minimum 20 Character Required
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div class="text-center">
                <button
                  disabled={!isValid}
                  type="submit"
                  class="btn btn-dark submit-btn"
                >
                  Contact Us
                </button>
              </div>
            </form>
            <div class="form-footer">
              <div class="hr-1"></div>
              <div class="flex flex-col">
                <div class="col-1">
                  <div class="flex">
                    <div class="icon icon-orange icon-map-pin mr-10px"></div>
                    <p>102 Street 2410 Las, Las veges</p>
                  </div>
                  <div class="flex">
                    <div class="icon icon-orange icon-phone mr-10px"></div>
                    <p>+1 26354517</p>
                  </div>
                  <div class="flex">
                    <div class="icon icon-orange icon-mail mr-10px"></div>
                    <p>Hello@PoshN.com</p>
                  </div>
                </div>
                <div class="hr-2"></div>
                <div class="col-2">
                  <div class="flex">
                    <div class="icon icon-orange icon-instagram-outline mr-10px"></div>
                    <p>Instagram</p>
                  </div>
                  <div class="flex">
                    <div class="icon icon-orange icon-facebook-outline mr-10px"></div>
                    <p>Facebook</p>
                  </div>
                  <div class="flex">
                    <div class="icon icon-orange icon-twitter-outline mr-10px"></div>
                    <p>Twitter</p>
                  </div>
                  <div class="flex">
                    <div class="icon icon-orange icon-linkedin-outline mr-10px"></div>
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

export default ContactUs;
