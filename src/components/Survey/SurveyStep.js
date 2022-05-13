import React, { useState, useContext } from "react";
import SurevyOptions from "./SurevyOptions";
import SurveyContext from "../../SurveyContext";

const SurveyStep = (props) => {
  const { isSelected1, surveyselectHandler1 } = useContext(SurveyContext);
  const { isSelected2, surveyselectHandler2 } = useContext(SurveyContext);
  const { isSelected3, surveyselectHandler3 } = useContext(SurveyContext);
  const { isSelected4, surveyselectHandler4 } = useContext(SurveyContext);
  const { formstepHandler, formstep } = useContext(SurveyContext);

  const [othersel, setOthersel] = useState(false);

  const handletxtrender = () => {
    surveyselectHandler1(!isSelected1);
  };

  const handletxtrender1 = () => {
    surveyselectHandler1(!isSelected1);
  };

  const handletxtrender2 = () => {
    surveyselectHandler2(!isSelected2);
  };

  const handletxtrender3 = () => {
    surveyselectHandler3(!isSelected3);
  };

  const handletxtrender4 = () => {
    surveyselectHandler4(!isSelected4);
  };

  // console.log(othersel);

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

          {/* OTHER - USER CUSTOM OPTION TEXT */}

          {/* OPTION 1 */}

          {props.optional1 && (
            <SurevyOptions
              register={{ ...props.register }}
              answer={props.optional1}
              onpress={handletxtrender1}
            ></SurevyOptions>
          )}

          {isSelected1 && formstep === 1 && (
            <div className="otherText">
              <label>
                <input
                  name="name"
                  class="input-field"
                  type="text"
                  placeholder={props.optional1}
                  {...props.optionalRegister1}
                />
              </label>
            </div>
          )}

          {/* OPTION 2 */}

          {props.optional2 && (
            <SurevyOptions
              register={{ ...props.register }}
              answer={props.optional2}
              onpress={handletxtrender2}
            ></SurevyOptions>
          )}

          {isSelected2 && formstep === 2 && (
            <div className="otherText">
              <label>
                <input
                  name="name"
                  class="input-field"
                  type="text"
                  placeholder={props.optional2}
                  {...props.optionalRegister2}
                />
              </label>
            </div>
          )}

          {/* OPTION 3 */}
          {props.optional3 && (
            <SurevyOptions
              register={{ ...props.register }}
              answer={props.optional3}
              onpress={handletxtrender3}
            ></SurevyOptions>
          )}

          {isSelected3 && formstep === 3 && (
            <div className="otherText">
              <label>
                <input
                  name="name"
                  class="input-field"
                  type="text"
                  placeholder={props.optional3}
                  {...props.optionalRegister3}
                />
              </label>
            </div>
          )}

          {/* OPTION 4 */}

          {props.optional4 && (
            <SurevyOptions
              register={{ ...props.register }}
              answer={props.optional4}
              onpress={handletxtrender4}
            ></SurevyOptions>
          )}

          {isSelected4 && formstep === 9 && (
            <div className="otherText">
              <label>
                <input
                  name="name"
                  class="input-field"
                  type="text"
                  placeholder={props.optional4}
                  {...props.optionalRegister4}
                />
              </label>
            </div>
          )}
        </div>
        {<p>{props.validationmsg}</p>}
      </section>
    </div>
  );
};

export default SurveyStep;
