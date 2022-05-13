import React from "react";
import SurveyStep from "../SurveyStep";
import { useForm } from "react-hook-form";

const Step1 = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const onSubmit = (data) => {
    // const formData = new FormData();

    const formdata1 = {
      choices: data,
      custom_answer: "string",
      question: "Tell us about YOUR current relationship with foods?",
      user: 0,
    };

    console.log(formdata1);
  };

  return (
    <div>
      <div className="survey-step-container bg-color-2">
        <div className="newwrapper">
          <div onSubmit={handleSubmit(onSubmit)}>
            <SurveyStep
              question="Tell us about Your current relationship with foods?"
              option1="Not so positive: I am ready to throw in the towel"
              option2="Yo-Yo and So-So"
              option3="Positive but I can do better"
              option4="I have healthy sustainable relationship"
              register={props.register}
              validationmsg={props.validate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
