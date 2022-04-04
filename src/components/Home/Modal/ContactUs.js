import React, { useContext, useRef, useState } from "react";
import PoshContext from "../../../PoshContext";

const ContactUs = () => {
  const { modalHandler } = useContext(PoshContext);
  const [selected, setSelected] = useState([]);

  const userNameref = useRef();
  const userEmailref = useRef();
  const userPhoneref = useRef();
  const userMesgref = useRef();
  const selectoption = useRef();

  const checkboxhandler = (e) => {
    if (e.target.checked) {
      setSelected([...selected, e.target.value]);
    } else {
      setSelected(selected.filter((select) => select != e.target.value));
    }
  };

  // console.log(selected);

  const modalBtnHandler = () => {
    modalHandler(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const consultationType = [];
    consultationType.push(...selected);

    const formData = {
      name: userNameref.current.value,
      email: userEmailref.current.value,
      phone: userPhoneref.current.value,
      msg: userMesgref.current.value,
      consultation: consultationType,
    };
    console.log(formData);
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
            <form class="form" onSubmit={submitHandler}>
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
                        ref={userNameref}
                      />
                    </div>
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
                        required
                        ref={userEmailref}
                      />
                    </div>
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
                        ref={userPhoneref}
                      />
                    </div>
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
                        ref={userMesgref}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              {/* CHECK BOXES */}
              <div class="field mt-40px">
                <label>Consultation type</label>
                <div ref={selectoption} class="btn-selection">
                  <label>
                    <input
                      type="checkbox"
                      name="consultationType"
                      value="diet"
                      onChange={checkboxhandler}
                    />
                    <span class="input-btn">Diet</span>
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="consultationType"
                      value="nutrition"
                      onChange={checkboxhandler}
                    />
                    <span class="input-btn">Nutrition</span>
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="consultationType"
                      value="fitness"
                      onChange={checkboxhandler}
                    />
                    <span class="input-btn">Fitness</span>
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="consultationType"
                      value="fatloss"
                      onChange={checkboxhandler}
                    />
                    <span class="input-btn">Fatloss</span>
                  </label>
                </div>
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
