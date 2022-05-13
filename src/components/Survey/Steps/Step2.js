import React, { useState, useContext } from "react";
import SurveyStep from "../SurveyStep";
import { useForm } from "react-hook-form";
import PoshContext from "../../../PoshContext";
import SurveyContext from "../../../SurveyContext";
const Step2 = (props) => {
  // const [other, serOther] = useState(false);
  const { isSelected1, surveyselectHandler1 } = useContext(SurveyContext);
  return (
    <div>
      <div className="survey-step-container bg-color-2">
        <div className="newwrapper">
          <div>
            <SurveyStep
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
              optional1="Other Goals"
              register={props.register}
              validationmsg={props.validate}
              optionalRegister1={props.customtext}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
