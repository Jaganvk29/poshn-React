import React from "react";
import SurveyStep from "../SurveyStep";
import { useForm } from "react-hook-form";

const Step8 = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const onSubmit = (data) => {
    // const formData = new FormData();

    const formdata2 = {
      choices: data,
      custom_answer: "string",
      question:
        "At PoshN, You are in the safe hands of a Board Certified Registered Dietitian Nutritionist, an expert in food and nutrition. Tell us about your goals? (Select all that apply)",
      user: 0,
    };

    console.log(formdata2);
  };

  return (
    <div>
      <div className="survey-step-container bg-color-2">
        <div className="newwrapper">
          <div onSubmit={handleSubmit(onSubmit)}>
            <SurveyStep
              question=" Anything else we might need to know related to your
                      nutritional goals"
              text1="Other Nutrition Goals"
              text1register={props.register}
              validationmsg={props.validate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step8;
