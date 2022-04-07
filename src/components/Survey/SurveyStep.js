import React, { useState } from "react";
import SurevyOptions from "./SurevyOptions";

const SurveyStep = (props) => {
  const [othersel, setOthersel] = useState(false);

  const handletxtrender = () => {
    setOthersel(!othersel);
  };

  console.log(othersel);

  return (
    <div>
      <section>
        <div className="survey-ques">
          <h1>{props.question}</h1>
        </div>
        <div className="survey-ans">
          {props.option1 && (
            <SurevyOptions
              register={{ ...props.register }}
              answer={props.option1}
            ></SurevyOptions>
          )}

          {props.option2 && (
            <SurevyOptions
              register={{ ...props.register }}
              answer={props.option2}
            ></SurevyOptions>
          )}
          {props.option3 && (
            <SurevyOptions
              register={{ ...props.register }}
              answer={props.option3}
            ></SurevyOptions>
          )}
          {props.option4 && (
            <SurevyOptions
              register={{ ...props.register }}
              answer={props.option4}
            ></SurevyOptions>
          )}
          {props.option5 && (
            <SurevyOptions
              register={{ ...props.register }}
              answer={props.option5}
            ></SurevyOptions>
          )}
          {props.option6 && (
            <SurevyOptions
              register={{ ...props.register }}
              answer={props.option6}
            ></SurevyOptions>
          )}
          {props.option7 && (
            <SurevyOptions
              register={{ ...props.register }}
              answer={props.option7}
            ></SurevyOptions>
          )}
          {props.option8 && (
            <SurevyOptions
              register={{ ...props.register }}
              answer={props.option8}
            ></SurevyOptions>
          )}
          {props.option9 && (
            <SurevyOptions
              register={{ ...props.register }}
              answer={props.option9}
            ></SurevyOptions>
          )}
          {props.option10 && (
            <SurevyOptions
              register={{ ...props.register }}
              answer={props.option10}
            ></SurevyOptions>
          )}
          {props.text1 && (
            <div className="otherText">
              <label>
                <input
                  name={props.text1}
                  class="input-field"
                  type="text"
                  placeholder={props.text1}
                  {...props.text1register}
                />
              </label>
            </div>
          )}
          {props.text2 && (
            <div className="otherText">
              <label>
                <input
                  name={props.text2}
                  class="input-field"
                  type="text"
                  placeholder={props.text2}
                  {...props.text2register}
                />
              </label>
            </div>
          )}

          {props.text3 && (
            <div className="otherText">
              <label>
                <input
                  name={props.text3}
                  class="input-field"
                  type="text"
                  placeholder={props.text3}
                  {...props.text3register}
                />
              </label>
            </div>
          )}

          {props.optional && (
            <SurevyOptions
              register={{ ...props.register }}
              answer={props.optional}
              onpress={handletxtrender}
            ></SurevyOptions>
          )}

          {othersel && (
            <div className="otherText">
              <label>
                <input
                  name="name"
                  class="input-field"
                  type="text"
                  placeholder={props.optional}
                  {...props.optionalRegister}
                />
              </label>
            </div>
          )}

          {/* <SurevyOptions
            register={{ ...props.register }}
            answer="Yo-Yo and So-So"
          ></SurevyOptions>
          <SurevyOptions
            register={{ ...props.register }}
            answer="Positive but I can do better"
          ></SurevyOptions>

          <SurevyOptions
            register={{ ...props.register }}
            answer="I have healthy sustainable relationship"
          ></SurevyOptions> */}
        </div>
      </section>
    </div>
  );
};

export default SurveyStep;
