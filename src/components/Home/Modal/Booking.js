import React, { useContext, useRef, useState } from "react";
import PoshContext from "../../../PoshContext";
import { useForm } from "react-hook-form";

const Booking = () => {
  const { modalHandler } = useContext(PoshContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });
  const onSubmit = (data) => console.log(data);

  // const [selected, setSelected] = useState([]);

  // const userNameref = useRef();
  // const userEmailref = useRef();
  // const userPhoneref = useRef();
  // const userMesgref = useRef();
  // const selectoption = useRef();

  // const checkboxhandler = (e) => {
  //   if (e.target.checked) {
  //     setSelected([...selected, e.target.value]);
  //   } else {
  //     setSelected(selected.filter((select) => select != e.target.value));
  //   }
  // };

  // console.log(selected);

  const modalBtnHandler = () => {
    modalHandler(false);
  };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   const consultationType = [];
  //   consultationType.push(...selected);

  //   const formData = {
  //     name: userNameref.current.value,
  //     email: userEmailref.current.value,
  //     phone: userPhoneref.current.value,
  //     msg: userMesgref.current.value,
  //     consultation: consultationType,
  //   };
  //   console.log(formData);
  // };
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
              {/* CHECK BOXES */}
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
                        required: true,
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
                        required: true,
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
                        required: true,
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
                        required: true,
                      })}
                    />
                    <span class="input-btn">Fatloss</span>
                  </label>
                </div>
                {errors.consultationtype && (
                  <p className="form-err-text">Select Any one Option</p>
                )}
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-dark submit-btn">
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

export default Booking;
