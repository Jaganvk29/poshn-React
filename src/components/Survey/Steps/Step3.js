import React, { useContext } from "react";
import SurveyStep from "../SurveyStep";
import { useForm } from "react-hook-form";
import SurveyContext from "../../../SurveyContext";

const Step3 = (props) => {
  // const { isSelected, surveyselectHandler } = useContext(PoshContext);
  const { isSelected2, surveyselectHandler2 } = useContext(SurveyContext);

  return (
    <div>
      <div className="survey-step-container bg-color-2">
        <div className="newwrapper">
          <div>
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
              optional2="Here is what I have tried"
              register={props.register}
              validationmsg={props.validate}
              optionalRegister2={props.customtext}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
